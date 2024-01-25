import { useState } from 'react';
import { User } from '../../../store/user-redux';

const generateEmail = (name: string, domain: string) => {
	const randomNumber = Math.floor(Math.random() * 1000);

	const email = `${name}${randomNumber}@${domain}.com`;

	return email;
};

const AccountEmail: React.FC<{ user: User }> = ({ user }) => {
	const [userEmail, setUserEmail] = useState(user.email);
	const [isEmailError, setIsEmailError] = useState<string>('');

	const handleChangeUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserEmail(e.target.value);
	};

	const handleGenerateEmail = () => {
		setUserEmail(generateEmail(user.firstName.toLowerCase(), 'random'));
	};

	const handleSaveEmail = (e: React.SyntheticEvent<EventTarget>) => {
		e.preventDefault();

		if (!userEmail.includes('@')) {
			setIsEmailError('Incorrect Email');
		} else {
			setIsEmailError('');
		}
	};

	return (
		<div className='settingsSection email'>
			<span className='header-text'>
				<p className='title'>Contant Email</p>
				<span>Manage your account's email address</span>
			</span>
			<form className='form email--form' onSubmit={handleSaveEmail}>
				<div className='input'>
					<label>Email</label>
					<input
						type='email'
						className={`${isEmailError ? 'invalid' : ''}`}
						value={userEmail}
						onChange={handleChangeUserEmail}
						required
					/>
					{isEmailError && <p className='incorrect-alert'>{isEmailError}</p>}
				</div>
				<div className='controls'>
					<button
						type='button'
						className='generate'
						onClick={handleGenerateEmail}>
						Generate Random
					</button>
					<button type='submit' className='submit'>
						Save Email
					</button>
				</div>
			</form>
		</div>
	);
};

export default AccountEmail;
