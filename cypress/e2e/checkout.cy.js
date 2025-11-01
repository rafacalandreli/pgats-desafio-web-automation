/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import { getFullUser } from '../business/factories/userFactory.js';
import LoginPage from '../pages/pom/LoginPage.js';
import ProductPage from '../pages/pom/ProductPage.js';
import CheckoutPage from '../pages/pom/CheckoutPage.js';
import CheckoutAssert from '../pages/asserts/CheckoutAssert.js';
import { SELETORES } from '../business/constantes/seletores.js';

describe('Testes de Checkout', () => {
    let user;
    let paymentInfo;

    before(() => {
        user = getFullUser();
        cy.createUserViaApi(user);
    });

    after(() => {
        cy.deleteAccount();
    });

    beforeEach(() => {
        LoginPage.visit();
        LoginPage.login(user.email, user.password);

        paymentInfo = {
            nameOnCard: user.name,
            cardNumber: faker.finance.creditCardNumber(),
            cvc: faker.finance.creditCardCVV(),
            expiryMonth: '12',
            expiryYear: '2030'
        };
    });

    it('Test Case 14: Place Order: Register while Checkout', { scrollBehavior: false }, () => {
        ProductPage.visit();
        ProductPage.addToCart('Blue Top');
        ProductPage.viewCart();
        
        cy.get(SELETORES.PROCEED_TO_CHECKOUT).click();

        CheckoutAssert.assertAddressDetailsVisible();
        CheckoutPage.placeOrder('Placing order as a test.');

        CheckoutPage.fillPaymentDetails(paymentInfo);
        
        CheckoutPage.confirmPayment();
        CheckoutAssert.assertOrderPlaced();
    });
});
