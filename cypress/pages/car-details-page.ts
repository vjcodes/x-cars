import { SELECTORS } from "./enums/selectors";
import { URLS } from "./enums/urls";

export namespace CarDetailsPage {
  export const verifyCarDetails = (car) => {
    cy.get(SELECTORS.CAR_NAME).contains(car.specifications.name);
    cy.get(SELECTORS.CAR_IMAGE).should("be.visible").should("have.length", 4);
    cy.get(SELECTORS.CAR_FUEL).contains(car.specifications.fuel_type);
    cy.get(SELECTORS.CAR_ENGINE).contains(car.specifications?.engine_cc);
    cy.get(SELECTORS.CAR_TORQUE).contains(car.specifications?.torque);
    cy.get(SELECTORS.CAR_ACCELERATION).contains(
      car.specifications?.acceleration
    );
    cy.get(SELECTORS.CAR_TOP_SPEED).contains(car.specifications?.top_speed);
    cy.get(SELECTORS.CAR_VARIANTS).contains(
      `The ${car.specifications.name} comes in ${car.specifications.variant.length} distinctive trims starting with the entry-level V MT, V CVT, VX MT, V MT Diesel, ZX MT, VX CVT, VX MT Diesel, ZX CVT, and ZX MT Diesel`
    );
    cy.get(SELECTORS.CAR_EXTERIORS).contains(
      `The ${car.specifications.name} measures ${car.exterior.length} in length and has a ${car.exterior.width} wheelbase.`
    );
    cy.get(SELECTORS.CAR_INTERIORS).contains(car.interior.text[0]);
    cy.get(SELECTORS.CAR_INTERIORS).contains(car.interior.text[1]);
    cy.get(SELECTORS.CAR_COST).contains(car.cost);
  };

  export const clickOnBookNowBtn = () => {
    cy.get(SELECTORS.BOOK_NOW).should("be.visible").click();
    cy.url().should("contain", URLS.CAR_BOOKING);
  };
}
