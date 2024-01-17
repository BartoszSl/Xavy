import './Products.scss';
import { Starproducts } from '../Sections/PopProducts';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export type imgType = { id: string; rotate: string };

const allImagesType: imgType[] = [
	{ id: 'i1', rotate: 'img-rotate-normal' },
	{ id: 'i2', rotate: 'img-rotate-right' },
	{ id: 'i3', rotate: 'img-rotate-left' },
	{ id: 'i4', rotate: 'img-rotate-bottom' },
];

const buyNum = [
	{ id: '1', text: '1' },
	{ id: '2', text: '2' },
	{ id: '3', text: '3' },
];

const currentDate = new Date();
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const transformDate = (date: Date | string | number) => {
	if (date instanceof Date) {
		const dayOfWeek = daysOfWeek[date.getDay()];
		const month = date.toLocaleString('default', { month: 'short' });
		const dayOfMonth = date.getDate();
		return `${dayOfWeek}, ${month} ${dayOfMonth}`;
	}

	const parsedDate = typeof date === 'string' ? Date.parse(date) : date;

	if (!isNaN(parsedDate)) {
		const parsedDateInstance = new Date(parsedDate);
		const dayOfWeek = daysOfWeek[parsedDateInstance.getDay()];
		const month = parsedDateInstance.toLocaleString('default', {
			month: 'short',
		});
		const dayOfMonth = parsedDateInstance.getDate();
		return `${dayOfWeek}, ${month} ${dayOfMonth}`;
	}

	return '';
};

const shippingOptions = [
	{
		id: 'standard',
		price: 'Free',
		time: currentDate.getDate() + 3,
		icon: <i className='fa-solid fa-truck'></i>,
	},
	{
		id: 'express',
		price: 10.99,
		time: 'Max 1 day',
		icon: <i className='fa-solid fa-truck-fast'></i>,
	},
];

