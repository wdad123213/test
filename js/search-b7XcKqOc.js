import{$ as s}from"./common-DoGb0hfw.js";import{B as t}from"./better-scroll.esm-DluUa-FQ.js";const e=JSON.parse(localStorage.getItem("data")).items;s("input").addEventListener("keyup",function(){let a=e.filter(i=>i.title.includes(this.value.trim()));s("main").innerHTML="<ul>"+a.map((i,l)=>`
    <li class="item" data-index="${l}">
    <div class="left">
    <img src="${i.img}" alt="">
    </div>
    <div class="right">
    <p class="dd-h">${i.title}</p>
    <p class="dd-m">月销<b class="num">${i.sold}</b>笔</p>
    <p class="dd-p">￥<span class="price">${i.price}</span></p>
    </div>
    </li>
    `).join("")+"</ul>",new t("main"),this.value.trim()===""&&(s("main").innerHTML="")});
//# sourceMappingURL=search-b7XcKqOc.js.map
