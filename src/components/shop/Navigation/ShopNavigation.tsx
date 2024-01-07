import { useEffect, useState } from 'react';
import PhoneNavigation from './PhoneNavigation';
import DesktopNavigation from './DesktopNavigation';

const ShopNavigation: React.FC = () => {
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
