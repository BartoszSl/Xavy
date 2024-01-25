import { useSelector } from 'react-redux';
import Modal from '../../../components/UI/Modal';
import { RootState } from '../../../store/index';
import './ShopNavigation.scss';
import AccountGeneral from '../Settings/General';
import AccountEmail from '../Settings/Email';
import AccountPassword from '../Settings/Password';

const AccountSettings: React.FC<{ onDone: () => void }> = ({ onDone }) => {
	const user = useSelector((state: RootState) => state.user.user);

	return (
		<Modal onClose={onDone} className='account-settings'>
			<header className='settingsSection'>
				<p className='title'>Account</p>
				<span>Real-time information and actions regarding your account</span>
			</header>
			<AccountGeneral user={user} />
			<AccountEmail user={user} />
			<AccountPassword user={user} />
		</Modal>
	);
};

export default AccountSettings;
