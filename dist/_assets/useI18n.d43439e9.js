import{l as e,n as t,x as l}from"./index.07007763.js";const n=e(localStorage.getItem("wg3.locale")||"en");t(n,(e=>{localStorage.setItem("wg3.locale",e),document.documentElement.lang=n.value})),document.documentElement.lang=n.value;const o=(e={})=>{const t=l();t&&"i18n"in t.type&&(e=t.type.i18n);return{locale:n,t:(t="")=>{const l=e[n.value]||self;return t.split(".").reduce(((e,t)=>e?e[t]:""),l)||t}}};export{o as u};