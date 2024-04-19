<template>
<full-page :options="options">

  <!-- Section/1 -->
  <a-flex class="section" justify='center' align='center'>
     <a-card :bordered="false" style="width: 300px;" >
      <a-image
        :width="200"
        :height="200"
        src="src/assets/little_luffy.png"
      ></a-image>
      <a-descriptions :column='1' layout="horizontal">
        <a-descriptions-item label='Name'>QINWEIJING</a-descriptions-item>
        <a-descriptions-item label='Location'>GuangZhou, China</a-descriptions-item>
        <a-descriptions-item label='Job'>Front-End Develoa</a-descriptions-item>
        <a-descriptions-item label='Email'>2975472970@qq.com</a-descriptions-item>
        <a-descriptions-item label='GitHub'>https://qin-weijin.github.io/</a-descriptions-item>
      </a-descriptions>
    </a-card>
    <video 
      class="bg-video" 
      autoplay 
      loop 
      muted 
      playsinline
      preloader='auto'     
    ><source src="@/assets/lol_hayato.mp4" type="video/mp4"></video>
  </a-flex>

  <!-- Section/2 -->
  <a-flex class="section" justify='center' align='center'>
    <a-typography class='box'>
      <a-typography-title class='text-center'>Skill Stack</a-typography-title>
      <a-typography-paragraph v-for="(skillStack, key) in aboutData">
        <a-typography-title :level="4">{{key}}</a-typography-title>
        <a-typography-text class="leading-8">
        <a-checkable-tag @change="console.log('change')" v-for="(skill, key) in skillStack">
          <a-image :height="12" :src="skill.src" :preview="false" />
          <span class="ml-1">{{key}}</span>
        </a-checkable-tag>    
        </a-typography-text>    
      </a-typography-paragraph>
    </a-typography>
  </a-flex>

  <!-- Section/3 -->
  <a-flex class="section text-center" justify='center' align='center'>
    <div class="slide" justify='center' align='center'>
      <instagram3D :images="images" imageHeight="180" />
    </div>
    <div class="slide" justify='center' align='center'>
      <BgGradient />
    </div>
    <div class="slide" justify='center' align='center'>
      <BgGradient2 />
    </div>
  </a-flex>
</full-page>
</template>
<script setup>
  import { h } from 'vue';
  import aboutData from './aboutData'
  import Instagram3D from '@/components/Instagram3D'
  import BgGradient from '@/components/BgGradient'
  import BgGradient2 from '@/components/BgGradient2'
  const options = {
    licenseKey: 'YOUR_KEY_HERE',
    // Navigation
    menu: '#menu',
    anchors: ['page1', 'page2', 'page3'],
    navigation: true,                                 // Section 导航锚点
    slidesNavigation: true,                           // Slide 导航锚点
    // Scrolling
    fitToSection: true,                               // 始终填充整个视图
    // Design
    controlArrows: false,                             // 横向箭头
    verticalCentered: true,                           // 垂直居中
    sectionsColor: ['', '#FAF6F1', ''],
    scrollOverflow: true,
    css3: true,
    paddingTop: '64px'
  }
  const images = [
    { src: 'src/assets/imstagram_3d_images/1.jpg' },
    { src: 'src/assets/imstagram_3d_images/2.jpg' },    
    { src: 'src/assets/imstagram_3d_images/3.jpg' },
    { src: 'src/assets/imstagram_3d_images/4.jpg' },
    { src: 'src/assets/imstagram_3d_images/5.jpg' },
    { src: 'src/assets/imstagram_3d_images/6.jpg' },
    { src: 'src/assets/imstagram_3d_images/7.jpg' },
    { src: 'src/assets/imstagram_3d_images/8.jpg' },
    { src: 'src/assets/imstagram_3d_images/9.jpg' },
    { src: 'src/assets/imstagram_3d_images/10.jpg' },
  ]
</script>
<style lang="sass">
  .section
    .box
      max-width: 784px
  .bg-video
    position: fixed
    width: 100%
    z-index: -1
    top: 0
    left: 0
</style>