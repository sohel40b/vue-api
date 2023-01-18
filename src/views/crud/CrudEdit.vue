<script setup>
import useSimple from "../../composables/crud";
import { onMounted } from "vue";
import { reactive } from "vue";

const { show, getShow, update, error } = useSimple();
console.log(show);

const props = defineProps({
    id: {
        required: true,
        type: String,
    },
});
const data = reactive({
  image: show.image,
  imageName: show.name,
});
console.log(data);
const appendFile = (image, imageName) => {
  data.imageName = image;
  data.image = imageName[0];
}
onMounted(() => getShow(props.id));
</script>

<template>
    <main>
        <div class="center">
            <form @submit.prevent="update($route.params.id)">

              <label for="fname">Name</label>
              <input type="text" id="fname" v-model="show.name" required>
              <div v-if="error.name">
                  <span class="error"> {{ error.name[0]}}</span>
              </div>

              <label for="email">Email</label>
              <input type="text" id="email" v-model="show.email" required><br><br>
              <div v-if="error.email">
                  <span class="error"> {{ error.email[0]}}</span>
              </div>

              <label for="image">Image: </label>
              <div>
                <img v-bind:src="show.image"/>
              </div>
              <button><label for="image">Change Image</label></button>
              <input type="file" id="image" @change="appendFile($event.target.name, $event.target.files)" style="visibility:hidden;" required><br><br>

              <button type="submit">Submit</button>
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
  img {
    width: 50px;
    height: 50px;
  }
</style>