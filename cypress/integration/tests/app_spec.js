import { createYield } from "typescript";

describe('First test', function() {
    it('Finds an element', function() {
        cy.visit('http://localhost:3000');
        cy.get('img[class="App-logo"]').should('be.visible');
    });
});