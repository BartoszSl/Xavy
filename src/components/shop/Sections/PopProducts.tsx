import { Link } from 'react-router-dom';
import './Sections.scss';

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
					<div className='big-card'>
						<div className='content'>
							<p>New SHT collections</p>
							<Link to=''>Check now</Link>
						</div>
					</div>
					<div className='big-card'>
						<div className='content'>Sport assortment from SPTS </div>
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
				<div className='right-side'></div>
			</div>
		</section>
	);
};
export default PopProducts;
