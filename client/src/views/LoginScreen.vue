<template>
  <div class="flex justify-center items-center h-screen bg-eveningSea">
    <div class="w-full max-w-sm">
      <div class="bg-observatory flex items-center justify-center drop-shadow-lg rounded-t-lg py-5">
        <GraduateLogo width="350" height="50" />
      </div>
      <form class="bg-white shadow-lg-inner rounded-b-lg  px-8 pt-6 pb-8 mb-4 ">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Логин
          </label>
          <input
            class="shadow-md appearance-none bg-gray rounded-lg w-full  py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline "
            id="username" type="text" placeholder="логин" v-model="login">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password" >
            Пароль
          </label>
          <input
            class="shadow-md appearance-none bg-gray rounded-lg w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="******************"
            v-model = "password">
        </div>
        <div class="flex items-center justify-center">
          <button
            class="bg-corn hover:bg-California text-white font-bold py-2 px-7 rounded focus:outline-none hover:drop-shadow-inner-lg focus:border-black-1 drop-shadow-md"
            type="button"
            @click="loginUser"
            >
            SIGN IN
          </button>
        </div>
      </form>
      <p class="text-center text-white text-xs">
        &copy;2022 ИрГУПС. Все права защищены.
      </p>
    </div>
  </div>

</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref } from "vue";
import GraduateLogo from "../components/icons/GraduateLogo.vue";
import {useUserStore} from "../stores/useUserStore"
import { useRouter, useRoute } from 'vue-router'
import { UserLoggedIn } from "@/services/user";

const router = useRouter()

const login = ref('')
const password = ref('')

const userStore = useUserStore();



const loginUser = async () =>{
  await userStore.signin(login.value, password.value)
  if (userStore.user.token){
     router.push("/")
   } 
}
</script>

<style>
</style>