let t=document.createElement("style");t.innerHTML=".dialog[data-v-173e02fb]{display:grid;overflow:auto;position:fixed;z-index:9;width:100%;height:100%;padding:0 2em;box-sizing:border-box}.dialog__mask[data-v-173e02fb]{z-index:1;grid-row:1/2;grid-column:1/2;background:var(--color-x-11);opacity:.6}.dialog__content[data-v-173e02fb]{position:relative;grid-row:1/2;grid-column:1/2;align-self:center;z-index:2;margin:2em auto}.dialog__content>[class*='dialog:'][data-v-173e02fb]{opacity:0;animation-name:fade-in-173e02fb;animation-duration:var(--transition-duration);animation-delay:var(--transition-duration);animation-timing-function:var(--transition-timing-function);animation-fill-mode:forwards}@keyframes fade-in-173e02fb{from{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}.dialog\\:confirmation[data-v-52cd38d6]{display:flex;flex-flow:column;overflow:hidden;width:100%;max-width:512px;background-color:var(--color-x-11);border-radius:var(--card-border-radius);border:var(--card-border-width) var(--card-border-style) var(--color-x-8)}@media screen and (max-width:1024px){.dialog\\:confirmation[data-v-52cd38d6]{height:100%}}.dialog\\:confirmation__content[data-v-52cd38d6]{display:flex;flex-flow:column;justify-content:center;align-items:center;padding:1em 3em;min-height:230px;text-align:center}@media screen and (max-width:1024px){.dialog\\:confirmation__content[data-v-52cd38d6]{flex:1}}.dialog\\:confirmation__content p[data-v-52cd38d6]{margin-bottom:.5em;font-size:var(--font-size-xxl);font-weight:700}.dialog\\:confirmation__content span[data-v-52cd38d6]{color:var(--color-x-6);font-size:var(--font-size);line-height:180%}.dialog\\:confirmation__content i[data-v-52cd38d6]{margin-bottom:1rem;font-size:40px}header[data-v-52cd38d6]{display:flex;padding:1.5em;align-items:center;background-color:var(--color-x-10);color:var(--color-x-6)}header span[data-v-52cd38d6]{display:flex;align-items:center;cursor:pointer}header i[data-v-52cd38d6]{margin-right:.5em}footer[data-v-52cd38d6]{display:flex;border-top:var(--card-border-width) var(--card-border-style) var(--color-x-8)}footer button[data-v-52cd38d6]{flex:1;padding:1.313em;background-color:transparent;border:none;color:var(--color-x-6);font-size:var(--font-size-xl);outline:0;cursor:pointer}footer button[data-v-52cd38d6]:hover{background-color:var(--color-x-10)}footer button+button[data-v-52cd38d6]{color:var(--color-error);border-left:var(--card-border-width) var(--card-border-style) var(--color-x-8)}footer button[style*=\"color:\"][data-v-52cd38d6]{font-weight:700}h1[data-v-8ef367c6]{color:var(--color-a-1)}.button[data-v-8ef367c6]{margin-bottom:2em}.notification-demo[data-v-59931d99]{display:flex;flex-wrap:wrap;margin-bottom:2em}.button[data-v-59931d99]{margin-bottom:1em;margin-right:1em}h1[data-v-49383049]{color:var(--color-a-1)}.actions[data-v-49383049]{display:flex;margin-bottom:2em}.actions .button[data-v-49383049]{margin-right:1em}",document.head.appendChild(t);import{s as o,x as a,c as e,b as n,j as i,T as r,w as d,p as s,e as c,o as l,t as f,l as g,d as u,u as m,a as v,f as h,C as b}from"./index.773239ec.js";import{_ as p}from"./index.184315d0.js";var x={setup(){o((()=>{document.body.classList.add("scroll-lock")})),a((()=>{document.body.classList.remove("scroll-lock")}))}};const y=d("data-v-173e02fb");s("data-v-173e02fb");const w={class:"dialog"},_=n("div",{class:"dialog__mask"},null,-1),k={class:"dialog__content"};c();const B=y(((t,o,a,d,s,c)=>(l(),e(r,{to:"#portal\\:dialog"},[n("div",w,[_,n("div",k,[i(t.$slots,"default")])])]))));x.render=B,x.__scopeId="data-v-173e02fb";var C={props:{header:String,icon:String,title:String,text:String,buttonLeft:String,buttonRight:String},setup(t,e){const n=t=>{"Escape"===t.key&&e.emit("cancel",t)};return o((()=>{window.addEventListener("keyup",n)})),a((()=>{window.removeEventListener("keyup",n)})),{}}};const L=d("data-v-52cd38d6");s("data-v-52cd38d6");const D={class:"dialog:confirmation"},z={key:0},R=n("i",{class:"icon-arrow-left"},null,-1),E={class:"dialog:confirmation__content"},S={key:1},I={key:2};c();const M=L(((t,o,a,i,r,d)=>(l(),e("div",D,[a.header?(l(),e("header",z,[n("span",{onClick:o[1]||(o[1]=o=>t.$emit("cancel"))},[R,n("span",null,f(a.header),1)])])):g("v-if",!0),n("div",E,[a.icon?(l(),e("i",{key:0,class:["big",a.icon],color:"a"},null,2)):g("v-if",!0),a.title?(l(),e("p",S,f(a.title),1)):g("v-if",!0),a.text?(l(),e("span",I,f(a.text),1)):g("v-if",!0)]),n("footer",null,[a.buttonLeft?(l(),e("button",{key:0,onClick:o[2]||(o[2]=o=>t.$emit("leftButtonClick"))},f(a.buttonLeft),1)):g("v-if",!0),a.buttonRight?(l(),e("button",{key:1,onClick:o[3]||(o[3]=o=>t.$emit("rightButtonClick"))},f(a.buttonRight),1)):g("v-if",!0)])]))));C.render=M,C.__scopeId="data-v-52cd38d6";var N=u({data:()=>({showDialog:!1}),components:{Dialog:x,Button:p,Confirmation:C},setup:()=>m()}),j=t=>{t.i18n={en:{heading:"Confirmation",dialogButton:"Ask for confirmation",dialog:{header:"Confirmation",title:"Are you sure you want to delete this post?",text:"Deleting this post will remove it from all the pages and widgets. This action can not be undone.",buttonLeft:"Cancel",buttonRight:"Delete"}},pt:{heading:"Confirmação",dialogButton:"Modal de confirmação",dialog:{header:"Confirmação",title:"Você tem certeza que quer Excluír este post?",text:"Excluír post, resultará na retirada deste conteúdo de todas as paginas e widgets. Esta ação não pode ser disfeita",buttonLeft:"Cancelar",buttonRight:"Excluír"}}}};const A=d("data-v-8ef367c6");s("data-v-8ef367c6");const $={class:"confirmation-demo"};c();const T=A(((t,o,a,i,r,d)=>{const s=v("Button"),c=v("Confirmation"),u=v("Dialog");return l(),e("div",$,[n("h6",null,f(t.t("heading")),1),n(s,{model:"glassy",icon:"icon-thick-2px",reverse:!0,onClick:o[1]||(o[1]=o=>t.showDialog=!0)},{default:A((()=>[h(f(t.t("dialogButton")),1)])),_:1}),n(c,{icon:"icon-trash-bin-small",header:t.t("dialog.header"),title:t.t("dialog.title"),text:t.t("dialog.text"),buttonLeft:t.t("dialog.buttonLeft"),buttonRight:t.t("dialog.buttonRight")},null,8,["header","title","text","buttonLeft","buttonRight"]),t.showDialog?(l(),e(u,{key:0},{default:A((()=>[n(c,{onCancel:o[2]||(o[2]=o=>t.showDialog=!1),icon:"icon-trash-bin-small",header:t.t("dialog.header"),title:t.t("dialog.title"),text:t.t("dialog.text"),buttonLeft:t.t("dialog.buttonLeft"),onLeftButtonClick:o[3]||(o[3]=o=>t.showDialog=!1),buttonRight:t.t("dialog.buttonRight"),onRightButtonClick:o[4]||(o[4]=o=>t.showDialog=!1)},null,8,["header","title","text","buttonLeft","buttonRight"])])),_:1})):g("v-if",!0)])}));j(N),N.render=T,N.__scopeId="data-v-8ef367c6";var q=u({components:{Button:p},setup(){const{t:t}=m(),{notify:o}=b();return{t:t,notify:o}}}),H=t=>{t.i18n={en:{message:"Notification message",infoButton:"Information",warningButton:"Warning",errorButton:"Error",successButton:"Success"},pt:{message:"Mensagem de notificação",infoButton:"Informação",warningButton:"Alerta",errorButton:"Erro",successButton:"Sucesso"}}};const V=d("data-v-59931d99");s("data-v-59931d99");const W={class:"notification-demo"};c();const F=V(((t,o,a,i,r,d)=>{const s=v("Button");return l(),e("div",W,[n(s,{model:"glassy",icon:"icon-info",reverse:!0,onClick:o[1]||(o[1]=o=>t.notify({message:t.t("message")}))},{default:V((()=>[h(f(t.t("infoButton")),1)])),_:1}),n(s,{model:"glassy",icon:"icon-exclamation-mark",reverse:!0,onClick:o[2]||(o[2]=o=>t.notify({message:t.t("message"),status:"warning"}))},{default:V((()=>[h(f(t.t("warningButton")),1)])),_:1}),n(s,{model:"glassy",icon:"icon-close",reverse:!0,onClick:o[3]||(o[3]=o=>t.notify({message:t.t("message"),status:"error"}))},{default:V((()=>[h(f(t.t("errorButton")),1)])),_:1}),n(s,{model:"glassy",icon:"icon-thick-2px",reverse:!0,onClick:o[4]||(o[4]=o=>t.notify({message:t.t("message"),status:"success"}))},{default:V((()=>[h(f(t.t("successButton")),1)])),_:1})])}));H(q),q.render=F,q.__scopeId="data-v-59931d99";var G=u({components:{ConfirmationDemo:N,NotificationsDemo:q},setup:()=>m()}),J=t=>{t.i18n={en:{heading:"Dialogs and notifications",notificationButton:"Notefy me!",notificationMessage:"Notification message"},pt:{heading:"Alertas e notificações",notificationButton:"Notificação",notificationMessage:"Mensagem de notificação"}}};const K=d("data-v-49383049");s("data-v-49383049");const O={class:"dialogs"},P=n("hr",null,null,-1);c();const Q=K(((t,o,a,i,r,d)=>{const s=v("NotificationsDemo"),c=v("ConfirmationDemo");return l(),e("section",O,[n("h1",null,f(t.t("heading")),1),P,n(s),n(c)])}));J(G),G.render=Q,G.__scopeId="data-v-49383049";export default G;
