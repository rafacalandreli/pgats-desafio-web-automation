import { SELETORES } from '../business/constantes/seletores.js';
import LoginPage from '../pages/pom/LoginPage.js';

describe("Test Case 7: Verify Test Cases Page", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("Test Case 7: Test Case", () => {
    cy.get(SELETORES.LINK_LOGIN).should('be.visible');
    cy.navigateForTestCase();

    cy.url().should('include', '/test_cases');
    cy.get(SELETORES.TEST_CASES_TITLE).should('be.visible').and('have.text', 'Test Cases');

  });
});
