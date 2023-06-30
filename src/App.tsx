import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Header />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'blog', element: <Blog /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
