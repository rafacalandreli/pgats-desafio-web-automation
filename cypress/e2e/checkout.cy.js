import { faker } from "@faker-js/faker";
import { getFullUser } from "../business/factories/userFactory.js";
import loginPage from "../pages/pom/LoginPage.js";
import productPage from "../pages/pom/ProductPage.js";
import checkoutPage from "../pages/pom/CheckoutPage.js";
import checkoutAssert from "../pages/asserts/CheckoutAssert.js";
import homePage from "../pages/pom/HomePage.js";
import cartPage from "../pages/pom/CartPage.js";
import cartAssert from "../pages/asserts/CartAssert.js";

describe("Testes de Checkout I", () => {
    let user;
    user = getFullUser();
    const paymentInfo = {
        nameOnCard: user.name,
        cardNumber: faker.finance.creditCardNumber(),
        cvc: faker.finance.creditCardCVV(),
        expiryMonth: "12",
        expiryYear: "2030",
    };

    before(() => {
        cy.createUserViaApi(user);
    });

    beforeEach(() => {
        loginPage.visit();
        loginPage.login(user.email, user.password);
        homePage.navigateToProducts();
    });

    after(() => {
        cy.deleteAccount();
    });


    it("Test Case 14: Place Order: Register while Checkout", { scrollBehavior: false }, () => {
        productPage.addToCart("Blue Top");
        productPage.viewCart();
        cartPage.proceedToCheckout();

        checkoutAssert.assertAddressDetailsVisible();
        checkoutPage.placeOrder("Placing order as a test.");

        checkoutPage.fillPaymentDetails(paymentInfo);

        checkoutPage.confirmPayment();
        checkoutAssert.assertOrderPlaced();
    }
    );

    it("Test Case 15: Place Order: Register and Checkout", () => {

        productPage.addToCart("Blue Top");
        productPage.viewCart();
        cartAssert.assertCartPageIsVisible();

        cartPage.proceedToCheckout();

        checkoutAssert.assertAddressDetailsVisible();
        checkoutPage.placeOrder("Test Case 15 order placement.");

        checkoutPage.fillPaymentDetails(paymentInfo);
        checkoutPage.confirmPayment();
        checkoutAssert.assertOrderPlaced();
    });

});
