import { useEffect } from "react";
import Header from "../SharedComponents/Header/Header";
import CarSpecificationsContainer from "./CarDetailsPageComponents/CarSpecificationsContainer/CarSpecificationsContainer";
import "./carDetailsPage.scss";
import Footer from "../SharedComponents/Footer/Footer";

function CarDetailsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <div className="car-details-page-container">
        <CarSpecificationsContainer />
      </div>
      <Footer />
    </div>
  );
}

export default CarDetailsPage;
