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
    }

    checkElementVisible(selector){
        cy.get(selector).should("be.visible"); 
    }

    checkElementNotVisible(selector){
        cy.get(selector).should("not.be.visible"); 
    }

    checkIsEqual(selector, expectedText){
        cy.get(selector).should("have.text", expectedText);
    }
    
    findElement(selector, index){
        return cy.get(selector).eq(index);
    }


}