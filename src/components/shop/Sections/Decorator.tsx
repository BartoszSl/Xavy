import './Sections.scss';

const Decorator: React.FC = () => {
	return (
		<section className='decorator'>
			<div className='design-ball  design-ball--animation design-ball--small first-ball'></div>
			<div className='design-ball design-ball--animation__reverse design-ball--big design-ball--reverse_rotate second-ball'></div>
			<div className='design-ball design-ball--small  design-ball--animation__reverse design-ball--normal_rotate third-ball'></div>
			<div className='design-ball design-ball--animation design-ball--medium design-ball--reverse_rotate fourth-ball'></div>
		</section>
	);
};

export default Decorator;
