import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Sections.scss';
import ShopTile from '../../UI/ShopTile';

export type tileProps = {
	id: string;
	background: string;
	content: any;
	minWidth: string;
	maxWidth: string;
	height: string;
	small: boolean;
};

const tiles: tileProps[] = [
	{
		id: 't1',
		background: `linear-gradient(31deg, #E6E5FF -10.43%, #635EF7 110.03%)`,
		content: (
			<div className='reviews'>
				<div className='stars'>
					<i className='fa-solid fa-star'></i>
					<i className='fa-solid fa-star'></i>
					<i className='fa-solid fa-star'></i>
					<i className='fa-solid fa-star'></i>
					<i className='fa-regular fa-star'></i>
				</div>
				<p className='text'>Top rated and quality products on the internet</p>
				<div className='statistic'>
					<p>+13K</p>
					<p>Products Reviews</p>
				</div>
			</div>
		),
		minWidth: '10rem',
		maxWidth: '15rem',
		height: '20rem',
		small: true,
	},
	{
		id: 't2',
		background: `#E6E5FF`,
		content: (
			<div className='shopping-ad'>
				<div className='discount'>
					<h5>-15%</h5>
					<p>for first purchases</p>
				</div>
				<div className='ad-info'>
					<i className='fa-solid fa-truck-fast'></i>
					<p>Free, Fast, and smart shopping</p>
				</div>
			</div>
		),
		minWidth: '6rem',
		maxWidth: '10rem',
		height: '13.5rem',
		small: false,
	},
	{
		id: 't3',
		background: `#F0F0F0`,
		content: (
			<div className='active-products'>
				<div className='images'>
					<img
						src='https://img.freepik.com/free-photo/blue-relax-room-decor-luxury_1203-4115.jpg?w=740&t=st=1704473337~exp=1704473937~hmac=88709577dfc50585deb8e159b50bd5f0556f4b27c978a50d772c02fb37fd8899'
						alt='Blue relax room decor luxury'
					/>
					<img
						src='https://img.freepik.com/free-photo/view-skateboard-with-retro-memorabilia_23-2150583928.jpg?w=1380&t=st=1704473888~exp=1704474488~hmac=8e378780a016095248c43e6084c4d9159b98d896292e0cd5af11ba12f5ec64fa'
						alt='View of skateboard with retro memorabilia'
					/>
					<img
						src='https://img.freepik.com/free-photo/shirt-clothes_74190-5087.jpg?w=1380&t=st=1704474179~exp=1704474779~hmac=f2efca8610effc65b928e18b8cd50b85419804fe339613a786ee4028a2d09c08'
						alt='Shirt and clothes'
					/>
					<div className='img-shadow'>
						<img
							src='https://img.freepik.com/free-photo/cyclist-sunny-day-bike-adventure-travel-photo_1150-7513.jpg?w=1380&t=st=1704474273~exp=1704474873~hmac=330be9b135d83c1baac54c70c43b04d39505a69f90f149c4b50f54dd7bb42743'
							alt='Cyclist on sunny day'
							className='img-shadow'
						/>
						<div className='shadow'>
							<p>+12</p>
						</div>
					</div>
				</div>
				<div className='text'>
					<h5>3,000+</h5>
					<p>Active products</p>
				</div>
			</div>
		),
		minWidth: '6rem',
		maxWidth: '10rem',
		height: '7.5rem',
		small: false,
	},
	{
		id: 't4',
		background: `url('https://img.freepik.com/free-photo/shopping-cart-with-gift-box-icon-promotion-discount-sale-reward-checkout-ecommerce-online-shopping-3d-illustration_56104-2102.jpg?w=1380&t=st=1704475806~exp=1704476406~hmac=75009b2bce06378e0bd5c9e15156b19ba42be28c99e11d0dc805b183f8f8f717') center/cover`,
		content: (
			<div className='more-info'>
				<p>Performance Quality Reliability</p>
			</div>
		),
		minWidth: '8rem',
		maxWidth: '10rem',
		height: '13.5rem',
		small: false,
	},
	{
		id: 't5',
		background: `linear-gradient(335deg, #2A61DB 0%, #D9E4FC 210.78%)`,
		content: (
			<div className='policyTerms-link'>
				<h5>
					Check out how Xavy works and try out many features for free at no
					extra charge
				</h5>
				<div className='bottom'>
					<hr />
					<Link to=''>
						<p>Learn more</p>
						<i className='fa-solid fa-square-arrow-up-right'></i>
					</Link>
				</div>
			</div>
		),
		minWidth: '10rem',
		maxWidth: '15rem',
		height: '20rem',
		small: true,
	},
];

const MainSection: React.FC = () => {
	const transitionSett = { duration: 0.5 };

	return (
		<section className='section section--main' id='main'>
			<div className='design-ball  design-ball--animation design-ball--small first-ball'></div>
			<div className='design-ball design-ball--animation__reverse design-ball--big design-ball--reverse_rotate second-ball'></div>
			<div className='design-ball design-ball--small  design-ball--animation__reverse design-ball--normal_rotate third-ball'></div>
			<div className='design-ball design-ball--animation design-ball--medium design-ball--reverse_rotate fourth-ball'></div>
			<motion.h2
				className='section--main__header'
				variants={{
					hidden: { opacity: 0.5 },
					visible: {
						opacity: 1,
					},
				}}
				exit={{ opacity: 1 }}
				transition={transitionSett}
				initial='hidden'
				animate='visible'>
				A place where you can
				<motion.span
					className='change-place'
					variants={{
						hidden: { opacity: 0, y: 40 },
						visible: { opacity: 1, y: 0 },
					}}
					exit={{ opacity: 1, y: 0 }}
					initial='hidden'
					animate='visible'
					transition={transitionSett}>
					find everything
					<br />
					whatever <span className='gradient'>you desire</span>
				</motion.span>
			</motion.h2>
			<motion.p
				className='section--main__miniText'
				variants={{
					hidden: { opacity: 0, scale: 0 },
					visible: {
						opacity: 1,
						scale: [0.7, 1.2, 1],
					},
				}}
				initial='hidden'
				animate='visible'
				transition={transitionSett}>
				Thousands of products at your fingertips
			</motion.p>
			<div className='section--main__links'>
				<Link to=''>
					<motion.div
						className='newsletter'
						variants={{
							hidden: { padding: 0 },
							visible: {
								padding: '0.7rem 2.5rem',
							},
						}}
						initial='hidden'
						animate='visible'
						transition={transitionSett}
						exit={{ padding: '0.7rem 2.5rem' }}>
						<motion.div
							className='newsletter--content'
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
							initial='hidden'
							animate='visible'
							transition={transitionSett}>
							<p>Join to us for FREE</p>
							<i className='fa-solid fa-share'></i>
						</motion.div>
					</motion.div>
				</Link>
				<Link to='../products' className='allProducts'>
					One Click All Products
				</Link>
			</div>
			<div className='section--main__dashboard'>
				{tiles.map((tile) => (
					<ShopTile key={tile.id} tile={tile} />
				))}
			</div>
		</section>
	);
};

export default MainSection;
