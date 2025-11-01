/// <reference types="cypress" />
import ProductPage from '../pages/pom/ProductPage.js';
import ProductAssert from '../pages/asserts/ProductAssert.js';

describe("Testes de Produtos", () => {
  beforeEach(() => {
    ProductPage.visit();
  });

  it("Test Case 8: Verify All Products and product detail page", () => {
    ProductAssert.assertProductListIsVisible();
    ProductPage.viewProductDetails(0);
    cy.url().should('include', '/product_details/');
    ProductAssert.assertProductDetailsAreVisible();
  });

  it("Test Case 9: Search Product", () => {
    const productName = 'Men Tshirt';

    ProductPage.searchProduct(productName);
    ProductAssert.assertProductIsVisible(productName);
  });
});
