let t=document.createElement("style");t.innerHTML=".dialog[data-v-00626922]{display:grid;overflow:auto;position:fixed;z-index:9;width:100%;height:100%;padding:0 2em;box-sizing:border-box}.dialog__mask[data-v-00626922]{z-index:1;grid-row:1/2;grid-column:1/2;background:var(--color-x-11);opacity:.6}.dialog__content[data-v-00626922]{position:relative;grid-row:1/2;grid-column:1/2;align-self:center;z-index:2;margin:2em auto}.dialog__content>[class*='dialog:'][data-v-00626922]{opacity:0;animation-name:fade-in-00626922;animation-duration:var(--transition-duration);animation-delay:var(--transition-duration);animation-timing-function:var(--transition-timing-function);animation-fill-mode:forwards}@keyframes fade-in-00626922{from{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}.dialog\\:confirmation[data-v-456d7a90]{display:flex;flex-flow:column;overflow:hidden;width:100%;max-width:512px;background-color:var(--color-x-11);border-radius:var(--card-border-radius);border:var(--card-border-width) var(--card-border-style) var(--color-x-8)}.dialog\\:confirmation__content[data-v-456d7a90]{display:flex;flex-flow:column;justify-content:center;align-items:center;padding:1em 3em;min-height:230px;text-align:center}@media screen and (max-width:1024px){.dialog\\:confirmation[data-v-456d7a90]{height:100%}.dialog\\:confirmation__content[data-v-456d7a90]{flex:1}}.dialog\\:confirmation__content p[data-v-456d7a90]{margin-bottom:.5em;font-size:var(--font-size-xxl);font-weight:700}.dialog\\:confirmation__content span[data-v-456d7a90]{color:var(--color-x-6);font-size:var(--font-size);line-height:180%}.dialog\\:confirmation__content i[data-v-456d7a90]{margin-bottom:1rem;font-size:40px}header[data-v-456d7a90]{display:flex;padding:1.5em;align-items:center;background-color:var(--color-x-10);color:var(--color-x-6)}header span[data-v-456d7a90]{display:flex;align-items:center;cursor:pointer}header i[data-v-456d7a90]{margin-right:.5em}footer[data-v-456d7a90]{display:flex;border-top:var(--card-border-width) var(--card-border-style) var(--color-x-8)}footer button[data-v-456d7a90]{flex:1;padding:1.313em;background-color:transparent;border:none;color:var(--color-x-6);font-size:var(--font-size-xl);outline:0;cursor:pointer}footer button[data-v-456d7a90]:hover{background-color:var(--color-x-10)}footer button+button[data-v-456d7a90]{color:var(--color-error);border-left:var(--card-border-width) var(--card-border-style) var(--color-x-8)}footer button[style*=\"color:\"][data-v-456d7a90]{font-weight:700}h1[data-v-77a8f48e]{color:var(--color-a-1)}.button[data-v-77a8f48e]{margin-bottom:2em}.notification-demo[data-v-69b5e229]{display:flex;flex-wrap:wrap;margin-bottom:2em}.button[data-v-69b5e229]{margin-bottom:1em;margin-right:1em}h1[data-v-32d6d37b]{color:var(--color-a-1)}.actions[data-v-32d6d37b]{display:flex;margin-bottom:2em}.actions .button[data-v-32d6d37b]{margin-right:1em}",document.head.appendChild(t);import{m as o,y as a,c as e,b as n,i,T as r,w as d,p as s,e as l,o as c,t as u,j as g,d as m,a as f,f as v,z as b}from"./index.b5fe10d2.js";import{u as h}from"./useI18n.e88dbd6a.js";import{s as p}from"./index.2e2dddb7.js";var x={setup(){o((()=>{document.body.classList.add("scroll-lock")})),a((()=>{document.body.classList.remove("scroll-lock")}))}};const y=d("data-v-00626922");s("data-v-00626922");const w={class:"dialog"},_=n("div",{class:"dialog__mask"},null,-1),k={class:"dialog__content"};l();const B=y(((t,o,a,d,s,l)=>(c(),e(r,{to:"#portal\\:dialog"},[n("div",w,[_,n("div",k,[i(t.$slots,"default")])])]))));x.render=B,x.__scopeId="data-v-00626922";var C={props:["status","header","icon","title","text","buttonLeft","buttonRight"],setup(t,e){const n=t=>{"Escape"===t.key&&e.emit("cancel",t)};return o((()=>{window.addEventListener("keyup",n)})),a((()=>{window.removeEventListener("keyup",n)})),{}}};const L=d("data-v-456d7a90");s("data-v-456d7a90");const D={class:"dialog:confirmation"},z={key:0},R=n("i",{class:"icon-arrow-left"},null,-1),E={class:"dialog:confirmation__content"},I={key:1},M={key:2};l();const N=L(((t,o,a,i,r,d)=>(c(),e("div",D,[a.header?(c(),e("header",z,[n("span",{onClick:o[1]||(o[1]=o=>t.$emit("cancel"))},[R,n("span",null,u(a.header),1)])])):g("",!0),n("div",E,[a.icon?(c(),e("i",{key:0,class:["big",a.icon],color:"a"},null,2)):g("",!0),a.title?(c(),e("p",I,u(a.title),1)):g("",!0),a.text?(c(),e("span",M,u(a.text),1)):g("",!0)]),n("footer",null,[a.buttonLeft?(c(),e("button",{key:0,onClick:o[2]||(o[2]=o=>t.$emit("leftButtonClick"))},u(a.buttonLeft),1)):g("",!0),a.buttonRight?(c(),e("button",{key:1,onClick:o[3]||(o[3]=o=>t.$emit("rightButtonClick"))},u(a.buttonRight),1)):g("",!0)])]))));C.render=N,C.__scopeId="data-v-456d7a90";var j=m({data:()=>({showDialog:!1}),components:{Dialog:x,Button:p,Confirmation:C},setup:()=>h()});const A=d("data-v-77a8f48e");s("data-v-77a8f48e");const $={class:"confirmation-demo"};l();const T=A(((t,o,a,i,r,d)=>{const s=f("Button"),l=f("Confirmation"),m=f("Dialog");return c(),e("div",$,[n("h6",null,u(t.t("heading")),1),n(s,{model:"glassy",icon:"icon-thick-2px",reverse:!0,onClick:o[1]||(o[1]=o=>t.showDialog=!0)},{default:A((()=>[v(u(t.t("dialogButton")),1)])),_:1}),n(l,{icon:"icon-trash-bin-small",header:t.t("dialog.header"),title:t.t("dialog.title"),text:t.t("dialog.text"),buttonLeft:t.t("dialog.buttonLeft"),buttonRight:t.t("dialog.buttonRight")},null,8,["header","title","text","buttonLeft","buttonRight"]),t.showDialog?(c(),e(m,{key:0},{default:A((()=>[n(l,{onCancel:o[2]||(o[2]=o=>t.showDialog=!1),icon:"icon-trash-bin-small",header:t.t("dialog.header"),title:t.t("dialog.title"),text:t.t("dialog.text"),buttonLeft:t.t("dialog.buttonLeft"),onLeftButtonClick:o[3]||(o[3]=o=>t.showDialog=!1),buttonRight:t.t("dialog.buttonRight"),onRightButtonClick:o[4]||(o[4]=o=>t.showDialog=!1)},null,8,["header","title","text","buttonLeft","buttonRight"])])),_:1})):g("",!0)])}));var q=t=>{t.i18n={en:{heading:"Confirmation",dialogButton:"Ask for confirmation",dialog:{header:"Confirmation",title:"Are you sure you want to delete this post?",text:"Deleting this post will remove it from all the pages and widgets. This action can not be undone.",buttonLeft:"Cancel",buttonRight:"Delete"}},pt:{heading:"Confirmação",dialogButton:"Modal de confirmação",dialog:{header:"Confirmação",title:"Você tem certeza que quer Excluír este post?",text:"Excluír post, resultará na retirada deste conteúdo de todas as paginas e widgets. Esta ação não pode ser disfeita",buttonLeft:"Cancelar",buttonRight:"Excluír"}}}};q(j),j.render=T,j.__scopeId="data-v-77a8f48e";var S=m({components:{Button:p},setup(){const{t:t}=h(),{notify:o}=b();return{t:t,notify:o}}});const H=d("data-v-69b5e229");s("data-v-69b5e229");const V={class:"notification-demo"};l();const W=H(((t,o,a,i,r,d)=>{const s=f("Button");return c(),e("div",V,[n(s,{model:"glassy",icon:"icon-info",reverse:!0,onClick:o[1]||(o[1]=o=>t.notify({message:t.t("message")}))},{default:H((()=>[v(u(t.t("infoButton")),1)])),_:1}),n(s,{model:"glassy",icon:"icon-exclamation-mark",reverse:!0,onClick:o[2]||(o[2]=o=>t.notify({message:t.t("message"),status:"warning"}))},{default:H((()=>[v(u(t.t("warningButton")),1)])),_:1}),n(s,{model:"glassy",icon:"icon-close",reverse:!0,onClick:o[3]||(o[3]=o=>t.notify({message:t.t("message"),status:"error"}))},{default:H((()=>[v(u(t.t("errorButton")),1)])),_:1}),n(s,{model:"glassy",icon:"icon-thick-2px",reverse:!0,onClick:o[4]||(o[4]=o=>t.notify({message:t.t("message"),status:"success"}))},{default:H((()=>[v(u(t.t("successButton")),1)])),_:1})])}));var F=t=>{t.i18n={en:{message:"Notification message",infoButton:"Information",warningButton:"Warning",errorButton:"Error",successButton:"Success"},pt:{message:"Mensagem de notificação",infoButton:"Informação",warningButton:"Alerta",errorButton:"Erro",successButton:"Sucesso"}}};F(S),S.render=W,S.__scopeId="data-v-69b5e229";var G=m({components:{ConfirmationDemo:j,NotificationsDemo:S},setup:()=>h()});const J=d("data-v-32d6d37b");s("data-v-32d6d37b");const K={class:"dialogs"},O=n("hr",null,null,-1);l();const P=J(((t,o,a,i,r,d)=>{const s=f("NotificationsDemo"),l=f("ConfirmationDemo");return c(),e("section",K,[n("h1",null,u(t.t("heading")),1),O,n(s),n(l)])}));var Q=t=>{t.i18n={en:{heading:"Dialogs and notifications",notificationButton:"Notefy me!",notificationMessage:"Notification message"},pt:{heading:"Alertas e notificações",notificationButton:"Notificação",notificationMessage:"Mensagem de notificação"}}};Q(G),G.render=P,G.__scopeId="data-v-32d6d37b";export default G;
