import { createAsyncThunk } from "@reduxjs/toolkit";
import { SessionApi } from "../../api/session.api";
import { Login } from "../../models/login.model";

export const login = createAsyncThunk("session/login", async (login: Login) => {
  return SessionApi.login(login);
});
