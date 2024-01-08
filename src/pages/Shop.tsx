import MainSection from '../components/shop/Sections/Main';
import ShopNavigation from '../components/shop/Navigation/ShopNavigation';
import Decorator from '../components/shop/Sections/Decorator';
import PopProducts from '../components/shop/Sections/PopProducts';

const ShopPage: React.FC = () => {
	return (
		<>
			<ShopNavigation />
			<main className='container'>
				<Decorator />
				<MainSection />
				<PopProducts />
			</main>
		</>
	);
};
export default ShopPage;
