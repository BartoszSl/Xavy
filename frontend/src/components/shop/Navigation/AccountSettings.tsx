import { useSelector } from 'react-redux';
import Modal from '../../../components/UI/Modal';
import { RootState } from '../../../store/index';
import './ShopNavigation.scss';
import { useRef, useState } from 'react';

const AccountSettings: React.FC<{ onDone: () => void }> = ({ onDone }) => {
	const user = useSelector((state: RootState) => state.user.user);
	const [userFirstName, setUserFirstName] = useState(user.firstName);
	const [userSurName, setUserSurName] = useState(user.surName);

	const imageRef = useRef<HTMLInputElement>(null);

	let nameContent = <></>;

	if (userFirstName !== user.firstName || userSurName !== user.surName) {
		nameContent = <button type='submit' >Save Name Changes</button>;
	}

	const handleChangeUserFirstName = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setUserFirstName(e.target.value);
	};

	const handleChangeUserSurName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserSurName(e.target.value);
	};

	const handleSaveProfilePicture = (e: React.SyntheticEvent<EventTarget>) => {
		e.preventDefault();

		if (imageRef.current) {
			const enteredImage = imageRef.current.value;
		}
	};

    const handleSaveName = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault()

        if(userFirstName !== user.firstName) {
            
        }
    }

	return (
		<Modal onClose={onDone} className='account-settings'>
			<header className='settingsSection'>
				<p className='title'>Account</p>
				<span>Real-time information and actions regarding your account</span>
			</header>
			<div
				className='settingsSection general'
				onSubmit={handleSaveProfilePicture}>
				<form className='form image-form'>
					<div className='content'>
						<img src={user.image} alt='user profil img' />
						<div className='input'>
							<label>Set profile picture by http link</label>
							<input
								type='url'
								ref={imageRef}
								required
								placeholder={user.image}
							/>
						</div>
					</div>
					<div className='controls'>
						<button className='submit' type='submit'>
							Upload new Image
						</button>
						<button className='delete' type='button'>
							Delete
						</button>
					</div>
				</form>
				<p className='title'>Full name</p>
				<form className='form name-form' onSubmit={handleSaveName}>
					<div className='input'>
						<label>First name</label>
						<input
							type='text'
							ref={imageRef}
							value={userFirstName}
							required
							onChange={handleChangeUserFirstName}
						/>
					</div>
					<div className='input'>
						<label>Last name</label>
						<input
							type='text'
							ref={imageRef}
							value={userSurName}
							required
							onChange={handleChangeUserSurName}
						/>
					</div>
					{nameContent}
				</form>
			</div>
		</Modal>
	);
};

export default AccountSettings;
