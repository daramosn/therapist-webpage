import { FC } from 'react';

import classes from './Comment.module.scss';

type CommentProps = {
	avatar: string;
	textComment: string;
	name: string;
	className?: string;
};

const Comment: FC<CommentProps> = ({
	avatar,
	textComment,
	name,
	className,
}) => {
	return (
		<div className={`${classes['comment']} ${className}`}>
			<img
				className={classes['comment__avatar']}
				src={avatar}
				alt="avatar"
			/>
			<p className={classes['comment__text']}>{textComment}</p>
			<span className={classes['comment__name']}>{name}</span>
		</div>
	);
};

export default Comment;
