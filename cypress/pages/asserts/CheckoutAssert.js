import { SELETORES } from '../../business/constantes/seletores.js';
import { MENSAGENS } from '../../business/constantes/mensagens.js';

class CheckoutAssert {
    /**
     * Valida se os detalhes do endereço de entrega estão visíveis.
     */
    assertAddressDetailsVisible() {
        cy.get(SELETORES.CHECKOUT_ADDRESS).should('be.visible');
    }

    /**
     * Valida se a mensagem de pedido realizado com sucesso é exibida.
     */
    assertOrderPlaced() {
        cy.get(SELETORES.ORDER_PLACED_TITLE)
            .should('be.visible')
            .and('contain', MENSAGENS.ORDER_PLACED);
    }
}

export default new CheckoutAssert();