import { Outlet } from 'react-router-dom';

const DashboardRootLayout: React.FC = () => {
	return (
		<main>
			<Outlet />
		</main>
	);
};
export default DashboardRootLayout;
