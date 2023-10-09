import { SELECTORS } from "./enums/selectors";
import { URLS } from "./enums/urls";

export namespace BookingConfirmationPage {
  export const verifyPageMetaData = () => {
    cy.visit(URLS.CONFIRM_BOOKING);

    cy.get(SELECTORS.CONFIRM_BOOKING).should("be.visible");
    cy.get(SELECTORS.DOWNLOAD_BTN).should("be.visible");
  };
}
