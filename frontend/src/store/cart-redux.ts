import { createSlice } from '@reduxjs/toolkit';

export type productParams = {
	id: string;
	title: string;
	color: string;
	size: string;
	quantity: number;
	shippingType: string;
	price: number;
	image: string;
};

const initialState: { items: productParams[]; totalQuantity: number } = {
	items: [],
	totalQuantity: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action) {
			const newItem: productParams = action.payload;
			const itemId = (newItem.id +=
				newItem.color.charAt(0) + newItem.size.charAt(0));
			const exsistingItem = state.items.find((item) => item.id === itemId);
			if (!exsistingItem) {
				state.items.push(newItem);
				state.totalQuantity++;
			} else {
				if (
					exsistingItem.color !== newItem.color ||
					exsistingItem.size !== newItem.size
				) {
					state.items.push(newItem);
				} else {
					exsistingItem.quantity += newItem.quantity;
					exsistingItem.price += newItem.price;
					if (exsistingItem.shippingType !== newItem.shippingType) {
						exsistingItem.shippingType = newItem.shippingType;
					}
				}
			}
		},
		removeFromCart(state, action) {
			const id = action.payload;
			const exsistingItem = state.items.find((item) => item.id === id);
			if (exsistingItem!.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== id);
				state.totalQuantity--;
			} else {
				exsistingItem!.quantity--;
			}
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
