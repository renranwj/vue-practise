<template>
  <div id="app">
    <Side-bar></Side-bar>

    <div class="content">
      
      <div class="box1">
      
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

  import SideBar from './components/SideBar';
  export default {
    components: {
      SideBar
    }
  }
</script>

<style>
  #app {
    min-width: 1300px;
  }
  .app {
    display: inline-block;
  }
  .content {
    position: relative;
    vertical-align: top;
    padding-left: 10px;
    display: inline-block;
    width: 83%;
  }
</style>