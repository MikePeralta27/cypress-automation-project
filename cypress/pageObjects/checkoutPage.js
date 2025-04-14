import ProductPage from "./productPage";
const productPage = new ProductPage();

export default class CheckoutPage {
    constructor() {
        this.checkoutButton = '[data-test="checkout"]';
        this.firstNameInput = '[data-test="firstName"]';
        this.lastNameInput = '[data-test="lastName"]';
        this.postalCodeInput = '[data-test="postalCode"]';
        this.cartItem = '[data-test="inventory-item"]';
        this.continueButton = '[data-test="continue"]';
        this.cancelButton = '[data-test="cancel"]';
        this.removeButton = '[data-test*="remove"]';
    }

    getCartItem(index) {
        return cy.get(this.cartItem).eq(index);
    }

    
    getCheckoutButton() {
        return cy.get(this.checkoutButton);
    }

    getFirstNameInput() {
        return cy.get(this.firstNameInput);
    }

    getLastNameInput() {
        return cy.get(this.lastNameInput);
    }

    getPostalCodeInput() {
        return cy.get(this.postalCodeInput);
    }

    getContinueButton() {
        return cy.get(this.continueButton);
    }

    getCancelButton() {
        return cy.get(this.cancelButton);
    }

    getRemoveButton() {
        return cy.get(this.removeButton);
    }

    fillCheckoutForm(firstName, lastName, postalCode) {
        this.getFirstNameInput().type(firstName);
        this.getLastNameInput().type(lastName);
        this.getPostalCodeInput().type(postalCode);
    }

    removeFromCart(index) {
        this.getCartItem(index).find(this.removeButton).click();
    }

    continueCheckout() {
        this.getContinueButton().click();
    }   

    cancelCheckout() {
        this.getCancelButton().click();     
    }
    
    
    
    
}