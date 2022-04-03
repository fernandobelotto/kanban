import getInstance from ".";
import { Login } from "../models/login.model";

export class SessionApi {
  static async login(body: Login) {
    const axiosInstance = getInstance();
    const { data } = await axiosInstance.post("/login", body);
    return data;
  }
}
