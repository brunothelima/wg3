import{d as e,h as a,p as t,a as l,o as s,c as d,j as n,e as o,F as r,k as c,_ as i,w as u}from"./index.f53d4e49.js";var p=e({props:{name:String,value:[String,Number],errors:Array,options:{type:Array,default:()=>[]},disabled:Boolean,readonly:Boolean,placeholder:String,t:{type:Function,default:e=>e}},setup:e=>({selected:a(()=>{if(!e.value)return null;return e.options.find(a=>""+a.value==""+e.value).label})})});const v=u("data-v-7297042a");t("data-v-7297042a");const y={class:"input:select__wrapper"},f={key:0,"data-test":"selected",class:"input:select__selected"},_={key:1,"data-test":"placeholder",class:"input:select__placeholder"},b=o("i",{class:"icon-caret-down",color:"a"},null,-1);l();const m=v((function(e,a){return s(),d("div",{"data-test":"input",class:["input:select",{"input:select--invalid":e.errors&&e.errors.length}]},[n(e.$slots,"before"),o("div",y,[o("select",{"data-test":"select",id:e.name+"Id",name:e.name,value:e.value,disabled:e.disabled,readonly:e.readonly},[(s(!0),d(r,null,c(e.options,a=>(s(),d("option",{key:a,value:a.value,selected:a.value===e.value},i(e.t(a.label)),9,["value","selected"]))),128)),n(e.$slots,"default")],8,["id","name","value","disabled","readonly"]),e.selected?(s(),d("div",f,i(e.t(e.selected)),1)):(s(),d("div",_,i(e.t(e.placeholder||"Select an option")),1)),b]),n(e.$slots,"after")],2)}));p.render=m,p.__scopeId="data-v-7297042a";export{p as s};
