import { useEffect } from "react";
import Header from "../SharedComponents/Header/Header";
import FilterSection from "./LandingPageComponents/FIlterSection/FilterSection";
import "./LandingPage.scss";
import CarsList from "./LandingPageComponents/CarsList/CarsList";
import Footer from "../SharedComponents/Footer/Footer";
import { useDispatch } from "react-redux";
import { getAllCarsList } from "../store/slices/CarsListSlice";

function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllCarsList());
  }, []);

  return (
    <div className="landing-page-container">
      <Header />
      <FilterSection />
      <CarsList />
      <Footer />
    </div>
  );
}

export default LandingPage;
