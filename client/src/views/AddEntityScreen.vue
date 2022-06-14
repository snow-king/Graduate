<template>
    <div class="flex-col justify-between  min-h-screen bg-eveningSea">
        <Header />
        <div class="flex justify-center items-center my-10">
            <div class="flex flex-col item-content w-full max-w-screen-xl ">
                <div
                    class="flex justify-center items-center text-xl font-bold bg-observatory text-white py-2 rounded-t-md border-b-2 border-b-eveningSea">
                    Добавление {{title}}
                </div>
               <AddGraduate v-if="title=='выпускников'"/>
               <AddCompany v-if="title=='предприятий'"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Header from "../components/Header/Header.vue";
import AddGraduate from "../components/AddEntity/AddGraduate.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
import AddCompany from "../components/AddEntity/AddCompany.vue";
const route = useRoute()
const title= ref("")
console.log(route.params.entity)
const getTitle = ()=>{
    switch (route.params.entity) {
    case "graduates":
        title.value = "выпускников"
        break;
    case "company":
        title.value = "предприятий" 
        break;   
    }
}
getTitle()
</script>

<style scoped>
</style>