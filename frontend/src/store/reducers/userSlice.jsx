import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // single logged-in user
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUsers: (state, action) => {
      state.user = action.payload; // direct object
    },
  },
});

export const { loadUsers } = userSlice.actions;
export default userSlice.reducer;
