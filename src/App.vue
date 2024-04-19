<template>
<a-config-provider :theme="{
  token: { 
    colorPrimary: '#2196F3',
    colorPrimaryBg: '#2196F3', 
  },
  algorithm: appAlgorithm ? theme.defaultAlgorithm : theme.darkAlgorithm
}">
<a-app>
<a-layout>                   
  <a-layout-header
    class="fixed w-full z-50"
    :class="route.path === '/'  ? '!bg-transparent' : '!bg-white'"
  >
    <AppHeader @changeTheme="onChangeTheme" />
  </a-layout-header>
  <a-layout-content>
    <router-view></router-view>
  </a-layout-content>
  <a-layout-footer v-if="(route.path === '/')" style="text-align: center">
    <div>粤ICP备2021179578号-1</div>
    <div>Ant Design ©2018 Created by Ant UED</div>
  </a-layout-footer>
</a-layout>    
</a-app>
</a-config-provider>  
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { theme } from 'ant-design-vue';
  import { useRoute } from 'vue-router'
  const route = useRoute()

  // Layout
  import AppHeader from '@/components/AppHeader'

  const appAlgorithm = ref(true)
  const onChangeTheme = (checked) => {
    appAlgorithm.value = checked
  }
</script>
<style lang="sass" scoped>
  .ant-layout-content
    padding-inline: 50px
</style>

