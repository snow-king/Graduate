import { useUserStore } from "@/stores/useUserStore";
import LoginScreen from "@/views/LoginScreen.vue";
import TableScreen from "@/views/TableScreen.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: LoginScreen,
    },
    {
      path: "/",
      name: "mainTable",
      component: TableScreen
    }
  ],
});
router.beforeEach(async (to, from) => {
  const userStore = useUserStore()
  if (
    // make sure the user is authenticated
    !userStore.user.token &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'Login'
  ) {
    // redirect the user to the login page
    return { name: 'Login' }
  }
})


export default router;
