import ProductPage from "./productPage";

const productPage = new ProductPage();

export default class CheckoutPage {
  // Selectors as Getters

    get firstNameInput() {
        return '[data-test=firstName]';
    }

    get lastNameInput() {
        return '[data-test=lastName]';
    }

    get postalCodeInput() {
        return '[data-test=postalCode]';
    }

    get continueButton() {
        return '[data-test=continue]';
    }

    get cancelButton() {
        return '[data-test=cancel]';
    }

    fillFirstName(name) {
        cy.get(this.firstNameInput).type(name);
    }

    fillLastName(name) {
        cy.get(this.lastNameInput).type(name);
    }

    fillPostalCode(code) {
        cy.get(this.postalCodeInput).type(code);
    }

    clickContinue() {
        cy.get(this.continueButton).click();
    }

    clickCancel() {
        cy.get(this.cancelButton).click();
    }


  fillCheckoutForm(firstName, lastName, postalCode) {
    this.fillFirstName(firstName);
    this.fillLastName(lastName);
    this.fillPostalCode(postalCode);
  }

}