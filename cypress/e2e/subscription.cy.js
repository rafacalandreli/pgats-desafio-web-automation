/// <reference types="cypress" />
import { getRandomEmail } from '../business/factories/userFactory.js';
import SubscriptionPage from '../pages/pom/SubscriptionPage.js';
import SubscriptionAssert from '../pages/asserts/SubscriptionAssert.js';

describe("Testes de Inscrição", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("Test Case 10: Verify Subscription in home page", () => {
    const email = getRandomEmail();
    
    cy.scrollTo('bottom');
    SubscriptionAssert.assertTitleSuccess();
    SubscriptionPage.fillEmail(email);
    SubscriptionPage.submit();
    SubscriptionAssert.assertSuccess();
  });
});
