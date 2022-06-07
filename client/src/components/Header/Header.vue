<template>
  <nav class="grid grid-cols-3 w-full items-center justify-between px-4 h-12 bg-observatory text-gray-700   z-10">
    <div class="flex items-center">
      <button class="mr-2" aria-label="Open Menu" @click="drawer">
        <svg width="30" height="30" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.9375 13.5469H43.0625M8.9375 39.0469H43.0625H8.9375ZM8.9375 26.2969H43.0625H8.9375Z"
            stroke="#FCFBFB" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

      </button>
    </div>
    <div class="text-white font-bold flex justify-center">
      <GraduateLogo width="300" height="30" />
    </div>
    <Transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
      leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
      <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
        <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
      </div>
    </Transition>
    <aside
      class="transform top-0 left-0 w-64 bg-observatory fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
      <span @click="isOpen = false" class="flex w-full items-center p-4 ">
        <div class="pt-1 pb-1 px-2">
          <a href="#!">
            <div class="flex items-center">
              <div class="shrink-0">
                <svg width="30" height="30" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.25 9.71053C10.25 15.0643 14.8488 19.4211 20.5 19.4211C26.1512 19.4211 30.75 15.0643 30.75 9.71053C30.75 4.35679 26.1512 0 20.5 0C14.8488 0 10.25 4.35679 10.25 9.71053ZM38.7222 41H41V38.8421C41 30.5148 33.8455 23.7368 25.0556 23.7368H15.9444C7.15222 23.7368 0 30.5148 0 38.8421V41H38.7222Z"
                    fill="#FFFEFE" />
                </svg>
              </div>
              <div class="grow ml-3 pl-3">
                <p class="text-sm font-semibold text-white ">
                  {{ user.name }}
                  {{ user.surname }}
                  {{ user.lastName }}
                </p>
              </div>
            </div>
          </a>
        </div>
      </span>
      <hr class=" border-California m-2 shadow-md">
      <ul class="relative px-1">
        <li class="relative">
          <a class="flex items-center text-m py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-eveningSea transition duration-300 ease-in-out"
            href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
            <svg width="46" height="46" viewBox="0 0 46 46" class="w-5 h-5 mr-3" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 5.75C0 4.22501 0.605802 2.76247 1.68414 1.68414C2.76247 0.605802 4.22501 0 5.75 0L40.25 0C41.775 0 43.2375 0.605802 44.3159 1.68414C45.3942 2.76247 46 4.22501 46 5.75V40.25C46 41.775 45.3942 43.2375 44.3159 44.3159C43.2375 45.3942 41.775 46 40.25 46H5.75C4.22501 46 2.76247 45.3942 1.68414 44.3159C0.605802 43.2375 0 41.775 0 40.25V5.75ZM43.125 11.5H31.625V20.125H43.125V11.5ZM43.125 23H31.625V31.625H43.125V23ZM43.125 34.5H31.625V43.125H40.25C41.0125 43.125 41.7438 42.8221 42.2829 42.2829C42.8221 41.7438 43.125 41.0125 43.125 40.25V34.5ZM28.75 43.125V34.5H17.25V43.125H28.75ZM14.375 43.125V34.5H2.875V40.25C2.875 41.0125 3.1779 41.7438 3.71707 42.2829C4.25624 42.8221 4.9875 43.125 5.75 43.125H14.375ZM2.875 31.625H14.375V23H2.875V31.625ZM2.875 20.125H14.375V11.5H2.875V20.125ZM17.25 11.5V20.125H28.75V11.5H17.25ZM28.75 23H17.25V31.625H28.75V23Z"
                fill="white" />
            </svg>

            <span>Общая таблица</span>
          </a>
        </li>
       <HeaderItem mainElement="Добавление" :subElements="['Студенты', 'Предприятия']"></HeaderItem>
      </ul>
      <div class="text-center bottom-0 absolute w-full">
        <hr class=" border-California m-2 shadow-md">
        <p class="py-2 text-sm text-white">irgups.com</p>
      </div>
    </aside>
  </nav>
</template>

<script setup lang="ts">
import GraduateLogo from '../icons/GraduateLogo.vue';
import { ref, watch } from 'vue'
import { useUserStore } from "../../stores/useUserStore"
import { storeToRefs } from "pinia";
import HeaderItem from "./HeaderItem.vue";
const toggleMenu = ref(false)
const isOpen = ref(false)
const userStore = useUserStore()
const { user } = storeToRefs(userStore)

const drawer = () => {
  isOpen.value = !isOpen.value;
}
</script>

<style lang="sass">

</style>