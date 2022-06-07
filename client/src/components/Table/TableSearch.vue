<template>

  <div class="flex justify-end pt-5 ">
    <div class="h-min flex-col px-2 justify-center ">
      <button class="bg-corn rounded-md m-1 p-2.5 text-white text-bold h-max hover:bg-California" @click="toggleModal">
        фильтры
      </button>
    </div>
    <div>
      <label for="table-search" class="sr-only">Search</label>
      <div class="relative mt-1">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-5 h-5 text-gray dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"></path>
          </svg>
        </div>
        <input type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5 "
          placeholder="Search for items" v-model="inputValue">
      </div>
    </div>
  </div>
  <CardModal v-model:showing="modalShowing" @close="toggleModal">
    <h2 class="text-xl font-bold text-gray-900">Пожалуйста выберете фильтры</h2>
    <div class="grid grid-cols-1 my-4 text-lg">
      <label class="inline-flex items-center justify-between mr-3 my-1" v-for="filter in filters">
        <span class="mr-2 text-bold">{{ filter.name }}</span>
        <div class="flex justify-center" v-if="filter.type == 'toggle'">
          <div v-for="valueFilter in filter.list">
            <input class="form-radio  appearance-none rounded-full h-4 w-4 border border-gray 
              bg-white checked:bg-California checked:border-California focus:outline-none 
              transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left px-2 cursor-pointer"
              type="radio" :value=valueFilter v-model=filter.currentElement>
            <label class="px-2 inline-block text-gray-800" for="inlineRadio10">{{ valueFilter }}</label>
          </div>

        </div>
        <SelectInput v-if="filter.type == 'list'" v-model:data="filter.list"
          v-model:currentElement="filter.currentElement" />
      </label>
    </div>
    <button class="bg-corn text-white px-4 py-2  text-sm uppercase tracking-wide font-bold rounded-lg"
      @click="modalShowing = !modalShowing">
      submit
    </button>
  </CardModal>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import CardModal from '../CardModal.vue'
import SelectInput from './SelectInput.vue'
const props = defineProps({
  inputValue: String,
  filters: {
    type: [Object],
    value: [{
      id: String,
      name: String,
      check: Boolean,
      list: [String],
      company: [String],
      currentElement: String
    }]
  }
});
const emit = defineEmits(['update:inputValue', 'update:filters'],)
const inputValue = computed({
  get: () => props.inputValue,
  set: (value) => emit('update:inputValue', value)
})
const filters = computed({
  get: () => props.filters,
  set: (value) => emit('update:filters', value)
})
const modalShowing = ref(false)
function toggleModal() {
  modalShowing.value = !modalShowing.value
}

</script>

<style>
.form-checkbox,
.form-radio {
  color: #F29F05;
}

.form-checkbox:focus,
.form-radio:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,
      /*!*/
      /*!*/
    );
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #F29F05;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
</style>