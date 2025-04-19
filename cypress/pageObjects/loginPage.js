import ProductPage from "./productPage";
import Commons from "../utils/commons";

const productPage = new ProductPage();
const commons = new Commons();

export default class LoginPage {
  // Selectors as Getters
  
  get usernameInput() { return '#user-name'; }
  get passwordInput() { return '#password'; }
  get loginButton() { return '#login-button'; }
  get errorMessage() { return '#login_button_container > div > form > div.error-message-container.error > h3'; }

  // Actions

  inputUsername(username) {
    return commons.typeText(this.usernameInput, username);
  }

  inputPassword(password) {
    return commons.typeText(this.passwordInput, password);
  }

  clickLoginButton() {
    return commons.clickElement(this.loginButton);
  }

  getErrorMessage() {
    return commons.assertText(this.errorMessage);
  }

  goToLoginPage() {
    commons.goTo('/');
  }

  login(username, password) {
    this.inputUsername(username);
    this.inputPassword(password);
    this.clickLoginButton();
  }
}