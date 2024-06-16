export const $ = (el,parent=document)=>parent.querySelector(el)
export const gets = (el,parent=document)=>[...parent.querySelectorAll(el)]