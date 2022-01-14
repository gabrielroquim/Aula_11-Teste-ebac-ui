/// <reference types="cypress"/>
var faker = require('faker-br');
 
describe('Funcionalidade Pré- Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        
    });

    it('Deve Completar o pré-cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email)
        cy.get('#reg_password').type('12wws34.!#$abc')
        cy.get(':nth-child(4) > .button').click()

        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type('Mila')
        cy.get('#account_last_name').type('laral')
        cy.get('.woocommerce-Button').click()

    });
    
});