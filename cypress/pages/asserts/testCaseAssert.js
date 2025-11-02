import { URLS } from '../../business/constantes/urls';

/**
 * @class TestCaseAssert
 * @description Contém as asserções para a página de casos de teste.
 */
class TestCaseAssert {
    /**
     * Valida se a página de casos de teste está sendo exibida,
     * verificando a URL e a visibilidade do título.
     */
    assertPageIsVisible() {
        cy.url().should('include', URLS.TEST_CASES_PAGE);
        cy.contains('h2', 'Test Cases').should('be.visible');
    }
}

export default new TestCaseAssert();