<template>
  <div class="body">
    <div class="title">主应用</div>
    <div class="bar">
      <router-link to="/app1">app1</router-link>
      <router-link to="/app2">app2</router-link>
      <!-- <div @click="$router.replace('/app1')">replace</div>
      <div @click="$router.push('/app1')">push</div> -->
    </div>
    <main>
      主应用的路由容器
      <div class="page">
        <router-view/>
      </div>
    </main>
    <main>
      子应用挂在容器
      <div id="container"></div>
    </main>
  </div>
</template>
<script>
export default {
  methods: {
    topage (){
      this.$router.push('/app1')
    }
  }
}
</script>
<style scoped>
.body{
  height: 100vh;
}
 .title{
   width: 100%;
   text-align: center; 
  }
  .bar a{
    border: 1px solid #000;
    margin:  10px;
    padding: 5px 10px;
    border-radius: 4px;
  }
  main{
    padding: 10px;
    border: 1px solid #000;
    margin-top: 20px;
    height: 30vh;
    border-radius: 4px;
  }
</style>