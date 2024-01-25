import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import productsReducer from './products-redux';
import cartReducer from './cart-redux';
import userReducer from './user-redux';

const store = configureStore({
	reducer: {
		products:  productsReducer,
		user: userReducer,
		cart: cartReducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => {} = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
