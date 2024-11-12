<template>
  <a-config-provider :locale="zhCN">
    <router-view />
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
export default {
  name: 'App',
  components: {
    
  },
  data(){
    return {
      zhCN,
    }
  }
}
</script>

<style scoped>
</style>
