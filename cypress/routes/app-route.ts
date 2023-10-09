export namespace AppRoutes {
  export const getEmptyCarList = () => {
    const alias = "getEmptyCarList";

    cy.intercept(
      {
        method: "GET",
        url: Cypress.env("API_URL") + "cars",
      },
      []
    ).as(alias);

    return alias;
  };

  export const getCarsList = () => {
    const alias = "getCarsList";

    cy.intercept(
      {
        method: "GET",
        url: Cypress.env("API_URL") + "cars",
      },
      { fixture: "cars.json" }
    ).as(alias);

    return alias;
  };

  export const getCarDetails = () => {
    const alias = "getCarDetails";

    cy.intercept(
      {
        method: "GET",
        url: Cypress.env("API_URL") + "cars/details/hondacity",
      },
      { fixture: "car-details.json" }
    ).as(alias);

    return alias;
  };
}
