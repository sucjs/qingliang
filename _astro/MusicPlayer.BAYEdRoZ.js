import{o as $a,a as Ra,i as Na}from"./lifecycle.BcBzUyrz.js";import{$ as Wa,a6 as Ya,aJ as Oa,aK as qa,aL as ze,u as $e,aM as Ua,ab as Re,aN as Ga,U as Ne,aO as bt,a4 as Ka,aP as Ha,c as it,f as tt,a as W,p as Xa,b as Ja,s as u,m as C,aj as U,g as t,d as vt,h as v,e as s,r as i,n as Va,t as Pt}from"./template.BJfXQllN.js";import{a as Qa,s as J}from"./render.kFbOhntJ.js";import{i as I}from"./if.OamDFXO-.js";import{e as Za,i as tr}from"./each.BhX_LbE6.js";import{a as Y,s as st,c as Me}from"./props.DxC0UN06.js";import{e as y}from"./utils.CxuPLVza.js";import{I as f}from"./Icon.DGQgiEnx.js";import{m as xt}from"./config.BbS1JKrV.js";import{I as er}from"./zh_TW.D-6nPIns.js";import{i as ar}from"./translation.BiTg4ws_.js";const rr=()=>performance.now(),V={tick:o=>requestAnimationFrame(o),now:()=>rr(),tasks:new Set};function We(){const o=V.now();V.tasks.forEach(r=>{r.c(o)||(V.tasks.delete(r),r.f())}),V.tasks.size!==0&&V.tick(We)}function ir(o){let r;return V.tasks.size===0&&V.tick(We),{promise:new Promise(h=>{V.tasks.add(r={c:o,f:h})}),abort(){V.tasks.delete(r)}}}function It(o,r){Re(()=>{o.dispatchEvent(new CustomEvent(r))})}function sr(o){if(o==="float")return"cssFloat";if(o==="offset")return"cssOffset";if(o.startsWith("--"))return o;const r=o.split("-");return r.length===1?r[0]:r[0]+r.slice(1).map(h=>h[0].toUpperCase()+h.slice(1)).join("")}function Te(o){const r={},h=o.split(";");for(const F of h){const[_,p]=F.split(":");if(!_||p===void 0)break;const z=sr(_.trim());r[z]=p.trim()}return r}const nr=o=>o;function lr(o,r,h,F){var _=(o&Ua)!==0,p="both",z,w=r.inert,L=r.style.overflow,d,b;function P(){return Re(()=>z??=h()(r,F?.()??{},{direction:p}))}var A={is_global:_,in(){r.inert=w,It(r,"introstart"),d=ae(r,P(),b,1,()=>{It(r,"introend"),d?.abort(),d=z=void 0,r.style.overflow=L})},out(T){r.inert=!0,It(r,"outrostart"),b=ae(r,P(),d,0,()=>{It(r,"outroend"),T?.()})},stop:()=>{d?.abort(),b?.abort()}},D=Wa;if((D.transitions??=[]).push(A),Qa){var M=_;if(!M){for(var c=D.parent;c&&(c.f&Ya)!==0;)for(;(c=c.parent)&&(c.f&Oa)===0;);M=!c||(c.f&qa)!==0}M&&ze(()=>{$e(()=>A.in())})}}function ae(o,r,h,F,_){var p=F===1;if(Ga(r)){var z,w=!1;return Ne(()=>{if(!w){var T=r({direction:p?"in":"out"});z=ae(o,T,h,F,_)}}),{abort:()=>{w=!0,z?.abort()},deactivate:()=>z.deactivate(),reset:()=>z.reset(),t:()=>z.t()}}if(h?.deactivate(),!r?.duration)return _(),{abort:bt,deactivate:bt,reset:bt,t:()=>F};const{delay:L=0,css:d,tick:b,easing:P=nr}=r;var A=[];if(p&&h===void 0&&(b&&b(0,1),d)){var D=Te(d(0,1));A.push(D,D)}var M=()=>1-F,c=o.animate(A,{duration:L,fill:"forwards"});return c.onfinish=()=>{c.cancel();var T=h?.t()??1-F;h?.abort();var x=F-T,et=r.duration*Math.abs(x),at=[];if(et>0){var $=!1;if(d)for(var m=Math.ceil(et/16.666666666666668),k=0;k<=m;k+=1){var a=T+x*P(k/m),Q=Te(d(a,1-a));at.push(Q),$||=Q.overflow==="hidden"}$&&(o.style.overflow="hidden"),M=()=>{var G=c.currentTime;return T+x*P(G/et)},b&&ir(()=>{if(c.playState!=="running")return!1;var G=M();return b(G,1-G),!0})}c=o.animate(at,{duration:et,fill:"forwards"}),c.onfinish=()=>{M=()=>F,b?.(F,1-F),_()}},{abort:()=>{c&&(c.cancel(),c.effect=null,c.onfinish=bt)},deactivate:()=>{_=bt},reset:()=>{F===0&&b?.(1,0)},t:()=>M()}}function Se(o,r){return o===r||o?.[Ha]===r}function Pe(o={},r,h,F){return ze(()=>{var _,p;return Ka(()=>{_=p,p=[],$e(()=>{o!==h(...p)&&(r(o,...p),_&&Se(h(..._),o)&&r(null,..._))})}),()=>{Ne(()=>{p&&Se(h(...p),o)&&r(null,...p)})}}),o}function Ie(o){return function(...r){var h=r[0];return h.stopPropagation(),o?.apply(this,r)}}function or(o){const r=o-1;return r*r*r+1}function ur(o,{delay:r=0,duration:h=400,easing:F=or,axis:_="y"}={}){const p=getComputedStyle(o),z=+p.opacity,w=_==="y"?"height":"width",L=parseFloat(p[w]),d=_==="y"?["top","bottom"]:["left","right"],b=d.map(x=>`${x[0].toUpperCase()}${x.slice(1)}`),P=parseFloat(p[`padding${b[0]}`]),A=parseFloat(p[`padding${b[1]}`]),D=parseFloat(p[`margin${b[0]}`]),M=parseFloat(p[`margin${b[1]}`]),c=parseFloat(p[`border${b[0]}Width`]),T=parseFloat(p[`border${b[1]}Width`]);return{delay:r,duration:h,easing:F,css:x=>`overflow: hidden;opacity: ${Math.min(x*20,1)*z};${w}: ${x*L}px;padding-${d[0]}: ${x*P}px;padding-${d[1]}: ${x*A}px;margin-${d[0]}: ${x*D}px;margin-${d[1]}: ${x*M}px;border-${d[0]}-width: ${x*c}px;border-${d[1]}-width: ${x*T}px;min-${w}: 0`}}var cr=vt('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),dr=vt('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),vr=vt('<span class="text-sm text-[var(--content-meta)]"></span>'),fr=vt('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),pr=vt('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),mr=vt(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div role="button" tabindex="0" aria-label="展开音乐播放器"><div class="flex items-center gap-3 cursor-pointer"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div> <button><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -2px;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 48px;
	height: 48px;
}
.music-player {
    max-width: 320px;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
}
.mini-player {
    width: 280px;
    position: absolute;
    bottom: 0;
    right: 0;
    /*left: 0;*/
}
.expanded-player {
    width: 320px;
    position: absolute;
    bottom: 0;
    right: 0;
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px;
        /*left: 8px !important;*/
        bottom: 8px !important;
        right: 8px !important;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        /*left: 8px !important;*/
        right: 8px !important;
    }
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        /*left: 8px !important;*/
        right: 8px !important;
        max-width: none;
    }
    .controls {
        gap: 8px;
    }
    .controls button {
        width: 36px;
        height: 36px;
    }
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
    }
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
    }
    .song-title {
        font-size: 14px;
    }
    .song-artist {
        font-size: 12px;
    }
    .controls {
        gap: 6px;
        margin-bottom: 12px;
    }
    .controls button {
        width: 32px;
        height: 32px;
    }
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
    }
    .playlist-item {
        padding: 8px 12px;
    }
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
    }
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
    }
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
    }
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.cover-container img {
    animation: spin-continuous 3s linear infinite;
    animation-play-state: paused;
}
.cover-container img.spinning {
    animation-play-state: running;
}
/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
    border: none;
}</style>`,1);function Cr(o,r){Ja(r,!1);let h=xt.mode??"local",F=xt.meting_api??"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",_=xt.id??"14164869977",p=xt.server??"netease",z=xt.type??"playlist",w=C(!1),L=C(!1),d=C(!1),b=C(!1),P=C(0),A=C(0),D=C(.7),M=C(!1),c=C(!1),T=C(!1),x=C(0),et=C(""),at=C(!1),$=C({title:"示例歌曲",artist:"示例艺术家",cover:"/favicon/favicon-light-192.png",url:"",duration:0}),m=C([]),k=C(0),a=C(),Q=C(),G=C();const Ye=[{id:1,title:"感谢你曾来过.flac",artist:"周思涵 Ayo97",cover:"assets/music/cover/i1.jpg",url:"assets/music/url/周思涵 Ayo97 - 感谢你曾来过.flac",duration:240},{id:2,title:"III",artist:"Athletics",cover:"assets/music/cover/111.jpg",url:"assets/music/url/Athletics - III.mp3",duration:180},{id:3,title:"7 Years",artist:"Lukas Graham",cover:"assets/music/cover/7y.jpg",url:"assets/music/url/Lukas Graham - 7 Years.mp3",duration:200},{id:4,title:"兰亭序",artist:"周",cover:"assets/music/cover/ltx.jpg",url:"assets/music/url/ltx.mp3",duration:200},{id:5,title:"Memories",artist:"m",cover:"assets/music/cover/mia.jpg",url:"assets/music/url/mm.mp3",duration:200},{id:6,title:"关键词",artist:"gjc",cover:"assets/music/cover/gjc.jpg",url:"assets/music/url/关键词.mp3",duration:200}];async function Oe(){if(!F||!_)return;u(c,!0);const n=F.replace(":server",p).replace(":type",z).replace(":id",_).replace(":auth","").replace(":r",Date.now().toString());try{const S=await fetch(n);if(!S.ok)throw new Error("meting api error");const K=await S.json();u(m,K.map(N=>{let ft=N.name??N.title??"未知歌曲",Ft=N.artist??N.author??"未知艺术家",R=N.duration??0;return R>1e4&&(R=Math.floor(R/1e3)),(!Number.isFinite(R)||R<=0)&&(R=0),{id:N.id,title:ft,artist:Ft,cover:N.pic??"",url:N.url??"",duration:R}})),t(m).length>0&&$t(t(m)[0]),u(c,!1)}catch{Et("Meting 歌单获取失败"),u(c,!1)}}function qe(){!t(a)||!t($).url||(t(w)?t(a).pause():t(a).play())}function yt(){u(L,!t(L)),t(L)&&(u(b,!1),u(d,!1))}function _t(){u(d,!t(d)),t(d)&&(u(L,!1),u(b,!1))}function re(){u(b,!t(b))}function Ue(){u(T,!t(T))}function Ge(){u(x,(t(x)+1)%3)}function Ke(){if(t(m).length<=1)return;const n=t(k)>0?t(k)-1:t(m).length-1;wt(n)}function zt(){if(t(m).length<=1)return;let n;if(t(T))do n=Math.floor(Math.random()*t(m).length);while(n===t(k)&&t(m).length>1);else n=t(k)<t(m).length-1?t(k)+1:0;wt(n)}function wt(n){if(n<0||n>=t(m).length)return;const S=t(w);u(k,n),t(a)&&t(a).pause(),$t(t(m)[t(k)]),(S||!t(w))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function kt(n){return n.startsWith("http://")||n.startsWith("https://")||n.startsWith("/")?n:`/${n}`}function $t(n){!n||!t(a)||(u($,{...n}),n.url?(u(c,!0),t(a).pause(),U(a,t(a).currentTime=0),u(P,0),u(A,n.duration??0),t(a).removeEventListener("loadeddata",ie),t(a).removeEventListener("error",se),t(a).removeEventListener("loadstart",ne),t(a).addEventListener("loadeddata",ie,{once:!0}),t(a).addEventListener("error",se,{once:!0}),t(a).addEventListener("loadstart",ne,{once:!0}),U(a,t(a).src=kt(n.url)),t(a).load()):u(c,!1))}function ie(){u(c,!1),t(a)?.duration&&t(a).duration>1&&(u(A,Math.floor(t(a).duration)),t(m)[t(k)]&&U(m,t(m)[t(k)].duration=t(A)),U($,t($).duration=t(A)))}function se(n){u(c,!1),Et(`无法播放 "${t($).title}"，正在尝试下一首...`),t(m).length>1?setTimeout(()=>zt(),1e3):Et("播放列表中没有可用的歌曲")}function ne(){}function Et(n){u(et,n),u(at,!0),setTimeout(()=>{u(at,!1)},3e3)}function He(){u(at,!1)}function Xe(n){if(!t(a)||!t(Q))return;const S=t(Q).getBoundingClientRect(),N=(n.clientX-S.left)/S.width*t(A);U(a,t(a).currentTime=N),u(P,N)}function Je(n){if(!t(a)||!t(G))return;const S=t(G).getBoundingClientRect(),K=Math.max(0,Math.min(1,(n.clientX-S.left)/S.width));u(D,K),U(a,t(a).volume=t(D)),u(M,t(D)===0)}function le(){t(a)&&(u(M,!t(M)),U(a,t(a).muted=t(M)))}function oe(n){if(!Number.isFinite(n)||n<0)return"0:00";const S=Math.floor(n/60),K=Math.floor(n%60);return`${S}:${K.toString().padStart(2,"0")}`}function Ve(){t(a)&&(t(a).addEventListener("play",()=>{u(w,!0)}),t(a).addEventListener("pause",()=>{u(w,!1)}),t(a).addEventListener("timeupdate",()=>{u(P,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(x)===1?(U(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(x)===2||t(k)<t(m).length-1||t(T)?zt():u(w,!1)}),t(a).addEventListener("error",n=>{u(c,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}$a(()=>{u(a,new Audio),U(a,t(a).volume=t(D)),Ve(),h==="meting"?Oe():(u(m,[...Ye]),t(m).length>0?$t(t(m)[0]):Et("本地播放列表为空"))}),Ra(()=>{t(a)&&(t(a).pause(),U(a,t(a).src=""))}),Na();var ue=it(),Qe=tt(ue);{var Ze=n=>{var S=mr(),K=tt(S);{var N=e=>{var g=cr(),E=s(g),B=s(E);f(B,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var j=v(B,2),l=s(j,!0);i(j);var H=v(j,2),ct=s(H);f(ct,{icon:"material-symbols:close",class:"text-lg"}),i(H),i(E),i(g),Pt(()=>J(l,t(et))),y("click",H,He),W(e,g)};I(K,e=>{t(at)&&e(N)})}var ft=v(K,2);let Ft;var R=s(ft);let ce;var ta=s(R);{var ea=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},aa=e=>{var g=it(),E=tt(g);{var B=l=>{var H=dr();W(l,H)},j=l=>{f(l,{icon:"material-symbols:music-note",class:"text-white text-lg"})};I(E,l=>{t(w)?l(B):l(j,!1)},!0)}W(e,g)};I(ta,e=>{t(c)?e(ea):e(aa,!1)})}i(R);var nt=v(R,2);let de;var ve=s(nt),Rt=s(ve),Nt=s(Rt);let fe;var pe=v(Nt,2),ra=s(pe);{var ia=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},sa=e=>{var g=it(),E=tt(g);{var B=l=>{f(l,{icon:"material-symbols:pause",class:"text-white text-xl"})},j=l=>{f(l,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};I(E,l=>{t(w)?l(B):l(j,!1)},!0)}W(e,g)};I(ra,e=>{t(c)?e(ia):e(sa,!1)})}i(pe),i(Rt);var Wt=v(Rt,2),Yt=s(Wt),na=s(Yt,!0);i(Yt);var me=v(Yt,2),la=s(me,!0);i(me),i(Wt);var ge=v(Wt,2),At=s(ge),oa=s(At);f(oa,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(At);var Ot=v(At,2),ua=s(Ot);f(ua,{icon:"material-symbols:expand-less",class:"text-lg"}),i(Ot),i(ge),i(ve),i(nt);var Ct=v(nt,2);let he;var qt=s(Ct),Ut=s(qt),be=s(Ut);let xe;i(Ut);var Gt=v(Ut,2),Kt=s(Gt),ca=s(Kt,!0);i(Kt);var Ht=v(Kt,2),da=s(Ht,!0);i(Ht);var ye=v(Ht,2),va=s(ye);i(ye),i(Gt);var _e=v(Gt,2),Bt=s(_e),fa=s(Bt);f(fa,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(Bt);var Xt=v(Bt,2),pa=s(Xt);f(pa,{icon:"material-symbols:expand-more",class:"text-lg"}),i(Xt),i(_e),i(qt);var Jt=v(qt,2),lt=s(Jt),ma=s(lt);i(lt),Pe(lt,e=>u(Q,e),()=>t(Q)),i(Jt);var Vt=v(Jt,2),ot=s(Vt);let we;var ga=s(ot);f(ga,{icon:"material-symbols:shuffle",class:"text-lg"}),i(ot);var pt=v(ot,2),ha=s(pt);f(ha,{icon:"material-symbols:skip-previous",class:"text-xl"}),i(pt);var ut=v(pt,2);let ke;var ba=s(ut);{var xa=e=>{f(e,{icon:"eos-icons:loading",class:"text-xl"})},ya=e=>{var g=it(),E=tt(g);{var B=l=>{f(l,{icon:"material-symbols:pause",class:"text-xl"})},j=l=>{f(l,{icon:"material-symbols:play-arrow",class:"text-xl"})};I(E,l=>{t(w)?l(B):l(j,!1)},!0)}W(e,g)};I(ba,e=>{t(c)?e(xa):e(ya,!1)})}i(ut);var mt=v(ut,2),_a=s(mt);f(_a,{icon:"material-symbols:skip-next",class:"text-xl"}),i(mt);var Lt=v(mt,2);let Ee;var wa=s(Lt);{var ka=e=>{f(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},Ea=e=>{var g=it(),E=tt(g);{var B=l=>{f(l,{icon:"material-symbols:repeat",class:"text-lg"})},j=l=>{f(l,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};I(E,l=>{t(x)===2?l(B):l(j,!1)},!0)}W(e,g)};I(wa,e=>{t(x)===1?e(ka):e(Ea,!1)})}i(Lt),i(Vt);var Fe=v(Vt,2),jt=s(Fe),Fa=s(jt);{var Aa=e=>{f(e,{icon:"material-symbols:volume-off",class:"text-lg"})},Ca=e=>{var g=it(),E=tt(g);{var B=l=>{f(l,{icon:"material-symbols:volume-down",class:"text-lg"})},j=l=>{f(l,{icon:"material-symbols:volume-up",class:"text-lg"})};I(E,l=>{t(D)<.5?l(B):l(j,!1)},!0)}W(e,g)};I(Fa,e=>{t(M)||t(D)===0?e(Aa):e(Ca,!1)})}i(jt);var rt=v(jt,2),Ba=s(rt);i(rt),Pe(rt,e=>u(G,e),()=>t(G));var Dt=v(rt,2);let Ae;var La=s(Dt);f(La,{icon:"material-symbols:queue-music",class:"text-lg"}),i(Dt),i(Fe),i(Ct);var ja=v(Ct,2);{var Da=e=>{var g=pr(),E=s(g),B=s(E),j=s(B,!0);i(B);var l=v(B,2),H=s(l);f(H,{icon:"material-symbols:close",class:"text-lg"}),i(l),i(E);var ct=v(E,2);Za(ct,5,()=>t(m),tr,(gt,Z,O)=>{var X=fr();let Mt;var ht=s(X),Ma=s(ht);{var Ta=q=>{f(q,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Sa=q=>{var St=it(),te=tt(St);{var ee=dt=>{f(dt,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},za=dt=>{var De=vr();De.textContent=O+1,W(dt,De)};I(te,dt=>{O===t(k)?dt(ee):dt(za,!1)},!0)}W(q,St)};I(Ma,q=>{O===t(k)&&t(w)?q(Ta):q(Sa,!1)})}i(ht);var Qt=v(ht,2),Ce=s(Qt);i(Qt);var Be=v(Qt,2),Tt=s(Be);let Le;var Pa=s(Tt,!0);i(Tt);var Zt=v(Tt,2);let je;var Ia=s(Zt,!0);i(Zt),i(Be),i(X),Pt((q,St,te,ee)=>{Mt=Y(X,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,Mt,q),st(X,"aria-label",`播放 ${t(Z).title??""} - ${t(Z).artist??""}`),st(Ce,"src",St),st(Ce,"alt",t(Z).title),Le=Y(Tt,1,"font-medium truncate",null,Le,te),J(Pa,t(Z).title),je=Y(Zt,1,"text-sm text-[var(--content-meta)] truncate",null,je,ee),J(Ia,t(Z).artist)},[()=>({"bg-[var(--btn-plain-bg)]":O===t(k),"text-[var(--primary)]":O===t(k)}),()=>kt(t(Z).cover),()=>({"text-[var(--primary)]":O===t(k),"text-90":O!==t(k)}),()=>({"text-[var(--primary)]":O===t(k)})]),y("click",X,()=>wt(O)),y("keydown",X,q=>{(q.key==="Enter"||q.key===" ")&&(q.preventDefault(),wt(O))}),W(gt,X)}),i(ct),i(g),Pt(gt=>J(j,gt),[()=>ar(er.playlist)]),y("click",l,re),lr(3,g,()=>ur,()=>({duration:300,axis:"y"})),W(e,g)};I(ja,e=>{t(b)&&e(Da)})}i(ft),Va(2),Pt((e,g,E,B,j,l,H,ct,gt,Z,O,X,Mt,ht)=>{Ft=Y(ft,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,Ft,e),ce=Y(R,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,ce,g),de=Y(nt,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,de,E),st(Nt,"src",B),fe=Y(Nt,1,"w-full h-full object-cover transition-transform duration-300",null,fe,j),J(na,t($).title),J(la,t($).artist),he=Y(Ct,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,he,l),st(be,"src",H),xe=Y(be,1,"w-full h-full object-cover transition-transform duration-300",null,xe,ct),J(ca,t($).title),J(da,t($).artist),J(va,`${gt??""} / ${Z??""}`),st(lt,"aria-valuenow",t(A)>0?t(P)/t(A)*100:0),Me(ma,`width: ${t(A)>0?t(P)/t(A)*100:0}%`),we=Y(ot,1,"w-10 h-10 rounded-lg",null,we,O),ot.disabled=t(m).length<=1,pt.disabled=t(m).length<=1,ke=Y(ut,1,"btn-regular w-12 h-12 rounded-full",null,ke,X),ut.disabled=t(c),mt.disabled=t(m).length<=1,Ee=Y(Lt,1,"w-10 h-10 rounded-lg",null,Ee,Mt),st(rt,"aria-valuenow",t(D)*100),Me(Ba,`width: ${t(D)*100}%`),Ae=Y(Dt,1,"btn-plain w-8 h-8 rounded-lg",null,Ae,ht)},[()=>({expanded:t(L),"hidden-mode":t(d)}),()=>({"opacity-0":!t(d),"scale-0":!t(d),"pointer-events-none":!t(d)}),()=>({"opacity-0":t(L)||t(d),"scale-95":t(L)||t(d),"pointer-events-none":t(L)||t(d)}),()=>kt(t($).cover),()=>({spinning:t(w)&&!t(c),"animate-pulse":t(c)}),()=>({"opacity-0":!t(L),"scale-95":!t(L),"pointer-events-none":!t(L)}),()=>kt(t($).cover),()=>({spinning:t(w)&&!t(c),"animate-pulse":t(c)}),()=>oe(t(P)),()=>oe(t(A)),()=>({"btn-regular":t(T),"btn-plain":!t(T)}),()=>({"opacity-50":t(c)}),()=>({"btn-regular":t(x)>0,"btn-plain":t(x)===0}),()=>({"text-[var(--primary)]":t(b)})]),y("click",R,_t),y("keydown",R,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),_t())}),y("click",At,Ie(_t)),y("click",Ot,Ie(yt)),y("click",nt,yt),y("keydown",nt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),yt())}),y("click",Bt,_t),y("click",Xt,yt),y("click",lt,Xe),y("keydown",lt,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(Q).getBoundingClientRect();const E=.5*t(A);t(a)&&(U(a,t(a).currentTime=E),u(P,E))}}),y("click",ot,Ue),y("click",pt,Ke),y("click",ut,qe),y("click",mt,zt),y("click",Lt,Ge),y("click",jt,le),y("click",rt,Je),y("keydown",rt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&le())}),y("click",Dt,re),W(n,S)};I(Qe,n=>{n(Ze)})}W(o,ue),Xa()}export{Cr as default};
