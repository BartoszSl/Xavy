import { useEffect, useState } from 'react';
import { tileProps } from '../shop/Sections/Main';

import './UI.scss';

const ShopTile: React.FC<{ tile: tileProps }> = ({ tile }) => {
	const styles = {
		background: tile.background,
		width: (tile.minWidth, tile.maxWidth),
		height: tile.height,
	};

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

	let content = (
		<div className='shopTile' style={styles}>
			{tile.content}
		</div>
	);

	if (pageWidth < breakPoint) {
		if(tile.small) {
			content = (
				<div className='shopTile' style={styles}>
					{tile.content}
				</div>
			);
		}else {
			content = <></>
		}
	}

	return <>{content}</>;
};

export default ShopTile;
