import { SELETORES } from '../../business/constantes/seletores.js';
import { URLS } from '../../business/constantes/urls.js';

class ContactPage {

    /**
     * Visita a página de contato e valida o carregamento.
     */
    visit() {
        cy.visit(URLS.CONTACT_PAGE);
        cy.validatePageLoad(URLS.CONTACT_PAGE, 'Automation Exercise - Contact Us');
    }

    /**
     * Preenche os campos do formulário de contato.
     * @param {string} name - O nome do remetente.
     * @param {string} email - O email do remetente.
     * @param {string} subject - O assunto da mensagem.
     * @param {string} message - O corpo da mensagem.
     */
    fillForm(name, email, subject, message) {
        cy.get(SELETORES.CONTACT_NAME).type(name);
        cy.get(SELETORES.CONTACT_EMAIL).type(email);
        cy.get(SELETORES.CONTACT_SUBJECT).type(subject);
        cy.get(SELETORES.CONTACT_MESSAGE).type(message);
    }

    /**
     * Realiza o upload de um arquivo no formulário.
     * @param {string} filePath - O caminho para o arquivo a ser enviado.
     */
    uploadFile(filePath) {
        cy.get(SELETORES.CONTACT_UPLOAD_FILE).selectFile(filePath);
    }

    /**
     * Submete o formulário de contato.
     */
    submit() {
        cy.get(SELETORES.CONTACT_SUBMIT).click();
    }

    /**
     * Aceita o alerta de confirmação do navegador que aparece após o envio.
     */
    acceptAlert() {
        cy.on('window:confirm', () => true);
    }

}

export default new ContactPage();