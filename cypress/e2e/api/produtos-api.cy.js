/// <reference types="cypress"/>
import dados from '../../fixtures/usuario-api.json'
const urlBase = 'http://localhost:3000/'


//const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vdm91c3VhcmlvQHFhLmNvbS5iciIsInBhc3N3b3JkIjoidGVzdGUiLCJpYXQiOjE3MTY0NzM5NzYsImV4cCI6MTcxNjQ3NDU3Nn0.6ehMVg_CXtiJ1rDrZhgkaY5o-BPdLgMLrmzVEcTvY-Q' //parte da segunda forma 

/*
  Este teste verifica se a API de produtos retorna uma lista de produtos com sucesso. 
*/


describe('API-Produtos', () => {
  /*
    beforeEach(() => {
      cy.token('novousuario@qa.com.br', 'teste')  //Parte da segunda forma 
    });
  */
  beforeEach(() => {
    cy.token(dados.email, dados.senha).as('token')
  });




  /*Ele faz uma solicitação GET para a URL: http://localhost:3000/produtos e valida que a resposta tenha status 200, que a duração da resposta seja menor que 30 milissegundos e que o corpo da resposta contenha as propriedades produtos e quantidade.*/

  it('Deve lista com sucesso', () => {
    cy.request({
      method: 'GET',
      url: urlBase + 'produtos'

    }).then((response) => {
      expect(response.status).to.equal(200)
      // expect (response.duration).lessThan(30) //Duas formas de usar: forma 1 
      expect(response.duration).to.be.lessThan(60) // Forma 2 
      expect(response.body).property('produtos')
      expect(response.body).property('quantidade')
    })
  });


  it('Deve cadastrar produto', function () { //terceira forma inserir Function() e retira o =>
    var produto = `Produto teste ${Date.now()}`
    cy.request({
      method: 'POST',
      url: urlBase + 'produtos',
      body: {
        "nome": produto, // "HPtres" -> Ou usa o nome do produto diretamente ou faz uma variavel :forma 1  Ou usando o Faker como gerador de nome.
        "preco": 470,
        "descricao": "Mouse",
        "quantidade": 381
      },
      headers: {
        //"authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vdm91c3VhcmlvQHFhLmNvbS5iciIsInBhc3N3b3JkIjoidGVzdGUiLCJpYXQiOjE3MTY0NzIzODIsImV4cCI6MTcxNjQ3Mjk4Mn0.UZ2tZE8h4Osdjjb52F_lH22KZecyepyjV-TrSZZ2zOU' //forma direta para passar o token

        // authorization: token //segunda forma 
        authorization: this.token //terceira forma 
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      expect(response.body.message).to.equal("Cadastro realizado com sucesso")
    });

  });

  /*
  
     Forma anterior para alteração, porém o nome não pode ser usado em novo produto alterado
    it('Deve alterar dados de um produto com sucesso', function () {
  
      cy.request({
        method: 'PUT',
        url: urlBase + 'produtos' + '', //deve colocar os numero do ID do produto
        body: {
          "nome": "AlteraçãoProduto", // -> Ou usa o nome do produto diretamente ou faz uma variavel :forma 1  Ou usando o Faker como gerador de nome.
          "preco": 1000,
          "descricao": "Alteração de produto",
          "quantidade": 381
        },
        headers: {
  
          authorization: this.token //terceira forma 
        }
  
      }).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.message).to.equal(" Registro alterado com sucesso")
      })
  
  
    });*/

  // Esta nova forma vai alterar o produto e o nome
  it('Deve alterar dados do produto com sucesso', function () {
    var produtoAlterado = `Produto teste ${Date.now()}`
    cy.cadastrarProduto(this.token)
      .then((response) => {
        cy.log(response.body._id)
        var id = response.body._id
        cy.request({
          method: 'PUT',
          url: urlBase + 'produtos/' + id,
          body:
          {
            "nome": produtoAlterado,
            "preco": 100,
            "descricao": "Descrição alterada",
            "quantidade": 100
          },
          headers: {
            authorization: this.token
          }
        }).then((response) => {
          expect(response.status).to.equal(200)
          expect(response.body.message).to.equal('Registro alterado com sucesso')
        })
      })
  });

  //

  it('Deve excluir o produto com sucesso', function () {
    cy.cadastrarProduto(this.token)
      .then((response) => {
        cy.log(response.body._id)
        var id = response.body._id
        cy.request({
          method: 'DELETE',
          url: urlBase + 'produtos/' + id,
          headers: {
            authorization: this.token
          }
        }).then((response) => {
          expect(response.status).to.equal(200)
          expect(response.body.message).to.equal('Registro excluído com sucesso')
        })
      })
  });

});