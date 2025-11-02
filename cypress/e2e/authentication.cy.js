import { faker } from "@faker-js/faker";
import LoginPage from "../pages/pom/LoginPage.js";
import RegisterPage from "../pages/pom/RegisterPage.js";
import LoginAssert from "../pages/asserts/LoginAssert.js";
import RegisterAssert from "../pages/asserts/RegisterAssert.js";
import { getFullUser } from "../business/factories/userFactory.js";


context("Testes de Autenticação", () => {
    beforeEach(() => {
        LoginPage.visit();
    });

    describe("Testes de Autenticação", () => {
        afterEach(() => {
            cy.deleteAccount();
        });
        it("Test Case 1: Register User", () => {
            const user = getFullUser();

            cy.signup(user.name, user.email);

            RegisterAssert.assertRegisterTitleVisible();
            RegisterPage.fillFormAndSubmit(user);

            RegisterAssert.assertAccountCreatedAndContinue();
            LoginAssert.assertLoginSuccess(user.name);
        });

        it("Test Case 2: Login User with correct email and password", () => {
            const user = getFullUser();

            cy.createUserViaApi(user);

            LoginPage.visit();
            LoginPage.login(user.email, user.password);
            LoginAssert.assertLoginSuccess(user.name);
        });
    });

    describe("Testes de Autenticação II", () => {
        it("Test Case 3: Login User with incorrect email and password", () => {
            const invalidEmail = faker.internet.email();
            const invalidPassword = faker.internet.password();

            LoginPage.login(invalidEmail, invalidPassword);
            LoginAssert.assertLoginError();
        });

        it("Test Case 4: Logout User", () => {
            const user = getFullUser();

            cy.createUserViaApi(user);
            LoginPage.visit();
            LoginPage.login(user.email, user.password);
    
            LoginAssert.assertLoginSuccess(user.name);
            
            cy.logout();
            cy.url().should("include", "/login");
            LoginAssert.assertLoginFormTitleVisible();
        });
        it("Test Case 5: Register User with existing email", () => {
            const user = getFullUser();
            cy.createUserViaApi(user);
            LoginPage.visit();
            cy.signup(user.name, user.email);
            RegisterAssert.assertEmailExistsError();
        });
    });
});
