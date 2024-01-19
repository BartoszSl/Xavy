import { useState } from 'react';
import './ShopNavigation.scss';

const PhoneNavigation: React.FC = () => {
	const [menuIsActive, setMenuIsActive] = useState(false);

	const changeActiveHamburgerMenu = () => {
		setMenuIsActive((curr) => !curr);
	};

	return (
		<>
			<nav>
				<img
					src='https://cdn.discordapp.com/attachments/1180414285231427605/1180590421534068949/OIG.png?ex=65a2e382&is=65906e82&hm=1e9760b6fca29356ddee6c72757005a6de1f8cac64ef4e47f6f468cce9664fe2&'
					alt='avatar'
				/>
				<h3 className='brand--name'>Xavy</h3>
				<div className='nav--buttons'>
					<button className='search'>
						<i className='fa-solid fa-magnifying-glass'></i>
					</button>
					<button
						className={`hamburger hamburger--spin ${
							menuIsActive && 'is-active'
						}`}
						type='button'
						onClick={changeActiveHamburgerMenu}>
						<span className='hamburger-box'>
							<span className='hamburger-inner'></span>
						</span>
					</button>
				</div>
			</nav>
			{menuIsActive && (
				<div className='phone--menu'>
					<a href='g'>test</a>
					<a href='g'>test</a>
				</div>
			)}
		</>
	);
};

export default PhoneNavigation;
