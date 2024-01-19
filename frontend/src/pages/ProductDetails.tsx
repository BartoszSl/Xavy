import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../store/index';
import ShopNavigation from '../components/shop/Navigation/ShopNavigation';
import ProductDetails from '../components/shop/Products/Details';
import { Starproducts } from '../components/shop/Sections/PopProducts';

const ProductDetailsPage: React.FC = () => {
	const params = useParams();
	const products = useSelector((state: RootState) => state.products.products);

	const currentProduct: Starproducts[] = products.filter((product) => product.id === params.id);
	console.log(currentProduct);

	return (
		<>
			<ShopNavigation />
            <main className='container'>
                <ProductDetails product={currentProduct[0]}/>
            </main>
		</>
	);
};

export default ProductDetailsPage;
