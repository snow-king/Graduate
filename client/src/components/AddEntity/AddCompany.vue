<template>
    <div class="flex-col justify-center bg-white py-6">
        <div class="flex justify-center pb-2">
            <button @click=""
                class="bg-corn hover:bg-California text-white font-bold py-2 px-4 mx-3 rounded-md focus:outline-none hover:drop-shadow-inner-lg focus:border-black-1 drop-shadow-md">
                создать 
            </button>
            <p class="font-bold p-2 ">Или изменить текущую</p>
           <SelectInput />
        </div>

    <hr class=" border-eveningSea m-2 shadow-md">
    </div>
</template>

<script setup lang="ts">
import SelectInput from "../SelectInput.vue";
</script>

<style scoped>
</style>