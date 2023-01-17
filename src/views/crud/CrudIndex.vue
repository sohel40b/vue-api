<script setup>
  import useSimple from '../../composables/crud';
  import { onMounted } from "vue";

  const { index, getIndex, destroy } = useSimple();
  
  onMounted(() => getIndex());
</script>

<template>
  <main>
    <div class="center">
      <div class="titleContent">
        <RouterLink :to="{name: 'CrudCreate' }" class="createButton">Create</RouterLink>
      </div>
      <table id="customers">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Image</th>
          <th></th>
          <th></th>
        </tr>
        <tr v-for="data in index" :key="data.id">
          <td>{{ data.name }}</td>
          <td>{{ data.email }}</td>
          <td>{{ data.image }}</td>
          <td>
            <div class="small">
              <RouterLink :to="{name: 'CrudEdit', params: { id: data.id } }" class="editButton">Edit</RouterLink>
            </div>
          </td>
          <td>
            <button @click="destroy(data.id)" class="deleteButton">Delete</button>
          </td>
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
  .titleContent{
    float: right;
  }
  .createButton {
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    background: green;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .editButton{
    border: none;
    color: white;
    padding: 9px 22px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    background: green;
  }
  .deleteButton{
    border: none;
    color: white;
    padding: 9px 22px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    background: red;
  }
</style>