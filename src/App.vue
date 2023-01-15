<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <RouterLink to="/"><h4 class="logo">Vue Js</h4></RouterLink>
      <div class="header-right">
        <RouterLink to="/"><h4>Home</h4></RouterLink>
        <RouterLink to="/simple"><h4>Index</h4></RouterLink>
      </div>
  </header>

  <RouterView />
</template>

<style scoped>
  header {
    overflow: hidden;
    background-color: #f1f1f1;
  }
  header h4 {
    float: left;
    color: black;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;
    margin: 0px;
  }
  header h4.logo {
    font-size: 25px;
    font-weight: bold;
  }
  header h4:hover {
    background-color: #ddd;
    color: black;
  }
  header h4.active {
    background-color: dodgerblue;
    color: white;
  }
  .header-right {
    float: right;
  }
</style>
