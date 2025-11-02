/**
 * @module UserAPI
 * @description Este módulo contém funções para interagir com a API de usuários.
 */

/**
 * Cria um usuário via chamada de API.
 * Lança um erro se a criação falhar.
 * @param {object} user - O objeto de usuário contendo os dados para o cadastro.
 */
export const createUser = (user) => {
  cy.api({
    method: 'POST',
    url: '/api/createAccount',
    form: true,
    body: {
      name: user.name,
      email: user.email,
      password: user.password,
      title: 'Mr',
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
    }
  }).should((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.include('User created!');
  }).then(() => {
    cy.log('Usuário criado via API com sucesso:', user.email);
  });
};

/**
 * Realiza o login de um usuário via chamada de API.
 * @param {string} email - O email do usuário.
 * @param {string} password - A senha do usuário.
 */
export const login = (email, password) => {
  cy.request({
    method: 'POST',
    url: '/api/verifyLogin',
    form: true,
    body: {
      email: email,
      password: password,
    },
  }).should((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.include('User exists!');
  });
};