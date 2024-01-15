import './Products.scss';
import { Starproducts, colors } from '../Sections/PopProducts';
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

const ProductDetails: React.FC<{ product: Starproducts }> = ({ product }) => {
	const [selectedImg, setSelectedImg] = useState(allImagesType[0]);
	const [selectedColor, setSelectedColor] = useState(product.colors[0]);
	const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
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
				<div className='info-block'>
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
						<p>{rates}</p>
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
							<div key={num.id} id={num.id} className='num-block'>
								<p className='num'>Buy {num.text}</p>
							</div>
						))}
						<div className='num-block'>
							<p className='num'>Buy more</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetails;
