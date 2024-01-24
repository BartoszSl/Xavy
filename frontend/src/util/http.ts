import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

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

const checkResponse = async (response: Response) => {
	if (!response.ok) {
		const error = new CustomError('An error occured while fetching records');
		error.setCode(response.status);
		error.setInfo(await response.json());
		throw error;
	}

	return response.json();
};

export const fetchUserById = async ({ id, signal }: any) => {
	const response = await fetch('http://localhost:5000/api/auth/fetchUser', {
		method: 'POST',
		body: JSON.stringify({ id }),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	checkResponse(response);

	const { user } = await response.json();

	return user;
};
