/**
 * Constantes de seletores utilizados nos testes
 */

export const SELETORES = {
    // Navegação
    LINK_LOGIN: 'a[href="/login"]',
    LINK_LOGIN_MENU: '.shop-menu > .nav > :nth-child(4) > a',
    LINK_LOGOUT: 'a[href="/logout"]',
    LINK_CONTACT: 'a[href="/contact_us"]',
    LINK_PRODUCTS: 'a[href="/products"]',
    LINK_CART: 'a[href="/view_cart"]',
    LINK_TEST_CASE: '.navbar-nav > li > a[href="/test_cases"]',
    
    // Formulário de Signup
    SIGNUP_NAME: '[data-qa="signup-name"]',
    SIGNUP_EMAIL: '[data-qa="signup-email"]',
    SIGNUP_BUTTON: '[data-qa="signup-button"]',
    SIGNUP_FORM_TITLE: '.signup-form h2',
    SIGNUP_ERROR_MESSAGE: '.signup-form p',
    
    // Formulário de Login
    LOGIN_EMAIL: '[data-qa="login-email"]',
    LOGIN_PASSWORD: '[data-qa="login-password"]',
    LOGIN_BUTTON: '[data-qa="login-button"]',
    LOGIN_FORM_TITLE: '.login-form h2',
    LOGIN_ERROR_MESSAGE: '.login-form p',
    
    // Formulário de Registro
    REGISTER_TITLE: '[data-qa="title"]',
    REGISTER_GENDER_MALE: '#id_gender1',
    REGISTER_PASSWORD: '[data-qa="password"]',
    REGISTER_DAY: '[data-qa="days"]',
    REGISTER_MONTH: '[data-qa="months"]',
    REGISTER_YEAR: '[data-qa="years"]',
    REGISTER_FIRST_NAME: '[data-qa="first_name"]',
    REGISTER_LAST_NAME: '[data-qa="last_name"]',
    REGISTER_ADDRESS: '[data-qa="address"]',
    REGISTER_COUNTRY: '[data-qa="country"]',
    REGISTER_STATE: '[data-qa="state"]',
    REGISTER_CITY: '[data-qa="city"]',
    REGISTER_ZIPCODE: '[data-qa="zipcode"]',
    REGISTER_MOBILE: '[data-qa="mobile_number"]',
    REGISTER_CREATE_ACCOUNT: '[data-qa="create-account"]',
    
    // Confirmações
    ACCOUNT_CREATED: '[data-qa="account-created"]',
    ACCOUNT_DELETED_MESSAGE: '[data-qa="account-deleted"]',
    CONTINUE_BUTTON: '[data-qa="continue-button"]',
    DELETE_ACCOUNT_BUTTON: 'a[href="/delete_account"]',
    
    // Navbar
    NAVBAR_USER_INFO: '.navbar-nav li:last-child',
    
    // Formulário de Contato
    CONTACT_NAME: '[data-qa="name"]',
    CONTACT_EMAIL: '[data-qa="email"]',
    CONTACT_SUBJECT: '[data-qa="subject"]',
    CONTACT_MESSAGE: '[data-qa="message"]',
    CONTACT_UPLOAD_FILE: '[name="upload_file"]',
    CONTACT_SUBMIT: '[data-qa="submit-button"]',
    CONTACT_SUCCESS_MESSAGE: '.status.alert.alert-success',
    CONTACT_TITLE: '.contact-info > .title',

    //Tela de Test cases
    TEST_CASES_TITLE: '#form > div > div.row > div > h2 > b',
    
    // Produtos
    PRODUCTS_LIST: '.features_items',
    PRODUCT_ITEM: '.productinfo',
    SEARCH_PRODUCT: '#search_product',
    SEARCH_BUTTON: '#submit_search',
    ADD_TO_CART: '.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn',
    CONTINUE_SHOPPING_BUTTON: '.modal-footer .btn',
    VIEW_CART: '.modal-body u',
    
    // Carrinho
    CART_ITEMS: '#cart_info',
    PROCEED_TO_CHECKOUT: '.btn.btn-default.check_out',
    REGISTER_LOGIN_BUTTON: '.modal-body a[href="/login"]',
    
    // Checkout
    CHECKOUT_ADDRESS: '.checkout-information',
    PLACE_ORDER: '.check_out',
    CHECKOUT_COMMENT: '.form-control',

    // Pagamento
    PAYMENT_NAME: '[data-qa="name-on-card"]',
    PAYMENT_CARD_NUMBER: '[data-qa="card-number"]',
    PAYMENT_CVC: '[data-qa="cvc"]',
    PAYMENT_EXPIRY_MONTH: '[data-qa="expiry-month"]',
    PAYMENT_EXPIRY_YEAR: '[data-qa="expiry-year"]',
    PAYMENT_SUBMIT: '[data-qa="pay-button"]',
    ORDER_PLACED_TITLE: '[data-qa="order-placed"]',
    
    // Subscription
    SUBSCRIPTION_EMAIL: '#susbscribe_email',
    SUBSCRIPTION_BUTTON: '#subscribe',
    SUBSCRIPTION_SUCCESS: '.alert-success.alert',
    
    // Detalhes do Produto
    PRODUCT_NAME_DETAIL: '.product-information h2',
    PRODUCT_CATEGORY_DETAIL: '.product-information p',
    PRODUCT_PRICE_DETAIL: '.product-information span',
    PRODUCT_AVAILABILITY_DETAIL: '.product-information p:contains("Availability")',
    PRODUCT_CONDITION_DETAIL: '.product-information p:contains("Condition")',
    PRODUCT_BRAND_DETAIL: '.product-information p:contains("Brand")',

    // Footer 
    FOOTER_TITLE: 'footer h2',
};

export default SELETORES;