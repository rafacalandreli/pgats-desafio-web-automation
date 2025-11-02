import { SELETORES } from '../../business/constantes/seletores.js';

/**
 * @class CartPage
 * @description Representa a página do carrinho de compras.
 */
class CartPage {
    /**
     * Clica no botão para prosseguir para o checkout.
     */
    proceedToCheckout() {
        cy.get(SELETORES.PROCEED_TO_CHECKOUT).click();
    }
}

export default new CartPage();