const ProductDetails: React.FC<{ product: Starproducts }> = ({ product }) => {
	const [selectedImg, setSelectedImg] = useState(allImagesType[0]);
	const [selectedColor, setSelectedColor] = useState(product.colors[0]);
	const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
	const [selectedNumToBuy, setSelectedNumToBuy] = useState<number>(1);
	const [selectedShippingType, setSelectedShippingType] = useState(
		shippingOptions[0].id
	);
	let selectedRotate = selectedImg.rotate;
	const starsContent = [];

	let reviewContent = '0 Reviews';
	let rates = 0;
	let currentPrice = product.price;
	let inStockContent = (
		<p className='red'>
			<i className='fa-regular fa-circle-xmark'></i>0 in stock
		</p>
	);
	const lastPrice = Math.floor(currentPrice * 1.3);

	if (product.quantity >= 1 || product.quantity <= 10) {
		inStockContent = (
			<p className='orange'>
				<i className='fa-regular fa-circle-xmark'></i>Only {product.quantity} in
				stock
			</p>
		);
	}

	if (product.quantity > 11) {
		inStockContent = (
			<p className='green'>
				<i className='fa-regular fa-circle-check'></i>
				{product.quantity} in stock
			</p>
		);
	}

	if (product.discount.is) {
		currentPrice -= (product.price / 100) * product.discount.percent!;
	}

	if (product.reviews.length === 1) {
		reviewContent = '1 Review';
	} else if (product.reviews.length > 1) {
		reviewContent = product.reviews.length + ' Reviews';
	}

	product.reviews.forEach((review) => {
		rates += review.rate;
	});

	rates /= product.reviews.length;

	for (let i = 1; i <= 5; i++) {
		if (i <= rates) {
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

	const changeSelectedImage = (e: React.MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLDivElement;
		const filteredImage = allImagesType.filter((img) => img.id === target.id);
		setSelectedImg((current) => (current = filteredImage[0]));
	};

	const changeSelectedColor = (e: React.MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLDivElement;
		const filteredColors = product.colors.filter(
			(color) => color === target.id
		);
		setSelectedColor((current) => (current = filteredColors[0]));
	};

	const changeSelectedSize = (e: React.MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLDivElement;
		const filteredSizes = product.sizes.filter((size) => size === target.id);
		setSelectedSize((current) => (current = filteredSizes[0]));
	};

	const changeSelectedNumToBuy = (e: React.MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLDivElement;
		setSelectedNumToBuy((current) => (current = +target.id));
	};

	const changeSelectedShippingType = (id: string) => {
		const filteredTypes = shippingOptions.filter((type) => type.id === id);
		setSelectedShippingType((current) => (current = filteredTypes[0].id));
	};

	return (
		<section className='product-details'>
			<header>
				<span>Furniture</span>
				<p>➛ {product.title}</p>
			</header>
			<div className='content'>
				<div className='img-block'>
					<div className='all'>
						{allImagesType.map((img) => (
							<div
								key={img.id}
								className={`rotate-image image-holder ${
									img.id === selectedImg.id ? 'is-active' : ''
								}`}
								id={img.id}
								onClick={changeSelectedImage}>
								<img
									src={product.img}
									alt={`${product.title} ${img.rotate}`}
									className={`${img.rotate}`}
									id={img.id}
								/>
							</div>
						))}
					</div>
					<div className='picked image-holder'>
						<img
							className={selectedRotate}
							src={product.img}
							alt={product.title}
						/>
					</div>
				</div>
				<form className='info-block'>
					<h3 className='title'>{product.title}</h3>
					<h4 className='author'>
						by{' '}
						<Link to=''>
							<span>{product.author}</span>
							<i className='fa-solid fa-circle-arrow-right'></i>
						</Link>
					</h4>
					<div className='stars'>
						<div className='reviews'>
							{starsContent.length === 5 &&
								starsContent.map((star) => (
									<div key={star.id} className='star'>
										{star.star}
									</div>
								))}
						</div>
						<p>{rates.toFixed(1)}</p>
						<p>{reviewContent}</p>
					</div>
					<div className='price'>
						{product.discount.is && (
							<p className='before-discount'>${product.price}</p>
						)}
						<div className='main-block'>
							<div className='price-info'>
								<p className='current-price'>${Math.floor(currentPrice)}</p>
								<div className='additional-info'>
									<div className='last'>
										<span>${lastPrice}</span>
									</div>
									<p>you save ${Math.floor(lastPrice - currentPrice)}</p>
								</div>
							</div>
							{currentPrice > 400 && (
								<div className='bonus-block shipping'>
									<i className='fa-solid fa-truck-fast'></i>
									<span>Free shipping</span>
								</div>
							)}
							<div className='bonus-block returns'>
								<i className='fa-solid fa-boxes-packing'></i>
								<span>Free Returns</span>
							</div>
						</div>
					</div>
					<div className='colors-block color-size'>
						<h3 className='header-block'>
							Available Colors:{' '}
							<span>
								{selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}
							</span>
						</h3>
						<div className='colors colors-sizes'>
							{product.colors.map((color) => (
								<div
									className={`choose-block ${
										color === selectedColor ? 'is-active' : ''
									}`}
									id={color}
									onClick={changeSelectedColor}>
									<div
										onClick={changeSelectedColor}
										className={`color ${color}`}
										id={color}></div>
								</div>
							))}
						</div>
					</div>
					<div className='sizes-block color-size'>
						<h3 className='header-block'>
							Available Colors: <span>{selectedSize}</span>
						</h3>
						<div className='sizes colors-sizes'>
							{product.sizes.map((size) => (
								<div
									className={`choose-block ${
										size === selectedSize ? 'is-active' : ''
									}`}
									id={size}
									onClick={changeSelectedSize}>
									<h3
										onClick={changeSelectedSize}
										className={`size ${size}`}
										id={size}>
										{size}
									</h3>
								</div>
							))}
						</div>
						{inStockContent}
					</div>
					<div className='to-buy-num'>
						{buyNum.map((num) => (
							<div
								key={num.id}
								id={num.id}
								className={`num-block ${
									+num.id === selectedNumToBuy ? 'is-active' : ''
								}`}
								onClick={changeSelectedNumToBuy}>
								<p className='num' id={num.id}>
									Buy {num.text}
								</p>
							</div>
						))}
						<div
							className={`num-block ${
								selectedNumToBuy >= 4 ? 'is-active' : ''
							}`}>
							<p className='num'>Buy more</p>
						</div>
					</div>
					<button type='submit' className='submit-button'>
						<h3>
							<i className='fa-solid fa-cart-shopping'></i> Add To Card
						</h3>
						<span className='dot'>•</span>
						<p>${Math.floor((currentPrice *= selectedNumToBuy))}</p>
					</button>
					<div className='additional-blocks'>
						<div className='shipping'>
							{shippingOptions.map((shipping) => (
								<div
									className='main'
									key={shipping.id}
									onClick={() => changeSelectedShippingType(shipping.id)}
									id={shipping.id}>
									<div
										className={`icon ${
											shipping.id === selectedShippingType ? 'is-active' : ''
										}`}>
										{shipping.icon}
									</div>
									<div className='block-content'>
										<h3 className='title'>
											{shipping.id.charAt(0).toUpperCase() +
												shipping.id.slice(1)}{' '}
											Shipping
										</h3>
										<div className='info'>
											<p>
												{shipping.price === 'Free'
													? shipping.price
													: '$' + shipping.price}
											</p>
											<i className='fa-regular fa-clock'></i>
											<span>
												{shipping.id === 'standard'
													? transformDate(currentDate) +
													  ' - ' +
													  transformDate(shipping.time)
													: shipping.time}
											</span>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className='main return' id='return-block'>
							<div className='icon'>
								<i className='fa-solid fa-boxes-packing'></i>
							</div>
							<div className='block-content'>
								<h3 className='title'>Return Policy</h3>
								<div className='info'>
									<p>Free</p>
									<i className='fa-regular fa-clock'></i>
									<span>Within 60 days of receipt</span>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default ProductDetails;
