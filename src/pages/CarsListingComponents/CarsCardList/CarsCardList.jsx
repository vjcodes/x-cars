import React from "react";
import { CircularProgress } from "@mui/material";
import CarCard from "../../../SharedComponents/CarCard/CarCard";
import "./carsCardList.scss";

function CarsCardList({ carsListState }) {
  return (
    <div className="cars-card-list-container">
      {carsListState.loading && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      )}

      {!carsListState.loading &&
        carsListState.typeCars.map((item, index) => {
          return (
            <CarCard
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              type={item.type}
            />
          );
        })}
    </div>
  );
}

export default CarsCardList;
