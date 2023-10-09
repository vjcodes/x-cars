import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCarDetails = createAsyncThunk("carDetails", async (carId) => {
  const username = "Hasher";
  const password = "L#(qc{f}TaJu4%4k";
  try {
    const response = await axios.get(
      `https://hu-22-react-mockapi-urtjok3rza-wl.a.run.app/cars/details/${carId}`,
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

export const carDetailsSlice = createSlice({
  name: "carDetails",
  initialState: {
    carDetails: {},
    loading: false,
    error: null,
  },
  extraReducers: {
    [getCarDetails.pending]: (state) => {
      state.loading = true;
    },
    [getCarDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.carDetails = action.payload.data;
    },
    [getCarDetails.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.payload.message;
    },
  },
});

export default carDetailsSlice.reducer;
