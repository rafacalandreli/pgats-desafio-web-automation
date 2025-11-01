/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import ContactPage from '../pages/pom/ContactPage.js';
import ContactAssert from '../pages/asserts/ContactAssert.js';

describe("Testes do Formulário de Contato", () => {
  beforeEach(() => {
    ContactPage.visit();
  });

  it("Test Case 6: Contact Us Form", () => {
    const contactData = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        subject: faker.lorem.sentence(3),
        message: faker.lorem.paragraph(),
    };
    const filePath = 'cypress/support/files/text.txt';

    ContactPage.fillForm(contactData.name, contactData.email, contactData.subject, contactData.message);
    ContactPage.uploadFile(filePath);
    ContactPage.submit();
    ContactPage.acceptAlert();
    ContactAssert.assertSuccess();
  });
});
