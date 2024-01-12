import MainSection from '../components/shop/Sections/Main';
import ShopNavigation from '../components/shop/Navigation/ShopNavigation';
import PopProductsSection from '../components/shop/Sections/PopProducts';
import ReviewsSection from '../components/shop/Sections/Reviews';
import FooterSection from '../components/shop/Sections/Footer';

const ShopPage: React.FC = () => {
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
