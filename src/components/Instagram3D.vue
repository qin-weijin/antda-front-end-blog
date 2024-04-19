<template>
  <div class="box">
  <div 
    class="instagram" 
    :style="setImageInstagram(roX, roY)"
  >
    <img 
      v-for="(image, i) in props.images"  
      :src="image.src" 
      class="image"
      draggable="false"
      :style="setImageTransform(i)" 
    >
  </div>
</div>
</template>
<script setup>
  import { ref, defineProps, computed, onMounted, nextTick, watch } from 'vue'
  const props = defineProps({ 
    images: Array,
    imageHeight: Number | String
  })

  // 计算旋转角度
  const deg = 360/props.images.length
  // 点击和移动坐标
  const mouseDownX = ref(0)  
  const mouseDownY = ref(0)   
  const mouseMoveX = ref(0)
  const mouseMoveY = ref(0)
  // 计算的偏移坐标
  const roX = computed(() => { return  -10 - (mouseMoveY.value - mouseDownY.value) * 0.2 })
  const roY = computed(() => { return (mouseMoveX.value - mouseDownX.value) * 0.2 })

  // 遍历 IMG 变形
  function setImageTransform(i){ 
    return { transform: 'rotateY(' + i*deg + 'deg) translateZ(300px) translateY(-50%)' } 
  }

  function setImageInstagram(roX, roY){
    var height = props.imageHeight + 'px'
    var width = 2/3 * props.imageHeight + 'px'
    return { 
        transform: 'perspective(800px) rotateX(' + roX + 'deg) rotateY(' + roY + 'deg)',
        height: height,
        width: width
      } 
  }

  // 移动时
  function onMousemove(ev){
    mouseMoveX.value = ev.clientX;
    mouseMoveY.value = ev.clientY;    
  }
  // 点击时
  function onMousedown(ev){

    mouseDownY.value = ev.clientY;
    mouseDownX.value = ev.clientX;
    mouseMoveX.value = mouseDownX.value
    mouseMoveY.value = mouseDownY.value
    document.addEventListener('mousemove', onMousemove)
  }

  // 松开时
  function onMouseup(){
    document.removeEventListener('mousemove', onMousemove)
      mouseMoveX.value=0
      mouseMoveY.value=0
      mouseDownX.value=0
      mouseDownY.value=0
  }
  onMounted(()=>{
    document.addEventListener('mousedown', onMousedown)
    document.addEventListener('mouseup', onMouseup)
  })
</script>  
<style lang="sass" scoped>
.box
  display: block
  height: 500px
  width: 3400px
  .instagram
    display: block   
    position: relative
    // transform 旋转元素
    transform-style: preserve-3d
    // 居中
    top: 50%
    left: 40%
    img
      position: absolute
      width: 100%
      height: 100%
      border-radius: 5px
      box-shadow: 0px 0px 10px #fff
      /*倒影的设置*/
      -webkit-box-reflect: below 10px -webkit-linear-gradient(top,rgba(0,0,0,0) 50%,rgba(0,0,0,.5) 100%)
</style>
