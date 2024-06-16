import{$ as s}from"./common-DoGb0hfw.js";import{B as h}from"./better-scroll.esm-DluUa-FQ.js";function g(e){return new Promise((a,n)=>{let i=(e.type||"GET").toUpperCase();const t=e.data||{};let c=e.str||"form",o=Object.entries(t).map(f=>f.join("=")).join("&"),[r,u]=e.url.split("?");o=u?"&"+o:"?"+o;let l=new XMLHttpRequest;i==="GET"?l.open("GET",e.url+o):l.open("POST",e.url),l.onreadystatechange=function(){if(this.readyState===4)if(this.status===200){let f=JSON.parse(this.responseText);a(f)}else n(this.status)},i==="GET"?l.send():i==="POST"&&(c==="JSON"?(l.setRequestHeader("Content-Type","application/json;charset=utf-8"),l.send(JSON.stringify(e.data))):(l.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),l.send(o)))})}d("https://zyxcl.xyz/exam_api/zh");s("ul",s(".top")).addEventListener("click",e=>{let a=e.target;if(a.nodeName==="LI")switch(s(".active").classList.remove("active"),a.classList.add("active"),a.className){case"synt active":s("span",s(".sort")).className="iconfont icon-liebiao",d("https://zyxcl.xyz/exam_api/zh").then(r=>localStorage.setItem("data",JSON.stringify(r)));break;case"sale active":s("span",s(".sort")).className="iconfont icon-liebiao",d("https://zyxcl.xyz/exam_api/xl").then(r=>localStorage.setItem("data",JSON.stringify(r)));break;case"new active":s("span",s(".sort")).className="iconfont icon-liebiao",d("https://zyxcl.xyz/exam_api/sx").then(r=>localStorage.setItem("data",JSON.stringify(r)));break;case"sort active":const n=a.firstElementChild;n.className=n.className==="iconfont icon-liebiao"?"iconfont icon-paixu-shengxu":n.className==="iconfont icon-paixu-shengxu"?"iconfont icon-paixu-jiangxu":"iconfont icon-paixu-shengxu";const i=JSON.parse(localStorage.getItem("data"));let t=!1;n.className==="iconfont icon-paixu-shengxu"?(t=!0,m(i,t)):(t=!1,m(i,t));break;case"listType active":s("span",s(".sort")).className="iconfont icon-liebiao";const c=a.firstElementChild;c.className=c.className==="iconfont icon-pailiefangshi"?"iconfont icon-pailiefangshi1":"iconfont icon-pailiefangshi";const o=JSON.parse(localStorage.getItem("data"));p(o);break}});function m(e,a){const n=e.items;a?(n.sort((i,t)=>i.price-t.price),p(n)):(n.sort((i,t)=>t.price-i.price),p(n))}async function d(e){const a=await g({url:e});return p(a),a}function p(e){let a=!1;s(".listType").firstElementChild.className==="iconfont icon-pailiefangshi1"?a=!0:a=!1;const i=e.items?e.items:e;s(".con").innerHTML=a?"<ul>"+i.map((t,c)=>`
        <li class="item" data-index="${c}">
            <div class="left">
                <img src="${t.img}" alt="">
            </div>
            <div class="right">
                <p class="dd-h">${t.title}</p>
                <p class="dd-m">月销<b class="num">${t.sold}</b>笔</p>
                <p class="dd-p">￥<span class="price">${t.price}</span></p>
            </div>
        </li>
    `).join("")+"</ul>":'<div class="scroll">'+i.map((t,c)=>`
        <dl class="item" data-index="${c}">
            <dt><img src="${t.img}" alt=""></dt>
            <dd class="dd-h">${t.title}</dd>
            <dd class="dd-m">月销<b class="num">${t.sold}</b>笔</dd>
            <dd class="dd-p">￥<span class="price">${t.price}</span></dd>
        </dl>
    `).join("")+"</div>",new h(".con",{click:!0}),x()}function x(){s(".con").firstElementChild.addEventListener("click",e=>{e.target.className==="item"&&location.assign(`test/detail.html?index=${e.target.getAttribute("data-index")}`)})}s("header p").addEventListener("click",e=>{location.assign("test/search.html")});
//# sourceMappingURL=index-Cs3tjb8o.js.map
