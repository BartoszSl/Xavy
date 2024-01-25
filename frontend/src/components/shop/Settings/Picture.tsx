import { useRef, useState } from 'react';
import { User } from '../../../store/user-redux';
import { InvalidateQueryFilters, useMutation } from '@tanstack/react-query';
import { queryClient, updateProfilePicture } from '../../../util/http';

const ProfilePicture: React.FC<{ user: User }> = ({ user }) => {
	const imageRef = useRef<HTMLInputElement>(null);
	const [isProfilePictureError, setIsProfilePictureError] = useState('');

	const key: [string, string] = ['users', user._id];

	const { mutate } = useMutation({
		mutationFn: updateProfilePicture,
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

	const handleSaveProfilePicture = (e: React.SyntheticEvent<EventTarget>) => {
		e.preventDefault();

		const enteredImage = imageRef.current!.value;

		if (!enteredImage.includes('http')) {
			setIsProfilePictureError('Incorrect URL');
		} else {
			setIsProfilePictureError('');
			mutate({ id: user._id, picture: enteredImage });
		}
	};

	return (
		<form className='form image-form' onSubmit={handleSaveProfilePicture}>
			<div className='content'>
				<img src={user.image} alt='user profil img' />
				<div className='input'>
					<label>Set profile picture by http link</label>
					<input
						type='url'
						ref={imageRef}
						className={`${isProfilePictureError ? 'invalid' : ''}`}
						placeholder={user.image}
						required
					/>
					{isProfilePictureError && (
						<p className='incorrect-alert'>{isProfilePictureError}</p>
					)}
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
	);
};

export default ProfilePicture;
