<template>
<a-flex wrap="nowrap" align="center">
  <router-link to='/'>
    <a-avatar src='src/assets/1495794953.jpg' />
    <span class='ml-2 text-[20px] align-middle'>Jin</span>
  </router-link>
  <a-input
    v-if='screens.md'
    class="w-40 ml-8"
    v-model:value="searchValue"
    placeholder="搜索文档"
    size="large"
    @search="onSearch"
    suffix="Ctrl K"
  ><template #prefix><search-outlined /></template>
  </a-input>
  <div class="grow"></div>
  <a-button type href="" :icon='h(SearchOutlined)' v-if='!screens.md'></a-button>
  <a-menu 
    v-if='screens.md'
    class="bg-transparent border-b-0" 
    mode="horizontal" 
    :items='items' 
    @click="onClickMenu"     
  />
    <a-flex wrap="nowrap" align="center" v-if="screens.xl || screens.lg">
    <a-divider type="vertical" />
    <a-switch v-model:checked="checked" @change="onChange" class='mx-1' />
    <a-divider type="vertical" />
    <a-button type href="" :icon='h(GithubOutlined)'></a-button>
    <a-button type href="" :icon='h(WechatOutlined)'></a-button>
  </a-flex>
    <a-button type href="" :icon='h(EllipsisOutlined)' v-else></a-button>
</a-flex>
</template>
<script lang="ts" setup>
  import { GithubOutlined, WechatOutlined, SearchOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
  import { ref, watch, defineEmits, h } from 'vue'
  import { getItem } from '@/utils/index.ts'
  import { useRouter } from 'vue-router'

import { Grid } from 'ant-design-vue';
const useBreakpoint = Grid.useBreakpoint;
const screens = useBreakpoint();

  const emits = defineEmits(['changeTheme'])
  const router = useRouter()

  // Memu Items
  const items: MenuItem[] = [
    getItem('书签', 'bookmark', null, null),
    getItem('随笔', 'essay', null, null), 
    getItem('项目', 'project', null, null),
    getItem('特效', 'effects', null, null),
  ];
  // a-switch
  const checked = ref(true)
  const searchValue = ref()
  const onSearch = () => {}
  const onChange = (checked) => {
    emits('changeTheme', checked)
  }
  const onClickMenu = ({ item, key, keyPath }) => {
    router.push(key)
  }
</script>
<style lang="sass" scoped></style>