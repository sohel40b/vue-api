import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

export default function useSimple(){
    const index = ref([]);
    const show = ref([]);
    const error = ref({});
    const router = useRouter();

    const getIndex = async () => {
        const response = await axios.get("simple");
        index.value = response.data.data;
    }
    const getShow = async (id) => {
        const response = await axios.get("simple/" + id);
        show.value = response.data.data;
    }
    const store = async (data) => {
        try {
            console.log(data);
            let formData = new FormData();
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('gender', data.gender);
            formData.append('skills', data.skills);
            formData.append('image', data.image,data.name+".jpg");
            await axios.post("simple", formData, {
                headers: {
                    'Content-Type': `multipart/form-data`
                }
            });
            await router.push({name: "CrudIndex"});
        } catch (error) {
            // if(error.response.status === 422){
            //     error.value = error.response.data.error;
            // }
        }
    }
    const update = async (id) => {
        try {
            console.log(show.value)
            let formData = new FormData();
            formData.append('name', show.name);
            formData.append('email', show.email);
            formData.append('gender', show.gender);
            formData.append('skills', show.skills);
            formData.append('image', show.image,show.name);
            await axios.put("simple/" + id, formData, show.value, {
                headers: {
                    'Content-Type': `multipart/form-data`
                }
            });
            // await router.push({name: "CrudIndex"});
        } catch (error) {
            // if (error.response.status == 422) {
            //     error.value = error.response.data.error;
            // }
            
        }
    }
    const destroy = async (id) => {
        if (!window.confirm("Are you sure?")) {
            return;
        }
        await axios.delete("simple/" + id);
        await getIndex();
    }
    return{
        index,
        show,
        getIndex,
        getShow,
        store,
        update,
        destroy,
        error,
    };
}