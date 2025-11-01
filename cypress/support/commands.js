import { SELETORES } from '../business/constantes/seletores.js';
import { MENSAGENS } from '../business/constantes/mensagens.js';


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

Cypress.Commands.add('login', (email, password) => {
  cy.get(SELETORES.LINK_LOGIN_MENU).click();
  cy.get(SELETORES.LOGIN_EMAIL).type(email);
  cy.get(SELETORES.LOGIN_PASSWORD).type(password);
  cy.get(SELETORES.LOGIN_BUTTON).click();
});


Cypress.Commands.add('logout', (email, password) => {
  cy.get(SELETORES.LINK_LOGOUT).click();
});


Cypress.Commands.add('signup', (name, email) => {
  cy.get(SELETORES.SIGNUP_NAME).type(name);
  cy.get(SELETORES.SIGNUP_EMAIL).type(email);
  cy.get(SELETORES.SIGNUP_BUTTON).click();
});

Cypress.Commands.add('createUserViaApi', (user) => {
  cy.api({
    method: 'POST',
    url: '/api/createAccount',
    form: true, // A API espera dados de formulário, não JSON
    body: {
      name: user.name,
      email: user.email,
      password: user.password,
      title: 'Mr', // Exemplo, pode ser parametrizado se necessário
      birth_date: user.dayOfBirth,
      birth_month: user.monthOfBirth,
      birth_year: user.yearOfBirth,
      firstname: user.firstName,
      lastname: user.lastName,
      company: 'Test Inc.',
      address1: user.address,
      address2: 'Apt 2',
      country: user.country,
      zipcode: user.zipcode,
      state: user.state,
      city: user.city,
      mobile_number: user.mobileNumber
    },
  }).then((response) => {
    expect(response.status).to.eq(200); // A API retorna 200, não 201 como documentado
    expect(response.body).to.contain('User created!');
  });
});

Cypress.Commands.add('loginViaSession', (email, password) => {
  cy.session([email, password], () => {
    cy.request({
      method: 'POST',
      url: '/api/verifyLogin',
      form: true, // A API espera dados de formulário
      body: {
        email: email,
        password: password,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.contain('User exists!');
    });
  });
});

Cypress.Commands.add('navigateForContact', () => {
  cy.get(SELETORES.LINK_CONTACT).click();
})

Cypress.Commands.add('navigateForTestCase', () => {
  cy.get(SELETORES.LINK_TEST_CASE).click();
})

Cypress.Commands.add('navigateForProducts', () => {
  cy.get(SELETORES.LINK_PRODUCTS).click();
})

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