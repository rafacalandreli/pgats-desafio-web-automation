import { SELETORES } from '../business/constantes/seletores.js';
import { MENSAGENS } from '../business/constantes/mensagens.js';


/**
 * Realiza o fluxo de login completo via UI.
 * @param {string} email - O email do usuário.
 * @param {string} password - A senha do usuário.
 */
Cypress.Commands.add('login', (email, password) => {
    cy.get(SELETORES.LINK_LOGIN_MENU).click();
    cy.get(SELETORES.LOGIN_EMAIL).type(email);
    cy.get(SELETORES.LOGIN_PASSWORD).type(password);
    cy.get(SELETORES.LOGIN_BUTTON).click();
});

/**
 * Realiza o logout do usuário.
 */
Cypress.Commands.add('logout', () => {
    cy.get(SELETORES.LINK_LOGOUT).click();
});

/**
 * Preenche o formulário inicial de cadastro com nome e email.
 * @param {string} name - O nome do usuário.
 * @param {string} email - O email do usuário.
 */
Cypress.Commands.add('signup', (name, email) => {
    cy.get(SELETORES.SIGNUP_NAME).type(name);
    cy.get(SELETORES.SIGNUP_EMAIL).type(email);
    cy.get(SELETORES.SIGNUP_BUTTON).click();
});

import { createUser, login } from '../api/user.api.js';

/**
 * Cria um usuário via chamada de API para acelerar os testes.
 * Este comando delega a lógica da chamada para a camada de API.
 * @param {object} user - O objeto de usuário contendo todos os dados necessários.
 */
Cypress.Commands.add('createUserViaApi', (user) => {
    createUser(user);
});

/**
 * Realiza o login via API e armazena a sessão, otimizando o tempo de execução.
 * @param {string} email - O email do usuário.
 * @param {string} password - A senha do usuário.
 */
Cypress.Commands.add('loginViaSession', (email, password) => {
    cy.session([email, password], () => {
        login(email, password);
    });
});

/**
 * Navega para a página de contato.
 */
Cypress.Commands.add('navigateForContact', () => {
    cy.get(SELETORES.LINK_CONTACT).click();
});

/**
 * Navega para a página de casos de teste.
 */
Cypress.Commands.add('navigateForTestCase', () => {
    cy.get(SELETORES.LINK_TEST_CASE).click();
});

/**
 * Navega para a página de produtos.
 */
Cypress.Commands.add('navigateForProducts', () => {
    cy.get(SELETORES.LINK_PRODUCTS).click();
});

/**
 * Valida se a página foi carregada corretamente, verificando a URL e o título.
 * @param {string} path - O caminho da URL que deve ser incluído.
 * @param {string} title - O título exato que a página deve ter.
 */
Cypress.Commands.add('validatePageLoad', (path, title) => {
    cy.url().should('include', path);
    cy.title().should('eq', title);
});

/**
 * Executa o fluxo de deleção de conta e valida o sucesso.
 */
Cypress.Commands.add('deleteAccount', () => {
    cy.get(SELETORES.DELETE_ACCOUNT_BUTTON).click();
    cy.get(SELETORES.ACCOUNT_DELETED_MESSAGE)
      .should('be.visible')
      .and('contain', MENSAGENS.ACCOUNT_DELETED_SUCCESS);
    cy.get(SELETORES.CONTINUE_BUTTON).click();
});