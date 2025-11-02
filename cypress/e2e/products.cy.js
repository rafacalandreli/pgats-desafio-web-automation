import productPage from '../pages/pom/ProductPage.js';
import productAssert from '../pages/asserts/ProductAssert.js';

describe("Testes de Produtos", () => {
  beforeEach(() => {
    productPage.visit();
  });

  it("Test Case 8: Verify All Products and product detail page", () => {
    productAssert.assertProductListIsVisible();
    productPage.viewProductDetails(0);
    productAssert.assertProductDetailsPageIsVisible();
    productAssert.assertProductDetailsAreVisible();
  });

  it("Test Case 9: Search Product", () => {
    const productName = 'Men Tshirt';

    productPage.searchProduct(productName);
    productAssert.assertProductIsVisible(productName);
  });
});
