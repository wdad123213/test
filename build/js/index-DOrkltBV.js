import{$ as s}from"./common-DoGb0hfw.js";import{B as g}from"./better-scroll.esm-DluUa-FQ.js";function h(e){return new Promise((a,i)=>{let n=(e.type||"GET").toUpperCase();const t=e.data||{};let c=e.str||"form",o=Object.entries(t).map(f=>f.join("=")).join("&"),[r,u]=e.url.split("?");o=u?"&"+o:"?"+o;let l=new XMLHttpRequest;n==="GET"?l.open("GET",e.url+o):l.open("POST",e.url),l.onreadystatechange=function(){if(this.readyState===4)if(this.status===200){let f=JSON.parse(this.responseText);a(f)}else i(this.status)},n==="GET"?l.send():n==="POST"&&(c==="JSON"?(l.setRequestHeader("Content-Type","application/json;charset=utf-8"),l.send(JSON.stringify(e.data))):(l.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),l.send(o)))})}d("https://zyxcl.xyz/exam_api/zh").then(e=>localStorage.setItem("data",JSON.stringify(e)));s("ul",s(".top")).addEventListener("click",e=>{let a=e.target;if(a.nodeName==="LI")switch(s(".active").classList.remove("active"),a.classList.add("active"),a.className){case"synt active":s("span",s(".sort")).className="iconfont icon-liebiao",d("https://zyxcl.xyz/exam_api/zh").then(r=>localStorage.setItem("data",JSON.stringify(r)));break;case"sale active":s("span",s(".sort")).className="iconfont icon-liebiao",d("https://zyxcl.xyz/exam_api/xl").then(r=>localStorage.setItem("data",JSON.stringify(r)));break;case"new active":s("span",s(".sort")).className="iconfont icon-liebiao",d("https://zyxcl.xyz/exam_api/sx").then(r=>localStorage.setItem("data",JSON.stringify(r)));break;case"sort active":const i=a.firstElementChild;i.className=i.className==="iconfont icon-liebiao"?"iconfont icon-paixu-shengxu":i.className==="iconfont icon-paixu-shengxu"?"iconfont icon-paixu-jiangxu":"iconfont icon-paixu-shengxu";const n=JSON.parse(localStorage.getItem("data"));let t=!1;i.className==="iconfont icon-paixu-shengxu"?(t=!0,m(n,t)):(t=!1,m(n,t));break;case"listType active":s("span",s(".sort")).className="iconfont icon-liebiao";const c=a.firstElementChild;c.className=c.className==="iconfont icon-pailiefangshi"?"iconfont icon-pailiefangshi1":"iconfont icon-pailiefangshi";const o=JSON.parse(localStorage.getItem("data"));p(o);break}});function m(e,a){const i=e.items;a?(i.sort((n,t)=>n.price-t.price),e.items=i,p(i)):(i.sort((n,t)=>t.price-n.price),e.items=i,p(i)),localStorage.setItem("data",JSON.stringify(e))}async function d(e){const a=await h({url:e});return p(a),a}function p(e){let a=!1;s(".listType").firstElementChild.className==="iconfont icon-pailiefangshi1"?a=!0:a=!1;const n=e.items?e.items:e;s(".con").innerHTML=a?"<ul>"+n.map((t,c)=>`
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
    `).join("")+"</ul>":'<div class="scroll">'+n.map((t,c)=>`
        <dl class="item" data-index="${c}">
            <dt><img src="${t.img}" alt=""></dt>
            <dd class="dd-h">${t.title}</dd>
            <dd class="dd-m">月销<b class="num">${t.sold}</b>笔</dd>
            <dd class="dd-p">￥<span class="price">${t.price}</span></dd>
        </dl>
    `).join("")+"</div>",new g(".con",{click:!0}),x()}function x(){s(".con").firstElementChild.addEventListener("click",e=>{e.target.className==="item"&&location.assign(`./detail.html?index=${e.target.getAttribute("data-index")}`)})}s("header p").addEventListener("click",e=>{location.assign("./search.html")});
//# sourceMappingURL=index-DOrkltBV.js.map
