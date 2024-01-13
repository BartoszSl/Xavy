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
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPzzQMjZlRSQ8Glx9lQvTPfoFGXmu7X-xfA',
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
	],
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
