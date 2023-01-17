import { ref } from "vue";
import axios from "axios";
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
            await axios.post("simple", data);
            await router.push({name: "CrudIndex"});
        } catch (error) {
            if(error.response.status === 422){
                error.value = error.response.data.error;
            }
        }
    }
    const update = async (id) => {
        try {
            await axios.put("simple/" + id, show.value)
            await router.push({name: "CrudIndex"});
        } catch (error) {
            if (error.response.status == 422) {
                error.value = error.response.data.error;
            }
            
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