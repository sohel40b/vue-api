<script setup>
  import useSimple from "../../composables/crud";
  import { onMounted } from "vue";

  const { index, getIndex } = useSimple();
  
  onMounted(() => getIndex());
</script>

<template>
  <main>
    <div class="center">
      <table id="customers">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
        <tr v-for="data in index" :key="data.id">
          <td>{{ data.name }}</td>
          <td>{{ data.email }}</td>
          <td>{{ data.image }}</td>
          <td>Edit / Delete</td>
        </tr>
      </table>
    </div>
  </main>
</template>

<style scoped>
  .center {
    width: 80%;
    margin: auto;
  }
  #customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    margin-top: 40px;
    width: 100%;
  }

  #customers td, #customers th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  #customers tr:nth-child(even){background-color: #f2f2f2;}

  #customers tr:hover {background-color: #ddd;}

  #customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
  }
</style>