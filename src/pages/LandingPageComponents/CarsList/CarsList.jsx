import { useEffect, useState } from "react";
import "./CarsList.scss";
import carBanner from "../../../assets/mercedes.jpg";
import arrow from "../../../assets/arrow.svg";
import CarCard from "../../../SharedComponents/CarCard/CarCard";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import { getAllCarsList } from "../../../store/slices/CarsListSlice";

const carFilters = [
  {
    id: 1,
    label: "Popular",
    isActive: true,
  },
  {
    id: 2,
    label: "Just Started",
    isActive: false,
  },
  {
    id: 3,
    label: "Upcoming",
    isActive: false,
  },
];

function CarsList() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCarsList());
  }, []);

  const carsList = useSelector((state) => {
    return state.carsList;
  });

  const [activeFilter, setActiveFilter] = useState(1);
  const onClickFilter = (id) => {
    setActiveFilter(id);
  };
  return (
    <div className="cars-list-container">
      <div className="banner">
        <img style={{ width: "100%", height: "100%" }} src={carBanner} />
        <div className="banner-text" id="lbl-header">
          FIND YOUR DREAM CAR
        </div>
        <div className="inputWithButton" id="srch-area">
          <input className="search-input" type="text" id="srch-area" />
          {/* <button className="search-btn">Search</button> */}
        </div>
      </div>

      <div className="list-section">
        <div className="featured-cars-heading">
          Featured <span id="cars-bold">Cars</span>
        </div>

        <div className="cars-list-filter-section">
          <div className="car-types-filter" id="btn-filter">
            {carFilters.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`individual-filter ${
                    activeFilter === item.id ? "active-filter" : ""
                  }`}
                  onClick={() => onClickFilter(item.id)}
                >
                  {item.label}
                </div>
              );
            })}
          </div>

          <div
            className="view-all"
            onClick={() => {
              navigate("/car-listing");
            }}
            id="btn-view-all"
          >
            <span id="view-more-text">View all</span>
            <img src={arrow} />
          </div>
        </div>
        {carsList?.cars && (
          <div className="cars-list">
            {carsList?.loading && (
              <div className="loader-container">
                <CircularProgress />
              </div>
            )}
            {carsList?.error && <div>{carsList?.error}</div>}
            {carsList?.cars &&
              !carsList?.loading &&
              carsList?.cars?.map((item) => {
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
        )}
      </div>
    </div>
  );
}

export default CarsList;
