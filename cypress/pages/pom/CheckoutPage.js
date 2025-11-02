import { SELETORES } from '../../business/constantes/seletores.js';
import { MENSAGENS } from '../../business/constantes/mensagens.js';
import { URLS } from '../../business/constantes/urls.js';

class CheckoutPage {
    /**
     * Visita a página de checkout e valida o carregamento.
     */
    visit() {
        cy.visit(URLS.CHECKOUT_PAGE);
        cy.validatePageLoad(URLS.CHECKOUT_PAGE, 'Automation Exercise - Checkout');
    }

    /**
     * Adiciona um comentário e clica no botão para finalizar o pedido.
     * @param {string} comment - O comentário a ser adicionado ao pedido.
     */
    placeOrder(comment) {
        if (comment) {
            cy.get(SELETORES.CHECKOUT_COMMENT).scrollIntoView().type(comment);
        }
        cy.get(SELETORES.PLACE_ORDER).click();
    }

    /**
     * @param {object} paymentInfo
     * @param {string} paymentInfo.nameOnCard
     * @param {string} paymentInfo.cardNumber
     * @param {string} paymentInfo.cvc
     * @param {string} paymentInfo.expiryMonth
     * @param {string} paymentInfo.expiryYear
     */
    fillPaymentDetails(paymentInfo) {
        cy.get(SELETORES.PAYMENT_NAME).type(paymentInfo.nameOnCard);
        cy.get(SELETORES.PAYMENT_CARD_NUMBER).type(paymentInfo.cardNumber);
        cy.get(SELETORES.PAYMENT_CVC).type(paymentInfo.cvc);
        cy.get(SELETORES.PAYMENT_EXPIRY_MONTH).type(paymentInfo.expiryMonth);
        cy.get(SELETORES.PAYMENT_EXPIRY_YEAR).type(paymentInfo.expiryYear);
    }

    /**
     * Clica no botão para confirmar o pagamento.
     */
    confirmPayment() {
        cy.get(SELETORES.PAYMENT_SUBMIT).click();
    }
}

export default new CheckoutPage();