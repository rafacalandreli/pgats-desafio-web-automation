import { SELETORES } from '../../business/constantes/seletores.js';
import { URLS } from '../../business/constantes/urls.js';
import { MENSAGENS } from '../../business/constantes/mensagens.js';

class LoginPage {
    /**
     * Visits the login page.
     */
    visit() {
        // Com a baseUrl configurada, o Cypress irá concatenar a URL base com o path.
        cy.visit(URLS.LOGIN_PAGE);
        cy.validatePageLoad(URLS.LOGIN_PAGE, 'Automation Exercise - Signup / Login');
    }

    /**
     * Fills the email field.
     * @param {string} email 
     */
    fillEmail(email) {
        cy.get(SELETORES.LOGIN_EMAIL).type(email);
    }

    /**
     * Fills the password field.
     * @param {string} password 
     */
    fillPassword(password) {
        cy.get(SELETORES.LOGIN_PASSWORD).type(password);
    }

    /**
     * Clicks the submit button.
     */
    submit() {
        cy.get(SELETORES.LOGIN_BUTTON).click();
    }

    /**
     * Performs a complete login flow via UI.
     * @param {string} email 
     * @param {string} password 
     */
    login(email, password) {
        this.fillEmail(email);
        this.fillPassword(password);
        this.submit();
    }

}

export default new LoginPage();
