import LoginPage from "../pageObjects/loginPage";
import data from "../fixtures/data.json";
import ProductPage from "../pageObjects/productPage";

const loginPage = new LoginPage();
const productPage = new ProductPage();

describe('Login page test', () => {
  
    beforeEach(() => {
      
      loginPage.goToLoginPage();
    });


  it('Login with valid credentials', () => {
    loginPage.login(Cypress.env('standard_user'), Cypress.env('password'));
    productPage.getProductTitle().should('be.visible');
    productPage.getProductTitle().should('have.text', 'Products');
    productPage.getProductContainer().should('be.visible');
    cy.get('.title').should('have.text', 'Products');
    productPage.logout();
    loginPage.getLoginButton().should('be.visible');

  });

  it('Login with invalid Password', () => {
    loginPage.login(Cypress.env('standard_user'), Cypress.env('invalid_password'));
    loginPage.getErrorMessage().should('be.visible');
    loginPage.getErrorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('Login with locked out user', () => {
    loginPage.login(Cypress.env('locked_out_user'), Cypress.env('password'));
    loginPage.getErrorMessage().should('be.visible');
    loginPage.getErrorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
  });

  it('Login with Only Username', () => {
    loginPage.loginWithOnlyUsername(Cypress.env('standard_user'));
    loginPage.getErrorMessage().should('be.visible');
    loginPage.getErrorMessage().should('have.text', 'Epic sadface: Password is required');
  });

  it('Login with empty credentials', () => {
    loginPage.loginWithEmptyCredentials();
    loginPage.getErrorMessage().should('be.visible');
    loginPage.getErrorMessage().should('have.text', 'Epic sadface: Username is required');
  });
  

});