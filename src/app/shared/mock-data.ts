import { Pet, PetStatus } from './models/pet.model';

export const PETS: Pet[] = [
    {
        id: 1, name: 'Джек', description: 'Спокійний та вірний пес.',
        imageUrl: 'https://images.pexels.com/photos/13438679/pexels-photo-13438679.jpeg',
        price: 5500, birthDate: new Date('2022-05-15'), status: PetStatus.Available,
        tags: ['Собака', 'Вівчарка'], details: { weight: 25, breed: 'Вівчарка', isVaccinated: true }
    },
    {
        id: 2, name: 'Мурка', description: 'Грайлива кицька.',
        imageUrl: 'https://images.pexels.com/photos/34462800/pexels-photo-34462800.jpeg',
        price: 800, birthDate: new Date('2023-01-10'), status: PetStatus.Available,
        tags: ['Кіт', 'Ласкавий'], details: { weight: 4, breed: 'Ангорська', isVaccinated: true }
    },
    {
        id: 3, name: 'Рекс', description: 'Хоробрий захисник.',
        imageUrl: 'https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg',
        price: 2500, birthDate: new Date('2021-11-20'), status: PetStatus.Reserved,
        tags: ['Собака', 'Активний'], details: { weight: 8, breed: 'Терʼєр', isVaccinated: false }
    },
    {
        id: 4, name: 'Луна', description: 'Тиха та спокійна.',
        imageUrl: 'https://images.pexels.com/photos/16691261/pexels-photo-16691261.jpeg',
        price: 1200, birthDate: new Date('2022-08-05'), status: PetStatus.Adopted,
        tags: ['Кіт', 'Сірий'], details: { weight: 5, breed: 'Британська', isVaccinated: true }
    },
    {
        id: 5, name: 'Бублик', description: 'Веселий хомʼяк.',
        imageUrl: 'https://images.pexels.com/photos/3362698/pexels-photo-3362698.jpeg',
        price: 200, birthDate: new Date('2024-02-01'), status: PetStatus.Available,
        tags: ['Гризун', 'Маленький'], details: { weight: 0.2, breed: 'Джунгарський', isVaccinated: false }
    }
];