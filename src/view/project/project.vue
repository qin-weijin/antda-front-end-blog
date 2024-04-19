<template>
<a-row class="container" :wrap="false">
  <a-col flex="auto" class="content">
  <h1>项目展示</h1>
  <p class="description">项目 Demo 实例展示</p>

  <setion class="section" v-for="(project, key) in projectData">  
    <h2>{{project.title}}</h2>
    <p>{{project.description}}</p>
    <a :href="project.href">{{project.href}}</a>
    <a-row :gutter="[24, 24]">
      <a-col 
        v-for="src in project.src" 
        :xs="{span: 24}" 
        :sm="{span: 24}" 
        :md="{span: 24}" 
        :lg="{span: 12}" 
        :xl="{span: 12}"
       >
        <a :href="project.href">
        <a-card bodyStyle="height: 210 "> <a-image :src="src" :preview="false" /></a-card>
        </a>
      </a-col>
    </a-row>    
  </setion>
  </a-col>
</a-row>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue'
  import projectData from './projectData.json'
</script>
<style scoped>
</style>
