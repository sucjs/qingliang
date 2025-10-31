(function () {
    const boardSelector = '.notes-demo #board'
    const board = document.querySelector(boardSelector)
    if (!board) return

    const messages = [
        '保持好心情', '多喝水哦', '今天辛苦啦', '早点休息', '记得吃水果', '加油，你可以的', '祝你顺利', '保持微笑呀', '愿所有烦恼都消失', '期待下一次见面', '梦想总会实现', '天气冷了，多穿衣服', '记得给自己放松', '每天都要元气满满', '今天也要好好爱自己', '适当休息一下','坚持下去'
    ]

    const colors = ['#ffe0e3', '#c7f0ff', '#ffd8a8', '#d9f2d9', '#e5d7ff', '#f9f7d9', '#d2f0f8', '#ffd4f5']

    const cardStates = new WeakMap()
    const MAXIMIZED_LAYER = 1000000
    let activeMaximizedCard = null
    let isMobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 768
    const maxCards = isMobile ? 120 : 180
    const initialCardCount = isMobile ? 18 : 30
    const spawnInterval = isMobile ? 700 : 400
    let zIndexCursor = 200

    document.documentElement.classList.toggle('is-mobile', isMobile)

    function randomFrom(arr) { return arr[Math.floor(Math.random() * arr.length)] }
    function clamp(v, min, max) { return Math.min(Math.max(v, min), max) }
    function applyTransform(card, state) { const scale = state.scale ?? 1; const tx = state.translateX ?? 0; const ty = state.translateY ?? 0; const angle = state.angle ?? 0; card.style.transform = `translate(${tx}px, ${ty}px) scale(${scale}) rotate(${angle}deg)` }
    function bringToFront(card) { if (card === activeMaximizedCard) { card.style.zIndex = MAXIMIZED_LAYER; return } zIndexCursor += 1; if (activeMaximizedCard && zIndexCursor >= MAXIMIZED_LAYER) { zIndexCursor = MAXIMIZED_LAYER - 1 } card.style.zIndex = zIndexCursor }

    function setupCardInteractions(card) {
        const header = card.querySelector('.card-header')
        const closeBtn = card.querySelector('.control.close')
        const minimizeBtn = card.querySelector('.control.minimize')
        const maximizeBtn = card.querySelector('.control.maximize')

        closeBtn.addEventListener('click', e => { e.stopPropagation(); closeCard(card) })
        minimizeBtn.addEventListener('click', e => { e.stopPropagation(); minimizeCard(card) })
        maximizeBtn.addEventListener('click', e => { e.stopPropagation(); toggleMaximize(card) })

        header.addEventListener('pointerdown', event => { if (event.pointerType === 'touch') return; startDrag(event, card) })
        card.addEventListener('pointerdown', () => bringToFront(card))
        header.addEventListener('dblclick', event => { if (!event.target.closest('.control')) toggleMaximize(card) })
    }

    function closeCard(card) { const state = cardStates.get(card); if (!state || state.closing) return; if (card === activeMaximizedCard) activeMaximizedCard = null; state.closing = true; state.scale = 0.1; card.style.opacity = '0'; applyTransform(card, state); const handle = e => { if (e.propertyName === 'opacity') { card.removeEventListener('transitionend', handle); card.remove() } }; card.addEventListener('transitionend', handle) }

    function minimizeCard(card) {
        const state = cardStates.get(card); if (!state || state.closing) return; const runMinimize = () => { state.closing = true; bringToFront(card); const bottom = Math.max(window.innerHeight - 24, 0); const targetLeft = clamp(state.left, 16, Math.max(window.innerWidth - card.offsetWidth - 16, 16)); state.left = targetLeft; state.top = bottom; state.scale = 0.1; state.angle = 0; card.style.left = `${targetLeft}px`; card.style.top = `${bottom}px`; card.style.opacity = '0.35'; applyTransform(card, state); const h = e => { if (e.propertyName === 'transform') { card.removeEventListener('transitionend', h); card.remove() } }; card.addEventListener('transitionend', h) }

        if (state.maximized) { activeMaximizedCard = null; state.maximized = false; card.classList.remove('maximized'); card.style.borderRadius = '12px'; state.left = 0; state.top = 0; state.scale = 1; state.angle = 0; applyTransform(card, state); requestAnimationFrame(() => { requestAnimationFrame(runMinimize) }); return }
        runMinimize()
    }

    function toggleMaximize(card) { const state = cardStates.get(card); if (!state || state.closing) return; if (state.maximized) restoreFromMaximize(card, state); else maximizeCard(card, state) }
    function maximizeCard(card, state) { state.beforeMaximize = { left: state.left, top: state.top, scale: state.scale ?? 1, width: card.offsetWidth, height: card.offsetHeight, angle: state.angle ?? 0 }; card.classList.add('maximized'); card.style.left = '0px'; card.style.top = '0px'; card.style.width = `${window.innerWidth}px`; card.style.height = `${window.innerHeight}px`; card.style.borderRadius = '0'; state.left = 0; state.top = 0; state.scale = 1; state.angle = 0; applyTransform(card, state); activeMaximizedCard = card; bringToFront(card); state.maximized = true }
    function restoreFromMaximize(card, state) { const previous = state.beforeMaximize; if (!previous) return; card.classList.remove('maximized'); card.style.left = `${previous.left}px`; card.style.top = `${previous.top}px`; card.style.width = `${previous.width}px`; card.style.height = `${previous.height}px`; card.style.borderRadius = '12px'; state.left = previous.left; state.top = previous.top; state.scale = previous.scale ?? 1; state.angle = previous.angle ?? state.angle ?? 0; applyTransform(card, state); state.maximized = false; if (activeMaximizedCard === card) activeMaximizedCard = null; bringToFront(card); state.lastPosition = { left: state.left, top: state.top }; setTimeout(() => { if (!state.maximized) { card.style.width = ''; card.style.height = ''; state.width = card.offsetWidth; state.height = card.offsetHeight } }, 360) }

    function startDrag(event, card) {
        const control = event.target.closest('.control'); if (control) return; const state = cardStates.get(card); if (!state || state.closing || state.maximized) return; event.preventDefault(); bringToFront(card); const header = card.querySelector('.card-header'); card.classList.add('dragging'); header.classList.add('dragging'); state.dragging = true; state.dragOffsetX = event.clientX - state.left; state.dragOffsetY = event.clientY - state.top; let dragFrame = null; let pendingLeft = state.left; let pendingTop = state.top; const commitDrag = () => { dragFrame = null; const maxLeft = Math.max(window.innerWidth - card.offsetWidth, 0); const maxTop = Math.max(window.innerHeight - card.offsetHeight, 0); state.left = clamp(pendingLeft, -card.offsetWidth * 0.4, maxLeft); state.top = clamp(pendingTop, -card.offsetHeight * 0.4, maxTop); card.style.left = `${state.left}px`; card.style.top = `${state.top}px` }
        const handlePointerMove = moveEvent => { if (!state.dragging) return; pendingLeft = moveEvent.clientX - state.dragOffsetX; pendingTop = moveEvent.clientY - state.dragOffsetY; if (dragFrame === null) { dragFrame = requestAnimationFrame(commitDrag) } }
        const handlePointerUp = () => { state.dragging = false; state.lastPosition = { left: state.left, top: state.top }; card.classList.remove('dragging'); header.classList.remove('dragging'); if (dragFrame !== null) { cancelAnimationFrame(dragFrame); commitDrag() } document.removeEventListener('pointermove', handlePointerMove); document.removeEventListener('pointerup', handlePointerUp) }
        document.addEventListener('pointermove', handlePointerMove); document.addEventListener('pointerup', handlePointerUp)
    }

    function createCard() {
        const card = document.createElement('div')
        card.className = 'card'
        const color = randomFrom(colors)
        const angleRange = isMobile ? 6 : 10
        const angle = (Math.random() - 0.5) * angleRange
        const cardWidth = isMobile ? 180 : 220
        const cardHeight = isMobile ? 130 : 140
        const horizontalMargin = isMobile ? 12 : 16
        const verticalMargin = isMobile ? 12 : 20
        const left = horizontalMargin + Math.random() * Math.max(window.innerWidth - cardWidth - horizontalMargin * 2, 0)
        const top = verticalMargin + Math.random() * Math.max(window.innerHeight - cardHeight - verticalMargin * 2, 0)

        card.style.background = color
        card.style.left = `${left}px`
        card.style.top = `${top}px`
        if (activeMaximizedCard && zIndexCursor >= MAXIMIZED_LAYER - 2) zIndexCursor = MAXIMIZED_LAYER - 2
        card.style.zIndex = ++zIndexCursor

        card.innerHTML = `
      <div class="card-header">
        <div class="window-controls">
          <button class="control close" type="button" aria-label="关闭"></button>
          <button class="control minimize" type="button" aria-label="最小化"></button>
          <button class="control maximize" type="button" aria-label="最大化"></button>
        </div>
        <div class="card-title">温馨提示</div>
      </div>
      <div class="card-body">${randomFrom(messages)}</div>
    `

        const state = { angle, scale: isMobile ? 0.85 : 0.7, translateX: 0, translateY: 0, left, top, maximized: false, closing: false, lastPosition: { left, top } }
        cardStates.set(card, state)
        applyTransform(card, state)
        board.appendChild(card)

        state.width = card.offsetWidth
        state.height = card.offsetHeight

        requestAnimationFrame(() => { state.scale = 1; applyTransform(card, state); card.style.opacity = '1' })

        setupCardInteractions(card)

        if (board.children.length > maxCards) { const oldest = board.firstElementChild; if (oldest && oldest !== card) oldest.remove() }
    }

    for (let i = 0; i < initialCardCount; i++) { setTimeout(createCard, i * (isMobile ? 60 : 40)) }
    setInterval(() => { createCard() }, spawnInterval)

    window.addEventListener('resize', () => {
        isMobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 768
        document.documentElement.classList.toggle('is-mobile', isMobile)
        document.querySelectorAll('.card.maximized').forEach(card => { card.style.width = `${window.innerWidth}px`; card.style.height = `${window.innerHeight}px`; })
    })
})();
