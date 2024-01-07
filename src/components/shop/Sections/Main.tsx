import { Link } from 'react-router-dom';
import './Sections.scss';
import ShopTile from '../../UI/ShopTile';

export type tileProps = {
	background: string;
	content: any;
	minWidth: string;
	maxWidth: string;
	height: string;
	small: boolean;
};

const tiles: tileProps[] = [
	{
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
	return (
		<section className='section section--main'>
			<h2 className='section--main__header'>
				A place where you can
				<br />
				find everything
				<br />
				whatever <span>you desire</span>
			</h2>
			<p className='section--main__miniText'>
				Thousands of products at your fingertips
			</p>
			<div className='section--main__links'>
				<Link to='' className='newsletter'>
					<p>Join to us for FREE</p>
					<i className='fa-solid fa-share'></i>
				</Link>
				<Link to='../products' className='allProducts'>
					One Click All Products
				</Link>
			</div>
			<div className='section--main__dashboard'>
				{tiles.map((tile) => (
					<ShopTile tile={tile} />
				))}
			</div>
		</section>
	);
};

export default MainSection;
