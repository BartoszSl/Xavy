import { useState } from 'react';
import './Authentication.scss';
import {
	Form,
	useActionData,
	useNavigation,
	useSearchParams,
} from 'react-router-dom';
import { Link } from 'react-router-dom';

const sellerTypes = [
	{
		id: 'solo',
		icon: <i className='fa-solid fa-user'></i>,
		h3: "I'm a solo seller",
		p: 'I need to set up an account for myself.',
	},
	{
		id: 'team',
		icon: <i className='fa-solid fa-user-group'></i>,
		h3: "I'm part of a team",
		p: 'I need to set up an account for team.',
	},
];

const AuthForm: React.FC = () => {
	const data: any = useActionData();
	const navigation = useNavigation();

	const [searchParams] = useSearchParams();
	const isLogin = searchParams.get('mode') === 'login';
	const isSubmitting = navigation.state === 'submitting';

	const [selectedSellerType, setSelectedSellerType] = useState(
		sellerTypes[0].id
	);

	const changeSellerType = (id: string) => {
		const filteredTypes = sellerTypes.filter((type) => type.id === id);
		setSelectedSellerType((current) => (current = filteredTypes[0].id));
	};

	return (
		<Form method='post' className='auth-form'>
			<div className='header'>
				<header>Welcome {isLogin && 'back'} to Xavy!</header>
				<span>Please enter your details</span>
				{data && data.error && (
					<ul>
						{Object.values(data.errors).map((err: any) => (
							<li key={err}>{err}</li>
						))}
					</ul>
				)}
				{data && data.message && <p>{data.message}</p>}
			</div>
			<div className='inputs'>
				{!isLogin && (
					<div className='parse-row'>
						<input
							type='text'
							name='first_name'
							id='first_name'
							placeholder='First name'
						/>
						<input
							type='text'
							name='surname'
							id='surname'
							placeholder='Surname'
						/>
					</div>
				)}
				<input type='email' name='email' id='email' placeholder='Email' />
				{!isLogin && (
					<input type='tel' name='phoneNum' id='phoneNum' placeholder='(+48) 000-000-000' />
				)}
				
					<input
						type='password'
						name='password'
						id='password'
						placeholder='Password'
					/>
			
			</div>
			{!isLogin && (
				<div className='seller-type'>
					<p>Pick your seller type</p>
					<div className='blocks'>
						{sellerTypes.map((seller) => (
							<div
								className={`seller-block ${
									seller.id === selectedSellerType ? 'is-active' : ''
								}`}
								key={seller.id}
								id={seller.id}
								onClick={() => changeSellerType(seller.id)}>
								<div className='icon'>{seller.icon}</div>
								<div className='content'>
									<h3>{seller.h3}</h3>
									<p>{seller.p}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
			<div className='controls'>
				<Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
					{isLogin ? 'Create new user' : 'Do you have account? Login'}
				</Link>
				<button disabled={isSubmitting}>
					{isSubmitting ? 'Submitting...' : 'Get in touch'}
				</button>
			</div>
		</Form>
	);
};

export default AuthForm;
