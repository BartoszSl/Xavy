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

export const updateProfilePicture = async ({
	id,
	picture,
}: {
	id: string;
	picture: string;
}) => {
	console.log(id + picture);
	const response = await fetch(`http://localhost:5000/api/user/image/${id}`, {
		method: 'POST',
		body: JSON.stringify({ picture }),
		headers: {
			'Content-Type': 'application/json',
		},
	});


	if (!response.ok) {
		const error = new CustomError('An error occured while updating image');
		error.setCode(response.status);
		error.setInfo(await response.json());
		throw error;
	}

	console.log('Last wall');

	return response.json();
};

export const updateProfileName = async ({
	id,
	firstName,
	surName,
}: {
	id: string;
	firstName: string;
	surName: string;
}) => {
	const response = await fetch(`http:/localhost/api/user/name/${id}`, {
		method: 'PUT',
		body: JSON.stringify({
			firstName,
			surName,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		const error = new CustomError('An error occured while updating image');
		error.setCode(response.status);
		error.setInfo(await response.json());
		throw error;
	}

	return response.json();
};

export const updateProfileEmail = async ({
	id,
	email,
}: {
	id: string;
	email: string;
}) => {
	const response = await fetch(`http:/localhost/api/user/email/${id}`, {
		method: 'PUT',
		body: JSON.stringify({ email }),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		const error = new CustomError('An error occured while updating image');
		error.setCode(response.status);
		error.setInfo(await response.json());
		throw error;
	}

	return response.json();
};

export const updateProfilePassword = async ({
	id,
	password,
}: {
	id: string;
	password: string;
}) => {
	const response = await fetch(`http:/localhost/api/user/password/${id}`, {
		method: 'PUT',
		body: JSON.stringify({ password }),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		const error = new CustomError('An error occured while updating image');
		error.setCode(response.status);
		error.setInfo(await response.json());
		throw error;
	}

	return response.json();
};
