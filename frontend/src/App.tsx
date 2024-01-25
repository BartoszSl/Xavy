import React from 'react';

import {
	Navigate,
	Outlet,
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';
import ShopPage, { loader as fetchUser } from './pages/Shop';
import DashboardRootLayout from './pages/DashboardRoot';
import AuthPage, { action as authAction } from './pages/Authentication';
import { action as logoutAction } from './pages/Logout';
import ProductDetailsPage from './pages/ProductDetails';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './util/http';

export const DefaultPage: React.FC = () => {
	const id = localStorage.getItem('userid');
	
	return (
		<>
			{!id && <Navigate to='/auth?mode=login' />}
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
				id: 'shop',
				loader: fetchUser,
				children: [
					{
						path: 'main',
						element: <ShopPage />,
					},
					{
						path: 'product-details/:id',
						element: <ProductDetailsPage />,
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
				action: authAction,
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
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
};

export default App;
