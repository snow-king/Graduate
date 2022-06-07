<template>
   <header class="bg-observatory max-h-20 shadow-lg shadow-eveningSea py-2  relative grid grid-cols-3 w-full justify-between z-10">
        <div class="pl-5 py-2">
            
               <button class="menu" 
               onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))" 
                @click="open = !open"
               aria-label="Main Menu">
                <svg width="32" height="32" viewBox="0 0 100 100">
                    <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path class="line line2" d="M 20,50 H 80" />
                    <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
                </button>
        </div>
        <div class="text-white font-bold flex justify-center">
            <GraduateLogo width="300" height="40" />
        </div>
        <!-- <button>
            exit
        </button> -->
    </header>

    <div class="w-60 h-screen shadow-md slideRight  bg-observatory absolute z-1" :class="{'table': open, 'hidden': !open}">
        <div class="pt-4 pb-2 px-6">
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
                    {{user.name}}
                    {{user.surname}}
                    {{user.lastName}}
                </p>
                </div>
            </div>
            </a>
        </div>
    <hr class=" border-California m-2 shadow-md">
    <ul class="relative px-1">
        <li class="relative">
        <a class="flex items-center text-m py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-eveningSea transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
            <svg width="46" height="46" viewBox="0 0 46 46" class="w-5 h-5 mr-3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 5.75C0 4.22501 0.605802 2.76247 1.68414 1.68414C2.76247 0.605802 4.22501 0 5.75 0L40.25 0C41.775 0 43.2375 0.605802 44.3159 1.68414C45.3942 2.76247 46 4.22501 46 5.75V40.25C46 41.775 45.3942 43.2375 44.3159 44.3159C43.2375 45.3942 41.775 46 40.25 46H5.75C4.22501 46 2.76247 45.3942 1.68414 44.3159C0.605802 43.2375 0 41.775 0 40.25V5.75ZM43.125 11.5H31.625V20.125H43.125V11.5ZM43.125 23H31.625V31.625H43.125V23ZM43.125 34.5H31.625V43.125H40.25C41.0125 43.125 41.7438 42.8221 42.2829 42.2829C42.8221 41.7438 43.125 41.0125 43.125 40.25V34.5ZM28.75 43.125V34.5H17.25V43.125H28.75ZM14.375 43.125V34.5H2.875V40.25C2.875 41.0125 3.1779 41.7438 3.71707 42.2829C4.25624 42.8221 4.9875 43.125 5.75 43.125H14.375ZM2.875 31.625H14.375V23H2.875V31.625ZM2.875 20.125H14.375V11.5H2.875V20.125ZM17.25 11.5V20.125H28.75V11.5H17.25ZM28.75 23H17.25V31.625H28.75V23Z" fill="white"/>
            </svg>

            <span>Общая таблица</span>
        </a>
        </li>
        <li class="relative" id="sidenavSecEx2">
        <a class="flex items-center text-m py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-eveningSea transition duration-300 ease-in-out cursor-pointer collapsed" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavSecEx2" aria-expanded="false" aria-controls="collapseSidenavSecEx2">
            <svg width="46" height="46" viewBox="0 0 46 46" class="w-5 h-5 mr-3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.1668 36.4167V17.25C42.1668 16.2333 41.763 15.2583 41.0441 14.5394C40.3252 13.8205 39.3502 13.4167 38.3335 13.4167H25.3692C24.6571 13.4166 23.9592 13.2183 23.3535 12.8439C22.7479 12.4695 22.2585 11.9338 21.9402 11.2968L20.2267 7.86983C19.9083 7.23261 19.4186 6.69671 18.8126 6.32228C18.2066 5.94784 17.5083 5.74967 16.7959 5.75H7.66683C6.65017 5.75 5.67514 6.15387 4.95625 6.87276C4.23736 7.59165 3.8335 8.56667 3.8335 9.58333V36.4167C3.8335 37.4333 4.23736 38.4084 4.95625 39.1272C5.67514 39.8461 6.65017 40.25 7.66683 40.25H38.3335C39.3502 40.25 40.3252 39.8461 41.0441 39.1272C41.763 38.4084 42.1668 37.4333 42.1668 36.4167Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23 26.8333H17.25M23 21.0833V26.8333V21.0833ZM23 26.8333V32.5833V26.8333ZM23 26.8333H28.75H23Z" stroke="white" stroke-width="3" stroke-linecap="round"/>
            </svg>

            <span>Добавление</span>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
            </svg>
        </a>
        <ul class="relative accordion-collapse collapse" id="collapseSidenavSecEx2" aria-labelledby="sidenavSecEx2" data-bs-parent="#sidenavSecExample">
            <li class="relative">
            <a href="#!" class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-eveningSea transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Выпускники</a>
            </li>
            <li class="relative">
            <a href="#!" class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-eveningSea transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Компании</a>
            </li>
        </ul>
        </li>
        <li class="relative" id="sidenavSecEx3">
        <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavSecEx3" aria-expanded="false" aria-controls="collapseSidenavSecEx3">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"></path>
            </svg>
            <span>Collapsible item 2</span>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
            </svg>
        </a>
        <ul class="relative accordion-collapse collapse" id="collapseSidenavSecEx3" aria-labelledby="sidenavSecEx3" data-bs-parent="#sidenavSecExample">
            <li class="relative">
            <a href="#!" class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Link 3</a>
            </li>
            <li class="relative">
            <a href="#!" class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Link 4</a>
            </li>
        </ul>
        </li>
    </ul>
    <div class="text-center bottom-0 absolute w-full">
        <hr class="m-0 border-white mx-2">
        <p class="py-2 text-sm text-white">irgups.com</p>
    </div>
    </div>
