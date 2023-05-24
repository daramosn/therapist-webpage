import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import classes from './Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	className?: string;
	type?: 'button' | 'submit' | 'reset';
	children: ReactNode;
};

const Button: FC<ButtonProps> = ({
	children,
	className,
	type = 'button',
	onClick,
}) => {
	return (
		<button
			className={`${classes['button']} ${className}`}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
