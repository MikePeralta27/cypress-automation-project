import data from "../fixtures/data.json";


export default class LoginPage {
    constructor() {
        this.usernameInput = '#user-name'
        this.passwordInput = '#password'
        this.loginButton = '#login-button'
        this.errorMessage = '#login_button_container > div > form > div.error-message-container.error > h3'

    }

        getUsernameInput() {
            return cy.get(this.usernameInput)
        }

        getPasswordInput() {
            return cy.get(this.passwordInput)
        }

        getLoginButton() {
            return cy.get(this.loginButton)
        }

        getErrorMessage() {
            return cy.get(this.errorMessage)
        }

        goToLoginPage() {
            cy.visit('https://www.saucedemo.com/')
        }

        login(username, password) {
            this.getUsernameInput().type(username)
            this.getPasswordInput().type(password)
            this.getLoginButton().click()
        }

}

