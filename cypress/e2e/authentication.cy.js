import { faker } from "@faker-js/faker";
import loginPage from "../pages/pom/LoginPage.js";
import registerPage from "../pages/pom/RegisterPage.js";
import loginAssert from "../pages/asserts/LoginAssert.js";
import registerAssert from "../pages/asserts/RegisterAssert.js";
import { getFullUser } from "../business/factories/userFactory.js";


context("Testes de Autenticação", () => {
    const user = getFullUser();
    
    beforeEach(() => {
        loginPage.visit();
    });

    describe("Testes de Autenticação", () => {
        afterEach(() => {
            cy.deleteAccount();
        });

        it("Test Case 1: Register User", () => {
            cy.signup(user.name, user.email);

            registerAssert.assertRegisterTitleVisible();
            registerPage.fillFormAndSubmit(user);

            registerAssert.assertAccountCreatedAndContinue();
            loginAssert.assertLoginSuccess(user.name);
        });

        it("Test Case 2: Login User with correct email and password", () => {
            cy.createUserViaApi(user);

            loginPage.visit();
            loginPage.login(user.email, user.password);
            loginAssert.assertLoginSuccess(user.name);
        });
    });

    describe("Testes de Autenticação II", () => {
        it("Test Case 3: Login User with incorrect email and password", () => {
            const invalidEmail = faker.internet.email();
            const invalidPassword = faker.internet.password();

            loginPage.login(invalidEmail, invalidPassword);
            loginAssert.assertLoginError();
        });

        it("Test Case 4: Logout User", () => {
            cy.createUserViaApi(user);
            loginPage.visit();
            loginPage.login(user.email, user.password);
    
            loginAssert.assertLoginSuccess(user.name);
            
            cy.logout();
            loginAssert.assertLogoutSuccess();
        });
        
        it("Test Case 5: Register User with existing email", () => {
            const user = getFullUser();
            cy.createUserViaApi(user);
            loginPage.visit();
            registerAssert.assertNewUserSignupIsVisible();
            cy.signup(user.name, user.email);
            registerAssert.assertEmailExistsError();
        });
    });
});
