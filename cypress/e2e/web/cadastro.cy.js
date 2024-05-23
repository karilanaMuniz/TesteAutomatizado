/// <reference types="cypress"/>
import { Faker, faker } from "@faker-js/faker";
import dadosUsuario from '../../fixtures/usuarios.json'


describe('Funcionalidade cadastro', () => {

	beforeEach(() => {
		cy.visit('cadastrarusuarios') //somente o nome 
	});

	//Skip é utilizado para não rodar o cenario  ; it.skip
	it('Cadastro de novos usuarios (Usando Date Now)', () => {
		var email = '' + Date.now() + '@teste.com'
		//var email= 'lina'+ '@teste'+'.com'  //formas de conctenação 
		cy.get('[data-testid="nome"]').clear().type('livinia')
		cy.get('[data-testid="email"]').clear().type(email)
		cy.get('[data-testid="password"]').clear().type('teste12')
		cy.get('[data-testid="checkbox"]').check()
		cy.get('[data-testid="cadastrar"]').click()
		cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')

	});

	//Utilizando Faker para gerar e-mail automatico
	it('Cadastro de novos usuarios (Usando Faker )', () => {
		//Caso queira deixa o nome unico:faker.person.fullname()
		cy.get('[data-testid="nome"]').clear().type('livinia')

		cy.get('[data-testid="email"]').clear().type(faker.internet.email())
		cy.get('[data-testid="password"]').clear().type('teste12')
		cy.get('[data-testid="checkbox"]').check()
		cy.get('[data-testid="cadastrar"]').click()
		cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')

	});


	//Cenario preenchido como administrador 

	it('Cadastro de novos usuarios', () => {
		cy.get('[data-testid="nome"]').clear().type('livia')
		cy.get('[data-testid="email"]').clear().type('livia@teste.com')
		cy.get('[data-testid="password"]').clear().type('teste1234')
		cy.get('[data-testid="checkbox"]').check()
		cy.get('[data-testid="cadastrar"]').click()
		cy.get('.alert').should('contain', ' Cadastro realizado com sucesso')

	});


	// Cenario de Usuario sem ser administrador

	it('Usuario sem ser Admin ', () => {
		cy.get('[data-testid="nome"]').clear().type('LC')
		cy.get('[data-testid="email"]').clear().type('LC@teste.com')
		cy.get('[data-testid="password"]').clear().type('lc123')
		cy.get('[data-testid="cadastrar"]').click()
		cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')

	});


	//Cenarios Customizado. Para rodar comente o cenario utilize o it.only (Não admin)

	it('Deve fazer cadastro não admin', () => {
		cy.cadastroUsuario('livia', faker.internet.email(), 'teste123')
		cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
		cy.get('h1', { timeout: 10000 }).should('contain', 'Serverest Store')
	});
	//Cenarios Customizado. Para rodar comente o cenario utilize o it.only (admin)
	it('Deve fazer cadastro admin', () => {
		cy.cadastroUsuario('livia', faker.internet.email(), 'teste123')
		cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
		cy.get('.lead', { timeout: 10000 }).should('contain', 'Este é seu sistema para administrar seu ecommerce.')
	});

	it('Cadastro usuario com sucesso usando importação de dados (ADMIN)', () => {
		cy.cadastroUsuario(dadosUsuario[0].nome, dadosUsuario[0].email, dadosUsuario[0].senha)
		cy.get('.lead', { timeout: 10000 }).should('contain', 'Este é seu sistema para administrar seu ecommerce.')
	});


	/* Cenario em Branco 
	 Para novos testes de cadastro de usuario
	it('Usuario invalido',()=>{  
	 cy.get('[data-testid="nome"]').clear().type('')
	 cy.get('[data-testid="email"]').clear().type('')
	 cy.get('[data-testid="password"]').clear().type('')
	 cy.get('.form-check-label').check()
	 cy.get('[data-testid="cadastrar"]').check()
	 cy.get('.alert').should('contain','Cadastro realizado')
 
	}); */





	/*
	it('Deve buscar com sucesso',()=>{
 
		cy.visit('https://front.serverest.dev/cadastro')
		
 
	});
 
 */

});
