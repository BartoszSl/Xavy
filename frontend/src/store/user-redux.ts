import { createSlice } from '@reduxjs/toolkit';

export type User = {
	id: string;
	firstName: string;
	surName: string;
	email: string;
	password: string;
	image: string;
	money: number;
	cart_id: string;
	phoneNum: number;
};

export type initialUser = {
	user: User;
};

export type payloadAction = {
	type: String;
	payload: User;
};

const initialState: initialUser = {
	user: {
		id: '0',
		firstName: '',
		surName: '',
		email: '',
		password: '',
		image: '',
		money: 0,
		cart_id: '',
		phoneNum: 0,
	},
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		importUser(state, action) {
			const importedUser: User = action.payload;

			if (importedUser) {
				state.user = importedUser;
				console.log('Succesful imported User');
			}
		},
	},
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
