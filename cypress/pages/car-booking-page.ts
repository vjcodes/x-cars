import { SELECTORS } from "./enums/selectors";
import { TEXTS } from "./enums/texts";
import { URLS } from "./enums/urls";

export namespace CarBookingPage {
  export const verifyAPIdata = (car: any) => {
    cy.contains(TEXTS.BOOKING_DETAILS).should("be.visible");
    cy.get(SELECTORS.CAR_SUMMARY).should("be.visible");
    cy.get(SELECTORS.CAR_BOOKING_NAME).contains(car.specifications.name);
    cy.get(SELECTORS.FUEL_TYPE).contains(car.specifications.fuel_type);
    cy.get(SELECTORS.ENGINE_CC).contains(car.specifications?.engine_cc);
    cy.get(SELECTORS.VIEW_CAR_DETAILS).should("be.visible");

    cy.get(SELECTORS.USER_NAME_INPUT).should("be.visible");
    cy.get(SELECTORS.USER_CONTACT_INPUT).should("be.visible");
    cy.get(SELECTORS.USER_CITY_SELECT).should("be.visible");
    cy.get(SELECTORS.TERMS_CONDITIONS_CHECKBOX).should("be.visible");
  };

  export const fillBookingFormValue = (values) => {
    const { name, contact } = values;

    cy.get(SELECTORS.USER_NAME_INPUT).type(name);
    cy.get(SELECTORS.USER_CONTACT_INPUT).type(contact);
    cy.get(SELECTORS.USER_CITY_SELECT).select(1);
    cy.get(SELECTORS.USER_CITY_OPTION).should("have.length", 5).first();
    cy.get(SELECTORS.TERMS_CONDITIONS_CHECKBOX).click();
  };

  export const submitFormandVerifyRedirection = () => {
    cy.get(SELECTORS.SUBMIT_BTN).first().click();

    cy.url().should("contain", URLS.CONFIRM_BOOKING);
  };
}
