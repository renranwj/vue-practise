<template>
  <div class="hotDeshies">
    <DeshiesList :fatherName='name'></DeshiesList>
  </div>
</template>

<script>
  import DeshiesList from './DeshiesList'
  export default {
    name: "hotDeshies",
    data() {
      return {
        deshies: [],
        name: "饮料"
      };
    },
    components: {
      DeshiesList
    }
   
  };
</script>

<style>
</style>