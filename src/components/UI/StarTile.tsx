import { Link } from 'react-router-dom';
import { Starproducts, animationType } from '../shop/Sections/PopProducts';
import { motion } from 'framer-motion';

const StarTile: React.FC<{ product: Starproducts; animation: animationType }> = ({
	product,
	animation,
}) => {
	return (
		<motion.div {...animation} className='star_card'>
			<div className='first-row'>
				<div className='colors'>
					{product.colors.map((color) => (
						<div key={color} className={`color color-${color}`}></div>
					))}
				</div>
				<Link to=''>
					<i className='fa-solid fa-arrow-right'></i>
				</Link>
			</div>
			<img src={product.img} alt={product.title} />
			<div className='last-row'>
				<div className='left'>
					<span>{product.category}</span>
					<h3>{product.title}</h3>
					<p>{product.short_name}</p>
				</div>
				<div className='right'>${product.price}</div>
			</div>
		</motion.div>
	);
};

export default StarTile;
