/// <reference types="cypress"/>
describe('Lista de Compras', () => {

	beforeEach(() => {

		cy.loginUsuario('LC@teste.com', 'lc123')

		//Modifica depois de alterar o support

		/*cy.visit('login') //somente o nome 
		cy.get('[data-testid="email"]').clear().type('LC@teste.com')
		cy.get('[data-testid="senha"]').clear().type('lc123')
		cy.get('[data-testid="entrar"]').click()
		cy.wait(10000)
*/

	});




	it('Validar entrada de lista de compras', () => {

		cy.visit('minhaListaDeProdutos')
		cy.get('h1').should('contain', 'Lista de Compras')
		cy.url().should('contain', 'minhaListaDeProdutos')



	});





});