import { SELETORES } from '../../business/constantes/seletores.js';
import { MENSAGENS } from '../../business/constantes/mensagens.js';

class RegisterPage {
    /**
     * Preenche e submete o formulário de registro completo.
     * @param {object} user - Objeto de usuário da userFactory.
     */
    fillFormAndSubmit(user) {
        cy.get(SELETORES.REGISTER_GENDER_MALE).check();
        cy.get(SELETORES.REGISTER_PASSWORD).type(user.password);
        cy.get(SELETORES.REGISTER_DAY).select(user.dayOfBirth);
        cy.get(SELETORES.REGISTER_MONTH).select(user.monthOfBirth);
        cy.get(SELETORES.REGISTER_YEAR).select(user.yearOfBirth);
        cy.get(SELETORES.REGISTER_FIRST_NAME).type(user.firstName);
        cy.get(SELETORES.REGISTER_LAST_NAME).type(user.lastName);
        cy.get(SELETORES.REGISTER_ADDRESS).type(user.address);
        cy.get(SELETORES.REGISTER_COUNTRY).select(user.country);
        cy.get(SELETORES.REGISTER_STATE).type(user.state);
        cy.get(SELETORES.REGISTER_CITY).type(user.city);
        cy.get(SELETORES.REGISTER_ZIPCODE).type(user.zipcode);
        cy.get(SELETORES.REGISTER_MOBILE).type(user.mobileNumber);
        
        cy.get(SELETORES.REGISTER_CREATE_ACCOUNT).click();
    }
}

export default new RegisterPage();