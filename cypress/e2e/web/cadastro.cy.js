/// <reference types="cypress"/>
describe('Funcionalidade cadastro', () => {

  beforeEach(() => {
    cy.visit('cadastrarusuarios') //somente o nome 
  });


  it('Cadastro de novos usuarios', () => {
    cy.get('[data-testid="nome"]').clear().type('livinia')
    cy.get('[data-testid="email"]').clear().type('livinia@teste.com')
    cy.get('[data-testid="password"]').clear().type('teste12')
    cy.get('[data-testid="checkbox"]').check()
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')

  });

  /*
   it('Cadastro de novos usuarios', () => {
     cy.get('[data-testid="nome"]').clear().type('livia')
     cy.get('[data-testid="email"]').clear().type('livia@teste.com')
     cy.get('[data-testid="password"]').clear().type('teste1234')
     cy.get('[data-testid="checkbox"]').check()
     cy.get('[data-testid="cadastrar"]').click()
     cy.get('.alert').should('contain', ' Cadastro realizado com sucesso')
 
   });
    
   */

  /*
   Para novos testes de cadastro de usuario
  it('Usuario invalido',()=>{  
   cy.get('[data-testid="nome"]').clear().type('')
   cy.get('[data-testid="email"]').clear().type('')
   cy.get('[data-testid="password"]').clear().type('')
   cy.get('.form-check-label').check()
   cy.get('[data-testid="cadastrar"]').check()
   cy.get('.alert').should('contain',' Cadastro realizado')
 
  }); */





  /*
  it('Deve buscar com sucesso',()=>{
 
    cy.visit('https://front.serverest.dev/cadastro')
    
 
  });
 
 */

});
