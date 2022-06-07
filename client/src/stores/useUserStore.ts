import { UserLoggedIn } from "@/services/user";
import { defineStore } from "pinia";

export const useUserStore = defineStore({
    id: "user",
    state: ()=>({
        user : {
            name: '',
            lastName: '',
            surname: '',
            token: '',
        }   
    }),
    persist: true,
    // getters: {
    //     FIO: (state) => `${state.user.name}`
    // },
    actions:{
        async signin (login: string, password: string){
            this.user = await UserLoggedIn(login, password);
        },
        exitSystem(){
            this.user = {
                name: '',
                lastName: '',
                surname: '',
                token: '',
            }   
        }
    },
})