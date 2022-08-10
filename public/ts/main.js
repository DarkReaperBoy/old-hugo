(()=>{var f=class{constructor(t,i=1){this.items=[];if(window.PhotoSwipe==null||window.PhotoSwipeUI_Default==null){console.error("PhotoSwipe lib not loaded.");return}this.galleryUID=i,f.createGallery(t),this.loadItems(t),this.bindClick()}loadItems(t){this.items=[];let i=t.querySelectorAll("figure.gallery-image");for(let r of i){let n=r.querySelector("figcaption"),o=r.querySelector("img"),s={w:parseInt(o.getAttribute("width")),h:parseInt(o.getAttribute("height")),src:o.src,msrc:o.getAttribute("data-thumb")||o.src,el:r};n&&(s.title=n.innerHTML),this.items.push(s)}}static createGallery(t){let i=t.querySelectorAll("img.gallery-image");for(let o of Array.from(i)){let s=o.closest("p");if(!s||!t.contains(s))continue;s.textContent.trim()==""&&s.classList.add("no-text");let a=s.classList.contains("no-text");if(!a)continue;let m=o.parentElement.tagName=="A",d=o,c=document.createElement("figure");if(c.style.setProperty("flex-grow",o.getAttribute("data-flex-grow")||"1"),c.style.setProperty("flex-basis",o.getAttribute("data-flex-basis")||"0"),m&&(d=o.parentElement),d.parentElement.insertBefore(c,d),c.appendChild(d),o.hasAttribute("alt")){let l=document.createElement("figcaption");l.innerText=o.getAttribute("alt"),c.appendChild(l)}if(!m){c.className="gallery-image";let l=document.createElement("a");l.href=o.src,l.setAttribute("target","_blank"),o.parentNode.insertBefore(l,o),l.appendChild(o)}}let r=t.querySelectorAll("figure.gallery-image"),n=[];for(let o of r)n.length?o.previousElementSibling===n[n.length-1]?n.push(o):n.length&&(f.wrap(n),n=[o]):n=[o];n.length>0&&f.wrap(n)}static wrap(t){let i=document.createElement("div");i.className="gallery";let r=t[0].parentNode,n=t[0];r.insertBefore(i,n);for(let o of t)i.appendChild(o)}open(t){let i=document.querySelector(".pswp"),r=new window.PhotoSwipe(i,window.PhotoSwipeUI_Default,this.items,{index:t,galleryUID:this.galleryUID,getThumbBoundsFn:n=>{let o=this.items[n].el.getElementsByTagName("img")[0],s=window.pageYOffset||document.documentElement.scrollTop,a=o.getBoundingClientRect();return{x:a.left,y:a.top+s,w:a.width}}});r.init()}bindClick(){for(let[t,i]of this.items.entries()){let r=i.el.querySelector("a");r.addEventListener("click",n=>{n.preventDefault(),this.open(t)})}}},y=f,h={};if(localStorage.hasOwnProperty("StackColorsCache"))try{h=JSON.parse(localStorage.getItem("StackColorsCache"))}catch(e){h={}}async function b(e,t,i){if(!e)return await Vibrant.from(i).getPalette();if(!h.hasOwnProperty(e)||h[e].hash!==t){let r=await Vibrant.from(i).getPalette();h[e]={hash:t,Vibrant:{hex:r.Vibrant.hex,rgb:r.Vibrant.rgb,bodyTextColor:r.Vibrant.bodyTextColor},DarkMuted:{hex:r.DarkMuted.hex,rgb:r.DarkMuted.rgb,bodyTextColor:r.DarkMuted.bodyTextColor}},localStorage.setItem("StackColorsCache",JSON.stringify(h))}return h[e]}var D=(e,t=500)=>{e.classList.add("transiting"),e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",window.setTimeout(()=>{e.classList.remove("show"),e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},q=(e,t=500)=>{e.classList.add("transiting"),e.style.removeProperty("display"),e.classList.add("show");let i=e.offsetHeight;e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=i+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},B=(e,t=500)=>window.getComputedStyle(e).display==="none"?q(e,t):D(e,t);function S(){let e=document.getElementById("toggle-menu");e&&e.addEventListener("click",()=>{if(document.getElementById("main-menu").classList.contains("transiting"))return;document.body.classList.toggle("show-menu"),B(document.getElementById("main-menu"),300),e.classList.toggle("is-active")})}function N(e,t,i){var r=document.createElement(e);for(let n in t)if(n&&t.hasOwnProperty(n)){let o=t[n];n=="dangerouslySetInnerHTML"?r.innerHTML=o.__html:o===!0?r.setAttribute(n,n):o!==!1&&o!=null&&r.setAttribute(n,o.toString())}for(let n=2;n<arguments.length;n++){let o=arguments[n];o&&r.appendChild(o.nodeType==null?document.createTextNode(o.toString()):o)}return r}var v=N,w=class{constructor(t){this.localStorageKey="StackColorScheme";this.bindMatchMedia(),this.currentScheme=this.getSavedScheme(),this.dispatchEvent(document.documentElement.dataset.scheme),t&&this.bindClick(t),document.body.style.transition==""&&document.body.style.setProperty("transition","background-color .3s ease")}saveScheme(){localStorage.setItem(this.localStorageKey,this.currentScheme)}bindClick(t){t.addEventListener("click",i=>{this.isDark()?this.currentScheme="light":this.currentScheme="dark",this.setBodyClass(),this.currentScheme==this.systemPreferScheme&&(this.currentScheme="auto"),this.saveScheme()})}isDark(){return this.currentScheme=="dark"||this.currentScheme=="auto"&&this.systemPreferScheme=="dark"}dispatchEvent(t){let i=new CustomEvent("onColorSchemeChange",{detail:t});window.dispatchEvent(i)}setBodyClass(){this.isDark()?document.documentElement.dataset.scheme="dark":document.documentElement.dataset.scheme="light",this.dispatchEvent(document.documentElement.dataset.scheme)}getSavedScheme(){let t=localStorage.getItem(this.localStorageKey);return t=="light"||t=="dark"||t=="auto"?t:"auto"}bindMatchMedia(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?this.systemPreferScheme="dark":this.systemPreferScheme="light",this.setBodyClass()})}},E=w;function g(e){let t;return()=>{t&&window.cancelAnimationFrame(t),t=window.requestAnimationFrame(()=>e())}}var O=".article-content h1[id], .article-content h2[id], .article-content h3[id], .article-content h4[id], .article-content h5[id], .article-content h6[id]",T="#TableOfContents",L="#TableOfContents li",C="active-class";function V(e,t){let i=e.querySelector("a").offsetHeight,r=e.offsetTop-t.offsetHeight/2+i/2-t.offsetTop;r<0&&(r=0),t.scrollTo({top:r,behavior:"smooth"})}function U(e){let t={};return e.forEach(i=>{let r=i.querySelector("a"),n=r.getAttribute("href");n.startsWith("#")&&(t[n.slice(1)]=i)}),t}function k(e){let t=[];return e.forEach(i=>{t.push({id:i.id,offset:i.offsetTop})}),t.sort((i,r)=>i.offset-r.offset),t}function M(){let e=document.querySelectorAll(O);if(!e){console.warn("No header matched query",e);return}let t=document.querySelector(T);if(!t){console.warn("No toc matched query",T);return}let i=document.querySelectorAll(L);if(!i){console.warn("No navigation matched query",L);return}let r=k(e),n=!1;t.addEventListener("mouseenter",g(()=>n=!0)),t.addEventListener("mouseleave",g(()=>n=!1));let o,s=U(i);function a(){let d=document.documentElement.scrollTop||document.body.scrollTop,c;r.forEach(p=>{d>=p.offset-20&&(c=document.getElementById(p.id))});let l;c&&(l=s[c.id]),c&&!l?console.debug("No link found for section",c):l!==o&&(o&&o.classList.remove(C),l&&(l.classList.add(C),n||V(l,t)),o=l)}window.addEventListener("scroll",g(a));function m(){r=k(e),a()}window.addEventListener("resize",g(m))}var _="a[href]";function P(){document.querySelectorAll(_).forEach(e=>{let t=e.getAttribute("href");if(!t.startsWith("#"))return;e.addEventListener("click",i=>{i.preventDefault();let r=e.getAttribute("href").substring(1),n=document.getElementById(r.replace(":","\\:"));window.history.pushState({},"",e.getAttribute("href")),scrollTo({top:n.offsetTop,behavior:"smooth"})})})}var x={init:()=>{S();let e=document.querySelector(".article-content");e&&(new y(e),P(),M());let t=document.querySelector(".article-list--tile");if(t){let o=new IntersectionObserver(async(s,a)=>{s.forEach(m=>{if(!m.isIntersecting)return;a.unobserve(m.target);let d=m.target.querySelectorAll("article.has-image");d.forEach(async c=>{let l=c.querySelector("img"),p=l.src,H=l.getAttribute("data-key"),I=l.getAttribute("data-hash"),A=c.querySelector(".article-details"),u=await b(H,I,p);A.style.background=`
                        linear-gradient(0deg, 
                            rgba(${u.DarkMuted.rgb[0]}, ${u.DarkMuted.rgb[1]}, ${u.DarkMuted.rgb[2]}, 0.5) 0%, 
                            rgba(${u.Vibrant.rgb[0]}, ${u.Vibrant.rgb[1]}, ${u.Vibrant.rgb[2]}, 0.75) 100%)`})})});o.observe(t)}let i=document.querySelectorAll(".article-content div.highlight"),r="Copy",n="Copied!";i.forEach(o=>{let s=document.createElement("button");s.innerHTML=r,s.classList.add("copyCodeButton"),o.appendChild(s);let a=o.querySelector("code[data-lang]");if(!a)return;s.addEventListener("click",()=>{navigator.clipboard.writeText(a.textContent).then(()=>{s.textContent=n,setTimeout(()=>{s.textContent=r},1e3)}).catch(m=>{alert(m),console.log("Something went wrong",m)})})}),new E(document.getElementById("dark-mode-toggle"))}};window.addEventListener("load",()=>{setTimeout(function(){x.init()},0)});window.Stack=x;window.createElement=v;})();
/*!
*   Hugo Theme Stack
*
*   @author: Jimmy Cai
*   @website: https://jimmycai.com
*   @link: https://github.com/CaiJimmy/hugo-theme-stack
*/
