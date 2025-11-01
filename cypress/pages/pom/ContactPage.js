import { SELETORES } from '../../business/constantes/seletores.js';
import { URLS } from '../../business/constantes/urls.js';
import { MENSAGENS } from '../../business/constantes/mensagens.js';

class ContactPage {

    visit() {
        cy.visit(URLS.CONTACT_PAGE);
        cy.validatePageLoad(URLS.CONTACT_PAGE, 'Automation Exercise - Contact Us');
    }

    /**
     * @param {string} name 
     * @param {string} email 
     * @param {string} subject 
     * @param {string} message 
     */
    fillForm(name, email, subject, message) {
        cy.get(SELETORES.CONTACT_NAME).type(name);
        cy.get(SELETORES.CONTACT_EMAIL).type(email);
        cy.get(SELETORES.CONTACT_SUBJECT).type(subject);
        cy.get(SELETORES.CONTACT_MESSAGE).type(message);
    }

    /**
     * @param {string} filePath - O caminho para o arquivo de fixture.
     */
    uploadFile(filePath) {
        cy.get(SELETORES.CONTACT_UPLOAD_FILE).selectFile(filePath);
    }

    submit() {
        cy.get(SELETORES.CONTACT_SUBMIT).click();
    }

    acceptAlert() {
        cy.on('window:confirm', () => true);
    }

}

export default new ContactPage();