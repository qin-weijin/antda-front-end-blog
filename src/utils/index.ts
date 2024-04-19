// Set <a-menu> items
import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
export const getItem = function(label, key?, icon?, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

/**
 * @description useScroll(elRef) - 监听指定元素 scroll 事件，返回 API
 * @param elRef - default: window, 指定监听元素
*/
import { onMounted, onUnmounted, ref } from 'vue'
import { throttle } from 'underscore'

export const useScroll = function(elRef){
  let el = window
  const isReachBottom = ref(false)      // 滚动到底部
  const clientHeight = ref(0)           // 视口高度，Height + Padding
  const scrollHeight =  ref(0)          // 内容高度，包括溢出
  const scrollTop =  ref(0)             // 滚动值
 
  const scrollListenerHandler = throttle(() => {
    // window | Element
    if(el === window){
      clientHeight.value = document.documentElement.clientHeight
      scrollHeight.value = document.documentElement.scrollHeight
      scrollTop.value = document.documentElement.scrollTop
    }else {
      clientHeight.value = el.clientHeight
      scrollHeight.value = el.scrollHeight
      scrollTop.value = el.scrollTop
    }
    // 滚动到底部
    if(clientHeight.value + scrollTop.value >= scrollHeight.value){
      isReachBottom.value = true
    }
  }, 100)
  onMounted(() => {
    // 设置监听元素
    if(elRef) { el = elRef.value }
    el.addEventListener("scroll", scrollListenerHandler)
  })
  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListenerHandler)
  })
  return { isReachBottom, clientHeight, scrollHeight, scrollTop }
}

// 

export const Instagram3D = function(picRef){

}