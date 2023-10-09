import { SELECTORS } from "./enums/selectors";
import { TEXTS } from "./enums/texts";
import { URLS } from "./enums/urls";

export namespace HomePage {
  export const verifyHomePageMetaData = () => {
    cy.contains(TEXTS.NEW_CARS).should("be.visible");
    cy.contains(TEXTS.USED_CARS).should("be.visible");
    cy.contains(TEXTS.MY_PROFILE).should("be.visible");
    cy.contains(TEXTS.FIND_YOUR_DREAM_CAR).should("be.visible");
    cy.contains(TEXTS.FEATURED_CARS).should("be.visible");

    cy.get(SELECTORS.APP_LOGO).should("be.visible");
    cy.get(SELECTORS.HEADER).should("be.visible");
    cy.get(SELECTORS.FILTER_SEDAN).should("be.visible");
    cy.get(SELECTORS.FILTER_SEDAN).should("be.visible");
    cy.get(SELECTORS.FILTER_HATCHBACK).should("be.visible");
    cy.get(SELECTORS.FILTER_COUPE).should("be.visible");

    cy.get(SELECTORS.FILTER_CAR).should("be.visible");
    cy.get(SELECTORS.VIEW_ALL_BTN).should("be.visible");
    cy.get(SELECTORS.CAR_CARD).should("not.be.null");

    cy.get(SELECTORS.CONTACT_SECTION).should("be.visible");
    cy.get(SELECTORS.ADDRESS_SECTION).should("be.visible");
    cy.get(SELECTORS.LEGAL_SECTION).should("be.visible");
    cy.get(SELECTORS.SOCIAL_SECTION).should("be.visible");
  };

  export const clickOnViewAllBtn = () => {
    cy.get(SELECTORS.VIEW_ALL_BTN).first().click();
    cy.url().should("contain", URLS.CAR_LIST);
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
