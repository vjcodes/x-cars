import { CarBookingPage } from "../pages/car-booking-page";
import { URLS } from "../pages/enums/urls";
import { AppRoutes } from "../routes/app-route";

describe("Car Booking Page", () => {
  let carDetails: any;

  beforeEach(() => {
    AppRoutes.getCarDetails();

    cy.fixture("car-details.json").then((car) => {
      carDetails = car;
    });
  });

  it("successfully loads all elements", () => {
    cy.visit(URLS.CAR_BOOKING);

    CarBookingPage.verifyAPIdata(carDetails);
  });

  it("form submission", () => {
    cy.visit(URLS.CAR_BOOKING);

    CarBookingPage.fillBookingFormValue({ name: "abc", contact: "0000000000" });
    CarBookingPage.submitFormandVerifyRedirection();
  });
});
