import { faker } from '@faker-js/faker';

/**
 * Gera um nome completo aleatório.
 * @returns {string}
 */
export function getRandomName() {
    return faker.person.fullName();
}

/**
 * Gera um email aleatório com um prefixo para identificação.
 * @returns {string}
 */
export function getRandomEmail() {
    return faker.internet.email({ firstName: 'qa_user' });
}

/**
 * Gera uma senha aleatória.
 * @returns {string}
 */
export function getRandomPassword() {
    return faker.internet.password();
}

/**
 * Gera um objeto de usuário completo para cenários de registro.
 * @returns {object}
 */
export function getFullUser() {
    const birthDate = faker.date.birthdate({ min: 18, max: 65, mode: 'age' });
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    return {
        name: `${firstName} ${lastName}`,
        email: faker.internet.email({ firstName: `qa_${firstName}`, lastName: lastName }),
        password: faker.internet.password(),
        dayOfBirth: birthDate.getDate().toString(),
        monthOfBirth: faker.date.month(),
        yearOfBirth: birthDate.getFullYear().toString(),
        firstName: firstName,
        lastName: lastName,
        address: faker.location.streetAddress(),
        country: 'United States',
        state: faker.location.state(),
        city: faker.location.city(),
        zipcode: faker.location.zipCode(),
        mobileNumber: faker.phone.number()
    };
}