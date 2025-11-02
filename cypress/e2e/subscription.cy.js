import { getRandomEmail } from '../business/factories/userFactory.js';
import subscriptionPage from '../pages/pom/SubscriptionPage.js';
import subscriptionAssert from '../pages/asserts/SubscriptionAssert.js';

describe("Testes de Inscrição", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("Test Case 10: Verify Subscription in home page", () => {
    const email = getRandomEmail();
    
    cy.scrollTo('bottom');
    subscriptionAssert.assertTitleSuccess();
    subscriptionPage.fillEmail(email);
    subscriptionPage.submit();
    subscriptionAssert.assertSuccess();
  });
});
