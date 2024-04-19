<template>
<a-row class="container" :wrap="false">
  <a-col flex="auto" class="content">
    <h1>随笔</h1>
    <p class="description">笔记摘要，什么都记一些。</p>   

    <section class="section" v-for="(essay, key) in essayData">
      <a-list 
        class="text-h2"
        item-layout="horizontal" 
        :data-source="essay" 
        bordered 
        :header="key" 
        :split="false"
        size="small"
      >
        <template #renderItem="{ item }">
          <a :href="item.href">
          <a-list-item class="hover:bg-blue">
            <a-list-item-meta :description="item.description">
              <template #title>
                {{ item.title }}
              </template>
            </a-list-item-meta>
          </a-list-item>
          </a>
        </template>
      </a-list>
    </section>

  </a-col>    

  <a-col class="aside" :xs="{span: 0}" :sm="{span: 0}" :md="{span: 0}" :lg="{span: 0}" :xl="{span: 5}">
    <a-menu :items="menuItems"></a-menu>
  </a-col>
</a-row>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue'
  import essayData from './essayData.json'
  const menuItems = reactive([
    {
      key: '0',
      label: 'Basis',
      title: 'Basis',
    },    
    {
      key: '1',
      label: 'Vue',
      title: 'Vue',
    },
    {
      key: '2',
      label: 'Git & GitHub',
      title: 'Git & GitHub',
    },
    {
      key: '3',
      label: 'Utils',
      title: 'Utils',
    },
    {
      key: '4',
      label: 'Node',
      title: 'Node',
    },
    {
      key: '5',
      label: 'UI Library',
      title: 'UI Library',
    },
    {
      key: '6',
      label: 'theory',
      title: 'theory',
    }
  ])
</script>