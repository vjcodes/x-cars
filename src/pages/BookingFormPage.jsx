import { useEffect } from "react";
import Header from "../SharedComponents/Header/Header";
import BookingPageContainer from "./BookingFormPageComponents/BookingPageContainer";
import "./bookingFormPage.scss";
import { useLocation, useParams } from "react-router-dom";
import Footer from "../SharedComponents/Footer/Footer";

function BookingFormPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const { carid } = useParams();
  return (
    <div>
      <Header />
      <div className="booking-page-parent">
        <BookingPageContainer carDetails={location.state} carid={carid} />
      </div>
      <Footer />
    </div>
  );
}

export default BookingFormPage;
