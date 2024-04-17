import{_ as e}from"./uni-segmented-control.5f0241e9.js";import{_ as t,s as l,o as a,c as s,w as o,b as r,d as i,C as u,D as n,t as d,q as c,u as m,F as f,i as p,r as _,f as y,e as x,p as g,j as v,x as h}from"./index-9648761c.js";import{_ as b,a as k,b as F,c as D,d as w,e as T,f as V}from"./wx2.c7c69f5a.js";import{a as z,_ as C}from"./uni.b665e1f1.js";import{_ as S}from"./u-empty.e948b744.js";import"./uni-icons.c22b4d64.js";const I=t({components:{addForm:t({components:{},data:()=>({range:[{value:0,text:"年假"},{value:1,text:"事假"},{value:2,text:"病假"}],valiFormData:{typesOf:"",startTime:"",endTime:"",introduction:"",fileValue:""},rules:{typesOf:{rules:[{required:!0,errorMessage:"加班类型不能为空"}]},startTime:{rules:[{required:!0,errorMessage:"开始时间不能为空"}]},endTime:{rules:[{required:!0,errorMessage:"结束时间不能为空"}]}}}),computed:{chaTime(){return this.valiFormData.startTime&&this.valiFormData.endTime?((new Date(this.valiFormData.endTime)-new Date(this.valiFormData.startTime))/1e3/60/60).toFixed(1):null}},methods:{setFile(e){console.log(e),this.valiFormData.fileValue=e.tempFilePaths[0]},submit(e){this.$refs.valiForm.validate().then((e=>{console.log("success",e),l({title:"校验通过"})})).catch((e=>{console.log("err",e)}))}}},[["render",function(e,t,l,g,v,h){const z=p,C=_(y("uni-datetime-picker"),F),S=_(y("uni-forms-item"),D),I=_(y("uni-easyinput"),w),j=_(y("uni-file-picker"),T),q=_(y("uni-forms"),V),O=x;return a(),s(z,{style:{width:"100%"}},{default:o((()=>[r(z,{style:{"font-size":"0.8rem",color:"#a1a1a1","padding-bottom":"10px"}},{default:o((()=>[i(" 这是本月第4次加班 累计时长12.5小时 ")])),_:1}),r(z,{class:"cardStyle",style:{"padding-bottom":"1px"}},{default:o((()=>[r(z,{class:"titleStyle",style:{"font-size":"14px"}},{default:o((()=>[i(" 申请信息 ")])),_:1}),r(q,{ref:"valiForm",rules:v.rules,modelValue:v.valiFormData,"label-position":"top","err-show-type":"toast"},{default:o((()=>[r(S,{label:"开始时间",required:"",name:"startTime"},{default:o((()=>[r(C,{type:"datetime","return-type":"string",modelValue:v.valiFormData.startTime,"onUpdate:modelValue":t[0]||(t[0]=e=>v.valiFormData.startTime=e)},null,8,["modelValue"])])),_:1}),r(S,{label:"结束时间",required:"",name:"endTime"},{default:o((()=>[r(C,{type:"datetime","return-type":"string",modelValue:v.valiFormData.endTime,"onUpdate:modelValue":t[1]||(t[1]=e=>v.valiFormData.endTime=e)},null,8,["modelValue"])])),_:1}),u(r(z,{style:{"font-size":"0.8rem",color:"#a1a1a1","padding-bottom":"20px"}},{default:o((()=>[i(" 共计"+d(h.chaTime)+"小时 ",1)])),_:1},512),[[n,h.chaTime]]),r(S,{label:"加班原因",name:"introduction"},{default:o((()=>[r(I,{type:"textarea",modelValue:v.valiFormData.introduction,"onUpdate:modelValue":t[2]||(t[2]=e=>v.valiFormData.introduction=e),placeholder:"请输入加班原因"},null,8,["modelValue"])])),_:1}),r(S,{label:"图片",name:"fileValue"},{default:o((()=>[r(z,{style:{width:"66%"}},{default:o((()=>[r(j,{limit:"1","file-mediatype":"image","auto-upload":!1,onSelect:h.setFile,onDelete:t[3]||(t[3]=e=>v.valiFormData.fileValue="")},null,8,["onSelect"])])),_:1})])),_:1})])),_:1},8,["rules","modelValue"])])),_:1}),r(z,{class:"cardStyle"},{default:o((()=>[r(z,{class:"titleStyle",style:{"font-size":"14px"}},{default:o((()=>[i(" 流程 ")])),_:1}),r(z,{style:{padding:"10px 0",position:"relative"}},{default:o((()=>[r(z,{class:"flexcsb"},{default:o((()=>[r(z,{class:"round"}),r(z,null,{default:o((()=>[r(z,{style:{"font-size":"0.9rem"}},{default:o((()=>[i("审批人")])),_:1}),r(z,{style:{"font-size":"0.7rem","margin-top":"3px"}},{default:o((()=>[i("3人审批")])),_:1})])),_:1}),r(z,{class:"profilePicture"},{default:o((()=>[(a(),c(f,null,m(3,(t=>r(z,{key:e.item,style:{"margin-left":"5px"}},{default:o((()=>[r(O,{src:b,mode:""}),r(z,{style:{"font-size":"0.7rem",color:"#5b5b5b"}},{default:o((()=>[i(" 李娜"+d(t),1)])),_:2},1024)])),_:2},1024))),64))])),_:1}),r(z,{class:"icon"},{default:o((()=>[i("+")])),_:1})])),_:1}),r(z,{class:"flexcsb",style:{"margin-top":"40px"}},{default:o((()=>[r(z,{class:"round"}),r(z,null,{default:o((()=>[r(z,{style:{"font-size":"0.9rem"}},{default:o((()=>[i("抄送人")])),_:1}),r(z,{style:{"font-size":"0.7rem","margin-top":"3px"}},{default:o((()=>[i("3人抄送")])),_:1})])),_:1}),r(z,{class:"profilePicture"},{default:o((()=>[(a(),c(f,null,m(3,(t=>r(z,{key:e.item,style:{"margin-left":"6px"}},{default:o((()=>[r(O,{src:k,mode:""}),r(z,{style:{"font-size":"0.7rem",color:"#5b5b5b"}},{default:o((()=>[i(" 张杰"+d(t),1)])),_:2},1024)])),_:2},1024))),64))])),_:1}),r(z,{class:"icon"},{default:o((()=>[i("+")])),_:1})])),_:1}),r(z,{class:"line"})])),_:1})])),_:1}),r(z,{style:{width:"100%",height:"90px"}}),r(z,{class:"flexcc button"},{default:o((()=>[r(z,{onClick:h.submit},{default:o((()=>[i(" 提交 ")])),_:1},8,["onClick"])])),_:1})])),_:1})}],["__scopeId","data-v-0701cce5"]]),viewList:t({components:{DworkOvertime:t({props:{id:{type:Number,default:0}},data:()=>({}),methods:{page(e){g({url:`/pages/my/workOvertime/details?data=${e}`})}}},[["render",function(e,t,l,u,n,d){const c=v,m=p,f=x;return a(),s(m,{class:"cardStyle",onClick:t[0]||(t[0]=e=>d.page(l.id))},{default:o((()=>[r(m,{class:"titleStyle flexcsb"},{default:o((()=>[r(c,null,{default:o((()=>[i("李乘风提交的加班")])),_:1}),r(c,{style:{"font-size":"0.8rem",color:"#6a6a6a"}},{default:o((()=>[i("12:02:33")])),_:1})])),_:1}),r(m,{class:"list"},{default:o((()=>[r(m,null,{default:o((()=>[i("开始时间：2024-04-07 12:02:33")])),_:1}),r(m,null,{default:o((()=>[i("结束时间：2024-04-07 12:02:33")])),_:1}),r(m,null,{default:o((()=>[i("加班时长：2小时")])),_:1})])),_:1}),r(m,{class:"flexcsb state"},{default:o((()=>[r(m,{class:"flexc"},{default:o((()=>[r(f,{src:z,mode:""}),i(" 由我提交 ")])),_:1}),l.id%3==0?(a(),s(c,{key:0,class:"u-warning"},{default:o((()=>[i("处理中")])),_:1})):(a(),s(c,{key:1,class:"u-success"},{default:o((()=>[i("审批通过")])),_:1}))])),_:1})])),_:1})}],["__scopeId","data-v-f54962e4"]])},data:()=>({}),methods:{search(e){console.log(e.value)}}},[["render",function(e,t,l,i,u,n){const d=_(y("uni-search-bar"),C),x=p,g=h("DworkOvertime"),v=_(y("u-empty"),S);return a(),s(x,{class:"page"},{default:o((()=>[r(x,{style:{"background-color":"#fff"}},{default:o((()=>[r(d,{radius:"5",placeholder:"搜索",clearButton:"auto",cancelButton:"none",onConfirm:n.search},null,8,["onConfirm"])])),_:1}),r(x,{class:"pageStyle",style:{padding:"4px 10px",flex:"1","overflow-y":"scroll"}},{default:o((()=>[(a(),c(f,null,m(10,((e,t)=>r(x,{key:t},{default:o((()=>[r(g,{id:t},null,8,["id"])])),_:2},1024))),64)),(a(),s(x,{key:0},{default:o((()=>[r(v,{mode:"list",text:"暂无记录"})])),_:1}))])),_:1})])),_:1})}],["__scopeId","data-v-a823bcb1"]])},data:()=>({items:["发起提交","查看数据"],current:0}),methods:{onClickItem(e){this.current!==e.currentIndex&&(this.current=e.currentIndex)}}},[["render",function(t,l,i,u,n,d){const c=_(y("uni-segmented-control"),e),m=p,f=h("addForm"),x=h("viewList");return a(),s(m,{style:{display:"flex","flex-direction":"column",height:"100vh"}},{default:o((()=>[r(m,{style:{"background-color":"#fff","padding-bottom":"5px"}},{default:o((()=>[r(c,{current:n.current,values:n.items,"style-type":"text","active-color":"#0e92fd",onClickItem:d.onClickItem},null,8,["current","values","onClickItem"])])),_:1}),r(m,{style:{flex:"1","overflow-y":"scroll",width:"100%"}},{default:o((()=>[0===n.current?(a(),s(m,{key:0,class:"pageStyle"},{default:o((()=>[r(f)])),_:1})):(a(),s(x,{key:1,style:{flex:"1"}}))])),_:1})])),_:1})}]]);export{I as default};
