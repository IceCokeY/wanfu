import{_ as t,o as e,c as n,w as s,q as l,F as r,u as o,n as c,l as a,b as d,d as u,t as y,j as i,i as m}from"./index-3de22cb0.js";const x=t({name:"UniSegmentedControl",emits:["clickItem"],props:{current:{type:Number,default:0},values:{type:Array,default:()=>[]},activeColor:{type:String,default:"#0e92fd"},styleType:{type:String,default:"button"}},data:()=>({currentIndex:0}),watch:{current(t){t!==this.currentIndex&&(this.currentIndex=t)}},created(){this.currentIndex=this.current},methods:{_onClick(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",{currentIndex:t}))}}},[["render",function(t,x,_,p,b,f){const g=i,I=m;return e(),n(I,{class:c([["text"===_.styleType?"segmented-control--text":"segmented-control--button"],"segmented-control"]),style:a({borderColor:"text"===_.styleType?"":_.activeColor})},{default:s((()=>[(e(!0),l(r,null,o(_.values,((t,l)=>(e(),n(I,{class:c([["text"===_.styleType?"":"segmented-control__item--button",l===b.currentIndex&&"button"===_.styleType?"segmented-control__item--button--active":"",0===l&&"button"===_.styleType?"segmented-control__item--button--first":"",l===_.values.length-1&&"button"===_.styleType?"segmented-control__item--button--last":""],"segmented-control__item"]),key:l,style:a({backgroundColor:l===b.currentIndex&&"button"===_.styleType?_.activeColor:"",borderColor:l!==b.currentIndex||"text"!==_.styleType&&"button"!==_.styleType?"#d9d9d9":_.activeColor}),onClick:t=>f._onClick(l)},{default:s((()=>[d(I,null,{default:s((()=>[d(g,{style:a({color:l===b.currentIndex?"text"===_.styleType?_.activeColor:"#fff":"text"===_.styleType?"#000":_.activeColor}),class:c(["segmented-control__text","text"===_.styleType&&l===b.currentIndex?"segmented-control__item--text":""])},{default:s((()=>[u(y(t.title||t),1)])),_:2},1032,["style","class"])])),_:2},1024)])),_:2},1032,["class","style","onClick"])))),128))])),_:1},8,["class","style"])}],["__scopeId","data-v-7c9e7c7d"]]);export{x as _};
