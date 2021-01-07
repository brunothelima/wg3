let e=document.createElement("style");e.innerHTML="h1[data-v-03144baf]{color:var(--color-a-1)}.inputs .form[data-v-03144baf] .form__grid{display:grid;grid-template-columns:1fr 1fr;grid-gap:1em}",document.head.appendChild(e);import{d as l,u as a,a as t,c as o,b as i,t as r,w as d,p as s,e as n,o as p,f as c}from"./index.773239ec.js";import{c as u,a as h,_ as b}from"./required.822259f2.js";import"./Select.eeaa1c74.js";import{_ as m}from"./index.184315d0.js";const g=u({inputText:{type:"text",label:"text.label",placeholder:"text.placeholder",validations:{required:h}},inputPassword:{type:"password",label:"password.label",placeholder:"password.placeholder",validations:{required:h}},inputSelect:{type:"select",label:"select.label",placeholder:"select.placeholder",options:[{value:1,label:"select.options.first"},{value:2,label:"select.options.second"},{value:3,label:"select.options.third"}],validations:{required:h}},inputMoney:{type:"money",label:"money.label",placeholder:"money.placeholder",currency:"R$",validations:{required:h}},inputFile:{type:"file",label:"file.label",placeholder:"file.placeholder",validations:{required:h}},inputDate:{type:"date",label:"date.label",placeholder:"date.placeholder",mode:"single",help:"date.help",validations:{required:h}},inputCheckbox:{type:"checkbox",label:"checkbox.label",title:"checkbox.title",validations:{required:h}},inputToggle:{type:"toggle",label:"toggle.label",title:"toggle.title",validations:{required:h}},inputRadio:{type:"radio",label:"radio.label",options:[{value:1,label:"radio.options.first"},{value:2,label:"radio.options.second"}],validations:{required:h}},inputEditor:{type:"editor",label:"editor.label",placeholder:"editor.placeholder",validations:{required:h}}});var f={en:{text:{label:"Input text",placeholder:"Type here"},password:{label:"Input passowrd",placeholder:"Type your password here"},select:{label:"Input select",placeholder:"Select an option",options:{first:"First option",second:"Second option",third:"Third option"}},money:{label:"Input Money",placeholder:"Type any amount"},file:{label:"Input File",placeholder:"Select a file"},date:{label:"Input Date",placeholder:"Click to open the calendar",help:"This is an aditional iformation message"},checkbox:{label:"Input Checkbox",title:"Click here check/uncheck"},toggle:{label:"Input Toggle",title:"Click here check/uncheck"},radio:{label:"Input Radio",options:{first:"First option",second:"Second option"}},editor:{label:"Text Editor",placeholder:"Click here and start typing"}},pt:{text:{label:"Campo de texto",placeholder:"Digite aqui"},password:{label:"Campo de senha",placeholder:"Digite sua senha aqui"},select:{label:"Campo de seleção",placeholder:"Selecione uma das opções",options:{first:"Primeira opção",second:"Segunda opção",third:"Terceira opção"}},money:{label:"Campo de moeda",placeholder:"Digite aqui uma quantia"},file:{label:"Input de arquivo",placeholder:"Selecione um arquivo"},date:{label:"Input de data",placeholder:"Clique para abrir o calendário",help:"Esta é uma mensagem de informações adicionais"},checkbox:{label:"Input de checkbox",title:"Clique aqui para marcar/desmarcar"},toggle:{label:"Input de toggle",title:"Clique aqui para marcar/desmarcar"},radio:{label:"Campo de opções",options:{first:"Primeira opção",second:"Segunda opção"}},editor:{label:"Editor de texto",placeholder:"Clique aqui e começe a digitar"}}},y=l({components:{Form:b,Button:m},setup(){const{t:e}=a();return{t:e,schema:g,messages:f}}}),v=e=>{e.i18n={en:{title:"Form inputs",submit:"Submit"},pt:{title:"Formulário",submit:"Enviar"}}};const q=d("data-v-03144baf");s("data-v-03144baf");const x={class:"inputs"},k=i("hr",null,null,-1),C=i("br",null,null,-1);n();const I=q(((e,l,a,d,s,n)=>{const u=t("Button"),h=t("Form");return p(),o("section",x,[i("h1",null,r(e.t("title")),1),k,i(h,{schema:e.schema,messages:e.messages},{default:q((()=>[i("footer",null,[C,i(u,{reverse:!0,icon:"icon-arrow-right",model:"glassy"},{default:q((()=>[c(r(e.t("submit")),1)])),_:1})])])),_:1},8,["schema","messages"])])}));v(y),y.render=I,y.__scopeId="data-v-03144baf";export default y;
