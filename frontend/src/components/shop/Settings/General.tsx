import { useState } from 'react';
import { User } from '../../../store/user-redux';
import ProfilePicture from './Picture';
import { InvalidateQueryFilters, useMutation } from '@tanstack/react-query';
import { queryClient, updateProfileName } from '../../../util/http';

const AccountGeneral: React.FC<{ user: User }> = ({ user }) => {
	const [userFirstName, setUserFirstName] = useState(user.firstName);
	const [userSurName, setUserSurName] = useState(user.surName);

	const [isFirstNameError, setIsFirstNameError] = useState('');
	const [isSurNameError, setIsSurNameError] = useState('');

	let nameContent = <></>;

	if (userFirstName !== user.firstName || userSurName !== user.surName) {
		nameContent = (
			<button type='submit' className='submit'>
				Save Name Changes
			</button>
		);
	}

	const key: [string, string] = ['users', user._id];

	const { mutate } = useMutation({
		mutationFn: updateProfileName,
		onMutate: async () => {
			const newUser = user;

			await queryClient.cancelQueries({ queryKey: key });
			const previousUser = queryClient.getQueryData(key);

			queryClient.setQueryData(key, newUser);

			return { previousUser };
		},
		onError: (error, data, context: any) => {
			queryClient.setQueryData(key, context.previousUser);
		},
		onSettled: () => {
			queryClient.invalidateQueries(key as InvalidateQueryFilters);
		},
	});

	const handleChangeUserFirstName = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setUserFirstName(e.target.value);
	};

	const handleChangeUserSurName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserSurName(e.target.value);
	};

	const handleSaveName = (e: React.SyntheticEvent<EventTarget>) => {
		e.preventDefault();

		if (userFirstName !== user.firstName || userSurName !== user.surName) {
			if (userFirstName === '' && userSurName === '') {
				setIsFirstNameError('Incorrect first name');
				setIsSurNameError('Incorrect surname');
				return;
			} else if (userSurName === '') {
				setIsSurNameError('Incorrect surname');
				return;
			} else if (userFirstName === '') {
				setIsFirstNameError('Incorrect first name');
			} else {
				setIsFirstNameError('');
				setIsSurNameError('');

				mutate({ id: user._id, firstName: userFirstName, surName: userSurName });
			}
		}
	};

	return (
		<div className='settingsSection general'>
			<ProfilePicture user={user} />
			<p className='title'>Full name</p>
			<form className='form pass-name--form' onSubmit={handleSaveName}>
				<div className='inputs'>
					<div className='input'>
						<label>First name</label>
						<input
							type='text'
							value={userFirstName}
							className={`${isFirstNameError ? 'invalid' : ''}`}
							onChange={handleChangeUserFirstName}
						/>
						{isFirstNameError && (
							<p className='incorrect-alert'>{isFirstNameError}</p>
						)}
					</div>
					<div className='input'>
						<label>Last name</label>
						<input
							type='text'
							value={userSurName}
							className={`${isSurNameError ? 'invalid' : ''}`}
							onChange={handleChangeUserSurName}
						/>
						{isSurNameError && (
							<p className='incorrect-alert'>{isSurNameError}</p>
						)}
					</div>
				</div>
				{nameContent}
			</form>
		</div>
	);
};

export default AccountGeneral;
