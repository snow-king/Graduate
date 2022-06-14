import type { UserDto } from "@/dto/user.dto";
import axios from "Axios";
const baseUrl = import.meta.env.VITE_BACKEND_URL

export const UserLoggedIn =  async (
  login: string,
  password: string,
): Promise<{ name: string; lastName: string; surname: string; token?: string; }> => {
  console.log(import.meta.env)
  console.log(baseUrl)
  const token = await axios.post(` ${baseUrl}auth/signin `, {
    email: login,
    password: password,
  }).then((response) => response.data.access_token)
  console.log(login, password)
  console.log(token)
  return {
    name: "Роман",
    lastName: "Гайбадулов",
    surname: "Константинович",
    token: token,
  };
};
