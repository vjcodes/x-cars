import { URLS } from "../pages/enums/urls";
import { HomePage } from "../pages/home-page";
import { AppRoutes } from "../routes/app-route";

describe("The Home Page", () => {
  it("successfully loads all elements", () => {
    cy.visit(URLS.DEFAULT);

    AppRoutes.getEmptyCarList();

    HomePage.verifyHomePageMetaData();
    HomePage.clickOnViewAllBtn();
  });

  it("Api returning values", () => {
    AppRoutes.getCarsList();

    cy.visit(URLS.DEFAULT);

    cy.fixture("cars.json").then((cars: any) => {
      HomePage.verifyAPIdata(cars);
      HomePage.verifyNavigationToCarDetailsPage();
    });
  });
});
