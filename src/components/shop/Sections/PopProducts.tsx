import { Link } from 'react-router-dom';
import './Sections.scss';
import StarTile from '../../UI/StarTile';

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

const PopProducts: React.FC = () => {
	return (
		<section className='section section--popProducts'>
			<div className='first-row'>
				<header className='section--popProducts__header'>
					MOST
					<br /> POPULAR
				</header>
				<p className='section--popProducts__intro'>
					Today's list of most popular products is guided by the best reviewed
					and most purchased products
				</p>
				<h3 className='brand--name'>Xavy</h3>
			</div>
			<div className='section--popProducts__content'>
				<div className='left-side'>
					<div className='big-card card-SHT'>
						<div className='svg'></div>
						<div className='content'>
							<p>New SHT collections</p>
							<Link to=''>Check now</Link>
						</div>
					</div>
					<div className='big-card card-SPTS'>
						<div className='content'>
							<p>Sport assortment from SPTS</p>
						</div>
						<div className='svg'></div>
						<Link to='' className='product-link'>
							<i className='fa-solid fa-arrow-right'></i>
						</Link>
					</div>
					<div className='parse-cards'>
						<div className='mini-card card-trending'>
							<header>Trending hashtags</header>
							<div className='content'>
								{trendingHashtags.map((item) => (
									<div className='hashtag-block' key={item.id}>
										{item.text}
									</div>
								))}
							</div>
						</div>
						<div className='mini-card card-promoCode'>
							<header>New Promo Code</header>
							<p className='code-percent'>-19%</p>
							<span>Join newsletter only</span>
						</div>
					</div>
				</div>
				<div className='right-side'>
					<div className='parse-cards'>
						{DUMMY_STARPRODUCTS.map((product) => (
							<StarTile key={product.id} product={product} />
						))}
					</div>
					<div className='bottom-card'>
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
					</div>
				</div>
			</div>
		</section>
	);
};
export default PopProducts;
