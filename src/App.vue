<template>
  <div id="app">
    <NavBar v-if="!isAuthRoute"/>
    <main class="main-content">
      <router-view/>
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
  computed: {
    isAuthRoute() {
      // 檢查當前路由是否為登入或註冊頁面
      return ['/login', '/register'].includes(this.$route.path)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
