import ProductPage from "./productPage";
import Commons from "../utils/commons";

const productPage = new ProductPage();
const commons = new Commons();


export default class LoginPage {
    constructor() {
        this.usernameInput = '#user-name';
        this.passwordInput = '#password';
        this.loginButton = '#login-button';
        this.errorMessage = '#login_button_container > div > form > div.error-message-container.error > h3';

    }

        getUsernameInput() {
            return cy.get(this.usernameInput);
        }

        getPasswordInput() {
            return cy.get(this.passwordInput);
        }

        getLoginButton() {
            return cy.get(this.loginButton);
        }

        getErrorMessage() {
            return cy.get(this.errorMessage);
        }

        goToLoginPage() {
            cy.visit('/');
        }

        login(username, password) {
            commons.typeText(this.usernameInput, username);
            commons.typeText(this.passwordInput, password);
            commons.clickElement(this.loginButton);
            // this.getUsernameInput().type(username);
            // this.getPasswordInput().type(password);
            // this.getLoginButton().click();
        }

        loginWithEmptyCredentials() {
            this.getLoginButton().click();
        }

        loginWithOnlyUsername() {
            this.getUsernameInput().type(Cypress.env('standard_user'));
            this.getLoginButton().click();
        }

}

