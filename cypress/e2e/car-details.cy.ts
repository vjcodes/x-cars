import { CarDetailsPage } from "../pages/car-details-page";
import { URLS } from "../pages/enums/urls";
import { AppRoutes } from "../routes/app-route";

describe("Car Details Page", () => {
  beforeEach(() => {
    AppRoutes.getCarDetails();
  });

  it("successfully loads all elements", () => {
    cy.visit(URLS.CAR_DETAILS);

    cy.fixture("car-details.json").then((car) => {
      CarDetailsPage.verifyCarDetails(car);
    });

    CarDetailsPage.clickOnBookNowBtn();
  });
});
