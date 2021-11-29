import { createSlice } from "@reduxjs/toolkit";

const activeUserSlice = createSlice({
  name: "activeUser",
  initialState: {
    token: localStorage.getItem("token"),
    user: null,
  },
  reducers: {
    setActiveUser(state, { payload }) {
      state.user = payload;
    },
    setToken(state, { payload }) {
      state.token = payload;
    },
  },
});

export default activeUserSlice.reducer;

export const { setActiveUser, setToken } = activeUserSlice.actions;
