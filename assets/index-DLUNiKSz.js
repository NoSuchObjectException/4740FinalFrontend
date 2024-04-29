var G=Object.defineProperty;var K=(e,t,n)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var A=(e,t,n)=>(K(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function m(){}function T(e,t){for(const n in t)e[n]=t[n];return e}function q(e){return e()}function N(){return Object.create(null)}function E(e){e.forEach(q)}function O(e){return typeof e=="function"}function D(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function z(e){return Object.keys(e).length===0}function j(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function Q(e){return e&&O(e.destroy)?e.destroy:m}function w(e,t,n){e.insertBefore(t,n||null)}function g(e){e.parentNode&&e.parentNode.removeChild(e)}function k(e){return document.createElement(e)}function X(e){return document.createTextNode(e)}function B(){return X(" ")}function $(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Y(e){return Array.from(e.childNodes)}let P;function x(e){P=e}const y=[],I=[];let _=[];const F=[],Z=Promise.resolve();let L=!1;function ee(){L||(L=!0,Z.then(J))}function S(e){_.push(e)}const C=new Set;let p=0;function J(){if(p!==0)return;const e=P;do{try{for(;p<y.length;){const t=y[p];p++,x(t),te(t.$$)}}catch(t){throw y.length=0,p=0,t}for(x(null),y.length=0,p=0;I.length;)I.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];C.has(n)||(C.add(n),n())}_.length=0}while(y.length);for(;F.length;)F.pop()();L=!1,C.clear(),x(e)}function te(e){if(e.fragment!==null){e.update(),E(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(S)}}function ne(e){const t=[],n=[];_.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),_=t}const v=new Set;let re;function M(e,t){e&&e.i&&(v.delete(e),e.i(t))}function oe(e,t,n,r){if(e&&e.o){if(v.has(e))return;v.add(e),re.c.push(()=>{v.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function se(e){e&&e.c()}function U(e,t,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),S(()=>{const s=e.$$.on_mount.map(q).filter(O);e.$$.on_destroy?e.$$.on_destroy.push(...s):E(s),e.$$.on_mount=[]}),o.forEach(S)}function H(e,t){const n=e.$$;n.fragment!==null&&(ne(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ie(e,t){e.$$.dirty[0]===-1&&(y.push(e),ee(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function V(e,t,n,r,o,s,i=null,l=[-1]){const c=P;x(e);const a=e.$$={fragment:null,ctx:[],props:s,update:m,not_equal:o,bound:N(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:N(),dirty:l,skip_bound:!1,root:t.target||c.$$.root};i&&i(a.root);let b=!1;if(a.ctx=n?n(e,t.props||{},(u,f,...d)=>{const h=d.length?d[0]:f;return a.ctx&&o(a.ctx[u],a.ctx[u]=h)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](h),b&&ie(e,u)),f}):[],a.update(),b=!0,E(a.before_update),a.fragment=r?r(a.ctx):!1,t.target){if(t.hydrate){const u=Y(t.target);a.fragment&&a.fragment.l(u),u.forEach(g)}else a.fragment&&a.fragment.c();t.intro&&M(e.$$.fragment),U(e,t.target,t.anchor),J()}x(c)}class W{constructor(){A(this,"$$");A(this,"$$set")}$destroy(){H(this,1),this.$destroy=m}$on(t,n){if(!O(n))return m;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!z(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const le="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(le);const ae="modulepreload",ce=function(e){return"/my-app/"+e},R={},fe=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=Promise.all(n.map(c=>{if(c=ce(c),c in R)return;R[c]=!0;const a=c.endsWith(".css"),b=a?'[rel="stylesheet"]':"";if(!!r)for(let d=s.length-1;d>=0;d--){const h=s[d];if(h.href===c&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${b}`))return;const f=document.createElement("link");if(f.rel=a?"stylesheet":ae,a||(f.as="script",f.crossOrigin=""),f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),a)return new Promise((d,h)=>{f.addEventListener("load",d),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}return o.then(()=>t()).catch(s=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s})};function ue(e){let t,n,r,o,s;return{c(){t=k("div"),$(t,"class",n=e[1].class)},m(i,l){w(i,t,l),o||(s=Q(r=de.call(null,t,e[0])),o=!0)},p(i,[l]){l&2&&n!==(n=i[1].class)&&$(t,"class",n),r&&O(r.update)&&l&1&&r.update.call(null,i[0])},i:m,o:m,d(i){i&&g(t),o=!1,s()}}}function de(e,t){let n;async function r(){const o=(await fe(()=>import("./apexcharts.common-DLQ9rki9.js").then(s=>s.a),[])).default;n=new o(e,t),n.render()}return r(),{update(o){n&&n.updateOptions(o)},destroy(){n&&n.destroy()}}}function he(e,t,n){let{options:r}=t;return e.$$set=o=>{n(1,t=T(T({},t),j(o))),"options"in o&&n(0,r=o.options)},t=j(t),[r,t]}class me extends W{constructor(t){super(),V(this,t,he,ue,D,{options:0})}}function pe(e){let t,n,r,o,s,i;return r=new me({props:{options:e[0]}}),{c(){t=k("div"),t.innerHTML='<div><h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2" style="color: white; text-align: center;">Amount of Tweets</h5></div> <div class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center"></div>',n=B(),se(r.$$.fragment),o=B(),s=k("div"),s.innerHTML='<div class="flex justify-between items-center pt-5"></div>',$(t,"class","flex justify-between"),$(s,"class","grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between")},m(l,c){w(l,t,c),w(l,n,c),U(r,l,c),w(l,o,c),w(l,s,c),i=!0},p:m,i(l){i||(M(r.$$.fragment,l),i=!0)},o(l){oe(r.$$.fragment,l),i=!1},d(l){l&&(g(t),g(n),g(o),g(s)),H(r,l)}}}function ye(e){return[{chart:{height:500,width:1200,maxWidth:900,type:"area",fontFamily:"Inter, sans-serif",dropShadow:{enabled:!1},toolbar:{show:!1}},tooltip:{enabled:!1,type:"dark",x:{show:!0}},fill:{type:"gradient",gradient:{opacityFrom:.35,opacityTo:0,shade:"#1C64F2",gradientToColors:["#1C64F2"]}},dataLabels:{enabled:!1},stroke:{width:6},grid:{show:!1,strokeDashArray:4,padding:{left:12,right:0,top:0}},series:[{name:"2018",data:[21499,27226,22187,16725,21807,23927,17171,22677,20678,27596,22881,15746],color:"red"},{name:"2019",data:[30867,23393,16891,26371,27251,21338,32704,25957,27955,20930,28216,25075],color:"Green"},{name:"2020",data:[43543,27013,39805,39163,40936,34733,43270,30865,37571,42735,39162,41838],color:"white"},{name:"2021",data:[49862,42870,37301,45252,35230,41629,46280,55422,54059,61779,60043,71084],color:"blue"},{name:"2022",data:[14850,31992,86971,23892,19900,14360,17367,29684,23790,59592,41398,42448],color:"purple"}],xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],labels:{show:!0,style:{colors:"#ffffff"}},axisBorder:{show:!0},axisTicks:{show:!0,style:{colors:"#ffffff"}}},yaxis:{labels:{show:!0,style:{colors:"#ffffff"}}}}]}class ge extends W{constructor(t){super(),V(this,t,ye,pe,D,{})}}new ge({target:document.getElementById("app")});
