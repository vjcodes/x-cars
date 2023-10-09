import { SELECTORS } from "./enums/selectors";
import { URLS } from "./enums/urls";

export namespace CarListingPage {
  export const verifyPageMetaData = () => {
    cy.get(SELECTORS.RESET_FILTER).should("be.visible");
    cy.get(SELECTORS.FILTER_SEDAN).should("be.visible");
    cy.get(SELECTORS.FILTER_SEDAN).should("be.visible");
    cy.get(SELECTORS.FILTER_HATCHBACK).should("be.visible");
    cy.get(SELECTORS.FILTER_COUPE).should("be.visible");
  };

  export const verifyAPIdata = (cars: any) => {
    cy.get(SELECTORS.CAR_CARD).should("have.length", cars.length);
    cy.get(SELECTORS.CAR_NAME).should("have.length", cars.length);
    cy.get(SELECTORS.CAR_PRICE).should("have.length", cars.length);
    cy.get(SELECTORS.ARROW_LINK).should("have.length", cars.length);
  };

  export const verifyNavigationToCarDetailsPage = () => {
    cy.get(SELECTORS.ARROW_LINK).first().click();

    cy.url().should("contain", URLS.CAR_DETAILS);
  };
}
