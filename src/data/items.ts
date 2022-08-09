import { Item } from '../types/item';

export const items: Item[] = [
    { date: new Date(2022, 6, 8), expense: true, title: 'McDonalds', value: 32.12 },
    { date: new Date(2022, 6, 8), expense: true, title: 'Burger King', value: 28 },
    { date: new Date(2022, 6, 8), expense: true, title: 'Aluguel Apt', value: 2300 },
    { date: new Date(2022, 6, 8), expense: false, title: 'Salário ACME', value: 4500 },
];