import LoginPage from "../pageObjects/loginPage";
import data from "../fixtures/data.json";
import ProductPage from "../pageObjects/productPage";

const loginPage = new LoginPage();
const productPage = new ProductPage();

describe('Login page Test', () => {
  
    beforeEach(() => {
      
      loginPage.goToLoginPage();
    });

  it('login with valid credentials', () => {
    loginPage.login(data.standard_user, data.password);
    productPage.getProductTitle().should('be.visible');
    productPage.getProductTitle().should('have.text', 'Products');
    productPage.getProductContainer().should('be.visible');
    cy.get('.title').should('have.text', 'Products');

  });

  it('login with invalid credentials', () => {
    loginPage.login(data.locked_out_user, data.password);
    loginPage.getErrorMessage().should('be.visible');
    loginPage.getErrorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
  });

  

});