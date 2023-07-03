import React from 'react';

import { motion } from 'framer-motion';
import { DUMMY_POSTS } from '../../utils/db';

import classes from './BlogDashboard.module.scss';
import { useNavigate } from 'react-router-dom';
import { stringToLinkRoute } from '../../utils/stringToLinkRoute';

const slideIn = {
	opacity: [0, 1],
	x: [-200, 0],
	transition: { duration: 0.8 },
};

const list = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.1,
		},
	},
};

const item = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const BlogDashboard = () => {
	const navigate = useNavigate();

	const toRouteHandler = (title: string) => {
		window.scrollTo(0, 0);
		navigate(`/blog/post/${stringToLinkRoute(title)}`);
	};

	return (
		<>
			<main className={classes['blog']}>
				<motion.h3 animate={slideIn} className={classes['blog__title']}>
					Blog
				</motion.h3>

				<motion.div
					variants={list}
					initial="hidden"
					animate="visible"
					className={classes['blog__container']}
				>
					{DUMMY_POSTS.map((post) => (
						<motion.div
							variants={item}
							key={post.id}
							className={classes['blog__post']}
							onClick={toRouteHandler.bind(null, post.title)}
						>
							<img
								className={classes['blog__post-image']}
								src={post.image}
								alt={post.title}
							/>
							<h4 className={classes['blog__post-title']}>
								{post.title}
							</h4>
							<p className={classes['blog__post-date']}>
								{post.date}
							</p>
							<div className={classes['blog__post-tags']}>
								{post.tags.map((tag) => (
									<span
										key={tag}
										className={classes['blog__post-tag']}
									>
										{tag}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>
			</main>
		</>
	);
};

export default BlogDashboard;
