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
        name: "其他"
      };
    },
    components: {
      DeshiesList
    }
   
  };
</script>

<style>
</style>