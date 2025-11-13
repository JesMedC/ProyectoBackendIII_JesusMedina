import { Router } from 'express';
import { generatePet, generateUser } from '../utils/mocking.js';
import { usersService, petsService } from '../services/index.js';

const router = Router();

router.get('/mockingpets', (req, res) => {
    const pets = [];
    for (let i = 0; i < 100; i++) {
        pets.push(generatePet());
    }
    res.send({ status: 'success', payload: pets });
});

router.get('/mockingusers', async (req, res) => {
    const users = [];
    for (let i = 0; i < 50; i++) {
        const user = await generateUser();
        users.push(user);
    }
    res.send({ status: 'success', payload: users });
});

router.post('/generateData', async (req, res) => {
    const { users: userCount = 10, pets: petCount = 10 } = req.body;

    try {
        const generatedUsers = [];
        for (let i = 0; i < userCount; i++) {
            const user = await generateUser();
            const result = await usersService.create(user);
            generatedUsers.push(result);
        }

        const generatedPets = [];
        for (let i = 0; i < petCount; i++) {
            const pet = generatePet();
            // Assign a random owner from the newly created users
            if (generatedUsers.length > 0) {
                pet.owner = generatedUsers[Math.floor(Math.random() * generatedUsers.length)]._id;
            }
            const result = await petsService.create(pet);
            generatedPets.push(result);
        }

        res.send({
            status: 'success',
            message: `${generatedUsers.length} users and ${generatedPets.length} pets created successfully.`,
        });
    } catch (error) {
        console.error('Error generating data:', error);
        res.status(500).send({ status: 'error', error: 'Failed to generate data' });
    }
});

export default router;
