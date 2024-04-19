<template>
<div class="container">
  <a-flex class="hero pa-16" :vertical="!screens.md">
    <div>
      <p class="title">前端小站</p>
      <p class="subtitle">文档&笔记&项目</p>
      <p class="description">提供便捷的开发文档速查与项目示例。</p>
      <a-button class="button shadow-black" type="primary" size="large" shape="round">随便看看</a-button>      
    </div>
    <a-image
      rootClassName="after:content-['*'] image-bg-change"
      class="image-bg-change"
      src="src/assets/going_merry.png" :width="320" :preview="false" alt="Logo"></a-image>
  </a-flex>
  <!-- Hero -->
  <a-row class="hero pa-16" :wrap="false">
    <a-col :xs="{span: 12}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 12}" :xl="{span: 12}">
      <p class="title">前端小站</p>
      <p class="subtitle">文档&笔记&项目</p>
      <p class="description">提供便捷的开发文档速查与项目示例。</p>
      <a-button class="button shadow-black" type="primary" size="large" shape="round">随便看看</a-button>
    </a-col>
    <a-col class='text-center' flex='auto'>    
      <div class="image-bg"><a-image 
        src="src/assets/going_merry.png"        
        :width="320" 
        :preview="false"
        alt="Logo" 
      ></a-image></div>
    </a-col>
  </a-row>
  <!-- Features -->
  <a-row class="px-16 py-8" :wrap='false' :gutter="24">
    <a-col v-for="feature in features" :span="8" :key="feature.key">
      <a-card :bodyStyle="{ height: '200px' }">
        <a-image class="mb-4" :preview="false" :width="48" :src="feature.image"></a-image>
        <p class="text-base font-black text-block">{{feature.title}}</p>
        <p class="text-sm text-slate-500">{{feature.detail}}</p>
      </a-card>
    </a-col>
  </a-row>
</div>
</template>
<script lang="ts" setup>
  import { Grid } from 'ant-design-vue';
  const useBreakpoint = Grid.useBreakpoint;
  const screens = useBreakpoint();
  const features = [
    {
      key: "work",
      image: "src/assets/life.svg",
      title: "开发文档",
      detail: "收录了一些库的参考手册与开发文档。"
    },
    {
      key: "learn",
      image: "src/assets/learn.svg",
      title: "学习笔记",
      detail: "整理了平时学习中的资料，以达到快速查询的效果。"
    },
    {
      key: "life",
      image: "src/assets/work.svg",
      title: "项目展示",
      detail: "Project Demo. 一些常见网页设计和特效实现。"
    }
  ];
</script>
<style lang="sass" scoped>
  .hero
    .title
      line-height: 64px 
      font-size: 56px
      font-weight: bold
      margin: 0
      max-width: 576 
      // background: linear-gradient(120deg, hsl(0, 100%, 60%), hsl(30, 100%, 60%))
      background: linear-gradient(120deg, hsl(210, 100%, 45%) 30%, hsl(120, 100%, 65%))
      -webkit-background-clip: text
      background-clip: text
      color: transparent
      max-width: 320px 
    .subtitle
      line-height: 64px 
      font-size: 56px
      font-weight: bold
      margin: 0
      max-width: 576px 
    .description
      line-height: 36px
      font-size: 24px
      padding-top: 12px
      max-width: 576px
    .button
      animation: change-bg-color 5s infinite linear alternate      
    .image-bg::before
      content: ' '
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%,-50%)
      border-radius: 50%
      filter: blur(120px)
      width: 192px
      height: 192px
      animation: change-bg-color 5s infinite linear alternate
      @media(min-width: 640px)
        width: 256px
        height: 256px
      @media(min-width: 960px)
        width: 320px
        height: 320px
  @keyframes change-bg-color
    0% 
      background: hsl(210, 100%, 45%) 
    100%
      background: hsl(0, 100%, 65%)
</style>