/**
 * @class CartAssert
 * @description Contém as asserções para a página do carrinho de compras.
 */
class CartAssert {
    /**
     * Valida se a página do carrinho está sendo exibida, verificando a URL.
     */
    assertCartPageIsVisible() {
        cy.url().should('include', '/view_cart');
    }
}

export default new CartAssert();