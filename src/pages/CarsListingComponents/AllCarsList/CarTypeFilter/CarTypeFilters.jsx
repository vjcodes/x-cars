import "./carTypeFilter.scss";

function CarTypeFilters({ carTypeFilters, activeFilter, onClickFilter }) {
  return (
    <div className="cars-list-filter-section">
      <div className="car-types-filter">
        {carTypeFilters?.map((item, index) => {
          return (
            <div
              key={index}
              className={`individual-filter ${
                activeFilter.id === item.id ? "active-filter" : ""
              }`}
              onClick={() => onClickFilter(item)}
              id={item?.styleId}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CarTypeFilters;
