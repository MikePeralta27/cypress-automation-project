import LoginPage from "../pageObjects/loginPage";
import data from "../fixtures/data.json";
import ProductPage from "../pageObjects/productPage";
import CheckoutPage from "../pageObjects/checkoutPage";
import Commons from "../utils/commons";

const loginPage = new LoginPage();    
const productPage = new ProductPage();
const checkoutPage = new CheckoutPage();
const commons = new Commons();

describe('Product page test', () => {
  
    beforeEach(() => {
      
      loginPage.goToLoginPage();
      loginPage.login(data.standard_user, data.password);

    });

  it('Add product to cart', () => {
    productPage.clickAddToCart(0);
    productPage.getRemoveButton(0).should('be.visible');
    productPage.checkCartBadge(1);
    productPage.goToCart();
    productPage.getCartBadge().should('be.visible');
    productPage.getCartBadge().should('have.text', '1');
    

  });

  it('Remove product from cart', () => {
    productPage.clickAddToCart(0);
    productPage.getCartBadge().should('be.visible');
    productPage.getCartBadge().should('have.text', '1');
    productPage.clickRemoveFromCart(0);
    productPage.getCartBadge().should('not.exist');
    productPage.getAddButton(0).should('be.visible');

  });


  it('Add multiple products to cart', () => {
    const numProducts = 3;
    productPage.addMultipleProducts(numProducts);
    productPage.checkCartBadge(numProducts);
    productPage.getCartBadge().should('be.visible');
    productPage.getCartBadge().should('have.text', numProducts);
    for (let i = 0; i < numProducts; i++) {
      productPage.getRemoveButton(i).should('be.visible');
    }

  });

  it('Remove multiple products from cart', () => {
    const numProducts = 3;
    productPage.addMultipleProducts(numProducts);
    productPage.checkCartBadge(numProducts);
    productPage.removeMultipleProducts(numProducts);
    productPage.getCartBadge().should('not.exist');
    for (let i = 0; i < numProducts; i++) {
      productPage.getAddButton(i).should('be.visible');
    }
  });

    it('Sort Product elements ascending by name', () => {
      productPage.assertProductTitleIsVisible();
      productPage.sortProductItem(0,"az");
      productPage.assertProductAscendingSorted(productPage.productName);

    });

    it('Sort Product elements descending by name', () => {
      productPage.assertProductTitleIsVisible();
      productPage.sortProductItem(1, "za");
      productPage.assertProductDescedingSorted(productPage.productName);

    });

    it('Sort Product elements ascending by price', () => {
      productPage.assertProductTitleIsVisible();
      productPage.sortProductItem(2, "lohi");
      productPage.assertProductAscendingSortedByPrice(productPage.productPrice);

    });

    it('Sort Product elements descending by price', () => {
      productPage.assertProductTitleIsVisible();
      productPage.sortProductItem(3, "hilo");
      productPage.assertProductDescendingSortedByPrice(productPage.productPrice);

    });
  });
