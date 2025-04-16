export default class Commons {

    goTo(url){
        cy.visit(url);
    }

    clickElement(selector) {
        cy.get(selector).click();
    }

    assertText(selector, expectedText){
        cy.get(selector).should('have.text', expectedText);
    }

    typeText(selector, text) {
        cy.get(selector).type(text);
        // this.assertText(selector, text);
    }

    isVisible(selector){
        cy.get(selector).should("be.visible"); 
    }

}