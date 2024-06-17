import '../css/style.scss'
import ajax from './ajax'
import { $, gets } from './common'
import BScroll from 'better-scroll'

// 初始化
getList('https://zyxcl.xyz/exam_api/zh')
    .then(res => localStorage.setItem('data', JSON.stringify(res)))

// 头部导航点击事件
$('ul', $('.top')).addEventListener('click', e => {
    let target = e.target
    if (target.nodeName === 'LI') {
        $('.active').classList.remove('active')
        target.classList.add('active')
        switch (target.className) {
            case 'synt active':
                $('span', $('.sort')).className = 'iconfont icon-liebiao'
                getList('https://zyxcl.xyz/exam_api/zh')
                    .then(res => localStorage.setItem('data', JSON.stringify(res)))
                break;
            case 'sale active':
                $('span', $('.sort')).className = 'iconfont icon-liebiao'
                getList('https://zyxcl.xyz/exam_api/xl')
                    .then(res => localStorage.setItem('data', JSON.stringify(res)))
                break;
            case 'new active':
                $('span', $('.sort')).className = 'iconfont icon-liebiao'
                getList('https://zyxcl.xyz/exam_api/sx')
                    .then(res => localStorage.setItem('data', JSON.stringify(res)))
                break;
            case 'sort active':
                const icon = target.firstElementChild
                icon.className = icon.className === 'iconfont icon-liebiao' ?
                    'iconfont icon-paixu-shengxu' : icon.className === 'iconfont icon-paixu-shengxu' ?
                        'iconfont icon-paixu-jiangxu' : 'iconfont icon-paixu-shengxu'
                const curData = JSON.parse(localStorage.getItem('data'))
                let flag = false
                if (icon.className === 'iconfont icon-paixu-shengxu') {
                    flag = true
                    dataSort(curData, flag)
                } else {
                    flag = false
                    dataSort(curData, flag)
                }
                break;
            case 'listType active':
                $('span', $('.sort')).className = 'iconfont icon-liebiao'
                const icon1 = target.firstElementChild
                icon1.className = icon1.className === 'iconfont icon-pailiefangshi' ?
                    'iconfont icon-pailiefangshi1' : 'iconfont icon-pailiefangshi'
                const allData = JSON.parse(localStorage.getItem('data'))
                render(allData)
                break;
        }
    }
})

// 排序
function dataSort(data, bol) {
    const curData = data.items
    if (bol) {
        curData.sort((a, b) => a.price - b.price)
        localStorage.setItem('data', JSON.stringify(curData))
        render(curData)
    } else {
        curData.sort((a, b) => b.price - a.price)
        render(curData)
        localStorage.setItem('data', JSON.stringify(curData))
    }
}

// 获取数据
async function getList(url) {
    const data = await ajax({ url })
    render(data)
    return data
}

// 渲染函数
function render(data) {
    // 判断列表类型
    let bol = false
    let el = $('.listType').firstElementChild
    if (el.className === 'iconfont icon-pailiefangshi1') {
        bol = true
    } else {
        bol = false
    }
    const curData = data.items ? data.items : data
    $('.con').innerHTML = bol ? '<ul>' + curData.map((item,i) => `
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
    `).join("") + '</ul>' : '<div class="scroll">' + curData.map((item,i) => `
        <dl class="item" data-index="${i}">
            <dt><img src="${item.img}" alt=""></dt>
            <dd class="dd-h">${item.title}</dd>
            <dd class="dd-m">月销<b class="num">${item.sold}</b>笔</dd>
            <dd class="dd-p">￥<span class="price">${item.price}</span></dd>
        </dl>
    `).join("") + '</div>'
    // 滚动
    new BScroll('.con',{click:true})
    setEvent()
}

function setEvent(){
    $('.con').firstElementChild.addEventListener('click',e => {
        if(e.target.className === 'item'){
            location.assign(`./detail.html?index=${e.target.getAttribute('data-index')}`)
        }
    })
}

$('header p').addEventListener('click',e => {
    location.assign(`./search.html`)
})