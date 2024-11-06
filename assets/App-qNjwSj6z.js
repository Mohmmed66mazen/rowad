import{j as u,r as G,R as P,c as $,a as Ne,S as Se,A as we,b as Ee,O as ee,C as ne,d as Ie,e as Ce,T as se,D as oe,P as Oe,f as Le}from"./index-DXCChVdB.js";const Jt=({src:t,text:e})=>u.jsxs("div",{className:"relative w-full md:aspect-[4/1] aspect-[3/2] md:w-[80vw]  cursor-pointer scale-95 hover:scale-100 transition-all",children:[u.jsx("img",{className:"  top-0 right-0 md:aspect-[4/1] aspect-[3/2] absolute  object-cover rounded-lg",src:t}),u.jsx("p",{className:"absolute bg-primary/50 backdrop-blur-sm px-3 rounded-sm bottom-4 font-medium text-2xl right-3",children:e})]}),ke={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function jt(t={}){let e,n,s,o=!1,i=!0,r=!1,l=0;function a(N,O){n=N;const{mergeOptions:w,optionsAtMedia:S}=O,E=w(ke,jt.globalOptions),I=w(E,t);if(e=S(I),n.scrollSnapList().length<=1)return;r=e.jump,s=!1;const{eventStore:L,ownerDocument:C}=n.internalEngine(),M=n.rootNode(),R=e.rootNode&&e.rootNode(M)||M,V=n.containerNode();n.on("pointerDown",f),e.stopOnInteraction||n.on("pointerUp",h),e.stopOnMouseEnter&&(L.add(R,"mouseenter",()=>{i=!1,f()}),e.stopOnInteraction||L.add(R,"mouseleave",()=>{i=!0,h()})),e.stopOnFocusIn&&(n.on("slideFocusStart",f),e.stopOnInteraction||L.add(V,"focusout",h)),L.add(C,"visibilitychange",x),e.playOnInit&&!v()&&h()}function c(){n.off("pointerDown",f).off("pointerUp",h).off("slideFocusStart",f),f(),s=!0,o=!1}function h(){if(s||!i)return;o||n.emit("autoplay:play");const{ownerWindow:N}=n.internalEngine();N.clearInterval(l),l=N.setInterval(g,e.delay),o=!0}function f(){if(s)return;o&&n.emit("autoplay:stop");const{ownerWindow:N}=n.internalEngine();N.clearInterval(l),l=0,o=!1}function x(){if(v())return i=o,f();i&&h()}function v(){const{ownerDocument:N}=n.internalEngine();return N.visibilityState==="hidden"}function d(N){typeof N<"u"&&(r=N),i=!0,h()}function p(){o&&f()}function b(){o&&d()}function m(){return o}function g(){const{index:N}=n.internalEngine(),O=N.clone().add(1).get(),w=n.scrollSnapList().length-1;e.stopOnLastSnap&&O===w&&f(),n.canScrollNext()?n.scrollNext(r):n.scrollTo(0,r)}return{name:"autoplay",options:t,init:a,destroy:c,play:d,stop:p,reset:b,isPlaying:m}}jt.globalOptions=void 0;function De(t){return Object.prototype.toString.call(t)==="[object Object]"}function Xt(t){return De(t)||Array.isArray(t)}function Ae(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function At(t,e){const n=Object.keys(t),s=Object.keys(e);if(n.length!==s.length)return!1;const o=JSON.stringify(Object.keys(t.breakpoints||{})),i=JSON.stringify(Object.keys(e.breakpoints||{}));return o!==i?!1:n.every(r=>{const l=t[r],a=e[r];return typeof l=="function"?`${l}`==`${a}`:!Xt(l)||!Xt(a)?l===a:At(l,a)})}function Yt(t){return t.concat().sort((e,n)=>e.name>n.name?1:-1).map(e=>e.options)}function Te(t,e){if(t.length!==e.length)return!1;const n=Yt(t),s=Yt(e);return n.every((o,i)=>{const r=s[i];return At(o,r)})}function Tt(t){return typeof t=="number"}function kt(t){return typeof t=="string"}function Nt(t){return typeof t=="boolean"}function Zt(t){return Object.prototype.toString.call(t)==="[object Object]"}function A(t){return Math.abs(t)}function Pt(t){return Math.sign(t)}function pt(t,e){return A(t-e)}function Pe(t,e){if(t===0||e===0||A(t)<=A(e))return 0;const n=pt(A(t),A(e));return A(n/t)}function gt(t){return ht(t).map(Number)}function q(t){return t[bt(t)]}function bt(t){return Math.max(0,t.length-1)}function Mt(t,e){return e===bt(t)}function Wt(t,e=0){return Array.from(Array(t),(n,s)=>e+s)}function ht(t){return Object.keys(t)}function re(t,e){return[t,e].reduce((n,s)=>(ht(s).forEach(o=>{const i=n[o],r=s[o],l=Zt(i)&&Zt(r);n[o]=l?re(i,r):r}),n),{})}function Dt(t,e){return typeof e.MouseEvent<"u"&&t instanceof e.MouseEvent}function Me(t,e){const n={start:s,center:o,end:i};function s(){return 0}function o(a){return i(a)/2}function i(a){return e-a}function r(a,c){return kt(t)?n[t](a):t(e,a,c)}return{measure:r}}function xt(){let t=[];function e(o,i,r,l={passive:!0}){let a;if("addEventListener"in o)o.addEventListener(i,r,l),a=()=>o.removeEventListener(i,r,l);else{const c=o;c.addListener(r),a=()=>c.removeListener(r)}return t.push(a),s}function n(){t=t.filter(o=>o())}const s={add:e,clear:n};return s}function ze(t,e,n,s){const o=xt(),i=1e3/60;let r=null,l=0,a=0;function c(){o.add(t,"visibilitychange",()=>{t.hidden&&d()})}function h(){v(),o.clear()}function f(b){if(!a)return;r||(r=b);const m=b-r;for(r=b,l+=m;l>=i;)n(i),l-=i;const g=l/i;s(g),a&&e.requestAnimationFrame(f)}function x(){a||(a=e.requestAnimationFrame(f))}function v(){e.cancelAnimationFrame(a),r=null,l=0,a=0}function d(){r=null,l=0}return{init:c,destroy:h,start:x,stop:v,update:()=>n(i),render:s}}function Fe(t,e){const n=e==="rtl",s=t==="y",o=s?"y":"x",i=s?"x":"y",r=!s&&n?-1:1,l=h(),a=f();function c(d){const{height:p,width:b}=d;return s?p:b}function h(){return s?"top":n?"right":"left"}function f(){return s?"bottom":n?"left":"right"}function x(d){return d*r}return{scroll:o,cross:i,startEdge:l,endEdge:a,measureSize:c,direction:x}}function rt(t=0,e=0){const n=A(t-e);function s(c){return c<t}function o(c){return c>e}function i(c){return s(c)||o(c)}function r(c){return i(c)?s(c)?t:e:c}function l(c){return n?c-n*Math.ceil((c-e)/n):c}return{length:n,max:e,min:t,constrain:r,reachedAny:i,reachedMax:o,reachedMin:s,removeOffset:l}}function ie(t,e,n){const{constrain:s}=rt(0,t),o=t+1;let i=r(e);function r(x){return n?A((o+x)%o):s(x)}function l(){return i}function a(x){return i=r(x),f}function c(x){return h().set(l()+x)}function h(){return ie(t,l(),n)}const f={get:l,set:a,add:c,clone:h};return f}function Re(t,e,n,s,o,i,r,l,a,c,h,f,x,v,d,p,b,m,g){const{cross:j,direction:N}=t,O=["INPUT","SELECT","TEXTAREA"],w={passive:!1},S=xt(),E=xt(),I=rt(50,225).constrain(v.measure(20)),L={mouse:300,touch:400},C={mouse:500,touch:600},M=d?43:25;let R=!1,V=0,U=0,st=!1,W=!1,Q=!1,J=!1;function lt(y){if(!g)return;function k(F){(Nt(g)||g(y,F))&&ft(F)}const T=e;S.add(T,"dragstart",F=>F.preventDefault(),w).add(T,"touchmove",()=>{},w).add(T,"touchend",()=>{}).add(T,"touchstart",k).add(T,"mousedown",k).add(T,"touchcancel",z).add(T,"contextmenu",z).add(T,"click",Y,!0)}function _(){S.clear(),E.clear()}function it(){const y=J?n:e;E.add(y,"touchmove",B,w).add(y,"touchend",z).add(y,"mousemove",B,w).add(y,"mouseup",z)}function ct(y){const k=y.nodeName||"";return O.includes(k)}function X(){return(d?C:L)[J?"mouse":"touch"]}function ut(y,k){const T=f.add(Pt(y)*-1),F=h.byDistance(y,!d).distance;return d||A(y)<I?F:b&&k?F*.5:h.byIndex(T.get(),0).distance}function ft(y){const k=Dt(y,s);J=k,Q=d&&k&&!y.buttons&&R,R=pt(o.get(),r.get())>=2,!(k&&y.button!==0)&&(ct(y.target)||(st=!0,i.pointerDown(y),c.useFriction(0).useDuration(0),o.set(r),it(),V=i.readPoint(y),U=i.readPoint(y,j),x.emit("pointerDown")))}function B(y){if(!Dt(y,s)&&y.touches.length>=2)return z(y);const T=i.readPoint(y),F=i.readPoint(y,j),K=pt(T,V),Z=pt(F,U);if(!W&&!J&&(!y.cancelable||(W=K>Z,!W)))return z(y);const tt=i.pointerMove(y);K>p&&(Q=!0),c.useFriction(.3).useDuration(.75),l.start(),o.add(N(tt)),y.preventDefault()}function z(y){const T=h.byDistance(0,!1).index!==f.get(),F=i.pointerUp(y)*X(),K=ut(N(F),T),Z=Pe(F,K),tt=M-10*Z,et=m+Z/50;W=!1,st=!1,E.clear(),c.useDuration(tt).useFriction(et),a.distance(K,!d),J=!1,x.emit("pointerUp")}function Y(y){Q&&(y.stopPropagation(),y.preventDefault(),Q=!1)}function H(){return st}return{init:lt,destroy:_,pointerDown:H}}function Be(t,e){let s,o;function i(f){return f.timeStamp}function r(f,x){const d=`client${(x||t.scroll)==="x"?"X":"Y"}`;return(Dt(f,e)?f:f.touches[0])[d]}function l(f){return s=f,o=f,r(f)}function a(f){const x=r(f)-r(o),v=i(f)-i(s)>170;return o=f,v&&(s=f),x}function c(f){if(!s||!o)return 0;const x=r(o)-r(s),v=i(f)-i(s),d=i(f)-i(o)>170,p=x/v;return v&&!d&&A(p)>.1?p:0}return{pointerDown:l,pointerMove:a,pointerUp:c,readPoint:r}}function Ve(){function t(n){const{offsetTop:s,offsetLeft:o,offsetWidth:i,offsetHeight:r}=n;return{top:s,right:o+i,bottom:s+r,left:o,width:i,height:r}}return{measure:t}}function He(t){function e(s){return t*(s/100)}return{measure:e}}function Ge(t,e,n,s,o,i,r){const l=[t].concat(s);let a,c,h=[],f=!1;function x(b){return o.measureSize(r.measure(b))}function v(b){if(!i)return;c=x(t),h=s.map(x);function m(g){for(const j of g){if(f)return;const N=j.target===t,O=s.indexOf(j.target),w=N?c:h[O],S=x(N?t:s[O]);if(A(S-w)>=.5){b.reInit(),e.emit("resize");break}}}a=new ResizeObserver(g=>{(Nt(i)||i(b,g))&&m(g)}),n.requestAnimationFrame(()=>{l.forEach(g=>a.observe(g))})}function d(){f=!0,a&&a.disconnect()}return{init:v,destroy:d}}function qe(t,e,n,s,o,i){let r=0,l=0,a=o,c=i,h=t.get(),f=0;function x(w){const S=w/1e3,E=a*S,I=s.get()-t.get(),L=!a;let C=0;return L?(r=0,n.set(s),t.set(s),C=I):(n.set(t),r+=I/E,r*=c,h+=r,t.add(r*S),C=h-f),l=Pt(C),f=h,O}function v(){const w=s.get()-e.get();return A(w)<.001}function d(){return a}function p(){return l}function b(){return r}function m(){return j(o)}function g(){return N(i)}function j(w){return a=w,O}function N(w){return c=w,O}const O={direction:p,duration:d,velocity:b,seek:x,settled:v,useBaseFriction:g,useBaseDuration:m,useFriction:N,useDuration:j};return O}function $e(t,e,n,s,o){const i=o.measure(10),r=o.measure(50),l=rt(.1,.99);let a=!1;function c(){return!(a||!t.reachedAny(n.get())||!t.reachedAny(e.get()))}function h(v){if(!c())return;const d=t.reachedMin(e.get())?"min":"max",p=A(t[d]-e.get()),b=n.get()-e.get(),m=l.constrain(p/r);n.subtract(b*m),!v&&A(b)<i&&(n.set(t.constrain(n.get())),s.useDuration(25).useBaseFriction())}function f(v){a=!v}return{shouldConstrain:c,constrain:h,toggleActive:f}}function Ue(t,e,n,s,o){const i=rt(-e+t,0),r=f(),l=h(),a=x();function c(d,p){return pt(d,p)<1}function h(){const d=r[0],p=q(r),b=r.lastIndexOf(d),m=r.indexOf(p)+1;return rt(b,m)}function f(){return n.map((d,p)=>{const{min:b,max:m}=i,g=i.constrain(d),j=!p,N=Mt(n,p);return j?m:N||c(b,g)?b:c(m,g)?m:g}).map(d=>parseFloat(d.toFixed(3)))}function x(){if(e<=t+o)return[i.max];if(s==="keepSnaps")return r;const{min:d,max:p}=l;return r.slice(d,p)}return{snapsContained:a,scrollContainLimit:l}}function _e(t,e,n){const s=e[0],o=n?s-t:q(e);return{limit:rt(o,s)}}function Ke(t,e,n,s){const i=e.min+.1,r=e.max+.1,{reachedMin:l,reachedMax:a}=rt(i,r);function c(x){return x===1?a(n.get()):x===-1?l(n.get()):!1}function h(x){if(!c(x))return;const v=t*(x*-1);s.forEach(d=>d.add(v))}return{loop:h}}function Qe(t){const{max:e,length:n}=t;function s(i){const r=i-e;return n?r/-n:0}return{get:s}}function Je(t,e,n,s,o){const{startEdge:i,endEdge:r}=t,{groupSlides:l}=o,a=f().map(e.measure),c=x(),h=v();function f(){return l(s).map(p=>q(p)[r]-p[0][i]).map(A)}function x(){return s.map(p=>n[i]-p[i]).map(p=>-A(p))}function v(){return l(c).map(p=>p[0]).map((p,b)=>p+a[b])}return{snaps:c,snapsAligned:h}}function Xe(t,e,n,s,o,i){const{groupSlides:r}=o,{min:l,max:a}=s,c=h();function h(){const x=r(i),v=!t||e==="keepSnaps";return n.length===1?[i]:v?x:x.slice(l,a).map((d,p,b)=>{const m=!p,g=Mt(b,p);if(m){const j=q(b[0])+1;return Wt(j)}if(g){const j=bt(i)-q(b)[0]+1;return Wt(j,q(b)[0])}return d})}return{slideRegistry:c}}function Ye(t,e,n,s,o){const{reachedAny:i,removeOffset:r,constrain:l}=s;function a(d){return d.concat().sort((p,b)=>A(p)-A(b))[0]}function c(d){const p=t?r(d):l(d),b=e.map((g,j)=>({diff:h(g-p,0),index:j})).sort((g,j)=>A(g.diff)-A(j.diff)),{index:m}=b[0];return{index:m,distance:p}}function h(d,p){const b=[d,d+n,d-n];if(!t)return d;if(!p)return a(b);const m=b.filter(g=>Pt(g)===p);return m.length?a(m):q(b)-n}function f(d,p){const b=e[d]-o.get(),m=h(b,p);return{index:d,distance:m}}function x(d,p){const b=o.get()+d,{index:m,distance:g}=c(b),j=!t&&i(b);if(!p||j)return{index:m,distance:d};const N=e[m]-g,O=d+h(N,0);return{index:m,distance:O}}return{byDistance:x,byIndex:f,shortcut:h}}function Ze(t,e,n,s,o,i,r){function l(f){const x=f.distance,v=f.index!==e.get();i.add(x),x&&(s.duration()?t.start():(t.update(),t.render(1),t.update())),v&&(n.set(e.get()),e.set(f.index),r.emit("select"))}function a(f,x){const v=o.byDistance(f,x);l(v)}function c(f,x){const v=e.clone().set(f),d=o.byIndex(v.get(),x);l(d)}return{distance:a,index:c}}function We(t,e,n,s,o,i,r,l){const a={passive:!0,capture:!0};let c=0;function h(v){if(!l)return;function d(p){if(new Date().getTime()-c>10)return;r.emit("slideFocusStart"),t.scrollLeft=0;const g=n.findIndex(j=>j.includes(p));Tt(g)&&(o.useDuration(0),s.index(g,0),r.emit("slideFocus"))}i.add(document,"keydown",f,!1),e.forEach((p,b)=>{i.add(p,"focus",m=>{(Nt(l)||l(v,m))&&d(b)},a)})}function f(v){v.code==="Tab"&&(c=new Date().getTime())}return{init:h}}function mt(t){let e=t;function n(){return e}function s(a){e=r(a)}function o(a){e+=r(a)}function i(a){e-=r(a)}function r(a){return Tt(a)?a:a.get()}return{get:n,set:s,add:o,subtract:i}}function ce(t,e){const n=t.scroll==="x"?i:r,s=e.style;let o=!1;function i(f){return`translate3d(${f}px,0px,0px)`}function r(f){return`translate3d(0px,${f}px,0px)`}function l(f){o||(s.transform=n(t.direction(f)))}function a(f){o=!f}function c(){o||(s.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:c,to:l,toggleActive:a}}function tn(t,e,n,s,o,i,r,l,a){const h=gt(o),f=gt(o).reverse(),x=m().concat(g());function v(S,E){return S.reduce((I,L)=>I-o[L],E)}function d(S,E){return S.reduce((I,L)=>v(I,E)>0?I.concat([L]):I,[])}function p(S){return i.map((E,I)=>({start:E-s[I]+.5+S,end:E+e-.5+S}))}function b(S,E,I){const L=p(E);return S.map(C=>{const M=I?0:-n,R=I?n:0,V=I?"end":"start",U=L[C][V];return{index:C,loopPoint:U,slideLocation:mt(-1),translate:ce(t,a[C]),target:()=>l.get()>U?M:R}})}function m(){const S=r[0],E=d(f,S);return b(E,n,!1)}function g(){const S=e-r[0]-1,E=d(h,S);return b(E,-n,!0)}function j(){return x.every(({index:S})=>{const E=h.filter(I=>I!==S);return v(E,e)<=.1})}function N(){x.forEach(S=>{const{target:E,translate:I,slideLocation:L}=S,C=E();C!==L.get()&&(I.to(C),L.set(C))})}function O(){x.forEach(S=>S.translate.clear())}return{canLoop:j,clear:O,loop:N,loopPoints:x}}function en(t,e,n){let s,o=!1;function i(a){if(!n)return;function c(h){for(const f of h)if(f.type==="childList"){a.reInit(),e.emit("slidesChanged");break}}s=new MutationObserver(h=>{o||(Nt(n)||n(a,h))&&c(h)}),s.observe(t,{childList:!0})}function r(){s&&s.disconnect(),o=!0}return{init:i,destroy:r}}function nn(t,e,n,s){const o={};let i=null,r=null,l,a=!1;function c(){l=new IntersectionObserver(d=>{a||(d.forEach(p=>{const b=e.indexOf(p.target);o[b]=p}),i=null,r=null,n.emit("slidesInView"))},{root:t.parentElement,threshold:s}),e.forEach(d=>l.observe(d))}function h(){l&&l.disconnect(),a=!0}function f(d){return ht(o).reduce((p,b)=>{const m=parseInt(b),{isIntersecting:g}=o[m];return(d&&g||!d&&!g)&&p.push(m),p},[])}function x(d=!0){if(d&&i)return i;if(!d&&r)return r;const p=f(d);return d&&(i=p),d||(r=p),p}return{init:c,destroy:h,get:x}}function sn(t,e,n,s,o,i){const{measureSize:r,startEdge:l,endEdge:a}=t,c=n[0]&&o,h=d(),f=p(),x=n.map(r),v=b();function d(){if(!c)return 0;const g=n[0];return A(e[l]-g[l])}function p(){if(!c)return 0;const g=i.getComputedStyle(q(s));return parseFloat(g.getPropertyValue(`margin-${a}`))}function b(){return n.map((g,j,N)=>{const O=!j,w=Mt(N,j);return O?x[j]+h:w?x[j]+f:N[j+1][l]-g[l]}).map(A)}return{slideSizes:x,slideSizesWithGaps:v,startGap:h,endGap:f}}function on(t,e,n,s,o,i,r,l,a){const{startEdge:c,endEdge:h,direction:f}=t,x=Tt(n);function v(m,g){return gt(m).filter(j=>j%g===0).map(j=>m.slice(j,j+g))}function d(m){return m.length?gt(m).reduce((g,j,N)=>{const O=q(g)||0,w=O===0,S=j===bt(m),E=o[c]-i[O][c],I=o[c]-i[j][h],L=!s&&w?f(r):0,C=!s&&S?f(l):0,M=A(I-C-(E+L));return N&&M>e+a&&g.push(j),S&&g.push(m.length),g},[]).map((g,j,N)=>{const O=Math.max(N[j-1]||0);return m.slice(O,g)}):[]}function p(m){return x?v(m,n):d(m)}return{groupSlides:p}}function rn(t,e,n,s,o,i,r){const{align:l,axis:a,direction:c,startIndex:h,loop:f,duration:x,dragFree:v,dragThreshold:d,inViewThreshold:p,slidesToScroll:b,skipSnaps:m,containScroll:g,watchResize:j,watchSlides:N,watchDrag:O,watchFocus:w}=i,S=2,E=Ve(),I=E.measure(e),L=n.map(E.measure),C=Fe(a,c),M=C.measureSize(I),R=He(M),V=Me(l,M),U=!f&&!!g,st=f||!!g,{slideSizes:W,slideSizesWithGaps:Q,startGap:J,endGap:lt}=sn(C,I,L,n,st,o),_=on(C,M,b,f,I,L,J,lt,S),{snaps:it,snapsAligned:ct}=Je(C,V,I,L,_),X=-q(it)+q(Q),{snapsContained:ut,scrollContainLimit:ft}=Ue(M,X,ct,g,S),B=U?ut:ct,{limit:z}=_e(X,B,f),Y=ie(bt(B),h,f),H=Y.clone(),D=gt(n),y=({dragHandler:nt,scrollBody:Ct,scrollBounds:Ot,options:{loop:yt}},Lt)=>{yt||Ot.constrain(nt.pointerDown()),Ct.seek(Lt)},k=({scrollBody:nt,translate:Ct,location:Ot,offsetLocation:yt,scrollLooper:Lt,slideLooper:he,dragHandler:xe,animation:be,eventHandler:$t,scrollBounds:ye,options:{loop:Ut}},_t)=>{const Kt=nt.settled(),ve=!ye.shouldConstrain(),Qt=Ut?Kt:Kt&&ve;Qt&&!xe.pointerDown()&&(be.stop(),$t.emit("settle")),Qt||$t.emit("scroll");const je=Ot.get()*_t+tt.get()*(1-_t);yt.set(je),Ut&&(Lt.loop(nt.direction()),he.loop()),Ct.to(yt.get())},T=ze(s,o,nt=>y(It,nt),nt=>k(It,nt)),F=.68,K=B[Y.get()],Z=mt(K),tt=mt(K),et=mt(K),ot=mt(K),dt=qe(Z,et,tt,ot,x,F),wt=Ye(f,B,X,z,ot),Et=Ze(T,Y,H,dt,wt,ot,r),Ht=Qe(z),Gt=xt(),pe=nn(e,n,r,p),{slideRegistry:qt}=Xe(U,g,B,ft,_,D),ge=We(t,n,qt,Et,dt,Gt,r,w),It={ownerDocument:s,ownerWindow:o,eventHandler:r,containerRect:I,slideRects:L,animation:T,axis:C,dragHandler:Re(C,t,s,o,ot,Be(C,o),Z,T,Et,dt,wt,Y,r,R,v,d,m,F,O),eventStore:Gt,percentOfView:R,index:Y,indexPrevious:H,limit:z,location:Z,offsetLocation:et,previousLocation:tt,options:i,resizeHandler:Ge(e,r,o,n,C,j,E),scrollBody:dt,scrollBounds:$e(z,et,ot,dt,R),scrollLooper:Ke(X,z,et,[Z,et,tt,ot]),scrollProgress:Ht,scrollSnapList:B.map(Ht.get),scrollSnaps:B,scrollTarget:wt,scrollTo:Et,slideLooper:tn(C,M,X,W,Q,it,B,et,n),slideFocus:ge,slidesHandler:en(e,r,N),slidesInView:pe,slideIndexes:D,slideRegistry:qt,slidesToScroll:_,target:ot,translate:ce(C,e)};return It}function cn(){let t={},e;function n(c){e=c}function s(c){return t[c]||[]}function o(c){return s(c).forEach(h=>h(e,c)),a}function i(c,h){return t[c]=s(c).concat([h]),a}function r(c,h){return t[c]=s(c).filter(f=>f!==h),a}function l(){t={}}const a={init:n,emit:o,off:r,on:i,clear:l};return a}const an={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function ln(t){function e(i,r){return re(i,r||{})}function n(i){const r=i.breakpoints||{},l=ht(r).filter(a=>t.matchMedia(a).matches).map(a=>r[a]).reduce((a,c)=>e(a,c),{});return e(i,l)}function s(i){return i.map(r=>ht(r.breakpoints||{})).reduce((r,l)=>r.concat(l),[]).map(t.matchMedia)}return{mergeOptions:e,optionsAtMedia:n,optionsMediaQueries:s}}function un(t){let e=[];function n(i,r){return e=r.filter(({options:l})=>t.optionsAtMedia(l).active!==!1),e.forEach(l=>l.init(i,t)),r.reduce((l,a)=>Object.assign(l,{[a.name]:a}),{})}function s(){e=e.filter(i=>i.destroy())}return{init:n,destroy:s}}function vt(t,e,n){const s=t.ownerDocument,o=s.defaultView,i=ln(o),r=un(i),l=xt(),a=cn(),{mergeOptions:c,optionsAtMedia:h,optionsMediaQueries:f}=i,{on:x,off:v,emit:d}=a,p=C;let b=!1,m,g=c(an,vt.globalOptions),j=c(g),N=[],O,w,S;function E(){const{container:D,slides:y}=j;w=(kt(D)?t.querySelector(D):D)||t.children[0];const T=kt(y)?w.querySelectorAll(y):y;S=[].slice.call(T||w.children)}function I(D){const y=rn(t,w,S,s,o,D,a);if(D.loop&&!y.slideLooper.canLoop()){const k=Object.assign({},D,{loop:!1});return I(k)}return y}function L(D,y){b||(g=c(g,D),j=h(g),N=y||N,E(),m=I(j),f([g,...N.map(({options:k})=>k)]).forEach(k=>l.add(k,"change",C)),j.active&&(m.translate.to(m.location.get()),m.animation.init(),m.slidesInView.init(),m.slideFocus.init(H),m.eventHandler.init(H),m.resizeHandler.init(H),m.slidesHandler.init(H),m.options.loop&&m.slideLooper.loop(),w.offsetParent&&S.length&&m.dragHandler.init(H),O=r.init(H,N)))}function C(D,y){const k=_();M(),L(c({startIndex:k},D),y),a.emit("reInit")}function M(){m.dragHandler.destroy(),m.eventStore.clear(),m.translate.clear(),m.slideLooper.clear(),m.resizeHandler.destroy(),m.slidesHandler.destroy(),m.slidesInView.destroy(),m.animation.destroy(),r.destroy(),l.clear()}function R(){b||(b=!0,l.clear(),M(),a.emit("destroy"),a.clear())}function V(D,y,k){!j.active||b||(m.scrollBody.useBaseFriction().useDuration(y===!0?0:j.duration),m.scrollTo.index(D,k||0))}function U(D){const y=m.index.add(1).get();V(y,D,-1)}function st(D){const y=m.index.add(-1).get();V(y,D,1)}function W(){return m.index.add(1).get()!==_()}function Q(){return m.index.add(-1).get()!==_()}function J(){return m.scrollSnapList}function lt(){return m.scrollProgress.get(m.location.get())}function _(){return m.index.get()}function it(){return m.indexPrevious.get()}function ct(){return m.slidesInView.get()}function X(){return m.slidesInView.get(!1)}function ut(){return O}function ft(){return m}function B(){return t}function z(){return w}function Y(){return S}const H={canScrollNext:W,canScrollPrev:Q,containerNode:z,internalEngine:ft,destroy:R,off:v,on:x,emit:d,plugins:ut,previousScrollSnap:it,reInit:p,rootNode:B,scrollNext:U,scrollPrev:st,scrollProgress:lt,scrollSnapList:J,scrollTo:V,selectedScrollSnap:_,slideNodes:Y,slidesInView:ct,slidesNotInView:X};return L(e,n),setTimeout(()=>a.emit("init"),0),H}vt.globalOptions=void 0;function zt(t={},e=[]){const n=G.useRef(t),s=G.useRef(e),[o,i]=G.useState(),[r,l]=G.useState(),a=G.useCallback(()=>{o&&o.reInit(n.current,s.current)},[o]);return G.useEffect(()=>{At(n.current,t)||(n.current=t,a())},[t,a]),G.useEffect(()=>{Te(s.current,e)||(s.current=e,a())},[e,a]),G.useEffect(()=>{if(Ae()&&r){vt.globalOptions=zt.globalOptions;const c=vt(r,n.current,s.current);return i(c),()=>c.destroy()}else i(void 0)},[r,i]),[l,o]}zt.globalOptions=void 0;const fn=Ne("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-neutral-300",{variants:{variant:{default:"bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",destructive:"bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",outline:"border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",secondary:"bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",ghost:"hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",link:"text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),Ft=P.forwardRef(({className:t,variant:e,size:n,asChild:s=!1,...o},i)=>{const r=s?Se:"button";return u.jsx(r,{className:$(fn({variant:e,size:n,className:t})),ref:i,...o})});Ft.displayName="Button";const ae=P.createContext(null);function St(){const t=P.useContext(ae);if(!t)throw new Error("useCarousel must be used within a <Carousel />");return t}const Rt=P.forwardRef(({orientation:t="horizontal",opts:e,setApi:n,plugins:s,className:o,children:i,...r},l)=>{const[a,c]=zt({...e,axis:t==="horizontal"?"x":"y"},s),[h,f]=P.useState(!1),[x,v]=P.useState(!1),d=P.useCallback(g=>{g&&(f(g.canScrollPrev()),v(g.canScrollNext()))},[]),p=P.useCallback(()=>{c==null||c.scrollPrev()},[c]),b=P.useCallback(()=>{c==null||c.scrollNext()},[c]),m=P.useCallback(g=>{g.key==="ArrowLeft"?(g.preventDefault(),p()):g.key==="ArrowRight"&&(g.preventDefault(),b())},[p,b]);return P.useEffect(()=>{!c||!n||n(c)},[c,n]),P.useEffect(()=>{if(c)return d(c),c.on("reInit",d),c.on("select",d),()=>{c==null||c.off("select",d)}},[c,d]),u.jsx(ae.Provider,{value:{carouselRef:a,api:c,opts:e,orientation:t||((e==null?void 0:e.axis)==="y"?"vertical":"horizontal"),scrollPrev:p,scrollNext:b,canScrollPrev:h,canScrollNext:x},children:u.jsx("div",{ref:l,onKeyDownCapture:m,className:$("relative",o),role:"region","aria-roledescription":"carousel",...r,children:i})})});Rt.displayName="Carousel";const Bt=P.forwardRef(({className:t,...e},n)=>{const{carouselRef:s,orientation:o}=St();return u.jsx("div",{dir:"ltr",ref:s,className:"overflow-hidden",children:u.jsx("div",{ref:n,className:$("flex",o==="horizontal"?"-ml-1":"-mt-4 flex-col",t),...e})})});Bt.displayName="CarouselContent";const Vt=P.forwardRef(({className:t,...e},n)=>{const{orientation:s}=St();return u.jsx("div",{ref:n,role:"group","aria-roledescription":"slide",className:$("min-w-0 shrink-0 grow-0 basis-full",s==="horizontal"?"pl-1":"pt-4",t),...e})});Vt.displayName="CarouselItem";const dn=P.forwardRef(({className:t,variant:e="outline",size:n="icon",...s},o)=>{const{orientation:i,scrollPrev:r,canScrollPrev:l}=St();return u.jsxs(Ft,{ref:o,variant:e,size:n,className:$("absolute  h-8 w-8 rounded-full",i==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!l,onClick:r,...s,children:[u.jsx(we,{className:"h-4 w-4"}),u.jsx("span",{className:"sr-only",children:"Previous slide"})]})});dn.displayName="CarouselPrevious";const mn=P.forwardRef(({className:t,variant:e="outline",size:n="icon",...s},o)=>{const{orientation:i,scrollNext:r,canScrollNext:l}=St();return u.jsxs(Ft,{ref:o,variant:e,size:n,className:$("absolute h-8 w-8 rounded-full",i==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!l,onClick:r,...s,children:[u.jsx(Ee,{className:"h-4 w-4"}),u.jsx("span",{className:"sr-only",children:"Next slide"})]})});mn.displayName="CarouselNext";const pn=Le,gn=Oe,le=P.forwardRef(({className:t,...e},n)=>u.jsx(ee,{ref:n,className:$("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...e}));le.displayName=ee.displayName;const ue=P.forwardRef(({className:t,children:e,...n},s)=>u.jsxs(gn,{children:[u.jsx(le,{}),u.jsxs(ne,{ref:s,className:$("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4  bg-second  shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg ",t),...n,children:[e,u.jsxs(Ie,{className:"absolute right-4 -top-4 bg-zinc-800 rounded-full p-1 text-primary",children:[u.jsx(Ce,{className:"h-5 w-5"}),u.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));ue.displayName=ne.displayName;const fe=({className:t,...e})=>u.jsx("div",{className:$("flex flex-col space-y-1.5 text-center sm:text-left",t),...e});fe.displayName="DialogHeader";const de=P.forwardRef(({className:t,...e},n)=>u.jsx(se,{ref:n,className:$("text-lg font-semibold leading-none tracking-tight",t),...e}));de.displayName=se.displayName;const me=P.forwardRef(({className:t,...e},n)=>u.jsx(oe,{ref:n,className:$("text-sm ",t),...e}));me.displayName=oe.displayName;function hn(){const t=G.useRef(jt({delay:4e3,stopOnInteraction:!1})),[e,n]=G.useState(!1);return u.jsxs(u.Fragment,{children:[u.jsx(pn,{open:e,onOpenChange:n,children:u.jsx(ue,{children:u.jsxs(fe,{children:[u.jsx(de,{}),u.jsx(me,{children:u.jsx("div",{className:" p-3 bg-second w-full",children:u.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/jgO-OLkvh24?si=zqmg_e8sq5GDMMpt",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})})})]})})}),u.jsx(Rt,{plugins:[t.current],opts:{loop:!0,align:"start"},className:"w-3/4  mx-auto my-10",onMouseEnter:t.current.stop,onMouseLeave:t.current.reset,children:u.jsx(Bt,{children:Array.from({length:5}).map((s,o)=>u.jsx(Vt,{onClick:()=>{n(!0)},className:"md:basis-1/2 cursor-pointer",children:u.jsxs("div",{className:"p-1 w-full relative",children:[u.jsx("img",{className:"aspect-video  border-primary/80 rounded-sm border-2 object-cover",src:`./photo/h${o+1}.jpg`}),u.jsx("img",{className:"w-14 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 p-3 rounded-full",src:"photo/player.svg"})]})},o))})})]})}function xn(){const t=G.useRef(jt({delay:2500,stopOnInteraction:!1}));return u.jsx(Rt,{plugins:[t.current],opts:{align:"start",loop:!0},className:"w-11/12  mx-auto my-10 md:w-[60vw] ",children:u.jsx(Bt,{children:Array.from({length:5}).map((e,n)=>u.jsx(Vt,{className:"basis-1/2  md:basis-1/3 lg:basis-1/4",children:u.jsx("div",{className:"p-1   items-center flex flex-col gap-3",children:Array.from({length:3}).map((s,o)=>u.jsx("img",{loading:"lazy",className:" bg-gradient-to-tl   from-teal-500  to-teal-900 w-full  aspect-square object-contain p-5 rounded-sm",src:`./logo/${n+1}${o+1}.png`},o))})},n))})})}const at=t=>u.jsxs("div",{className:"bg-gradient-to-br   from-zinc-800 to-zinc-900 p-3 flex rounded gap-3 flex-col",children:[u.jsxs("div",{className:"flex text-2xl gap-2 items-center",children:[u.jsx("img",{className:"w-10",src:t.src}),u.jsxs("p",{className:"font-mono font-bold",children:[u.jsx("span",{className:"counter",start:"0",end:t.number.toString(),time:"0.5",children:"0"}),u.jsx("span",{children:"+"})]})]}),u.jsx("p",{children:t.title})]}),te=({title:t,descrption:e})=>u.jsxs("div",{className:" p-4 rounded",children:[u.jsx("h3",{className:"font-bold text-2xl mb-1",children:t}),u.jsx("p",{className:"text-white/80",children:e})]});function yn(){return G.useEffect(()=>{const t=document.querySelectorAll(".counter"),e=(s,o,i,r)=>{r.target.innerHTML=s.toString(),s++,s<=o&&setTimeout(()=>{e(s,o,i,r)},i)},n=new IntersectionObserver(function(s){s.forEach(o=>{if(o.isIntersecting&&!o.target.getAttribute("ison")){const i=+o.target.getAttribute("end"),r=+o.target.getAttribute("time");e(0,i,r,o),o.target.setAttribute("ison","true")}})});return t.forEach(s=>{n.observe(s)}),()=>{n.disconnect()}},[]),u.jsx(u.Fragment,{children:u.jsxs("main",{className:"h-svh text-white  w-full mt-[70px] md:mt-0",children:[u.jsx("img",{className:"max-h-[100svh] min-h-[50vw] w-full bg-cover object-cover",src:"photo/cavaer.jpg"}),u.jsxs("section",{className:"px-3 relative py-10 mb-10 bg-zinc-900",children:[u.jsxs("div",{className:"justify-evenly items-center flex",children:[u.jsxs("div",{className:"md:w-1/2",children:[u.jsx("h2",{className:"text-2xl font-bold mb-2",children:"# عن الشركة"}),u.jsx("p",{className:"text-lg",children:"شركة رائدة في ابتكار حلول التسويق لتمكين شركائها من التواصل مع العملاء وذلك من خلال تطوير إستراتيجيات التواصل وصناعة المحتوى وخدمات التصميم والتسويق، الإنتاج المرئي وإدارة شبكات التواصل الاجتماعي، والإعلانات بمختلف أنواعها."})]}),u.jsx("img",{className:"md:block  hidden w-1/4",src:"photo/camera.svg"})]}),u.jsx("div",{className:"bg-primary mt-5  w-full h-[0.05rem]"})]}),u.jsx("h2",{className:" text-center font-bold title",children:"خــدمـاتنـــا"}),u.jsx("div",{className:"bg-white/25 mt-1  w-full h-[0.05rem]"}),u.jsx("section",{className:"p-3 bg-gradient-to-tr to-60% from-primary/20 to-second",children:u.jsxs("div",{className:"grid gap-8 py-4 md:w-fit mx-auto",children:[u.jsx(Jt,{src:"photo/h5.jpg",text:"التسويق الالكتروني"}),u.jsx(Jt,{src:"photo/h4.jpg",text:"توثيق الفيديو"})]})}),u.jsxs("section",{className:"my-12 p-4",children:[u.jsx("h2",{className:"title font-bold md:text-center bg-gradient-to-l  text-transparent bg-clip-text from-primary to-emerald-700",children:"قصتنا و نجاحنا"}),u.jsx("p",{className:"md:text-center md:max-w-2xl mx-auto md:text-xl",children:"نصنع أخيلة الكلم، نُعبّر بالحرف والصوت والصورة، ننسج حكايات نجاح، نحن وشركاؤنا أبطالها نبتكر من الخيال آفاقاً لا حدود لها، نرسم خطوط البداية، نوجه التيار، ونبحر بأعمالنا كيفما أردنا لنصل بها بر الأمان. في الخيال ومع صانعيه تبدأ الرواية.."})]}),u.jsxs("section",{children:[u.jsx("h2",{className:" text-center font-bold title",children:"من اعمالنا"}),u.jsx("div",{className:"bg-white/25 mt-1 w-full h-[0.05rem]"}),u.jsx(hn,{})]}),u.jsxs("section",{className:"bg-gradient-to-b pt-8 to-second to-30% f from-primary/25 ",children:[u.jsxs("h2",{className:" text-center  font-bold title",children:["كن جزء من",u.jsx("br",{}),u.jsx("span",{className:"bg-gradient-to-l   text-transparent bg-clip-text from-primary to-emerald-700",children:"عملائنا المميزين"})]}),u.jsx(xn,{})]}),u.jsxs("section",{className:" my-16 p-3",children:[u.jsx("h2",{className:" text-center font-bold title",children:"انجـزاتنــا"}),u.jsx("div",{className:"bg-white/25 mt-1  w-full h-[0.05rem]"}),u.jsxs("div",{className:"grid grid-cols-2 my-5 md:grid-cols-4 lg:grid-cols-6 lg:w-4/5 mx-auto gap-3",children:[u.jsx(at,{title:"ادارة الحسابات",number:300,src:"photo/n1.svg"}),u.jsx(at,{title:"مؤثر",number:600,src:"photo/n2.svg"}),u.jsx(at,{title:"حملة إعلانية",number:250,src:"photo/n3.svg"}),u.jsx(at,{title:"إنتاج مرئي",number:900,src:"photo/n4.svg"}),u.jsx(at,{title:"تقارير",number:850,src:"photo/n5.svg"}),u.jsx(at,{title:"تغطية",number:250,src:"photo/n6.svg"})]})]}),u.jsx("section",{className:"my-10",children:u.jsxs("div",{className:"",children:[u.jsxs("div",{className:"relative font-bold mb-4 flex items-center  ",children:[u.jsx("h2",{className:"title px-3 py-7 bg-second/25 w-full",children:"ما يميزونا عن غيرنا"}),u.jsx("img",{className:"absolute grayscale object-bottom   object-cover -z-10 w-full h-full top-0",src:"photo/bg2.jpg"})]}),u.jsxs("div",{className:"grid gap-5 p-3 md:grid-cols-2 md:w-4/5 mx-auto ",children:[u.jsx(te,{title:`إتقان العمل
`,descrption:"نوظف الطاقات مع فرق عمل مؤهلة ومتخصصة لنحقق نتائج متقنة بكل متعة واحترافية."}),u.jsx(te,{title:"السرعة",descrption:"الوقت ليس بعائق أبداً عن تحقيق مستويات تليق بنا وبعملائنا لنسطع سوياًً بدون حدود"})]})]})}),u.jsx("div",{className:"w-full h-[50svh]"})]})})}export{yn as default};
