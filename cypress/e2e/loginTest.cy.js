import LoginPage from "../pageObjects/loginPage";
import data from "../fixtures/data.json";
import ProductPage from "../pageObjects/productPage";
import Commons from "../utils/commons";

const loginPage = new LoginPage();
const productPage = new ProductPage();
const commons = new Commons();

describe('Login page test', () => {
  
    beforeEach(() => {
      loginPage.goToLoginPage();
    });


  it('Login with valid credentials', () => {
    loginPage.login(Cypress.env('standard_user'), Cypress.env('password'));
    commons.checkElementVisible(productPage.productTitle);
    commons.checkIsEqual(productPage.productTitle, 'Products');
    commons.checkElementVisible(productPage.productContainer);
    productPage.logout();
    commons.checkElementVisible(loginPage.loginButton);

  });

  it('Login with invalid Password', () => {
    loginPage.login(Cypress.env('standard_user'), Cypress.env('invalid_password'));
    commons.checkElementVisible(loginPage.errorMessage);
    commons.checkIsEqual(loginPage.errorMessage, 'Epic sadface: Username and password do not match any user in this service');
  });

  it('Login with locked out user', () => {
    loginPage.login(Cypress.env('locked_out_user'), Cypress.env('password'));
    commons.checkElementVisible(loginPage.errorMessage);
    commons.checkIsEqual(loginPage.errorMessage, 'Epic sadface: Sorry, this user has been locked out.');
  });

  it('Login with Only Username', () => {
    loginPage.inputUsername(Cypress.env('standard_user'));
    loginPage.clickLoginButton();
    commons.checkElementVisible(loginPage.errorMessage);
    commons.checkIsEqual(loginPage.errorMessage, 'Epic sadface: Password is required');
  });

  it('Login with empty credentials', () => {
    loginPage.clickLoginButton();
    commons.checkElementVisible(loginPage.errorMessage);
    commons.checkIsEqual(loginPage.errorMessage, 'Epic sadface: Username is required');
  });
  

});