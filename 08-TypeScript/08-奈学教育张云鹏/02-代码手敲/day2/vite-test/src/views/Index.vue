<!--
 * @Author: liming
 * @Date: 2022-02-27 20:29:18
 * @LastEditTime: 2022-02-27 20:29:19
 * @FilePath: \09-奈学教育张云鹏\02-代码手敲\day02\vite-test\src\views\index.vue
-->
<template>
  登录信息：
  {{ userInfo }}
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "../store/index";
const store = useStore();
console.log(store);
let userInfo = computed(() => store.userInfo);
</script>
