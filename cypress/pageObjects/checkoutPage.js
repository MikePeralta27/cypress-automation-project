import ProductPage from "./productPage";
import Commons from "../utils/commons";

const productPage = new ProductPage();
const commons = new Commons()

export default class CheckoutPage {
  // Selectors as Getters
  
    get firstNameInput() { return '[data-test=firstName]'; }
    get lastNameInput() { return '[data-test=lastName]'; }
    get postalCodeInput() { return '[data-test=postalCode]'; }
    get continueButton() { return '[data-test=continue]'; }
    get cancelButton() { return '[data-test=cancel]'; }
    get finishButton() { return '[data-test="finish"]'}
    get completeHeader() { return '[data-test="complete-header"]'}
    get itemPrice() { return '[data-test="inventory-item-price"]'}
    get subtotalLabel() { return '[data-test="subtotal-label"]'}
    get taxLabel() { return '[data-test="tax-label"]'}


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

    clickFinish() {
      cy.get(this.finishButton).clikc();
      
    }


  fillCheckoutForm(firstName, lastName, postalCode) {
    this.fillFirstName(firstName);
    this.fillLastName(lastName);
    this.fillPostalCode(postalCode);
  }

}