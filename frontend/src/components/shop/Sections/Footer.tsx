import { Link } from 'react-router-dom';

const links = [
	{ title: 'PROJECT', links: [{ name: 'GITHUB', to: '' }] },
	{
		title: 'SOCIAL MEDIA',
		links: [
			{ name: 'DISCORD', to: '' },
			{ name: 'LINKEDIN', to: '' },
		],
	},
	{
		title: 'SUPPORT',
		links: [
			{ name: 'CONTACT', to: '' },
			{ name: 'ORDERS & RETURNS', to: '' },
			{ name: 'HELP CENTER', to: '' },
		],
	},
	{
		title: 'ABOUT',
		links: [
			{ name: 'FAQ', to: '' },
			{ name: 'ARTICLES', to: '' },
		],
	},
	{
		title: 'SHOP',
		links: [
			{ name: 'HOME', to: '/shop/main' },
		],
	},
];

const FooterSection: React.FC = () => {
	const onJoinNewsletterHandler = (e: React.SyntheticEvent<EventTarget>) => {
		e.preventDefault();
	};

	return (
		<footer className='footer'>
			<div className='container'>
				<header>
					Join to our newsletter and you will <br /> never miss a promotion
				</header>
				<div className='content'>
					<div className='form--block'>
						<form onSubmit={onJoinNewsletterHandler}>
							<input type='email' placeholder='Email' />
							<button type='submit'>Submit</button>
						</form>
						<p>
							by submitting the form, you agree to receive promotional emails
							and accept our <Link to=''>terms & conditions</Link> and{' '}
							<Link to=''>privacy policy</Link>.
						</p>
					</div>
					<ul className='link--block'>
						{links.reverse().map((linkObj) => (
							<li key={linkObj.title}>
								<p className='link--title'>{linkObj.title}</p>
								{linkObj.links.map((link) => (
									<Link key={link.name} to={link.to} className='link--link'>
										{link.name}
									</Link>
								))}
							</li>
						))}
					</ul>
				</div>
				<div className='bottom'>
					<h3 className='brand--name'>Xavy</h3>
					<p>Copyright &copy; Xavy</p>
					<p>2024</p>
				</div>
			</div>
		</footer>
	);
};

export default FooterSection;
