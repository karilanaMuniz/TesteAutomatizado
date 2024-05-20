/// <reference types="cypress"/>


describe('LOGIN ', () => {
  /*
    it('Fazer Login', () => {
  
  
      cy.get('[data-testid="email"]').clear().type('fabio@araujo.com')
      cy.get('[data-testid="senha"]').clear().type('teste@123')
      cy.get('[data-testid="entrar"]').click()
      cy.get('h1').should('contain', 'Bem Vindo')
      cy.get('.lead').should('contain', 'Este é seu sistema para administrar seu ecommerce.')
  
  
    });
  
    it('Fazer Login com Usuario criado por mim', () => {
  
  
      cy.get('[data-testid="email"]').clear().type('olivia@teste.com')
      cy.get('[data-testid="senha"]').clear().type('teste123')
      cy.get('[data-testid="entrar"]').click()
      cy.get('h1').should('contain', 'Bem Vindo')
      cy.get('.lead').should('contain', 'Este é seu sistema para administrar seu ecommerce.')
  
  
    }); */

  it('Fazer Login com Usuario criado por mim', () => {


    cy.get('[data-testid="email"]').clear().type('livia@teste.com')
    cy.get('[data-testid="senha"]').clear().type('teste1234')
    cy.get('[data-testid="entrar"]').click()
    cy.get('h1').should('contain', 'Bem Vindo')
    cy.get('.lead').should('contain', 'Este é seu sistema para administrar seu ecommerce.')


  });




  it('Usuario invalido', () => {

    cy.get('[data-testid="email"]').clear().type('fabio@gmail.com')
    cy.get('[data-testid="senha"]').clear().type('teste123')
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert').should('contain', 'Email e/ou senha inválidos')


  });
  it('Deve validar mensagem de senha inválida', () => {
    cy.get('[data-testid="email"]').clear().type('fabio@araujo.com')
    cy.get('[data-testid="senha"]').clear().type('testedsdsd@123')
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
  });

  before(() => {
    //Fazer algo antes de todos os testes : exe: subir servidor
  });

  beforeEach(() => {
    // Fazer algo antes de cada cenarios
    cy.visit('login')
  });

  after(() => {

  });
  afterEach(() => {
    cy.screenshot()
  });

});

