import { useRef, useState } from 'react';
import { User } from '../../../store/user-redux';
import { InvalidateQueryFilters, useMutation } from '@tanstack/react-query';
import { queryClient, updateProfilePassword } from '../../../util/http';

const AccountPassword: React.FC<{ user: User }> = ({ user }) => {
	const currentPasswordRef = useRef<HTMLInputElement>(null);
	const newPasswordRef = useRef<HTMLInputElement>(null);
	const [isPasswordError, setIsPasswordError] = useState<string>('');
	const [isNewPasswordError, setIsNewPasswordError] = useState<string>('');

	const key: [string, string] = ['users', user._id];

	const { mutate } = useMutation({
		mutationFn: updateProfilePassword,
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

	const handleSavePassword = (e: React.SyntheticEvent<EventTarget>) => {
		e.preventDefault();

		const currentPassword = currentPasswordRef.current!.value;
		const newPassword = newPasswordRef.current!.value;

		if (currentPassword !== user.password) {
			setIsPasswordError('Incorrect Password');
			return;
		} else {
			setIsPasswordError('');
			if (currentPassword === newPassword) {
				setIsNewPasswordError('Passwords cannot be the same');
				return;
			} else {
				setIsNewPasswordError('');
				mutate({ id: user._id, password: newPassword });
			}
		}
	};

	return (
		<div className='settingsSection password'>
			<span className='header-text'>
				<p className='title'>Password</p>
				<span>Modify your current password</span>
			</span>
			<form className='form pass-name--form' onSubmit={handleSavePassword}>
				<div className='inputs'>
					<div className='input'>
						<label>Current password</label>
						<input
							className={`${isPasswordError ? 'invalid' : ''}`}
							type='password'
							ref={currentPasswordRef}
							required
						/>
						{isPasswordError && (
							<p className='incorrect-alert'>{isPasswordError}</p>
						)}
					</div>
					<div className='input'>
						<label>New Password</label>
						<input
							className={`${isNewPasswordError ? 'invalid' : ''}`}
							type='password'
							ref={newPasswordRef}
							required
						/>
						{isNewPasswordError && (
							<p className='incorrect-alert'>{isNewPasswordError}</p>
						)}
					</div>
				</div>
				<div className='controls'>
					<button type='submit' className='submit'>
						Save Password
					</button>
				</div>
			</form>
		</div>
	);
};

export default AccountPassword;
