import { SELETORES } from '../../business/constantes/seletores.js';
import { MENSAGENS } from '../../business/constantes/mensagens.js';

class SubscriptionPage {
    /**
     * Preenche o campo de email para inscrição.
     * @param {string} email 
     */
    fillEmail(email) {
        cy.get(SELETORES.SUBSCRIPTION_EMAIL).type(email);
    }

    /**
     * Clica no botão para se inscrever.
     */
    submit() {
        cy.get(SELETORES.SUBSCRIPTION_BUTTON).click();
    }

    /**
     * Executa o fluxo completo de inscrição.
     * @param {string} email
     */
    subscribe(email) {
        this.fillEmail(email);
        this.submit();
    }
}

export default new SubscriptionPage();