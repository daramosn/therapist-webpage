import React from 'react';

import { motion } from 'framer-motion';

import classes from './BlogDashboard.module.scss';
import { DUMMY_POSTS } from '../../utils/db';

const slideIn = {
	opacity: [0, 1],
	x: [-200, 0],
	transition: { duration: 0.8 },
};

const BlogDashboard = () => {
	return (
		<>
			<main className={classes['blog']}>
				<motion.h3 animate={slideIn} className={classes['blog__title']}>
					My blog
				</motion.h3>

				<div className={classes['blog__container']}>
					{DUMMY_POSTS.map((post) => (
						<div key={post.id} className={classes['blog__post']}>
							<img
								className={classes['blog__post-image']}
								src={post.image}
								alt={post.title}
							/>
							<h4 className={classes['blog__post-title']}>
								{post.title}
							</h4>
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
						</div>
					))}
				</div>
			</main>
		</>
	);
};

export default BlogDashboard;
