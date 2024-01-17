import { useRef } from 'react';
import './ShopNavigation.scss';
import { Link } from 'react-router-dom';

const DUMMY_IMGS = [
	{
		id: 'd1',
		src: 'https://img.freepik.com/free-photo/close-up-basketball-shoes_23-2150847284.jpg?t=st=1704347784~exp=1704351384~hmac=1cf3ad74343efcd0a72219262f86b3ed73516bd9e410c5be29a6c4a7c09f8767&w=1380',
		alt: 'Close up on basketball shoes',
	},
	{
		id: 'd2',
		src: 'https://img.freepik.com/free-photo/living-chair-contemporary-furniture-retro_1203-4060.jpg?w=1380&t=st=1704373585~exp=1704374185~hmac=12ee0b3cb77f5681faf3af4082831c97932395be469a6c448889e31373d1baa4',
		alt: 'Living chair contemporary furniture retro',
	},
	{
		id: 'd3',
		src: 'https://img.freepik.com/free-photo/still-life-say-no-fast-fashion_23-2149669609.jpg?w=740&t=st=1704373468~exp=1704374068~hmac=5744b8e5fce8c0829e59c7264cbaabf34608338ca8c09b3e121a56f4bd2633d2',
		alt: 'Still life say no to fast fashion',
	},
	{
		id: 'd4',
		src: 'https://img.freepik.com/free-photo/view-3d-man-jogging_23-2150709846.jpg?t=st=1704367695~exp=1704371295~hmac=2b0524e36eb0425111200b51e852f9187adeedd38ac07ea44a9f01cd55d41154&w=900',
		alt: 'View of 3d man jogging',
	},
];

const DUMMY_LINKS = [
	{ id: 'l1', text: 'Popular Products', to: '../popular' },
	{ id: 'l2', text: 'Top reviews', to: '../top_reviews' },
	{ id: 'l3', text: 'BESTSELLERS', to: '../bestsellers' },
	{ id: 'l4', text: 'Favorite Brands', to: '../favorite' },
];

const DesktopNavigation: React.FC = () => {
	const searchRef = useRef<HTMLInputElement>(null);

	const onSubmitSearch = (e: React.SyntheticEvent<EventTarget>) => {
		e.preventDefault();

		const searchValue = searchRef.current?.value;

		if (searchValue!.length > 1) {
		}
	};

	return (
		<nav>
			<Link to='../main' className='brand--name'>
				Xavy
			</Link>
			<Link to='' className='allCategories'>
				<div className='allCategories--imgs'>
					{DUMMY_IMGS.map((img) => (
						<img key={img.id} src={img.src} alt={img.alt} />
					))}
				</div>
				<div className='allCategories--content'>
					<h5>PRODUCTS</h5>
					<span>LOT OF CATEGORIES</span>
					<div className='allCategories--content__link'>
						<p>View All</p>
						<div className='arrow'>
							<i className='fa-solid fa-arrow-right'></i>
						</div>
					</div>
				</div>
			</Link>
			<div className='search'>
				<form className='search--bar' onSubmit={onSubmitSearch}>
					<button type='submit'>
						<i className='fa-solid fa-magnifying-glass'></i>
					</button>
					<input
						type='text'
						minLength={1}
						ref={searchRef}
						placeholder='Search something ...'
					/>
				</form>
				<div className='search--links'>
					{DUMMY_LINKS.map((link) => (
						<Link key={link.id} to={link.to}>
							{link.text}
						</Link>
					))}
				</div>
			</div>
			<div className='tiles'>
				<div className='tile tile--cart'>
					<i className='fa-solid fa-cart-shopping'></i>
					<div className='notification'>2</div>
				</div>
				<div className='tile tile--money'>
					<i className='fa-solid fa-wallet'></i>
					<p>$ 421.25</p>
				</div>
				<a
					href='https://github.com/BartoszSl/Xavy'
					target='_blank'
					rel='noreferrer'
					className='tile tile--github'>
					<i className='fa-brands fa-github'></i>
					<div className='notification'>!</div>
				</a>
			</div>
			<div className='user'>
				<img
					src='https://cdn.discordapp.com/attachments/1180414285231427605/1180590421534068949/OIG.png?ex=65a2e382&is=65906e82&hm=1e9760b6fca29356ddee6c72757005a6de1f8cac64ef4e47f6f468cce9664fe2&'
					alt='user_photo'
				/>
				<div className='user--settings'>
					<p>Bartek</p>
					<i className='fa-solid fa-chevron-down'></i>
				</div>
			</div>
		</nav>
	);
};

export default DesktopNavigation;
