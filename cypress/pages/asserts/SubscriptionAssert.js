import { SELETORES } from '../../business/constantes/seletores.js';
import { MENSAGENS } from '../../business/constantes/mensagens.js';

class SubscriptionAssert {
    /**
     * Valida a mensagem de sucesso da inscrição.
     */
    assertSuccess() {
        cy.get(SELETORES.SUBSCRIPTION_SUCCESS)
          .should('be.visible')
          .and('contain', MENSAGENS.SUBSCRIPTION_SUCCESS);
    }

    /**
     * Valida o título da seção de inscrição.
     */
    assertTitleSuccess(){
        cy.get(SELETORES.FOOTER_TITLE).should('have.text', 'Subscription');
    }
}

export default new SubscriptionAssert();