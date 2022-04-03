import { Login } from "../models/login.model";

export const loginConfig: Login = {
  login: process.env.REACT_APP_LOGIN || "",
  password: process.env.REACT_APP_PASSWORD || "",
};
