import { SELETORES } from '../../business/constantes/seletores.js';
import { MENSAGENS } from '../../business/constantes/mensagens.js';

class RegisterAssert {
    /**
     * Valida que o título do formulário de registro está visível.
     */
    assertRegisterTitleVisible() {
        cy.contains(MENSAGENS.ENTER_INFO_TITLE).should('be.visible');
    }

    /**
     * Valida a criação da conta e clica em continuar.
     */
    assertAccountCreatedAndContinue() {
        cy.get(SELETORES.ACCOUNT_CREATED).should('be.visible');
        cy.get(SELETORES.CONTINUE_BUTTON).click();
    }

    /**
     * Valida que a mensagem de erro 'Email já existe' é exibida.
     */
    assertEmailExistsError() {
        cy.get(SELETORES.SIGNUP_ERROR_MESSAGE)
          .should('contain', MENSAGENS.EMAIL_EXISTS_ERROR);
    }
}

export default new RegisterAssert();