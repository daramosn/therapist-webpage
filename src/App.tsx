import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Header />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'about', element: <h3>about</h3> },
			{ path: 'contact', element: <h3> contact</h3> },
			{ path: 'pricing', element: <h3>pricing</h3> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
