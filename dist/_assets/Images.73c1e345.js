import{d as a,q as e,h as t,p as r,a as i,o,c as s,e as n,j as l,w as d,b as c,_ as m,f as g}from"./index.f53d4e49.js";import{u}from"./useI18n.f477f206.js";var p=a({props:{w:Number,h:Number,x:Number,y:Number,src:String,ratio:String,smart:Boolean},setup(a){const r=e(null),i=t(()=>{const e=new URL("https://wg3.widgrid.com.br/api/image");for(const t in a)a[t]&&e.searchParams.append(t,a[t]);return e});return{image:r,path:i,onload:()=>{r.value.style.maxWidth=r.value.naturalWidth+"px"}}}});const f=d("data-v-e1e6ca74");r("data-v-e1e6ca74");const v={ref:"figure"};i();const b=f((function(a,e){return o(),s("figure",v,[n("picture",null,[n("img",{"data-test":"image",src:a.path,ref:"image",onLoad:e[1]||(e[1]=e=>a.onload(e))},null,40,["src"])]),n("figcaption",null,[l(a.$slots,"default")])],512)}));let w=document.createElement("style");w.innerHTML="figure[data-v-e1e6ca74]{overflow:hidden;display:flex;flex-direction:column;border-radius:var(--img-border-radius);background-color:var(--color-x-9);align-items:center;justify-content:center}img[data-v-e1e6ca74]{display:block;object-fit:contain}figcaption[data-v-e1e6ca74]{padding:1em;align-self:flex-start}h1[data-v-b61b1714]{color:var(--color-a-1)}.images-demo[data-v-b61b1714] figure{margin:.5em}.images-demo[data-v-b61b1714] figure figcaption{align-self:center}.images-demo>div[data-v-b61b1714]{overflow:auto;white-space:nowrap;margin-bottom:2em}.images-demo>div figure[data-v-b61b1714]{display:inline-flex;flex-direction:column}",document.head.appendChild(w),p.render=b,p.__scopeId="data-v-e1e6ca74";var h=a({components:{Image:p},setup:()=>u()});const j=d("data-v-b61b1714");r("data-v-b61b1714");const _={class:"images-demo"},x=n("hr",null,null,-1),y={class:"reverse"};i();const I=j((function(a,e){const t=c("Image");return o(),s("section",_,[n("h1",null,m(a.t("title")),1),x,n("h6",null,m(a.t("smart-off")),1),n("div",null,[n(t,{src:"image1.jpg",w:182,ratio:"9:16"},{default:j(()=>[g(m(a.t("portrait"))+" 9:16",1)]),_:1}),n(t,{src:"image3.jpg",w:182,ratio:"3:4"},{default:j(()=>[g(m(a.t("portrait"))+" 3:4",1)]),_:1}),n(t,{src:"image5.jpg",w:182,ratio:"1:1"},{default:j(()=>[g(m(a.t("square"))+" 1:1",1)]),_:1}),n(t,{src:"image2.jpg",w:182,ratio:"4:3"},{default:j(()=>[g(m(a.t("landscape"))+" 4:3",1)]),_:1}),n(t,{src:"image4.jpg",w:182,ratio:"16:9"},{default:j(()=>[g(m(a.t("landscape"))+" 16:9",1)]),_:1})]),n("h6",null,m(a.t("smart-on")),1),n("div",y,[n(t,{src:"image1.jpg",w:182,ratio:"9:16",smart:!0},{default:j(()=>[g(m(a.t("portrait"))+" 9:16",1)]),_:1}),n(t,{src:"image3.jpg",w:182,ratio:"3:4",smart:!0},{default:j(()=>[g(m(a.t("portrait"))+" 3:4",1)]),_:1}),n(t,{src:"image5.jpg",w:182,ratio:"1:1",smart:!0},{default:j(()=>[g(m(a.t("square"))+" 1:1",1)]),_:1}),n(t,{src:"image2.jpg",w:182,ratio:"4:3",smart:!0},{default:j(()=>[g(m(a.t("landscape"))+" 4:3",1)]),_:1}),n(t,{src:"image4.jpg",w:182,ratio:"16:9",smart:!0},{default:j(()=>[g(m(a.t("landscape"))+" 16:9",1)]),_:1})])])}));var q=a=>{a.i18n={pt:{title:"Imagens",landscape:"Paisagem",portrait:"Retrato",square:"Quadro","smart-on":"Crop inteligente ligado","smart-off":"Crop inteligente desligado"},en:{title:"Images",landscape:"Landscape",portrait:"Portrait",square:"Square","smart-on":"Smart crop on","smart-off":"Smart crop off"}}};q(h),h.render=I,h.__scopeId="data-v-b61b1714";export default h;