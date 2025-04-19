import Commons from "../utils/commons";

const commons = new Commons();

export default class CartPage {
  // Selectors as Getters
  
    get headerContainer() { return '[data-test="header-container"]'; }
    get primaryHeader() { return '[data-test="primary-header"]'; }
    get cartTitle() { return '[data-test="title"]'; }
    get cartContentsContainer() { return '[data-test="cart-contents-container"]'; }
    get cartList() { return '[data-test="cart-list"]'; }
    get continueShoppingButton() { return '[data-test="continue-shopping"]'; }
    get checkoutButton() { return '[data-test="checkout"]'; }
    get cartQuantityLabel() { return '[data-test="cart-quantity-label"]'; }
    get cartDescLabel() { return '[data-test="cart-desc-label"]'; }
    get cartItems() { return '[data-test="inventory-item"]'; }
    get itemQuantity() { return '[data-test="item-quantity"]'; }
    get itemTitleLinks() { return '[data-test$="-title-link"]'; }
    get itemPrices() { return '[data-test="inventory-item-price"]'; }
    get removeButtons() { return '[data-test^="remove-"]'; }

    clickCheckoutButton(){
        return commons.clickElement(this.checkoutButton);
    }

    clickContinueShoppingButton(){
        return commons.clickElement(this.continueShoppingButton);
    }

    checkCartHeaderIsVisible(){
        return commons.checkElementVisible(this.headerContainer);
    }

    
}