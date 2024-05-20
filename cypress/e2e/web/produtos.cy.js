/// <reference types="cypress"/>

describe('LOGIN ', () => {

  beforeEach(() => {
    // cy.visit('admin/cadastrarprodutos') //somente o nome 
    cy.visit('https://front.serverest.dev/admin/cadastrarprodutos') //somente o nome 

  });




  it('Cadastrar produtos', () => {


    cy.get('[data-testid="nome"]').clear().type('')
    cy.get('[data-testid="preço"]').clear().type('')
    cy.get('[data-testid="descrição"]').clear().type('')
    cy.get('[data-testid="quantidade"]').clear().type('')
    cy.get('[data-testid="e"]').click()



  });





});