import { Link } from 'react-router-dom';
import './Sections.scss';
import StarTile from '../../UI/StarTile';
import { useEffect, useMemo, useRef } from 'react';
import { motion, useAnimation, AnimationControls } from 'framer-motion';

export type hashtagsType = {
	id: string;
	text: string;
};

const trendingHashtags: hashtagsType[] = [
	{
		id: 'h1',
		text: 'Shoes',
	},
	{
		id: 'h2',
		text: 'STWD',
	},
	{
		id: 'h3',
		text: 'CLOTHES',
	},
	{
		id: 'h4',
		text: 'Indoor plant',
	},
	{
		id: 'h5',
		text: 'Men',
	},
	{
		id: 'h6',
		text: 'SHT',
	},
	{
		id: 'h7',
		text: 'Winter sports',
	},
];

export type COLORS = 'red' | 'green' | 'grey';

export type Starproducts = {
	id: string;
	colors: COLORS[];
	img: string;
	category: string;
	title: string;
	short_name: string;
	price: number;
};

const DUMMY_STARPRODUCTS: Starproducts[] = [
	{
		id: 'p1',
		colors: ['red'],
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPzzQMjZlRSQ8Glx9lQvTPfoFGXmu7X-xfA',
		category: 'Shoes',
		title: 'RedAI Force',
		short_name: 'Sneakers',
		price: 39,
	},
	{
		id: 'p2',
		colors: ['grey'],
		img: 'https://mks-meble.pl/41312-large_default/skandynawski-fotel-tapicerowany-z-mozliwoscia-wyboru-tkaniny-eli-monolith-25100.jpg',
		category: 'Furniture',
		title: 'Armchair Grey',
		short_name: 'Armchair',
		price: 53,
	},
];

export type animationType = {
	animate: AnimationControls;
	transition: {
		duration: number;
		type?: string;
	};
	initial: {
		scale?: number;
		opacity?: number;
		y?: number;
	};
};

const PopProducts: React.FC = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const scaleAnimationF = useAnimation();
	const showUpAnimationF = useAnimation();
	const controls: AnimationControls = useAnimation();
	const brandNameAnimation: AnimationControls = useAnimation();

	const scaleAnimation: animationType = useMemo(() => {
		return {
			animate: scaleAnimationF,
			transition: { duration: 0.75, type: 'string' },
			initial: {
				scale: 1,
			},
		};
	}, [scaleAnimationF]);

	const showUp: animationType = useMemo(() => {
		return {
			animate: showUpAnimationF,
			initial: { opacity: 0, y: -30 },
			transition: { duration: 1 },
		};
	}, [showUpAnimationF]);

	useEffect(() => {
		let isAnimating = false;

		const handleScroll = () => {
			const element = sectionRef.current;
			if (element) {
				const rect = element.getBoundingClientRect();
				const isVisible =
					rect.top + 200 < window.innerHeight && rect.bottom >= 0;
				if (isVisible && !isAnimating) {
					isAnimating = true;

					element.scrollIntoView({
						block: 'start',
					});
					controls.start({ opacity: 1 });
					showUp.animate.start({ opacity: 1, y: 0 });
					scaleAnimation.animate.start({ scale: [0.95, 1.05, 0.95, 1] });
					brandNameAnimation.start({ opacity: 1, x: 0, y: 0 });
				}
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [brandNameAnimation, controls, scaleAnimation, showUp.animate]);

	return (
		<motion.div
			ref={sectionRef}
			initial={{ opacity: 0 }}
			animate={controls}
			className='section section--popProducts'>
			<div className='first-row'>
				<motion.header {...showUp} className='section--popProducts__header'>
					MOST
					<br /> POPULAR
				</motion.header>
				<motion.p {...showUp} className='section--popProducts__intro'>
					Today's list of most popular products is guided by the best reviewed
					and most purchased products
				</motion.p>
				<motion.h3
					initial={{ opacity: 0, x: -600, y: -200 }}
					animate={brandNameAnimation}
					transition={{ duration: 1 }}
					className='brand--name'>
					Xavy
				</motion.h3>
			</div>
			<div className='section--popProducts__content'>
				<div className='left-side'>
					<motion.div {...scaleAnimation} className='big-card card-SHT'>
						<div className='svg'></div>
						<div className='content'>
							<p>New SHT collections</p>
							<Link to=''>Check now</Link>
						</div>
					</motion.div>
					<motion.div {...scaleAnimation} className='big-card card-SPTS'>
						<div className='content'>
							<p>Sport assortment from SPTS</p>
						</div>
						<div className='svg'></div>
						<Link to='' className='product-link'>
							<i className='fa-solid fa-arrow-right'></i>
						</Link>
					</motion.div>
					<div className='parse-cards'>
						<motion.div {...scaleAnimation} className='mini-card card-trending'>
							<header>Trending hashtags</header>
							<div className='content'>
								{trendingHashtags.map((item) => (
									<div key={item.id} className='hashtag-block'>
										{item.text}
									</div>
								))}
							</div>
						</motion.div>
						<motion.div
							{...scaleAnimation}
							className='mini-card card-promoCode'>
							<header>New Promo Code</header>
							<p className='code-percent'>-19%</p>
							<span>Join newsletter only</span>
						</motion.div>
					</div>
				</div>
				<div className='right-side'>
					<div className='parse-cards'>
						{DUMMY_STARPRODUCTS.map((product) => (
							<StarTile
								key={product.id}
								product={product}
								animation={scaleAnimation}
							/>
						))}
					</div>
					<motion.div {...scaleAnimation} className='bottom-card'>
						<div className='content'>
							<header>New furniture!</header>
							<p>Check out category</p>
						</div>
						<img
							src='https://www.badcock.com/images/thumbs/0030857_sofas_500.png'
							alt='UNION PARK SOFA'
						/>
						<Link to='' className='product-link'>
							<i className='fa-solid fa-arrow-right'></i>
						</Link>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};
export default PopProducts;
