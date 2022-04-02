import { createStandaloneToast } from "@chakra-ui/react";
import Axios, { AxiosError, AxiosInstance } from "axios";
import { store } from "../store";

export default function getInstance(): AxiosInstance {
  const state = store.getState();

  const { accessToken } = state.session;

  const axiosInstance = Axios.create({
    baseURL: "http://localhost:5000",
    timeout: 30000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      const status = error?.response?.status;

      if (status === 401) {
        // store.dispatch(closeModal())
        // store.dispatch(resetSession())
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}

export function handleSessionError(err: AxiosError | unknown): boolean {
  const toast = createStandaloneToast();

  if ((err as AxiosError)?.response?.status === 401) {
    toast({
      title: "Session Expired",
      description: "Your session is expired, please sign in again",
      status: "warning",
      duration: 4500,
      isClosable: true,
    });

    return true;
  }
  return false;
}
