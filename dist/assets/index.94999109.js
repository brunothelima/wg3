var e=Object.assign;let a=document.createElement("style");a.innerHTML=".login-form[data-v-65ac79b2]{width:300px;padding:2em;border:var(--card-border-width) var(--card-border-style) var(--color-x-8);border-radius:var(--card-border-radius)}img[data-v-65ac79b2]{display:block;margin:0 auto 2em}p[data-v-65ac79b2]{margin-bottom:3em;font-size:var(--font-size-xl);text-align:center}footer[data-v-65ac79b2]{display:flex;justify-content:space-between;align-items:center}footer a[data-v-65ac79b2]{font-size:var(--font-size-xs)}.login[data-v-3c5c5f2c]{display:flex;flex-flow:column;align-items:center;justify-content:center;height:100vh}.settings[data-v-3c5c5f2c]{margin-bottom:2em}",document.head.appendChild(a);import{d as s,u as r,r as o,a as t,c as i,b as n,t as l,w as d,p as c,e as m,o as p,f as u}from"./index.773239ec.js";import{v as g,c as v,a as f,_ as b}from"./required.822259f2.js";import"./Select.eeaa1c74.js";import{_ as h}from"./Settings.ee7130a4.js";import{_ as w}from"./index.184315d0.js";const y=v({email:{type:"text",label:"Email",placeholder:"email.placeholder",validations:{email:e(e({},{message:"Invalid email",handler:e=>!g.isEmail(e)}),{message:"email.isEmail"}),required:e(e({},f),{message:"email.required"})}},password:{type:"password",label:"password.label",placeholder:"password.placeholder",validations:{required:e(e({},f),{message:"password.required"})}}});var q={en:{email:{placeholder:"Type your e-mail here",required:"This input is required",isEmail:"Invalid e-mail format"},password:{label:"Password",placeholder:"Type your password here",required:"This input is required"}},pt:{email:{placeholder:"Digite seu e-mail aqui",required:"Este input é obrigatório",isEmail:"Formato de e-mail inválido"},password:{label:"Senha",placeholder:"Digite sua senha aqui",required:"Este input é obrigatório"}}},x=s({components:{Form:b,Button:w},setup(){const{t:e}=r();return{t:e,login:()=>{o.push("/playground/colors")},messages:q,schema:y}}}),E=e=>{e.i18n={en:{intro:"You must be logged in to continue","password-loss":"Forgot my password",submit:"Submit"},pt:{intro:"Você precisa estar logado para continuar","password-loss":"Esqueci minha senha",submit:"Enviar"}}};const _=d("data-v-65ac79b2");c("data-v-65ac79b2");const j={class:"login-form"},S=n("img",{src:"/assets/logo-vtc.4fd02428.svg",alt:"Widgrid"},null,-1),F={href:""};m();const T=_(((e,a,s,r,o,d)=>{const c=t("Button"),m=t("Form");return p(),i("div",j,[S,n("p",null,l(e.t("intro")),1),n(m,{schema:e.schema,messages:e.messages,onSuccess:e.login},{default:_((()=>[n("footer",null,[n("a",F,l(e.t("password-loss")),1),n(c,{reverse:!0,icon:"icon-arrow-right",model:"glassy"},{default:_((()=>[u(l(e.t("submit")),1)])),_:1})])])),_:1},8,["schema","messages","onSuccess"])])}));E(x),x.render=T,x.__scopeId="data-v-65ac79b2";var z=s({name:"Login",components:{LoginForm:x,Settings:h}});const I=d("data-v-3c5c5f2c");c("data-v-3c5c5f2c");const L={class:"login"};m();const B=I(((e,a,s,r,o,l)=>{const d=t("Settings"),c=t("LoginForm");return p(),i("section",L,[n(d),n(c)])}));z.render=B,z.__scopeId="data-v-3c5c5f2c";export default z;
