import { faker } from '@faker-js/faker';
import { createHash } from './index.js';

export const generatePet = () => {
    const pet = {
        _id: faker.database.mongodbObjectId(),
        name: faker.animal.dog(),
        specie: faker.animal.type(),
        birthDate: faker.date.past(),
        adopted: faker.datatype.boolean(),
        owner: faker.database.mongodbObjectId(),
        image: faker.image.avatar(),
    };
    return pet;
};

export const generateUser = async () => {
    const hashedPassword = await createHash('coder123');
    const user = {
        _id: faker.database.mongodbObjectId(),
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: hashedPassword,
        role: faker.helpers.arrayElement(['user', 'admin']),
        pets: [],
    };
    return user;
};
