<script setup>
  import { reactive } from 'vue';
  import useSimple from '../../composables/crud';

  const { store, error } = useSimple();
  const data = reactive({
    name: '',
    email: '',
    image: null,
    imageName: null,
    gender: '',
    skills: []
  });
  const appendFile = (image, imageName) => {
    data.imageName = image;
    data.image = imageName[0];
  }
</script>

<template>
<main>
  <div class="center">
    <form @submit.prevent="store(data)">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="data.name" placeholder="Your name.." required>
      <div v-if="error.name">
        <span class="error"> {{ error.name[0]}}</span>
      </div>

      <label for="email">Email</label>
      <input type="text" id="email" v-model="data.email" placeholder="Your email.." required><br><br>

      <div v-if="error.name">
        <span class="error"> {{ error.name[0]}}</span>
      </div>

      <label for="image">Image</label>
      <input type="file" id="image" @change="appendFile($event.target.name, $event.target.files)"><br><br>

      <label>Gender</label>
      <input type="radio" id="male" v-model="data.gender" value="1">
      <label for="male">Male</label>
      <input type="radio" id="female" v-model="data.gender" value="0">
      <label for="female">Female</label><br><br>

      <div>Skills</div><br>

      <input type="checkbox" id="laravel" v-model="data.skills[0]"  value="1">
      <label for="laravel">Laravel</label>

      <input type="checkbox" id="codeigniter" v-model="data.skills[1]"  value="2">
      <label for="codeigniter">Codeigniter</label><br>

      <input type="checkbox" id="ajax" v-model="data.skills[2]"  value="3">
      <label for="ajax">Ajax</label>

      <input type="checkbox" id="vue" v-model="data.skills[3]"  value="4">
      <label for="vue">Vue JS</label><br>

      <input type="checkbox" id="mysql" v-model="data.skills[4]"  value="5">
      <label for="mysql">MySQL</label>

      <input type="checkbox" id="api" v-model="data.skills[5]"  value="6">
      <label for="api">API</label><br><br>

      <input type="submit" value="submit">
    </form>
  </div>
</main>
</template>

<style scoped>
  main{
    margin-top: 40px;
  }
  .error{
    color: red;
  }
  .center{
    width: 40%;
    margin: auto;
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }
  input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type=submit]:hover {
    background-color: #45a049;
  }
</style>