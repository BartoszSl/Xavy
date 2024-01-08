import { useEffect, useState } from 'react';
import { tileProps } from '../shop/Sections/Main';
import { motion } from 'framer-motion';

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
		<motion.div
			variants={{
				hidden: { scale: 0 },
				visible: {
					scale: [0.7, 1.2, 1],
				},
			}}
			exit={{ scale: 1 }}
			transition={{ type: 'spring', duration: 1 }}
			initial='hidden'
			animate='visible'
			className='shopTile'
			style={styles}>
			{tile.content}
		</motion.div>
	);

	if (pageWidth < breakPoint) {
		if (tile.small) {
			content = (
				<motion.div className='shopTile' style={styles} >
					{tile.content}
				</motion.div>
			);
		} else {
			content = <></>;
		}
	}

	return <>{content}</>;
};

export default ShopTile;
