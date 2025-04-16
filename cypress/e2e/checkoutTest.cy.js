import LoginPage from "../pageObjects/loginPage";
import data from "../fixtures/data.json";
import ProductPage from "../pageObjects/productPage";

const loginPage = new LoginPage();
const productPage = new ProductPage();

describe('Login page test', () => {
  
    beforeEach(() => {
      
      loginPage.goToLoginPage();
    });


  it('Checkout process', () => {
    loginPage.login(Cypress.env('standard_user'), Cypress.env('password'));
    productPage.getProductTitle().should('be.visible');
    productPage.getProductTitle().should('have.text', 'Products');
    productPage.getProductContainer().should('be.visible');
    cy.get('.title').should('have.text', 'Products');
    productPage.logout();
    loginPage.getLoginButton().should('be.visible');
  });

});ß