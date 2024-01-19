import { useState } from 'react';

export type imgType = { id: string; rotate: string };

const allImagesType: imgType[] = [
	{ id: 'i1', rotate: 'img-rotate-normal' },
	{ id: 'i2', rotate: 'img-rotate-right' },
	{ id: 'i3', rotate: 'img-rotate-left' },
	{ id: 'i4', rotate: 'img-rotate-bottom' },
];

const ImageBlock: React.FC<{ image: string; title: string }> = ({
	image,
	title,
}) => {
	const [selectedImg, setSelectedImg] = useState(allImagesType[0]);
	let selectedRotate = selectedImg.rotate;

	const changeSelectedImage = (e: React.MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLDivElement;
		const filteredImage = allImagesType.filter((img) => img.id === target.id);
		setSelectedImg((current) => (current = filteredImage[0]));
	};

	return (
		<div className='img-block'>
			<div className='all'>
				{allImagesType.map((img) => (
					<div
						key={img.id}
						className={`rotate-image image-holder ${
							img.id === selectedImg.id ? 'is-active' : ''
						}`}
						id={img.id}
						onClick={changeSelectedImage}>
						<img
							src={image}
							alt={`${image} ${img.rotate}`}
							className={`${img.rotate}`}
							id={img.id}
						/>
					</div>
				))}
			</div>
			<div className='picked image-holder'>
				<img className={selectedRotate} src={image} alt={title} />
			</div>
		</div>
	);
};

export default ImageBlock;
