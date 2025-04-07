import LoginPage from "../pageObjects/loginPage";
import data from "../fixtures/data.json";
import ProductPage from "../pageObjects/productPage";
import CheckoutPage from "../pageObjects/checkoutPage";

const loginPage = new LoginPage();    
const productPage = new ProductPage();
const checkoutPage = new CheckoutPage();

describe('Product page test', () => {
  
    beforeEach(() => {
      
      loginPage.goToLoginPage();
      loginPage.login(data.standard_user, data.password);

    });

  it('Add product to cart', () => {
    
    productPage.addToCart(0);
    productPage.getRemoveButton().should('be.visible');
    productPage.checkCartBadge(1);
    productPage.goToCart();
    productPage.getCartBadge().should('be.visible');
    productPage.getCartBadge().should('have.text', '1');
    

  });

  it('Add multiple products to cart', () => {
    productPage.addToCart(0);
    productPage.addToCart(1);
    productPage.addToCart(2);
    productPage.checkCartBadge(3);
    productPage.getCartBadge().should('be.visible');
    productPage.getCartBadge().should('have.text', '3');
    productPage.getInventoryItem(0).should('be.visible');
    productPage.getInventoryItem(1).should('be.visible');
    productPage.getInventoryItem(2).should('be.visible');
  });


  it('Remove product from cart', () => {
    productPage.addToCart(0);
    productPage.getCartBadge().should('be.visible');
    productPage.getCartBadge().should('have.text', '1');
    productPage.removeProduct(0);
    productPage.getCartBadge().should('not.exist');
    productPage.getRemoveButton().should('not.exist');

  });

});