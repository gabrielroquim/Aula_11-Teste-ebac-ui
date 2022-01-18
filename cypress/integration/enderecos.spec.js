/// <reference types="cypress"/>
var faker = require('faker-br');

describe('Funcionalidade cadastro de endereços', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

    });

    it('Deve fazer login com sucesso', () => {
      
        cy.get('#username').type('gabrielroquim@hotmail.com')
        cy.get('#password').type('529038Gdr!#')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, Roquim ')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get('h2').should('contain', 'My Addresses')

        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_first_name').clear().type(faker.name.firstName())
        cy.get('#billing_last_name').clear().type(faker.name.lastName())
        
       cy.get('#select2-billing_country-container').click()
       
        
     } )


})
