import type { UserDto } from "@/dto/user.dto";
import axios from "Axios";


export const UserLoggedIn =  async (
  login: string,
  password: string,
): Promise<{ name: string; lastName: string; surname: string; token: string; }> => {
  // const response = axios.post(` ${baseUrl}/auth/signup `, {
  //   email: login,
  //   password: password,
  // });
  console.log(login, password)
  return {
    name: "Роман",
    lastName: "Гайбадулов",
    surname: "Константинович",
    token: "1234567890",
  };
};
