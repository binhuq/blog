import k from"./D6y05Jl-.js";import w from"./DS3LLBUp.js";import g from"./7JumzL58.js";import{u as v}from"./C98m_kwJ.js";import{d as I,Y as S,I as A,M as n,b as a,c as r,e as o,g as i,F as B,Z as C,j as e,w as u,p as b,i as L,s as N,$ as V,X as E,l as F}from"./roPciwrC.js";import"./BcWussCh.js";const P=t=>(b("data-v-ce1343bc"),t=t(),L(),t),T={key:0,class:"articles-list"},Y={class:"featured"},$={class:"layout"},j={key:1,class:"tour"},q=P(()=>o("p",null,"Seems like there are no articles yet.",-1)),D=I({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,l;const _=t,{data:m}=([s,l]=S(async()=>v(_.path,async()=>await N(V(_.path)).sort({date:-1}).find(),"$kGSgEpBdy6")),s=await s,l(),s),c=A(()=>m.value||[]);return(G,M)=>{var d;const p=k,h=w,f=g;return(d=n(c))!=null&&d.length?(a(),r("div",T,[o("div",Y,[i(p,{article:n(c)[0],featured:!0},null,8,["article"])]),o("div",$,[(a(!0),r(B,null,C(n(c).slice(1),(y,x)=>(a(),E(p,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",j,[q,o("p",null,[e(" You can start by "),i(h,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:u(()=>[e("creating")]),_:1}),e(" one in the "),i(f,null,{default:u(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}}),O=F(D,[["__scopeId","data-v-ce1343bc"]]);export{O as default};
