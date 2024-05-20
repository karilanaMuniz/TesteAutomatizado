/// <reference types="cypress"/>
describe('Funcionalidade cadastro', ()=>{

 beforeEach(() => {
    cy.visit('cadastrarusuarios') //somente o nome 
 });

 it('Usuario invalido',()=>{  
  cy.get('[data-testid="nome"]').clear().type('Olivia')
  cy.get('[data-testid="email"]').clear().type('olivia@teste.com')
  cy.get('[data-testid="password"]').clear().type('teste123')
  cy.get('.form-check-label').check()
  cy.get('[data-testid="cadastrar"]').check()
  cy.get('.alert').should('contain',' Cadastro realizado')



 });





 /*
 it('Deve buscar com sucesso',()=>{

   cy.visit('https://front.serverest.dev/cadastro')
   

 });

*/

});
