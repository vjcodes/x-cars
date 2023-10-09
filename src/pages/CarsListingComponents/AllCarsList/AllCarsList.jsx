import { useState, useEffect } from "react";
import "./allCarsList.scss";
import CarTypeFilters from "./CarTypeFilter/CarTypeFilters";
import { useDispatch, useSelector } from "react-redux";
import { getTypeCarsList } from "../../../store/slices/CarsTypeListSlice";
import CarsCardList from "../CarsCardList/CarsCardList";

const carTypeFilters = [
  {
    id: 1,
    label: "View all",
    isActive: true,
    type: "",
    styleId: "btn-reset",
  },
  {
    id: 2,
    label: "Sedan",
    isActive: false,
    type: "sedan",
    styleId: "btn-sedan",
  },
  {
    id: 3,
    label: "SUV",
    isActive: false,
    type: "SUV",
    styleId: "btn-suv",
  },
  {
    id: 4,
    label: "Hatchback",
    isActive: false,
    type: "hatchback",
    styleId: "btn-hatchback",
  },
  {
    id: 5,
    label: "Coupe",
    isActive: false,
    type: "coupe",
    styleId: "btn-coupe",
  },
];

function AllCarsList() {
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState({
    id: 1,
    label: "View all",
    isActive: true,
    type: "viewall",
    styleId: "btn-reset",
  });

  const typeCarsList = useSelector((state) => {
    return state.typeCars;
  });

  useEffect(() => {
    dispatch(getTypeCarsList(carTypeFilters[0].type));
  }, []);

  const onClickFilter = (item) => {
    setActiveFilter(item);
    dispatch(getTypeCarsList(item.type));
  };

  return (
    <div className="all-cars-list-parent-container">
      <CarTypeFilters
        carTypeFilters={carTypeFilters}
        activeFilter={activeFilter}
        onClickFilter={onClickFilter}
      />

      {!typeCarsList.loading && typeCarsList.typeCars && (
        <h3
          style={{ marginLeft: "2%" }}
        >{`${typeCarsList.typeCars.length} total results`}</h3>
      )}
      <CarsCardList carsListState={typeCarsList} />
    </div>
  );
}

export default AllCarsList;
