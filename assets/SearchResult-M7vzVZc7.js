import{u as G,f as X,h as ee,i as O,j as le,k as te,t as ae,l as se,m as q,p as b,q as oe,s as U,v as t,x as P,y as M,R as B,z as re,A as ie,B as ue,C as he,D as ne,E as ce,F as me,G as ve,H as de,I as pe,J as Ce,K as we,L as ye,M as A}from"./app-Ymz5RRTq.js";const ze=["/","/zh-CN/assets.html","/zh-CN/","/zh-TW/","/zh-CN/about/DE.html","/zh-CN/about/UP.html","/zh-CN/about/md.html","/zh-CN/about/sitehelp.html","/zh-CN/account/Google.html","/zh-CN/account/IOS.html","/zh-CN/account/apkxa.html","/zh-CN/account/","/zh-CN/markdown/","/zh-CN/mw/MW-Press.html","/zh-CN/mw/game-info.html","/zh-CN/mw/","/zh-CN/mwt/","/zh-CN/markdown/other/","/zh-CN/mw/collection/EGG.html","/zh-CN/mw/collection/LJ.html","/zh-CN/mw/collection/Market.html","/zh-CN/mw/collection/cn.html","/zh-CN/mw/collection/ct.html","/zh-CN/mw/collection/ctto.html","/zh-CN/mw/collection/events-less.html","/zh-CN/mw/collection/","/zh-CN/mw/collection/musk.html","/zh-CN/mw/collection/mw68.html","/zh-CN/mw/collection/mw70.html","/zh-CN/mw/collection/news.html","/zh-CN/mw/collection/pan.html","/zh-CN/mw/column/UAV.html","/zh-CN/mw/column/bomber.html","/zh-CN/mw/column/fighter.html","/zh-CN/mw/column/helicopter.html","/zh-CN/mw/column/","/zh-CN/mw/download/PC.html","/zh-CN/mw/download/ZG.html","/zh-CN/mw/download/app.html","/zh-CN/mw/download/","/zh-CN/mw/download/mod.html","/zh-CN/mw/download/sys.html","/zh-CN/mw/official/BP.html","/zh-CN/mw/official/BS.html","/zh-CN/mw/official/JD.html","/zh-CN/mw/official/LT.html","/zh-CN/mw/official/QT.html","/zh-CN/mw/official/SC.html","/zh-CN/mw/official/SD.html","/zh-CN/mw/official/WF.html","/zh-CN/mw/official/YJ.html","/zh-CN/mw/official/ZB.html","/zh-CN/mw/official/ZD.html","/zh-CN/mw/official/ZH.html","/zh-CN/mw/official/ZY.html","/zh-CN/mw/official/","/zh-CN/mw/skills/CYCT.html","/zh-CN/mw/skills/Game.html","/zh-CN/mw/skills/MOM.html","/zh-CN/mw/skills/STAN-Bilibili.html","/zh-CN/mw/skills/X51.html","/zh-CN/mw/skills/","/zh-CN/mw/skills/mw-rules.html","/zh-CN/markdown/other/emoji/nature.html","/zh-CN/markdown/other/emoji/object.html","/zh-CN/markdown/other/emoji/people.html","/zh-CN/markdown/other/emoji/place.html","/zh-CN/markdown/other/emoji/symbol.html","/404.html","/zh-CN/about/","/zh-CN/markdown/other/emoji/"],Ne="SEARCH_PRO_QUERY_HISTORY",v=G(Ne,[]),fe=()=>{const{queryHistoryCount:a}=A,s=a>0;return{enabled:s,queryHistory:v,addQueryHistory:o=>{s&&(v.value.length<a?v.value=Array.from(new Set([o,...v.value])):v.value=Array.from(new Set([o,...v.value.slice(0,a-1)])))},removeQueryHistory:o=>{v.value=[...v.value.slice(0,o),...v.value.slice(o+1)]}}},D=a=>ze[a.id]+("anchor"in a?`#${a.anchor}`:""),ke="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:x}=A,d=G(ke,[]),ge=()=>{const a=x>0;return{enabled:a,resultHistory:d,addResultHistory:s=>{if(a){const o={link:D(s),display:s.display};"header"in s&&(o.header=s.header),d.value.length<x?d.value=[o,...d.value]:d.value=[o,...d.value.slice(0,x-1)]}},removeResultHistory:s=>{d.value=[...d.value.slice(0,s),...d.value.slice(s+1)]}}},He=a=>{const s=ne(),o=O(),{search:k,terminate:c}=ce(),C=q(!1),w=me([]);return ve(()=>{const p=()=>{w.value=[],C.value=!1},g=ye(y=>{C.value=!0,y?k({type:"search",query:y,locale:o.value,options:s}).then(m=>{w.value=m,C.value=!1}).catch(m=>{console.error(m),p()}):p()},A.searchDelay);U([a,o],()=>g(a.value),{immediate:!0}),de(()=>{c()})}),{searching:C,results:w}};var Qe=X({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:s}){const o=ee(),k=O(),c=le(te),{enabled:C,addQueryHistory:w,queryHistory:p,removeQueryHistory:g}=fe(),{enabled:y,resultHistory:m,addResultHistory:T,removeResultHistory:F}=ge(),L=C||y,H=ae(a,"query"),{results:z,searching:I}=He(H),r=se({isQuery:!0,index:0}),h=q(0),n=q(0),j=b(()=>L&&(p.value.length>0||m.value.length>0)),R=b(()=>z.value.length>0),Q=b(()=>z.value[h.value]||null),Y=()=>{const{isQuery:e,index:l}=r;l===0?(r.isQuery=!e,r.index=e?m.value.length-1:p.value.length-1):r.index=l-1},_=()=>{const{isQuery:e,index:l}=r;l===(e?p.value.length-1:m.value.length-1)?(r.isQuery=!e,r.index=0):r.index=l+1},J=()=>{h.value=h.value>0?h.value-1:z.value.length-1,n.value=Q.value.contents.length-1},Z=()=>{h.value=h.value<z.value.length-1?h.value+1:0,n.value=0},W=()=>{n.value<Q.value.contents.length-1?n.value+=1:Z()},V=()=>{n.value>0?n.value-=1:J()},S=e=>e.map(l=>pe(l)?l:t(l[0],l[1])),K=e=>{if(e.type==="customField"){const l=Ce[e.index]||"$content",[i,f=""]=we(l)?l[k.value].split("$content"):l.split("$content");return e.display.map(u=>t("div",S([i,...u,f])))}return e.display.map(l=>t("div",S(l)))},N=()=>{h.value=0,n.value=0,s("updateQuery",""),s("close")};return oe("keydown",e=>{if(a.isFocusing){if(R.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")W();else if(e.key==="Enter"){const l=Q.value.contents[n.value];w(a.query),T(l),o.push(D(l)),N()}}else if(y){if(e.key==="ArrowUp")Y();else if(e.key==="ArrowDown")_();else if(e.key==="Enter"){const{index:l}=r;r.isQuery?(s("updateQuery",p.value[l]),e.preventDefault()):(o.push(m.value[l].link),N())}}}}),U([h,n],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:H.value?!R.value:!j.value}],id:"search-pro-results"},H.value===""?L?j.value?[C?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},c.value.queryHistory),p.value.map((e,l)=>t("div",{class:["search-pro-result-item",{active:r.isQuery&&r.index===l}],onClick:()=>{s("updateQuery",e)}},[t(P,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:M,onClick:i=>{i.preventDefault(),i.stopPropagation(),g(l)}})]))])):null,y?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},c.value.resultHistory),m.value.map((e,l)=>t(B,{to:e.link,class:["search-pro-result-item",{active:!r.isQuery&&r.index===l}],onClick:()=>{N()}},()=>[t(P,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(i=>S(i)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:M,onClick:i=>{i.preventDefault(),i.stopPropagation(),F(l)}})]))])):null]:c.value.emptyHistory:c.value.emptyResult:I.value?t(re,{hint:c.value.searching}):R.value?t("ul",{class:"search-pro-result-list"},z.value.map(({title:e,contents:l},i)=>{const f=h.value===i;return t("li",{class:["search-pro-result-list-item",{active:f}]},[t("div",{class:"search-pro-result-title"},e||c.value.defaultTitle),l.map((u,$)=>{const E=f&&n.value===$;return t(B,{to:D(u),class:["search-pro-result-item",{active:E,"aria-selected":E}],onClick:()=>{w(a.query),T(u),N()}},()=>[u.type==="text"?null:t(u.type==="title"?ie:u.type==="heading"?ue:he,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[u.type==="text"&&u.header?t("div",{class:"content-header"},u.header):null,t("div",K(u))])])})])})):c.value.emptyResult)}});export{Qe as default};
