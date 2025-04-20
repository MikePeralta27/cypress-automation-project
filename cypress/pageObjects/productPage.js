import Commons from "../utils/commons";

const commons = new Commons();

export default class ProductPage {
  // Selectors as Getters
  get productTitle() { return '[data-test="title"]';}
  get productContainer() { return '.inventory_list'; }
  get productName() { return '.inventory_item_name';}
  get productPrice() { return '[data-test="inventory-item-price"]';}
  get inventoryItem() { return '.inventory_item'; }
  get addButton() { return '.btn_inventory'; }
  get removeButton() { return "[data-test*='remove']";}
  get cartButton() {  return '[data-test="shopping-cart-link"]'; }
  get cartBadge() { return '.shopping_cart_badge'; }
  get menuButton() {  return '#react-burger-menu-btn'; }
  get logoutButton() {  return '[data-test="logout-sidebar-link"]'; }
  get sortDropdown() { return '[data-test="product-sort-container"]'}

  // Cypress Actions

  getProductTitle() {
    return cy.get(this.productTitle);
  }

  getProductContainer() {
    return cy.get(this.productContainer);
  }

  getProductName() {
    return cy.get(this.productName);
  }

  getInventoryItem(index) {
    return cy.get(this.inventoryItem).eq(index);
  }

  getCartButton() {
    return cy.get(this.cartButton);
  }

  getAddButton(index) {
    return this.getInventoryItem(index).find(this.addButton);
  }

  getRemoveButton(index) {
    return this.getInventoryItem(index).find(this.removeButton);
  }

  getCartBadge() {
    return cy.get(this.cartBadge);
  }

  clickAddToCart(index) {
    this.getAddButton(index).click();
  }

  clickRemoveFromCart(index) {
    this.getRemoveButton(index).click();
  }

  goToCart() {
    this.getCartButton().click();
  }

  getMenuButton() {
    return cy.get(this.menuButton);
  }

  getLogoutButton() {
    return cy.get(this.logoutButton);
  }

  checkCartBadge(num) {
    this.getCartBadge().should('be.visible').and('have.text', num);
  }

 

  addMultipleProducts(num) {
    for (let i = 0; i < num; i++) {
      this.clickAddToCart(i);
    }
  }

  removeMultipleProducts(num) {
    for (let i = 0; i < num; i++) {
      this.clickRemoveFromCart(i);
    }
  }

  getInventoryCount() {
    return cy.get(this.inventoryItem).its('length');
  }

  sortProductItems(index, value){
    return cy.get(this.sortDropdown)
    .select(index).invoke("val")
    .should("eq", value)
  }


  assertProductTitleIsVisible(){
    this.getProductTitle().should("be.visible");
  }

  assertProductAscendingSorted(selector) {
    return cy.get(selector).then($elements => {
      const strings = [...$elements].map(el => el.innerText)
      expect(strings).to.deep.equal([...strings].sort())
    });

  }

  assertProductDescedingSorted(selector) {
    return cy.get(selector).then($elements => {
      const strings = [...$elements].map(el => el.innerText);
      expect(strings).to.deep.equal([...strings].sort().reverse());
    });

  }


  logout() {
    commons.clickElement(this.menuButton);
    commons.clickElement(this.logoutButton);
  }
}
