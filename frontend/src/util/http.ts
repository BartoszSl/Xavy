import { QueryClient } from '@tanstack/react-query';
import { User } from '../store/user-redux';

export const queryClient = new QueryClient();

export type importedUser = {
	message: string;
	user: User;
};

class CustomError extends Error {
	code: number;
	info: any;

	constructor(message: string) {
		super(message);
		this.name = 'CustomError';
		this.code = 0;
		this.info = '';
	}

	setCode(code: number) {
		this.code = code;
	}
	setInfo(info: any) {
		this.info = info;
	}
}

export const fetchUserById = async ({ id, signal }: any) => {

	const response = await fetch(
		`http://localhost:5000/api/auth/fetchUser/${id}`
	);

	if (!response.ok) {
		const error = new CustomError('An error occured while fetching records');
		error.setCode(response.status);
		error.setInfo(await response.json());
		throw error;
	}

	const data: importedUser = await response.json();

	if (data.message !== 'found') {
		const error = new CustomError('An error occurred while fetching user');
		throw error;
	}

	return data.user;
};
