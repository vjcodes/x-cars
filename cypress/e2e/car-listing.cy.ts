import { CarListingPage } from "../pages/car-listing-page";
import { URLS } from "../pages/enums/urls";
import { AppRoutes } from "../routes/app-route";

describe("Car list Page", () => {
  beforeEach(() => {
    AppRoutes.getCarsList();
  });

  it("successfully loads all elements", () => {
    cy.visit(URLS.CAR_LIST);

    CarListingPage.verifyPageMetaData();

    cy.fixture("cars.json").then((cars: any) => {
      CarListingPage.verifyAPIdata(cars);
      CarListingPage.verifyNavigationToCarDetailsPage();
    });
  });
});
