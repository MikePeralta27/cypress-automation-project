export default class ProductPage {
    constructor() {
        this.productTitle = '[data-test="title"]'
        this.productContainer = '.inventory_list'
        this.productName = '.inventory_item_name'
        this.inventoryItem = '.inventory_item'
        this.addButton = '.btn_inventory'
        this.removeButton = "[data-test*='remove']"
        this.cartButton = '[data-test="shopping-cart-link"]'
        this.cartBadge = '.shopping_cart_badge'


    }


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
        return cy.get(this.cartButton)
    }

    getAddButton() {
        return cy.get(this.addButton)
    }

    getRemoveButton() {
        return cy.get(this.removeButton)
    }

    getCartBadge() {
        return cy.get(this.cartBadge)
    }

    addToCart(index) {
        this.getInventoryItem(index).find(this.addButton).click()
    }

    removeFromCart(index) {
        this.getInventoryItem(index).find(this.removeButton).click()
    }

    goToCart() {
        this.getCartButton().click()
    }

    checkCartBadge(num) {
        this.getCartBadge().should('be.visible')
        this.getCartBadge().should('have.text', num)

    }

}
