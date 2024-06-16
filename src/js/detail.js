import '../css/detail.scss'
import {$} from './common'

let index = location.search.slice(-1) * 1
const obj = JSON.parse(localStorage.getItem('data')).items[index]

$('h1').innerHTML = obj.title
$('img').src = obj.img
