export default class Commons {

    goTo(url){
        return cy.visit(url);
    }

    clickElement(selector) {
        return cy.get(selector).click();
    }

    assertText(selector, expectedText){
        return cy.get(selector).should('have.text', expectedText);
    }

    typeText(selector, text) {
        return cy.get(selector).type(text);
    }

    checkElementVisible(selector){
        return cy.get(selector).should("be.visible"); 
    }

    checkElementNotVisible(selector){
        return cy.get(selector).should("not.be.visible"); 
    }

    checkIsEqual(selector, expectedText){
        return cy.get(selector).should("have.text", expectedText);
    }
    
    findElement(selector, index){
        return cy.get(selector).eq(index);
    }


}