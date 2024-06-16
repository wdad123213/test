import '../css/search.scss'
import {$} from './common'
import BScroll from 'better-scroll'

const data = JSON.parse(localStorage.getItem('data')).items

$('input').addEventListener('keyup',function(){
    let res = data.filter(item=>item.title.includes(this.value.trim()))
    $('main').innerHTML = '<ul>' + res.map((item,i) => `
    <li class="item" data-index="${i}">
    <div class="left">
    <img src="${item.img}" alt="">
    </div>
    <div class="right">
    <p class="dd-h">${item.title}</p>
    <p class="dd-m">月销<b class="num">${item.sold}</b>笔</p>
    <p class="dd-p">￥<span class="price">${item.price}</span></p>
    </div>
    </li>
    `).join("") + '</ul>' 
    // 滚动
    new BScroll('main')
    // 判断输入框内容为空
    if(this.value.trim()==='') $('main').innerHTML = ""
})