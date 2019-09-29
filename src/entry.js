// vue文件不能直接加载到html中，放入js中处理
import Vue from "vue"
import App from "./app.vue"

import  "../assets/style/global.styl"

// 初始化一个vue实例，然后调用方法，创建一个节点，插入html中，将vue渲染出来的dom挂在到该节点中
var mountDom=document.createElement('div')
document.body.append(mountDom)

var backgroudDom=document.createElement('div');
backgroudDom.setAttribute("id","mountDom")
document.body.append(backgroudDom)

console.log('lalal',process.env.NODE_ENV)

new Vue({
  render:(h)=>h(App)
}).$mount(mountDom)
