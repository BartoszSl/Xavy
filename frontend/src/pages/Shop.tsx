import MainSection from '../components/shop/Sections/Main';
import ShopNavigation from '../components/shop/Navigation/ShopNavigation';
import PopProductsSection from '../components/shop/Sections/PopProducts';
import ReviewsSection from '../components/shop/Sections/Reviews';
import FooterSection from '../components/shop/Sections/Footer';
import { redirect } from 'react-router-dom';
import { fetchUserById, queryClient } from '../util/http';
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { userActions } from '../store/user-redux';

const ShopPage: React.FC = () => {
	// const token = localStorage.getItem('token');
	const id = localStorage.getItem('userid');

	if (!id) {
		redirect('/auth?mode=login');
	}

	const { data: user } = useQuery({
		queryKey: ['users', id],
		queryFn: ({ signal }) => fetchUserById({ id, signal }),
	});

	const dispatch = useDispatch();

	if (user) {
		dispatch(userActions.importUser(user));
	}

	return (
		<>
			<ShopNavigation />
			<main className='container'>
				<MainSection />
				<PopProductsSection />
			</main>
			<ReviewsSection />
			<FooterSection />
		</>
	);
};

export default ShopPage;

export const loader = async () => {
	const id = localStorage.getItem('userid');

	if (!id) {
		return redirect('/auth?mode=login');
	}

	return queryClient.fetchQuery({
		queryKey: ['users', id],
		queryFn: ({ signal }) => fetchUserById({ signal, id }),
	});
};
