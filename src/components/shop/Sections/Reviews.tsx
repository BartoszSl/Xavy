import { useState } from 'react';
import './Sections.scss';

const reviews = [
	{
		id: '1',
		date: new Date().getDay() - 5,
		rate: 4.6,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nesciunt dolor quisquam tempore beatae repellat veritatis est, perspiciatis optio. Vel nisi nostrum necessitatibus laboriosam sit veniam aliquam, officiis iusto fugiat unde officia tempora cumque exercitationem totam amet excepturi saepe! Consectetur aperiam quis nam et quae dolorum totam laudantium minima in?',
		user_name: 'Adam Nowak',
		user_avatar:
			'https://cdn.discordapp.com/attachments/1180414285231427605/1180590421534068949/OIG.png?ex=65a2e382&is=65906e82&hm=1e9760b6fca29356ddee6c72757005a6de1f8cac64ef4e47f6f468cce9664fe2&',
	},
	{
		id: '2',
		date: new Date().getDay() - 14,
		rate: 4.2,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nesciunt dolor quisquam tempore beatae repellat veritatis est, perspiciatis optio. Vel nisi nostrum necessitatibus laboriosam sit veniam aliquam.',
		user_name: 'Jan Kowalski',
		user_avatar:
			'https://cdn.discordapp.com/attachments/1180414285231427605/1180590421534068949/OIG.png?ex=65a2e382&is=65906e82&hm=1e9760b6fca29356ddee6c72757005a6de1f8cac64ef4e47f6f468cce9664fe2&',
	},
];

const ReviewsSection: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(1);
	const limit = reviews.length;

	const nextIndexHandler = () => {
		if (currentIndex >= limit) {
			setCurrentIndex((current) => (current = 1));
		} else {
			setCurrentIndex((current) => (current += 1));
		}
	};

	const prevoiusIndexHandler = () => {
		if (currentIndex === 1) {
			setCurrentIndex((current) => (current = limit));
		} else {
			setCurrentIndex((current) => (current -= 1));
		}
	};

	return (
		<div className='section section--reviews'>
			<header>
				WHAT OUR
				<br /> REVIES SAY
			</header>
			<div className='section--reviews__content'>
				{reviews.map((review) => (
					<div
						key={review.id}
						className={`review--block ${
							+review.id === currentIndex ? 'is-active' : ''
						}`}></div>
				))}
			</div>
			<div className='section--reviews__controls'>
				<button
					type='button'
					onClick={prevoiusIndexHandler}
					className='previus'>
					<i className='fa-solid fa-arrow-left-long'></i>
				</button>
				<div className='indexes'>
					<span>{currentIndex}</span>
					<div className='dash'></div>
					<span>{limit}</span>
				</div>
				<button type='button' onClick={nextIndexHandler} className='next'>
					<i className='fa-solid fa-arrow-right-long'></i>
				</button>
			</div>
		</div>
	);
};

export default ReviewsSection;
