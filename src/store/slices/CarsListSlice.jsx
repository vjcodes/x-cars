import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCarsList = createAsyncThunk("carsList", async () => {
  const username = "Hasher";
  const password = "L#(qc{f}TaJu4%4k";
  try {
    const response = await axios.get(
      "https://hu-22-react-mockapi-urtjok3rza-wl.a.run.app/cars",
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
});

export const carsListSlice = createSlice({
  name: "carsList",
  initialState: {
    cars: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getAllCarsList.pending]: (state) => {
      state.loading = true;
    },
    [getAllCarsList.fulfilled]: (state, action) => {
      state.loading = false;
      state.cars = action.payload.data;
    },
    [getAllCarsList.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.payload.message;
    },
  },
});

export default carsListSlice.reducer;
