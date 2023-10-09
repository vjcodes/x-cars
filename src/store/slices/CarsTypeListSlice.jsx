import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTypeCarsList = createAsyncThunk(
  "typeCarsList",
  async (type) => {
    const username = "Hasher";
    const password = "L#(qc{f}TaJu4%4k";
    try {
      const response = await axios.get(
        `https://hu-22-react-mockapi-urtjok3rza-wl.a.run.app/cars/${type}`,
        {
          auth: {
            username: username,
            password: password,
          },
        }
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const typeCarsListSlice = createSlice({
  name: "typeCarsList",
  initialState: {
    typeCars: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getTypeCarsList.pending]: (state) => {
      state.loading = true;
    },
    [getTypeCarsList.fulfilled]: (state, action) => {
      state.loading = false;
      state.typeCars = action.payload.data;
    },
    [getTypeCarsList.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.payload.message;
    },
  },
});

export default typeCarsListSlice.reducer;
