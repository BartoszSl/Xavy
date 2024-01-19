import { createSlice } from '@reduxjs/toolkit';
import { Starproducts } from '../components/shop/Sections/PopProducts';

export type initialProducts = {
	products: Starproducts[];
};

const initialState: initialProducts = {
	products: [
		{
			id: 'p1',
			colors: ['red'],
			img: 'https://cdn.media.amplience.net/i/teamtownsports/9042068_RedWhiteAcidOrange_6?$large$',
			category: 'Shoes',
			title: 'RedAI Force',
			short_name: 'Sneakers',
			price: 39,
			author: 'Badcock',
			reviews: [
				{ id: 'r1', rate: 4.5, text: 'Very good', author: 'Jan Kowalski' },
				{ id: 'r2', rate: 2.5, text: 'Not good', author: 'Jan Kowalski' },
			],
			sizes: ['Small', 'Medium'],
			quantity: 6,
			discount: {
				is: true,
				percent: 10,
			},
		},
		{
			id: 'p2',
			colors: ['grey', 'red'],
			img: 'https://mks-meble.pl/41312-large_default/skandynawski-fotel-tapicerowany-z-mozliwoscia-wyboru-tkaniny-eli-monolith-25100.jpg',
			category: 'Furniture',
			title: 'Armchair Grey',
			short_name: 'Armchair',
			price: 539,
			author: 'Badcock',
			reviews: [{ id: 'r1', rate: 3.4, text: 'Hmm', author: 'Jan Kowalski' }],
			sizes: ['Small', 'Large'],
			quantity: 25,
			discount: {
				is: true,
				percent: 20,
			},
		},
		{
			id: 'p3',
			colors: ['grey'],
			img: 'https://www.badcock.com/images/thumbs/0030857_sofas_500.png',
			category: 'Furniture',
			title: 'UNION PARK SOFA',
			short_name: 'Sofa',
			price: 1390,
			author: 'Badcock',
			reviews: [
				{ id: 'r1', rate: 3.7, text: 'Hmm', author: 'Jan Kowalski' },
				{ id: 'r2', rate: 4.7, text: 'Hmm', author: 'Jan Kowalski' },
				{ id: 'r3', rate: 4.0, text: 'Hmm', author: 'Jan Kowalski' },
			],
			sizes: ['Small', 'Medium', 'Large'],
			quantity: 7,
			discount: {
				is: true,
				percent: 28.75,
			},
		},
	],
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
