import { SELETORES } from '../../business/constantes/seletores.js';
import { MENSAGENS } from '../../business/constantes/mensagens.js';
import { URLS } from '../../business/constantes/urls.js';

class CheckoutPage {
    visit() {
        cy.visit(URLS.CHECKOUT_PAGE);
        cy.validatePageLoad(URLS.CHECKOUT_PAGE, 'Automation Exercise - Checkout');
    }

    /**
     * @param {string} comment
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
     */
    confirmPayment() {
        cy.get(SELETORES.PAYMENT_SUBMIT).click();
    }

    /**
     */
}

export default new CheckoutPage();