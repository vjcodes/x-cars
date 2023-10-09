import "./BookingPageContainer.scss";
import BookingPageSideDetails from "./BookingPageSideDetails/BookingPageSideDetails";
import BookingPageForm from "./BookingPageForm/BookingPageForm";

function BookingPageContainer({ carDetails, carid }) {
  return (
    <div className="boooking-page-container">
      <BookingPageSideDetails carDetails={carDetails} carid={carid} />
      <BookingPageForm carDetails={carDetails} />
    </div>
  );
}

export default BookingPageContainer;
