/// <reference types="cypress"/>
import CadastroPage from '../../support/pages/cadastro.pages'


describe('Funcionalidade: cadastro Usando Pages Objects', () => {
  beforeEach(() => {
    CadastroPage.visitUrl()
  });
  it('Deve fazer cadastro de usuario Admin com sucesso', () => {


    //Opção 1: Colocando todas as informações nas ()
    CadastroPage.CadastroUsuarioAdmin('TesteNovo', 'TesteNovo@teste.com', 'teste12')
    // Opção 2: tirando o e-mail de dentro das ()
    /*
     var email:'`TesteNovo${Date.now()}@teste.com'
     CadastroPage.CadastroUsuarioAdmin('TesteNovo', email, 'teste12')
    */


  });
  it('Deve fazer cadastro de usuario comum com sucesso', () => {
    CadastroPage.CadastroUsuarioComum('TesteNovoDois', 'TesteNovoDois@teste.com', 'teste123')
  });

});