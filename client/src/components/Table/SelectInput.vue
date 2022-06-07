<template>
  <div>
    <input
    class="rounded-md border border-gray shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray focus:ring-California" 
    v-model="currentElement"
    @focus="show= true"
    @blur ="show= false"
    />
    <Transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
    <ul v-if="show"
        class="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray focus:outline-none"
    >
        <li v-for="el in filteredList" class="px-4 py-2 focus:bg" @click="currentElement=el">
            {{el}}
        </li>
        <li v-if="!filteredList.length" class="px-4 py-2 focus:bg">
          не найдено
        </li>
    </ul>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
const show = ref(false)
const emit = defineEmits(['update:currentElement'],)
const props = defineProps ({
    data: {
        type: Array,
        required: true,
        value: String
        },
    currentElement: String
})
const currentElement = computed({
  get: () => props.currentElement,
  set: (value) => emit('update:currentElement', value)
})
const filteredList= computed<String>(():any=>{
  return props.data.filter((el: any) => el.includes(currentElement.value));
}) 
</script>

<style scoped>

</style>