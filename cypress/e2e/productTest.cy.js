import LoginPage from "../pageObjects/loginPage";
import data from "../fixtures/data.json";
import ProductPage from "../pageObjects/productPage";

const loginPage = new LoginPage();
const productPage = new ProductPage();

describe('Product page test', () => {
  
    beforeEach(() => {
      
      loginPage.goToLoginPage();
    });

  it('Add product to cart', () => {
    loginPage.login(data.standard_user, data.password);
    productPage.getProductTitle().should('be.visible');
    productPage.getProductTitle().should('have.text', 'Products');
    productPage.getProductContainer().should('be.visible');
    productPage.addToCart(0);
    productPage.getRemoveButton().should('be.visible');
    productPage.checkCartBadge(1);
    productPage.goToCart();

  });

});