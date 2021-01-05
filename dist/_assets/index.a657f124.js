let a=document.createElement("style");a.innerHTML=".color-palette[data-v-c2ae8ddc]{display:flex;flex-direction:column;list-style:none;margin-bottom:2.857rem}.color-palette li[data-v-c2ae8ddc]{display:flex;align-items:center;justify-content:center;height:40px;color:var(--color-x-11)}.grayish-colors[data-v-a4ed7cb6] li:nth-child(1n+5),.primary-colors[data-v-ac53e94a] li:nth-child(1n+4),.secondary-colors[data-v-0f075c98] li:nth-child(1n+4){color:var(--color-x-1)}.grayish-colors[data-v-a4ed7cb6] li:nth-child(1n+5):last-child{border:1px solid var(--color-x-1)}.system-colors ul[data-v-7867b75e]{display:flex}@media screen and (max-width:1024px){.system-colors ul[data-v-7867b75e]{flex-direction:column}}.system-colors ul li[data-v-7867b75e]{display:flex;align-items:center;justify-content:center;flex:1;height:40px;padding:.25em 1em;color:var(--color-x-11)}@media screen and (max-width:1024px){.system-colors ul li[data-v-7867b75e]{flex:none}}.system-colors ul li.color-info[data-v-7867b75e]{background-color:var(--color-info)}.system-colors ul li.color-error[data-v-7867b75e]{background-color:var(--color-error)}.system-colors ul li.color-warning[data-v-7867b75e]{background-color:var(--color-warning)}.system-colors ul li.color-success[data-v-7867b75e]{background-color:var(--color-success)}.gradient>div[data-v-2c6acdd2]{display:flex;align-items:center;justify-content:center;height:40px;padding:.25em 1em;background-image:linear-gradient(to right,var(--color-a-3),var(--color-b-3));color:var(--color-x-11)}.colors-demo>h1[data-v-72f867c6]{color:var(--color-a-1)}.css-vars[data-v-72f867c6]{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:1.143em;margin-bottom:1.143em}@media screen and (max-width:640px){.css-vars[data-v-72f867c6]{grid-template-columns:1fr}}.system-colors[data-v-72f867c6]{margin-bottom:4.571em}",document.head.appendChild(a);import{d as e,c as o,F as t,k as r,w as c,p as s,e as l,o as n,b as d,t as i,a as v}from"./index.b5fe10d2.js";import{u as m}from"./useI18n.e88dbd6a.js";var u=e({props:["cssVar","range"]});const p=c("data-v-c2ae8ddc");s("data-v-c2ae8ddc");const y={class:"color-palette"};l();const g=p(((a,e,c,s,l,v)=>(n(),o("ul",y,[(n(!0),o(t,null,r(Array(a.range),((e,t)=>(n(),o("li",{key:e,style:`background-color: var(${a.cssVar}-${t+1})`},[d("code",null,i(`${a.cssVar}-${t+1}`),1)],4)))),128))]))));u.render=g,u.__scopeId="data-v-c2ae8ddc";var h=e({components:{Palette:u},setup:()=>m()});const f=c("data-v-ac53e94a");s("data-v-ac53e94a");const b={class:"primary-colors"};l();const x=f(((a,e,t,r,c,s)=>{const l=v("Palette");return n(),o("div",b,[d("h6",null,i(a.t("title")),1),d(l,{class:"primary",range:7,cssVar:"--color-a"})])}));var _=a=>{a.i18n={pt:{title:"Cores Primárias"},en:{title:"Primary colors"}}};_(h),h.render=x,h.__scopeId="data-v-ac53e94a";var P=e({components:{Palette:u},setup:()=>m()});const k=c("data-v-0f075c98");s("data-v-0f075c98");const I={class:"secondary-colors"};l();const S=k(((a,e,t,r,c,s)=>{const l=v("Palette");return n(),o("div",I,[d("h6",null,i(a.t("title")),1),d(l,{class:"secondary",range:7,cssVar:"--color-b"})])}));var w=a=>{a.i18n={pt:{title:"Cores Secundárias"},en:{title:"Secondary colors"}}};w(P),P.render=S,P.__scopeId="data-v-0f075c98";var $=e({components:{Palette:u},setup:()=>m()});const V=c("data-v-a4ed7cb6");s("data-v-a4ed7cb6");const j={class:"grayish-colors"};l();const C=V(((a,e,t,r,c,s)=>{const l=v("Palette");return n(),o("div",j,[d("h6",null,i(a.t("title")),1),d(l,{class:"grayish",range:11,cssVar:"--color-x"})])}));var G=a=>{a.i18n={pt:{title:"Tons de cinza"},en:{title:"Shades of gray"}}};G($),$.render=C,$.__scopeId="data-v-a4ed7cb6";var T=e({setup:()=>m()});const z=c("data-v-7867b75e");s("data-v-7867b75e");const A={class:"system-colors"};l();const E=z(((a,e,c,s,l,v)=>(n(),o("div",A,[d("h6",null,i(a.t("title")),1),d("ul",null,[(n(),o(t,null,r(["info","success","warning","error"],(a=>d("li",{key:`color-${a}`,class:`color-${a}`},[d("code",null,i(`--color-${a}`),1)],2))),64))])]))));var F=a=>{a.i18n={pt:{title:"Cores do sistema"},en:{title:"System colors"}}};F(T),T.render=E,T.__scopeId="data-v-7867b75e";var H=e({});const L=c("data-v-2c6acdd2");s("data-v-2c6acdd2");const M={class:"gradient"},q=d("h6",null,"Gradient",-1),B=d("div",null,[d("code",null,"linear-gradient(to right, var(--color-a-3), var(--color-b-3));")],-1);l();const D=L(((a,e,t,r,c,s)=>(n(),o("div",M,[q,B]))));H.render=D,H.__scopeId="data-v-2c6acdd2";var J=e({components:{Primary:h,Secondary:P,Grayish:$,System:T,Gradient:H},setup:()=>m()});const K=c("data-v-72f867c6");s("data-v-72f867c6");const N={class:"colors-demo"},O=d("hr",null,null,-1),Q={class:"css-vars"};l();const R=K(((a,e,t,r,c,s)=>{const l=v("Primary"),m=v("Secondary"),u=v("Grayish"),p=v("System"),y=v("Gradient");return n(),o("section",N,[d("h1",null,i(a.t("title")),1),O,d("div",Q,[d(l),d(m),d(u)]),d(p),d(y)])}));var U=a=>{a.i18n={pt:{title:"Palheta de cores"},en:{title:"Color palette"}}};U(J),J.render=R,J.__scopeId="data-v-72f867c6";export default J;