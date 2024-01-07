import React from 'react';

import {
	Navigate,
	Outlet,
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';
import ShopPage from './pages/Shop';
import DashboardRootLayout from './pages/DashboardRoot';
import AuthPage from './pages/Auth';
import { action as logoutAction } from './pages/Logout';

export const DefaultPage: React.FC = () => {
	return (
		<>
			<Navigate to='/shop/main' />
			<Outlet />
		</>
	);
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <DefaultPage />,
		children: [
			{
				path: 'shop',
				children: [
					{
						path: 'main',
						index: true,
						element: <ShopPage />,
					},
					{
						path: 'products',
					},
				],
			},
			{
				path: 'dashboard',
				element: <DashboardRootLayout />,
				children: [
					{
						path: 'main',
						index: true,
					},
					{ path: 'stats' },
				],
			},
			{
				path: 'auth',
				element: <AuthPage />,
			},
			{
				path: 'logout',
				action: logoutAction,
			},
		],
	},
]);

const App: React.FC = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
