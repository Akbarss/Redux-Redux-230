import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../redux/feateres/crud/crudSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
});
