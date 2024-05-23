// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//Este cenario esta sendo utilizado para lista Compras 
Cypress.Commands.add('loginUsuario', (email, senha) => {
  cy.visit('login')
  cy.get('[data-testid="email"]').clear().type(email)
  cy.get('[data-testid="senha"]').clear().type(senha)
  cy.get('[data-testid="entrar"]').click()
  cy.wait(1000)
})
//Feito aqui este custome para ser utilizado no Cadastro NãoADMIN
Cypress.Commands.add('cadastroUsuario', (nome, email, senha) => {
  cy.visit('cadastrarusuarios')
  cy.get('[data-testid="nome"]').clear().type(nome)
  cy.get('[data-testid="email"]').clear().type(email)
  cy.get('[data-testid="password"]').clear().type(senha)
  cy.get('[data-testid="cadastrar"]').click()
})
//Feito aqui este custome para ser utilizado no Cadastro ADMIN 
Cypress.Commands.add('cadastroUsuario', (nome, email, senha) => {
  cy.visit('cadastrarusuarios')
  cy.get('[data-testid="nome"]').clear().type(nome)
  cy.get('[data-testid="email"]').clear().type(email)
  cy.get('[data-testid="password"]').clear().type(senha)
  cy.get('[data-testid="checkbox"]').check()
  cy.get('[data-testid="cadastrar"]').click()
})

//parte da segunda forma para o token
/* 
Cypress.Commands.add('token', (email, senha) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/login',
    body: {
      "email": email,
      "password": senha
    }
  }).then((response) => {
    expect(response.status).to.equal(200) //usado na segunda forma
    expect(response.body.message).to.equal("Login realizado com sucesso")
  })

}) */

Cypress.Commands.add('token', (email, senha) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/login',
    body:
    {
      "email": email,
      "password": senha
    }
  }).then((response) => {
    expect(response.status).equal(200)
    return response.body.authorization
  })
})


Cypress.Commands.add('cadastrarProduto', (tkn) => {
  var produto = `Produto teste ${Date.now()}`
  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/produtos',
    body: {
      "nome": produto,
      "preco": 1001,
      "descricao": "Comandos customizados...",
      "quantidade": 1001
    },
    headers: {
      authorization: tkn
    }
  })

})