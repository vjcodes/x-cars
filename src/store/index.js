import { configureStore } from "@reduxjs/toolkit";
import {carsListSlice} from "./slices/CarsListSlice";
import { typeCarsListSlice } from "./slices/CarsTypeListSlice";
import { carDetailsSlice } from "./slices/CarDetailsSlice";

const store = configureStore({
  reducer: {
    carsList: carsListSlice.reducer,
    typeCars: typeCarsListSlice.reducer,
    carSpecifications: carDetailsSlice.reducer,
  },
});

export default store;
