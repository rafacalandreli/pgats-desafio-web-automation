import { SELETORES } from '../../business/constantes/seletores.js';

class ProductAssert {
    /**
     * Valida que a lista de produtos está visível.
     */
    assertProductListIsVisible() {
        cy.get(SELETORES.PRODUCTS_LIST).should('be.visible');
    }

    /**
     * Valida os detalhes de um produto na página de detalhes.
     * @param {object} productDetails
     * @param {string} productDetails.name
     * @param {string} productDetails.category
     * @param {string} productDetails.price
     */
    assertProductDetails(productDetails) {
        cy.get(SELETORES.PRODUCT_NAME_DETAIL).should('contain', productDetails.name);
        cy.get(SELETORES.PRODUCT_CATEGORY_DETAIL).should('contain', productDetails.category);
        cy.get(SELETORES.PRODUCT_PRICE_DETAIL).should('contain', productDetails.price);
    }

    /**
     * Valida que os principais elementos da página de detalhes do produto estão visíveis.
     */
    assertProductDetailsAreVisible() {
        cy.get(SELETORES.PRODUCT_NAME_DETAIL).should('be.visible');
        cy.get(SELETORES.PRODUCT_CATEGORY_DETAIL).should('be.visible');
        cy.get(SELETORES.PRODUCT_PRICE_DETAIL).should('be.visible');
        cy.get(SELETORES.PRODUCT_AVAILABILITY_DETAIL).should('be.visible');
        cy.get(SELETORES.PRODUCT_CONDITION_DETAIL).should('be.visible');
        cy.get(SELETORES.PRODUCT_BRAND_DETAIL).should('be.visible');
    }

    /**
     * Valida que um produto específico está visível na lista de produtos.
     * @param {string} productName 
     */
    assertProductIsVisible(productName) {
        cy.get(SELETORES.PRODUCTS_LIST).contains(productName).should('be.visible');
    }

    /**
     * Valida que a página de detalhes do produto está sendo exibida.
     */
    assertProductDetailsPageIsVisible() {
        cy.url().should('include', '/product_details/');
    }
}

export default new ProductAssert();