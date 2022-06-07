<template>
    <li class="relative">
        <a class="flex items-center text-m py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-eveningSea transition duration-300 ease-in-out cursor-pointer collapsed"
            @click="toggleMenu = !toggleMenu">
            <svg width="46" height="46" viewBox="0 0 46 46" class="w-5 h-5 mr-3" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M42.1668 36.4167V17.25C42.1668 16.2333 41.763 15.2583 41.0441 14.5394C40.3252 13.8205 39.3502 13.4167 38.3335 13.4167H25.3692C24.6571 13.4166 23.9592 13.2183 23.3535 12.8439C22.7479 12.4695 22.2585 11.9338 21.9402 11.2968L20.2267 7.86983C19.9083 7.23261 19.4186 6.69671 18.8126 6.32228C18.2066 5.94784 17.5083 5.74967 16.7959 5.75H7.66683C6.65017 5.75 5.67514 6.15387 4.95625 6.87276C4.23736 7.59165 3.8335 8.56667 3.8335 9.58333V36.4167C3.8335 37.4333 4.23736 38.4084 4.95625 39.1272C5.67514 39.8461 6.65017 40.25 7.66683 40.25H38.3335C39.3502 40.25 40.3252 39.8461 41.0441 39.1272C41.763 38.4084 42.1668 37.4333 42.1668 36.4167Z"
                    stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M23 26.8333H17.25M23 21.0833V26.8333V21.0833ZM23 26.8333V32.5833V26.8333ZM23 26.8333H28.75H23Z"
                    stroke="white" stroke-width="3" stroke-linecap="round" />
            </svg>

            <span>{{mainElement}}</span>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto " role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" :class="{ 'rotate-180': toggleMenu }">
                <path fill="currentColor"
                    d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z">
                </path>
            </svg>
        </a>
        <Transition name="slide-dropdown" >
            <ul class="relative accordion-collapse collapse transition duration-150 ease-in-out "
                v-if="toggleMenu">
                <li class="relative" v-for="subElement in subElements">
                    <a href="#!"
                        class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-eveningSea transition duration-300 ease-in-out"
                        data-mdb-ripple="true" data-mdb-ripple-color="primary">{{subElement}}</a>
                </li>
            </ul>
        </Transition>

    </li>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue';
const props = defineProps ({
    mainElement: String,
    subElements: Array as PropType<Array<String>>,
})
const toggleMenu = ref(false)
</script>

<style scoped>
.slide-dropdown-enter-active {
    animation: translateX 0.5s;
}

.slide-dropdown-leave-active {
   animation: translateX 0.5s reverse;
}

@keyframes  translateX{
  0% {
    opacity: 0;
    transform: translateX(60px);
  }
  
  80% {
    transform: translateX(-5px);
  }

  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>