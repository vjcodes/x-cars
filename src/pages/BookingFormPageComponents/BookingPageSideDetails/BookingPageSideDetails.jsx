import "./bookingPageSideDetails.scss";
import arrow from "../../../assets/arrow.svg";
import { useNavigate } from "react-router-dom";

function BookingPageSideDetails({ carDetails, carid }) {
  const navigate = useNavigate();
  return (
    <div className="side-details-container" id="section-summary">
      <div className="car-details-heading">
        Car <span className="details-sub">Details</span>
      </div>

      <div className="car-image">
        <img className="image" src={carDetails.specifications.image} />
      </div>

      <div className="car-name" id="lbl-car-name">
        {carDetails.specifications.name}
      </div>

      <SubDetails
        styleId="lbl-fuel-type"
        label="Fuel Type"
        text={carDetails.specifications.fuel_type}
      />
      <SubDetails
        styleId="lbl-engine"
        label="Engine"
        text={`${carDetails.specifications.engine_cc} CC`}
      />

      <div
        className="view-all-details"
        onClick={() => navigate(`/car-details/${carid}`)}
        id="btn-view-details"
      >
        <h3>View all details</h3>
        <img src={arrow} />
      </div>
    </div>
  );
}

const SubDetails = ({ styleId, label, text }) => {
  return (
    <div className="sub-details-container" id={styleId}>
      <div className="sub-details-label">{label}</div>
      <div className="sub-details-text">{text}</div>
    </div>
  );
};

export default BookingPageSideDetails;
