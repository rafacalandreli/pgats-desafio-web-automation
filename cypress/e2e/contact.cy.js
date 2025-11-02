import { faker } from '@faker-js/faker';
import contactPage from '../pages/pom/ContactPage.js';
import contactAssert from '../pages/asserts/ContactAssert.js';

describe("Testes do Formulário de Contato", () => {
  beforeEach(() => {
    contactPage.visit();
  });

  it("Test Case 6: Contact Us Form", () => {
    const contactData = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        subject: faker.lorem.sentence(3),
        message: faker.lorem.paragraph(),
    };
    const filePath = 'cypress/support/files/text.txt';

    contactPage.fillForm(contactData.name, contactData.email, contactData.subject, contactData.message);
    contactPage.uploadFile(filePath);
    contactPage.submit();
    contactPage.acceptAlert();
    contactAssert.assertSuccess();
  });
});
