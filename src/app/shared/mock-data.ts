import { Pet, PetStatus } from './models/pet.model';

export const PETS: Pet[] = [
    {
        id: 1, 
        name: 'ДЖЕК', 
        description: 'Спокійний та вірний пес.',
        imageUrl: 'https://images.pexels.com/photos/13438679/pexels-photo-13438679.jpeg',
        price: 5500, 
        birthDate: new Date('2022-05-15'), 
        status: PetStatus.Available,
        isSpecial: true,
        tags: ['Собака', 'Вівчарка'], 
        details: { weight: 25, breed: 'Вівчарка', isVaccinated: true }
    },
    {
        id: 2, 
        name: 'МУРКА', 
        description: 'Грайлива кицька.',
        imageUrl: 'https://images.pexels.com/photos/34462800/pexels-photo-34462800.jpeg',
        price: 800, 
        birthDate: new Date('2023-01-10'), 
        status: PetStatus.Available,
        isSpecial: false,
        tags: ['Кіт', 'Ласкавий'], 
        details: { weight: 4, breed: 'Ангорська', isVaccinated: true }
    },
    {
        id: 3, 
        name: 'РЕКС', 
        description: 'Хоробрий захисник.',
        imageUrl: 'https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg',
        price: 2500, 
        birthDate: new Date('2021-11-20'), 
        status: PetStatus.Reserved,
        isSpecial: false,
        tags: ['Собака', 'Активний'],
        details: undefined 
    },
    {
        id: 4, 
        name: 'ЛУНА', 
        description: 'Тиха та спокійна.',
        imageUrl: 'https://images.pexels.com/photos/16691261/pexels-photo-16691261.jpeg',
        price: 1200, 
        birthDate: new Date('2022-08-05'), 
        status: PetStatus.Adopted,
        isSpecial: false,
        tags: ['Кіт', 'Сірий'], 
        details: { weight: 5, breed: 'Британська', isVaccinated: true }
    },
    {
        id: 5, 
        name: 'БУБЛИК', 
        description: 'Веселий хомʼяк.',
        imageUrl: 'https://images.pexels.com/photos/3362698/pexels-photo-3362698.jpeg',
        price: 200, 
        birthDate: new Date('2024-02-01'), 
        status: PetStatus.Available,
        isSpecial: true, 
        tags: ['Гризун', 'Маленький'], 
        details: { weight: 0.2, breed: 'Джунгарський', isVaccinated: false }
    }
];