import { useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { DUMMY_POSTS } from '../../utils/db';
import { stringToLinkRoute } from '../../utils/stringToLinkRoute';
import classes from './BlogPost.module.scss';

const BlogPost = () => {
	const { postName } = useParams();
	const newPost = DUMMY_POSTS.filter(
		(post) => stringToLinkRoute(post.title) === postName
	);
	const { title, text, image, date } = newPost[0];

	return (
		<AnimatePresence>
			<motion.article
				initial={{ opacity: 0, y: 300 }}
				transition={{ duration: 0.4 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 200 }}
				className={classes['post']}
			>
				<div className={classes['post__image-container']}>
					<img
						className={classes['post__image']}
						src={image}
						alt={title}
					/>
					<h4 className={classes['post__title']}>{title}</h4>
				</div>
				<h6 className={classes['post__date']}>{date}</h6>
				<p className={classes['post__text']}>
					{text} <br /> <br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Sapiente aliquam accusamus rem debitis eos, molestiae
					laboriosam natus harum maiores? Et voluptatum quo possimus
					explicabo atque blanditiis consectetur nihil molestias sit!{' '}
					<br /> <br />
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Pariatur nisi quos soluta voluptatem quasi repellendus
					veniam aliquam delectus eius fugiat tempora illum provident
					voluptas, voluptatibus cumque ullam, iure, deleniti
					similique. Recusandae, rerum quo temporibus eos odio odit
					iste ullam obcaecati sapiente. Libero distinctio illo
					ratione quo delectus incidunt odio a assumenda nisi minima
					ullam tempore praesentium ad, corporis quas. Minus? Quidem
					enim placeat quam maiores, minima natus minus hic, mollitia
					unde voluptates, voluptate magni explicabo nostrum quasi
					soluta ad harum blanditiis distinctio corporis ratione illo
					odio in. Eos, expedita nobis. Quod veniam necessitatibus,
					ducimus perspiciatis numquam consequuntur recusandae odit ea
					eum. Veniam quia asperiores neque, dolores molestias
					deserunt aspernatur! Sed consequatur maiores dignissimos
					quasi nulla eveniet fugit veniam accusantium culpa.
				</p>
			</motion.article>
		</AnimatePresence>
	);
};

export default BlogPost;
