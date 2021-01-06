let t=document.createElement("style");t.innerHTML="[class*=-buttons-list][data-v-0f66054f]{display:flex;align-items:flex-end;flex-wrap:wrap}h1[data-v-4a7f6208]{color:var(--color-a-1)}.buttons-demo>div[data-v-4a7f6208]{margin-bottom:4em}.buttons-demo[data-v-4a7f6208] [class*='-buttons-list']{margin-bottom:2em}.buttons-demo[data-v-4a7f6208] pre{display:block;padding:1em;line-height:1.5em;margin-bottom:2em;border-radius:.25em;border:1px solid var(--color-a-1);background-color:var(--color-x-9);color:var(--color-x-3)}.buttons-demo[data-v-4a7f6208] .button{margin:.5em 1em .5em 0}",document.head.appendChild(t);import{d as s,a as e,c as o,b as n,w as a,o as i,f as l,t as r,p as d,e as u}from"./index.07007763.js";import{u as c}from"./useI18n.d43439e9.js";import{s as m}from"./index.8d6540de.js";var v=s({components:{Button:m},props:["size","title","skin"],setup:()=>c()});const f=a("data-v-0f66054f"),b=f(((t,s,a,d,u,c)=>{const m=e("Button");return i(),o("div",{class:`${t.size}-buttons-list`},[n(m,{size:t.size,skin:t.skin},{default:f((()=>[l(r(t.t("button")),1)])),_:1},8,["size","skin"]),n(m,{size:t.size,skin:t.skin,icon:"icon-form"},{default:f((()=>[l(r(t.t("icon-left")),1)])),_:1},8,["size","skin"]),n(m,{size:t.size,skin:t.skin,reverse:!0,icon:"icon-form"},{default:f((()=>[l(r(t.t("icon-right")),1)])),_:1},8,["size","skin"]),n(m,{size:t.size,skin:t.skin,class:"button--hover"},{default:f((()=>[l(r(t.t("hover")),1)])),_:1},8,["size","skin"]),n(m,{size:t.size,skin:t.skin,class:"button--active"},{default:f((()=>[l(r(t.t("active")),1)])),_:1},8,["size","skin"]),n(m,{size:t.size,skin:t.skin,disabled:!0},{default:f((()=>[l(r(t.t("disabled")),1)])),_:1},8,["size","skin"])],2)}));var k=t=>{t.i18n={pt:{button:"Botão","icon-left":"Icone a esquerda","icon-right":"Icone a direita",hover:"Foco",active:"Ativo",disabled:"Desativado"},en:{button:"Button","icon-left":"Icon Left","icon-right":"Icon Right",hover:"Hover",active:"Active",disabled:"Disabled"}}};k(v),v.render=b,v.__scopeId="data-v-0f66054f";var p=s({components:{ButtonsList:v}});const z={class:"ghosty-buttons"},g=n("h6",null,"Ghosty",-1);p.render=function(t,s,a,l,r,d){const u=e("ButtonsList");return i(),o("div",z,[g,n(u,{skin:"ghosty",size:"small"}),n(u,{skin:"ghosty",size:"medium"}),n(u,{skin:"ghosty",size:"large"})])};var h=s({components:{ButtonsList:v}});const B={class:"glassy-buttons"},y=n("h6",null,"Glassy",-1);h.render=function(t,s,a,l,r,d){const u=e("ButtonsList");return i(),o("div",B,[y,n(u,{skin:"glassy",size:"small"}),n(u,{skin:"glassy",size:"medium"}),n(u,{skin:"glassy",size:"large"})])};var x=s({components:{GlassyButtons:h,GhostyButtons:p},setup:()=>c()});const _=a("data-v-4a7f6208");d("data-v-4a7f6208");const G={class:"buttons-demo"},I=n("hr",null,null,-1),L=n("div",{class:"text"},null,-1);u();const D=_(((t,s,a,l,d,u)=>{const c=e("GlassyButtons"),m=e("GhostyButtons");return i(),o("section",G,[n("h1",null,r(t.t("title")),1),I,L,n(c),n(m)])}));var j=t=>{t.i18n={pt:{title:"Botões",default:"Botão Normal",disabled:"Desabilitado",small:"Botão Pequeno",large:"Botão Grande"},en:{title:"Buttons",default:"Normal Button",disabled:"Disabled",small:"Small Button",large:"Large Button"}}};j(x),x.render=D,x.__scopeId="data-v-4a7f6208";export default x;
