import { useEffect } from "react";
import "./carSpecificationsContainer.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCarDetails } from "../../../store/slices/CarDetailsSlice";
import { useNavigate, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import progressBarOne from "../../../assets/progressBarOne.svg";
import progressBarTwo from "../../../assets/progressBarTwo.svg";
import progressBarThree from "../../../assets/progressBarThree.svg";

function CarSpecificationsContainer() {
  const dispatch = useDispatch();
  const { carid } = useParams();

  const carSpecs = useSelector((state) => {
    return state.carSpecifications;
  });

  useEffect(() => {
    dispatch(getCarDetails(carid));
  }, []);

  const SpecsHeader = ({ name }) => {
    return (
      <div className="specs-header">
        <h2 id="lbl-car-name">{name}</h2>
        <h2 className="specifications-header">Car Specifications</h2>
      </div>
    );
  };

  const SubDetails = ({ styleId, label, text, type = "text" }) => {
    return (
      <div className="sub-details-container" id={styleId}>
        <div className="sub-details-label">{label}</div>
        {type === "text" && <div className="sub-details-text">{text}</div>}
        {type === "list" && (
          <div className="sub-details-text">
            {text?.map((item) => {
              return <div>{item}</div>;
            })}
          </div>
        )}
        {type === "bullets" && (
          <div className="sub-details-text">
            {text?.map((item) => {
              return <li>{item}</li>;
            })}
          </div>
        )}
      </div>
    );
  };

  const SpecificationsDetails = ({ specifications }) => {
    return (
      <div id="lbl-desc">
        <SubDetails
          styleId="section-fuel"
          label="Fuel Type"
          text={specifications?.fuel_type}
        />
        <SubDetails
          styleId="section-engine"
          label="Engine"
          text={specifications?.engine_cc}
        />
        <SubDetails
          styleId="section-torque"
          label="Torque"
          text={specifications?.torque}
        />
        <SubDetails
          styleId="section-accel"
          label="Acceleration"
          text={specifications?.acceleration}
        />
        <SubDetails
          styleId="section-top-spd"
          label="Top Speed"
          text={specifications?.top_speed}
        />
        <SubDetails
          styleId="section-variants"
          label="Variants"
          text={specifications?.variant}
          type="list"
        />
      </div>
    );
  };

  const ExteriorDetails = ({ exteriors }) => {
    return (
      <div id="lbl-desc">
        <h2>Exteriors</h2>
        <div
          style={{
            height: "5rem",
            width: "10rem",
            backgroundColor: exteriors?.color,
            marginBottom: "8%",
          }}
        />
        <SubDetails
          styleId="section-exteriors"
          label="Exteriors"
          text={`This car measures ${exteriors?.length} in length and has a ${exteriors?.width} wheelbase.`}
        />
      </div>
    );
  };
  const InteriorsDetails = ({ interiors }) => {
    return (
      <div id="lbl-desc">
        <h2>Interior finishes</h2>
        <div
          style={{
            height: "5rem",
            width: "10rem",
            backgroundColor: interiors?.color,
            marginBottom: "8%",
          }}
        />
        <SubDetails
          styleId="section-interior"
          label=""
          text={interiors?.text}
          type="bullets"
        />
      </div>
    );
  };

  const DetailsSubSection = ({ carSpecs, type }) => {
    const specifications = carSpecs?.carDetails?.specifications;
    const exteriors = carSpecs?.carDetails?.exterior;
    const interiors = carSpecs?.carDetails?.interior;
    let progress = progressBarOne;
    let image = specifications?.image;
    let image2 = null;
    if (type === "exteriors") {
      image = exteriors?.image;
      progress = progressBarTwo;
    } else if (type === "interiors") {
      image = interiors?.image1;
      image2 = interiors?.image2;
      progress = progressBarThree;
    }

    return (
      <div className="details-sub-sections">
        <div id="prg-bar">
          <img src={progress} />
        </div>
        <div>
          <div className="car-image">
            <img
              id="img-car"
              src={image}
              alt="img"
              style={{ width: "80%", height: "20rem" }}
            />
          </div>
          {type === "interiors" && (
            <div className="car-image">
              <img
                id="img-car"
                src={image2}
                alt="img"
                style={{ width: "80%", height: "20rem" }}
              />
            </div>
          )}
        </div>

        {type === "specifications" && (
          <SpecificationsDetails specifications={specifications} />
        )}
        {type === "exteriors" && <ExteriorDetails exteriors={exteriors} />}
        {type === "interiors" && <InteriorsDetails interiors={interiors} />}
      </div>
    );
  };

  const Cost = ({ cost }) => {
    return (
      <div className="cost-submit-container" id="lbl-car-cost">
        <div className="cost">
          <h2 className="cost-label">Cost</h2>
          <h2 className="cost-amount">{cost}</h2>
        </div>
      </div>
    );
  };
  const Submit = () => {
    const navigate = useNavigate();
    return (
      <div className="submit-container">
        <div className="submit-btn-container">
          <div
            className="submit-btn"
            onClick={() => {
              navigate(`/booking/${carid}`, { state: carSpecs?.carDetails });
            }}
            id="btn-book-now"
          >
            BOOK NOW
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="car-specification-container-parent">
      {carSpecs.loading && (
        <div className="loader-container">
          <CircularProgress />
        </div>
      )}
      {carSpecs.error && <div>{carSpecs.error}</div>}
      {!carSpecs.loading && !carSpecs.error && (
        <>
          <SpecsHeader name={carSpecs?.carDetails?.specifications?.name} />
          <DetailsSubSection carSpecs={carSpecs} type="specifications" />
          <DetailsSubSection carSpecs={carSpecs} type="exteriors" />
          <DetailsSubSection carSpecs={carSpecs} type="interiors" />
          <Cost cost={carSpecs?.carDetails?.cost} />
          <Submit />
        </>
      )}
    </div>
  );
}

export default CarSpecificationsContainer;
