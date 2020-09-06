import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchApi = createAsyncThunk(
  "fetching/toneNetworksApi",
  async (data, thunkApi) => {
    const response = await fetch(
      "https://api1.dev-tonenetworks.com/v1/interests/getSubCategoriesByTitle/WORK"
    );
    return await response.json();
  }
);

const counterAndApiSlice = createSlice({
  name: "counterAndApiSlice",
  initialState: {
    counter: 0,
    fetchedApiValues: 0,
  },
  reducers: {
    increment: (state) => {
      state.counter = state.counter + 1;
    },
    decrement: (state) => {
      state.counter = state.counter - 1;
    },
    reset: (state) => {
      state.counter = 0;
    },
  },
  extraReducers: {
    [fetchApi.fulfilled]: (state, action) => {
      state.fetchedApiValues = action.payload.data;
      console.log(state.fetchedApiValues);
    },
    [fetchApi.rejected]: (state, action) => {
      console.log("API Call Rejected!");
    },
    [fetchApi.pending]: (state, action) => {
      console.log("API Call Request In Progress!");
    },
  },
});

export default counterAndApiSlice.reducer;
export const { increment, decrement, reset } = counterAndApiSlice.actions;
export { fetchApi };
