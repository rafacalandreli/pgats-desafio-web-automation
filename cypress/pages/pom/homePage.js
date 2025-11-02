import { SELETORES } from '../../business/constantes/seletores.js';
import { URLS } from '../../business/constantes/urls.js';

/**
 * @class HomePage
 * @description Representa a página inicial e seus componentes globais, como o cabeçalho.
 */
class HomePage {
    /**
     * Visita a página inicial e valida seu carregamento.
     */
    visit() {
        cy.visit(URLS.BASE_URL);
        cy.validatePageLoad('/', 'Automation Exercise');
    }

    /**
     * Clica no link 'Signup / Login' no menu de navegação principal.
     */
    navigateToLogin() {
        cy.get(SELETORES.LINK_LOGIN_MENU).click();
    }

    /**
     * Clica no link 'Cart' no menu de navegação principal.
     */
    navigateToCart() {
        cy.get(SELETORES.LINK_CART).click();
    }

    /**
     * Clica no link 'Contact' no menu de navegação principal.
     */
    navigateToContact() {
        cy.get(SELETORES.LINK_CONTACT).click();
    }

    /**
     * Clica no link 'Test Case' no menu de navegação principal.
     */
    navigateToTestCase() {
        cy.get(SELETORES.LINK_TEST_CASE).first().click();
    }

    /**
    * Clica no link 'Products' no menu de navegação principal.
    */
    navigateToProducts() {
        cy.get(SELETORES.LINK_PRODUCTS).click();
    }
}

export default new HomePage();