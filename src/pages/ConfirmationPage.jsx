import { useEffect } from "react";
import "./confirmationPage.scss";
import Header from "../SharedComponents/Header/Header";
import explore from "./../assets/Confirmation/exploreMore.svg";
import car from "./../assets/Confirmation/car.jpg";
import Footer from "../SharedComponents/Footer/Footer";
import { useNavigate } from "react-router-dom";

function ConfirmationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="confirm-page-parent">
        <div className="confirm-page-container">
          <div className="success-container">
            <div className="car-img-container">
              <img src={car} className="img" />
            </div>
            <div id="lbl-cnf">
              Booking <b>Successful</b>
            </div>

            <div className="download-text">
              <span id="btn-download">Download</span> the booking summary
            </div>
          </div>

          <div
            className="explore-container"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={explore} className="img img-explore" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ConfirmationPage;
