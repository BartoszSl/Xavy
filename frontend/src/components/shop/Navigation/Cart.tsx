import { useSelector } from 'react-redux';
import Modal from '../../UI/Modal';

import './ShopNavigation.scss';
import { RootState } from '../../../store/index';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cart-redux';

const transformPrice = (value: number) => {
	return (value += 10.99);
};

const transformLink = (id: string) => {
	return id.slice(0, 2);
};

const BuyingProduct: React.FC<{ onDone: () => void }> = ({ onDone }) => {
	const productsInCart = useSelector((state: RootState) => state.cart.items);
	const dispatch = useDispatch();

	const [hoveredItem, setHoveredItem] = useState<string | null>(null);

	let totalPrice = 0;

	productsInCart.forEach((item) => {
		totalPrice += item.price;
		console.log(item);
		if (item.shippingType === 'express') {
			totalPrice += 10.99;
		}
	});

	const handleMouseEnter = (itemId: string) => {
		setHoveredItem(itemId);
	};

	const handleMouseLeave = () => {
		setHoveredItem(null);
	};

	const handleDeleteProduct = (id: string) => {
		dispatch(cartActions.removeFromCart(id));
	};

	return (
		<Modal onClose={onDone} className='inCart'>
			<div className='product-info'>
				{productsInCart.map((item) => (
					<div
						key={item.id}
						className='product'
						onMouseEnter={() => handleMouseEnter(item.id)}
						onMouseLeave={() => handleMouseLeave()}>
						<AnimatePresence>
							{hoveredItem === item.id && (
								<motion.div className='product-controls'>
									<Link
										to={`../product-details/${transformLink(item.id)}`}
										type='button'
										onClick={onDone}>
										<i className='fa-solid fa-link'></i>
									</Link>
									<button
										type='button'
										className='delete'
										onClick={() => handleDeleteProduct(item.id)}>
										<i className='fa-solid fa-x'></i>
									</button>
								</motion.div>
							)}
						</AnimatePresence>
						<div className='content'>
							<div className='left'>
								<div className='image-block'>
									<img src={item.image} alt={item.title} />
								</div>
								<div className='description'>
									<h3 className='title'>{item.title}</h3>
									<div className='details'>
										<p>{item.size}</p>
										<span>•</span>
										<p>{item.color}</p>
										<span>•</span>
										<p>{item.shippingType}</p>
									</div>
								</div>
							</div>
							<div className='right'>
								<p className='nums'>nums: {item.quantity}</p>
								<h3 className='price'>
									$
									{item.shippingType === 'express'
										? Math.floor(transformPrice(item.price))
										: Math.floor(item.price)}
								</h3>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='total'>
				<h3>
					<span>Total:</span> ${Math.floor(totalPrice)}
				</h3>
			</div>
			<hr />
			<div className='controls'>
				<button type='button' onClick={onDone}>
					Back
				</button>
				<button type='button'>Finalize</button>
			</div>
		</Modal>
	);
};

export default BuyingProduct;
