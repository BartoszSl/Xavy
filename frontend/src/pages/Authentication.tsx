import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/Authentication/AuthForm';

const AuthenticationPage: React.FC = () => {
	return (
		<main className='auth-main'>
			<section>
				<AuthForm />
			</section>
			<img
				src='https://img.freepik.com/darmowe-zdjecie/kwiaty-ogrodowe-wzor-roslin-do-tapet-karty-z-pozdrowieniami-pocztowki-projekt-zaproszenia-slubne-kolorowe-piekne-kwiaty-pionowe-tlo-blossom-kwiatowy-bukiet-dekoracji_90220-1109.jpg?w=740&t=st=1705856513~exp=1705857113~hmac=ac012a3864c7737cb63a5628c7ce818508ee1dc1d7fa0a180038b4ac75424d21'
				alt='flowers wallpaper'
			/>
		</main>
	);
};

export default AuthenticationPage;

export const action = async ({ request }: { request: Request }) => {
	const searchParams = new URL(request.url).searchParams;
	const mode = searchParams.get('mode') || 'login';

	if (mode !== 'login' && mode !== 'signup') {
		throw json({ message: 'Unsupported mode' }, { status: 422 });
	}

	const data = await request.formData();
	const authData = {
		email: data.get('email'),
		password: data.get('password'),
	};

	const response = await fetch('http://localhost:5000/' + mode, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(authData),
	});

	if (response.status === 422 || response.status === 401) {
		return response;
	}

	if (!response.ok) {
		throw json({ message: 'Could not authenticate user.' }, { status: 500 });
	}

	const resData = await response.json();
	const token = resData.token;

	localStorage.setItem('token', token);

	const expiration = new Date();
	expiration.setHours(expiration.getHours() + 1);
	localStorage.setItem('expiration', expiration.toISOString());

	return redirect('/shop/main');
};
