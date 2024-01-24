import MainSection from '../components/shop/Sections/Main';
import ShopNavigation from '../components/shop/Navigation/ShopNavigation';
import PopProductsSection from '../components/shop/Sections/PopProducts';
import ReviewsSection from '../components/shop/Sections/Reviews';
import FooterSection from '../components/shop/Sections/Footer';
import { redirect } from 'react-router-dom';
import { fetchUserById, queryClient } from '../util/http';
import { useQuery } from '@tanstack/react-query';

const ShopPage: React.FC = () => {
	// const token = localStorage.getItem('token');
	const id = localStorage.getItem('userid');

	// if (!token) {
	// 	redirect('/auth?mode=login');
	// }

	const { data } = useQuery({
		queryKey: ['users', id],
		queryFn: ({ signal }) => fetchUserById({ signal, id }),
	});

	return (
		<>
			<ShopNavigation userData={data} />
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

export const loader = ({ params }: any) => {
	return queryClient.fetchQuery({
		queryKey: ['users', params.id],
		queryFn: ({ signal }) => fetchUserById({ signal, id: params.id }),
	});
};
