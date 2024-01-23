import { useEffect, useState } from 'react';
import PhoneNavigation from './PhoneNavigation';
import DesktopNavigation from './DesktopNavigation';
import { User } from '../../../store/user-redux';

const ShopNavigation: React.FC<{ userData?: User }> = ({ userData }) => {
	const [pageWidth, setPageWidth] = useState(window.innerWidth);
	const breakPoint = 768;

	useEffect(() => {
		const updatePageWidth = () => {
			setPageWidth(window.innerWidth);
		};

		window.addEventListener('resize', updatePageWidth);

		updatePageWidth();

		return () => {
			window.removeEventListener('resize', updatePageWidth);
		};
	}, []);

	return (
		<>
			{pageWidth < breakPoint && <PhoneNavigation />}
			{pageWidth >= breakPoint && <DesktopNavigation />}
		</>
	);
};

export default ShopNavigation;
