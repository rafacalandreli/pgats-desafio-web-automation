import { SELETORES } from '../../business/constantes/seletores.js';
import { MENSAGENS } from '../../business/constantes/mensagens.js';

class ContactAssert {
    /**
     * Valida se a mensagem de sucesso é exibida corretamente.
     */
    assertSuccess() {
        cy.get(SELETORES.CONTACT_SUCCESS_MESSAGE)
          .should('be.visible')
          .and('contain', MENSAGENS.CONTACT_SUCCESS);
    }
}

export default new ContactAssert();