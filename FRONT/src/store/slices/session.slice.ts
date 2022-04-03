import { createSlice } from "@reduxjs/toolkit";
import { login } from "../thunks/session.thunk";

interface SessionState {
  accessToken: string;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';

}

const initialState: SessionState = {
  accessToken: "",
  loading: 'idle'
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(login.fulfilled, (state, action) => {
      state.loading = 'succeeded'
      state.accessToken =  action.payload.access_token
    })
    .addCase(login.pending, (state) => {
      state.loading = 'pending'
    })
    .addCase(login.rejected, (state) => {
      state.loading = 'failed'
    })
  }
});

export const { } = sessionSlice.actions;

export const SessionReducer = sessionSlice.reducer;
