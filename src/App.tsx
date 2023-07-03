import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './components/BlogPost/BlogPost';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Header />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: 'blog',
				children: [
					{ index: true, element: <Blog /> },
					{ path: 'post/:postName', element: <BlogPost /> },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