</template>

<script setup lang="ts"> 
import GraduateLogo from '../icons/GraduateLogo.vue';
import { ref } from 'vue'
import {useUserStore} from "../../stores/useUserStore"
import { storeToRefs } from "pinia";

const open = ref(false)
const userStore = useUserStore()
const {user} = storeToRefs(userStore)
console.log(user)

</script>

<style lang="sass">
.menu 
  background-color: transparent
  border: none
  cursor: pointer
  display: flex
  padding: 0

.line 
  fill: none
  stroke: #F2F2F2
  stroke-width: 6
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)

.line1 
  stroke-dasharray: 60 207
  stroke-width: 6

.line2 
  stroke-dasharray: 60 60
  stroke-width: 6

.line3 
  stroke-dasharray: 60 207
  stroke-width: 6

.opened .line1 
  stroke-dasharray: 90 207
  stroke-dashoffset: -134
  stroke-width: 6

.opened .line2 
  stroke-dasharray: 1 60
  stroke-dashoffset: -30
  stroke-width: 6

.opened .line3 
  stroke-dasharray: 90 207
  stroke-dashoffset: -134
  stroke-width: 6

.slideRight
    animation-name: slideRight
    -webkit-animation-name: slideRight
    animation-duration: 0.5s
    -webkit-animation-duration: 0.5s
    animation-timing-function: ease-in-out
    -webkit-animation-timing-function: ease-in-out     
    visibility: visible !important

@keyframes slideRight 
    0%
        transform: translateX(-150%)        
    100% 
        transform: translateX(0%)
     
 
@-webkit-keyframes slideRight 
    0% 
        -webkit-transform: translateX(-150%)         
    100% 
        -webkit-transform: translateX(0%)

.hidden
    animation-name: slideLeft 
    -webkit-animation-name: slideLeft
    animation-duration: 0.5s
    -webkit-animation-duration: 0.5s
    animation-timing-function: ease
    -webkit-animation-timing-function: ease 
    visibility: visible !important
    display: none

@keyframes slideLeft
    0%
        transform: translateX(0%)        
    100% 
        transform: translateX(-150%)
     
 
@-webkit-keyframes slideLeft
    0% 
        -webkit-transform: translateX(0)         
    100% 
        -webkit-transform: translateX(-150%)
</style>