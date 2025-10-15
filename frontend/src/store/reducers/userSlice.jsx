import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // single logged-in user
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUsers: (state, action) => {
      state.user = action.payload; // set user
    },
    removeUser: (state) => {
      state.user = null; // clear user
    },
  },
});

export const { loadUsers, removeUser } = userSlice.actions;
export default userSlice.reducer;
