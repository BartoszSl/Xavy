import MainSection from '../components/shop/Sections/Main';
import ShopNavigation from '../components/shop/Navigation/ShopNavigation';

const ShopPage: React.FC = () => {
	return (
		<>
			<ShopNavigation />
			<main className='container'>
				<MainSection />
			</main>
		</>
	);
};
export default ShopPage;
