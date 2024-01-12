import './Products.scss';
import { Starproducts } from '../Sections/PopProducts';

const ProductDetails: React.FC<{ product: Starproducts }> = ({ product }) => {
	const starsContent = [];

	for (let i = 1; i <= 5; i++) {
		if (i <= product.rates) {
			starsContent.push({
				id: i,
				star: <i className='fa-solid fa-star'></i>,
			});
		} else {
			starsContent.push({
				id: i,
				star: <i className='fa-regular fa-star'></i>,
			});
		}
	}

	return (
		<section className='product-details'>
			<header>
				<span>Furniture</span>
				<p>➛ {product.title}</p>
			</header>
			<div className='content'>
				<div className='img-block'>
					<div className='all'></div>
					<div className='picked'></div>
				</div>
				<div className='info-block'>
					<h3 className='title'>{product.title}</h3>
					<h4 className='author'>
						by{' '}
						<span>
							{product.author} <i className='fa-solid fa-arrow-right'></i>
						</span>
					</h4>
					<div className='stars'>
						<div className='reviews'>
							{starsContent.length === 5 &&
								starsContent.map((star) => (
									<div key={star.id}>{star.star}</div>
								))}
						</div>
						<p>{product.rates}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetails;
