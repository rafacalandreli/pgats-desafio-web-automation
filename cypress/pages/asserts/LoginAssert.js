import { SELETORES } from '../../business/constantes/seletores.js';
import { MENSAGENS } from '../../business/constantes/mensagens.js';

class LoginAssert {
    /**
     * Asserts that the login error message is visible.
     */
    assertLoginError() {
        cy.get(SELETORES.LOGIN_ERROR_MESSAGE).should('contain', MENSAGENS.LOGIN_ERROR);
    }

    /**
     * Asserts that the login was successful by checking for the logout link and username.
     * @param {string} [userName] - Optional username to verify.
     */
    assertLoginSuccess(userName) {
        cy.get(SELETORES.LINK_LOGOUT).should('be.visible');
        if (userName) {
            cy.get(SELETORES.NAVBAR_USER_INFO).should('contain', userName);
        }
    }

    /**
     * Asserts that the login form title is visible.
     */
    assertLoginFormTitleVisible() {
        cy.get(SELETORES.LOGIN_FORM_TITLE).should('contain', MENSAGENS.LOGIN_TITLE);
    }
}

export default new LoginAssert();