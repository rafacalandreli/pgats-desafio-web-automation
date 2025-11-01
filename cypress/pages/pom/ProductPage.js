import { SELETORES } from '../../business/constantes/seletores.js';
import { URLS } from '../../business/constantes/urls.js';

class ProductPage {
    /**
     * Visita a página de produtos e valida seu carregamento.
     */
    visit() {
        cy.visit(URLS.PRODUCTS_PAGE);
        // Assumindo o título da página. Ajuste se necessário.
        cy.validatePageLoad(URLS.PRODUCTS_PAGE, 'Automation Exercise - All Products');
    }

    /**
     * Realiza uma busca por um produto.
     * @param {string} productName 
     */
    searchProduct(productName) {
        cy.get(SELETORES.SEARCH_PRODUCT).type(productName);
        cy.get(SELETORES.SEARCH_BUTTON).click();
    }

    /**
     * Adiciona um produto ao carrinho.
     * Nota: Este método pode precisar de ajuste dependendo de como os produtos são listados.
     * @param {string} productName - O nome do produto a ser adicionado.
     */
    addToCart(productName) {
        // Este é um exemplo mais robusto que o seletor original
        cy.contains('.productinfo', productName)
          .parent()
          .find('a.add-to-cart')
          .first() // Garante que apenas um elemento será clicado
          .click({ force: true });
    }

    /**
     * Clica no botão para continuar comprando no modal que aparece após adicionar um item.
     */
    continueShopping() {
        cy.get(SELETORES.CONTINUE_SHOPPING_BUTTON).click();
    }

    /**
     * Clica no link para ver o carrinho no modal.
     */
    viewCart() {
        cy.get(SELETORES.VIEW_CART).click();
    }

    /**
     * Clica em 'View Product' de um item específico da lista.
     * @param {number} productIndex - O índice do produto na lista (começando em 0).
     */
    viewProductDetails(productIndex) {
        cy.get(SELETORES.PRODUCTS_LIST)
          .find('.product-image-wrapper')
          .eq(productIndex)
          .contains('View Product')
          .click();
    }
}

export default new ProductPage();