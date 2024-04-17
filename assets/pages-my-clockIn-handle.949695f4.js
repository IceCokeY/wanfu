import{_ as e,s as t,o as l,c as a,w as s,b as o,d as r,q as u,u as i,F as n,i as d,r as c,f,t as m,e as p,p as _,j as y,x,m as g}from"./index-3de22cb0.js";import{_ as b,a as h,b as v,c as k,d as F,e as V,f as w}from"./wx2.f52e4d18.js";import{a as D,_ as S}from"./uni.97c36f81.js";import{_ as z}from"./u-empty.ee849252.js";import"./uni-icons.b392db0f.js";const I=e({components:{addForm:e({components:{},data:()=>({valiFormData:{startTime:"",introduction:"",fileValue:""},rules:{startTime:{rules:[{required:!0,errorMessage:"补卡时间不能为空"}]}}}),methods:{setFile(e){console.log(e),this.valiFormData.fileValue=e.tempFilePaths[0]},submit(e){this.$refs.valiForm.validate().then((e=>{console.log("success",e),t({title:"校验通过"}),this.$emit("success")})).catch((e=>{console.log("err",e)}))}}},[["render",function(e,t,_,y,x,g){const D=d,S=c(f("uni-datetime-picker"),v),z=c(f("uni-forms-item"),k),I=c(f("uni-easyinput"),F),j=c(f("uni-file-picker"),V),C=c(f("uni-forms"),w),T=p;return l(),a(D,{style:{width:"100%"}},{default:s((()=>[o(D,{style:{"font-size":"0.8rem",color:"#a1a1a1","padding-bottom":"10px"}},{default:s((()=>[r(" 2024-01-01 缺卡 ")])),_:1}),o(D,{class:"cardStyle",style:{"padding-bottom":"1px"}},{default:s((()=>[o(D,{class:"titleStyle",style:{"font-size":"14px"}},{default:s((()=>[r(" 申请信息 ")])),_:1}),o(C,{ref:"valiForm",rules:x.rules,modelValue:x.valiFormData,"label-position":"top","err-show-type":"toast"},{default:s((()=>[o(z,{label:"补卡时间",required:"",name:"startTime"},{default:s((()=>[o(S,{type:"datetime","return-type":"string",modelValue:x.valiFormData.startTime,"onUpdate:modelValue":t[0]||(t[0]=e=>x.valiFormData.startTime=e)},null,8,["modelValue"])])),_:1}),o(z,{label:"补卡理由",name:"introduction"},{default:s((()=>[o(I,{type:"textarea",modelValue:x.valiFormData.introduction,"onUpdate:modelValue":t[1]||(t[1]=e=>x.valiFormData.introduction=e),placeholder:"请输入补卡理由"},null,8,["modelValue"])])),_:1}),o(z,{label:"图片",name:"fileValue"},{default:s((()=>[o(D,{style:{width:"66%"}},{default:s((()=>[o(j,{limit:"1","file-mediatype":"image","auto-upload":!1,onSelect:g.setFile,onDelete:t[2]||(t[2]=e=>x.valiFormData.fileValue="")},null,8,["onSelect"])])),_:1})])),_:1})])),_:1},8,["rules","modelValue"])])),_:1}),o(D,{class:"cardStyle"},{default:s((()=>[o(D,{class:"titleStyle",style:{"font-size":"14px"}},{default:s((()=>[r(" 流程 ")])),_:1}),o(D,{style:{padding:"10px 0",position:"relative"}},{default:s((()=>[o(D,{class:"flexcsb"},{default:s((()=>[o(D,{class:"round"}),o(D,null,{default:s((()=>[o(D,{style:{"font-size":"0.9rem"}},{default:s((()=>[r("审批人")])),_:1}),o(D,{style:{"font-size":"0.7rem","margin-top":"3px"}},{default:s((()=>[r("3人审批")])),_:1})])),_:1}),o(D,{class:"profilePicture"},{default:s((()=>[(l(),u(n,null,i(3,(t=>o(D,{key:e.item,style:{"margin-left":"5px"}},{default:s((()=>[o(T,{src:b,mode:""}),o(D,{style:{"font-size":"0.7rem",color:"#5b5b5b"}},{default:s((()=>[r(" 李娜"+m(t),1)])),_:2},1024)])),_:2},1024))),64))])),_:1}),o(D,{class:"icon"},{default:s((()=>[r("+")])),_:1})])),_:1}),o(D,{class:"flexcsb",style:{"margin-top":"40px"}},{default:s((()=>[o(D,{class:"round"}),o(D,null,{default:s((()=>[o(D,{style:{"font-size":"0.9rem"}},{default:s((()=>[r("抄送人")])),_:1}),o(D,{style:{"font-size":"0.7rem","margin-top":"3px"}},{default:s((()=>[r("3人抄送")])),_:1})])),_:1}),o(D,{class:"profilePicture"},{default:s((()=>[(l(),u(n,null,i(3,(t=>o(D,{key:e.item,style:{"margin-left":"6px"}},{default:s((()=>[o(T,{src:h,mode:""}),o(D,{style:{"font-size":"0.7rem",color:"#5b5b5b"}},{default:s((()=>[r(" 张杰"+m(t),1)])),_:2},1024)])),_:2},1024))),64))])),_:1}),o(D,{class:"icon"},{default:s((()=>[r("+")])),_:1})])),_:1}),o(D,{class:"line"})])),_:1})])),_:1}),o(D,{style:{width:"100%",height:"90px"}}),o(D,{class:"flexcc button"},{default:s((()=>[o(D,{onClick:g.submit},{default:s((()=>[r(" 提交 ")])),_:1},8,["onClick"])])),_:1})])),_:1})}],["__scopeId","data-v-fb6e4b1d"]]),viewList:e({components:{DclockIn:e({props:{id:{type:Number,default:0}},data:()=>({}),methods:{page(e){_({url:`/pages/my/clockIn/details?data=${e}`})}}},[["render",function(e,t,u,i,n,c){const f=y,m=d,_=p;return l(),a(m,{class:"cardStyle",onClick:t[0]||(t[0]=e=>c.page(u.id))},{default:s((()=>[o(m,{class:"titleStyle flexcsb"},{default:s((()=>[o(f,null,{default:s((()=>[r("李乘风提交的补卡")])),_:1}),o(f,{style:{"font-size":"0.8rem",color:"#6a6a6a"}},{default:s((()=>[r("12:02:33")])),_:1})])),_:1}),o(m,{class:"list"},{default:s((()=>[o(m,null,{default:s((()=>[r("补卡时间：2024-04-07 12:02:33")])),_:1}),o(m,null,{default:s((()=>[r("补卡理由：忘记打卡了")])),_:1})])),_:1}),o(m,{class:"flexcsb state"},{default:s((()=>[o(m,{class:"flexc"},{default:s((()=>[o(_,{src:D,mode:""}),r(" 由我提交 ")])),_:1}),u.id%3==0?(l(),a(f,{key:0,class:"u-warning"},{default:s((()=>[r("处理中")])),_:1})):(l(),a(f,{key:1,class:"u-success"},{default:s((()=>[r("审批通过")])),_:1}))])),_:1})])),_:1})}],["__scopeId","data-v-598e8af3"]])},data:()=>({}),methods:{search(e){console.log(e.value)}}},[["render",function(e,t,r,m,p,_){const y=c(f("uni-search-bar"),S),g=d,b=x("DclockIn"),h=c(f("u-empty"),z);return l(),a(g,{class:"page"},{default:s((()=>[o(g,{style:{"background-color":"#fff"}},{default:s((()=>[o(y,{radius:"5",placeholder:"搜索",clearButton:"auto",cancelButton:"none",onConfirm:_.search},null,8,["onConfirm"])])),_:1}),o(g,{class:"pageStyle",style:{padding:"4px 10px",flex:"1","overflow-y":"scroll"}},{default:s((()=>[(l(),u(n,null,i(10,((e,t)=>o(g,{key:t},{default:s((()=>[o(b,{id:t},null,8,["id"])])),_:2},1024))),64)),(l(),a(g,{key:0},{default:s((()=>[o(h,{mode:"list",text:"暂无记录"})])),_:1}))])),_:1})])),_:1})}],["__scopeId","data-v-dcdab5d9"]])},data:()=>({items:["发起提交","查看数据"],current:null}),onLoad(e){this.current=1*e.key,console.log(e)},methods:{onClickItem(e){this.current!==e.currentIndex&&(this.current=e.currentIndex)}}},[["render",function(e,t,r,u,i,n){const c=x("addForm"),f=d,m=x("viewList");return l(),a(f,{style:{height:"100vh","overflow-y":"scroll"}},{default:s((()=>[0===i.current?(l(),a(f,{key:0,class:"pageStyle"},{default:s((()=>[o(c,{onSuccess:t[0]||(t[0]=e=>i.current=1)})])),_:1})):g("",!0),1===i.current?(l(),a(m,{key:1,style:{flex:"1"}})):g("",!0)])),_:1})}]]);export{I as default};
