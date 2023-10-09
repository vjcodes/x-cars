import React, { useState } from "react";
import "./BookingPageForm.scss";
import { Formik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";

function BookingPageForm() {
  const navigate = useNavigate();

  const [name, setName] = useState(null);
  const [contactNumber, setContactNumber] = useState(null);
  const [city, setCity] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState();
  const [clicked, setClicked] = useState(false);

  const isSubmitDisabled = () => {
    if (
      !name ||
      !contactNumber ||
      !city ||
      !termsAccepted ||
      contactNumber?.length < 10
    ) {
      return true;
    }

    return false;
  };

  return (
    <div className="booking-form-container">
      <div className="car-details-heading">
        Booking <span className="details-sub">Details</span>
      </div>

      <div className="input-container" id="txt-name">
        <label>
          <div className="label">Name</div>
          <input
            type="text"
            required={true}
            onChange={(e) => {
              e.preventDefault();
              setName(e.target.value);
            }}
            className="input-fields"
          />
          {!name && clicked && (
            <div id="err-txt-name" className="error-message">
              Please Enter Your Name
            </div>
          )}
        </label>
      </div>
      <div className="input-container" id="txt-contact">
        <label>
          <div className="label">Contact Number</div>
          <input
            type="text"
            required={true}
            onChange={(e) => {
              e.preventDefault();
              setContactNumber(e.target.value);
            }}
            className="input-fields"
          />
          {!contactNumber && clicked && (
            <div className="error-message" id="err-txt-contact">
              Please Enter Your Contact Number
            </div>
          )}
          {contactNumber?.length < 10 && clicked && (
            <div className="error-message" id="err-txt-contact">
              Please Enter A Valid Contact Number
            </div>
          )}
        </label>
      </div>
      <div className="input-container" id="lst-city">
        <label>
          <div className="label">City</div>
          <select
            required={true}
            value={city || ""}
            onChange={(e) => {
              e.preventDefault();
              setCity(e.target.value);
            }}
            className="input-fields select"
          >
            <option value="" id="opt-city"></option>
            <option value="Delhi" id="opt-city">
              Delhi
            </option>
            <option value="Bangalore" id="opt-city">
              Bangalore
            </option>
            <option selected value="Hyderabad" id="opt-city">
              Hyderabad
            </option>
            <option value="Kolkata" id="opt-city">
              Kolkata
            </option>
            <option value="Chennai" id="opt-city">
              Chennai
            </option>
          </select>
          {!city && clicked && (
            <div className="error-message" id="err-lst-city">
              Please Select Your City
            </div>
          )}
        </label>
      </div>

      <div className="check input-container" id="chk-box">
        <input
          value={termsAccepted}
          required={true}
          onChange={(e) => {
            e.preventDefault();
            setTermsAccepted(!termsAccepted);
          }}
          type="checkbox"
        />
        <div>I accept the Terms and conditions</div>
      </div>
      <div>
        <h4 className="label">Terms and conditions:</h4>
        <div>
          *Terms and conditions apply. All offers are from dealers. Please get
          in touch with your nearest dealer for detailed terms and conditions.
          All taxes are additional. Offer valid till February 15, 2022 and is
          subject to change without prior notice. Calculations for the following
          are for a specific tenure mileage and finance amount.
        </div>

        {!termsAccepted && clicked && (
          <div className="error-message" id="err-chk-box">
            Please Read And Accept Terms And Conditions
          </div>
        )}
      </div>

      <div className="submit-btn-container" id="btn-submit">
        <input
          className="submit-btn"
          type="submit"
          value="Submit"
          // disabled={true}
          onClick={() => {
            setClicked(true);
            if (!isSubmitDisabled()) {
              navigate("/confirm-booking");
            }
          }}
        />
      </div>
    </div>
  );
}

export default BookingPageForm;
