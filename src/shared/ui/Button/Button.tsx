import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import {type ButtonHTMLAttributes, type FC} from 'react';

export enum ThemeButton {
	CLEAR = 'clear',
}

type ButtonsProps = {
	className?: string;
	theme?: ThemeButton;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonsProps> = (props) => {
	const {className, children, theme, ...otherProps} = props;
	return (
		<button
			type='button'
			className={classNames(cls.Button, {[cls[theme]]: true}, [className])}
			{...otherProps}
		>
			{children}
		</button>
	);
};

