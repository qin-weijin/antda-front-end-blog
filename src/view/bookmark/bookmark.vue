<template>
  <a-row class="container" :wrap="false">
    <a-col flex="auto" class="content">
      <h1>书签</h1>
      <p class="description">参考链接，便于快速查询。</p>   
      <section class="section" v-for="(bookmarks, key) in bookmarkData">
        <h2>{{key}}</h2> 
        <a-row :gutter="[16, 16]">
          <a-col
            v-for="(bookmark, key) in bookmarks" 
            :xs="{span: 24}" 
            :sm="{span: 12}" 
            :md="{span: 12}" 
            :lg="{span: 12}" 
            :xl="{span: 12}"
          >    
              
            <a-card :title="key" hoverable>
              <a :href="bookmark.href">
              <p class="truncate text-base">{{bookmark.description}}</p>
              <a-image :preview="false" :height="50" :src="bookmark.src" />
              </a>
          </a-card>
          </a-col>
        </a-row>
      </section>
    </a-col>
    <a-col class="aside" :xs="{span: 0}" :sm="{span: 0}" :md="{span: 0}" :lg="{span: 0}" :xl="{span: 5}">
      <a-menu :items="menuItems"></a-menu>
    </a-col>
  </a-row>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue'
  import bookmarkData from './bookmarkData.json'
  const menuItems = reactive([
    {
      key: '0',
      label: '前端框架',
      title: '前端框架',
    },
    {
      key: '1',
      label: 'UI 框架',
      title: 'UI 框架',
    },
    {
      key: '2',
      label: '功能增强',
      title: '功能增强',
    },
    {
      key: '3',
      label: 'Vue 相关',
      title: 'Vue 相关',
    },
    {
      key: '4',
      label: 'Git 相关',
      title: 'Git 相关',
    },
    {
      key: '5',
      label: '文档与排版',
      title: '文档与排版',
    },
    {
      key: '6',
      label: '接口与规范',
      title: '接口与规范',    
    },
    {
      key: '7',
      label: '参考文档',
      title: '参考文档',    
    },  
    {
      key: '8',
      label: 'Node 之上',
      title: 'Node 之上',    
    },  
    {
      key: '9',
      label: '其他工具',
      title: '其他工具',    
    },
  ])
</script>
<style scoped type="text/css">
</style>