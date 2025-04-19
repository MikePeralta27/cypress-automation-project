import LoginPage from "../pageObjects/loginPage";
import data from "../fixtures/data.json";
import ProductPage from "../pageObjects/productPage";
import Commons from "../utils/commons";
import CartPage from "../pageObjects/cartPage";
import CheckoutPage from "../pageObjects/checkoutPage";


const loginPage = new LoginPage();
const productPage = new ProductPage();
const commons = new Commons();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

describe('Login page test', () => {
  
    beforeEach(() => {
      
      loginPage.goToLoginPage();
    });


  it('Complete E2E checkout Test', () => {
    loginPage.login(Cypress.env('standard_user'), Cypress.env('password'));
    productPage.getProductTitle().should('be.visible');
    productPage.addMultipleProducts(3);
    productPage.goToCart();
    cartPage.checkCartHeaderIsVisible();
    cartPage.clickCheckoutButton();
    checkoutPage.fillCheckoutForm("Michael", "Test", 80120);
    checkoutPage.clickContinue();
    productPage.logout();
    commons.checkElementVisible(loginPage.loginButton);
  });

});