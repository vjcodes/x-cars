import { useEffect } from "react";
import Header from "../SharedComponents/Header/Header";
import AllCarsList from "./CarsListingComponents/AllCarsList/AllCarsList";
import "./carsListingPage.scss";
import Footer from "../SharedComponents/Footer/Footer";

function CarListingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <div className="all-cars-page-container">
        <AllCarsList />
      </div>
      <Footer />
    </div>
  );
}

export default CarListingPage;
