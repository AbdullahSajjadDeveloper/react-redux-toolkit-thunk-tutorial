import { configureStore } from "@reduxjs/toolkit";
import counterAndApiSliceReducer from "../Reducers/counterAndApiSlice";

const store = configureStore({
  reducer: {
    fetchApi: counterAndApiSliceReducer,
  },
});

export default store;
