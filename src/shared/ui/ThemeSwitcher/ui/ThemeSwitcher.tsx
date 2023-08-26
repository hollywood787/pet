import {classNames} from 'shared/lib/classNames/classNames';
import DarkIcon from 'shared/assets/icons/theme_dark.svg';
import LightIcon from 'shared/assets/icons/theme_light.svg';
import cls from './ThemeSwitcher.module.scss';
import {Theme, useTheme} from 'app/providers/ThemeProvider';
import {Button, ThemeButton} from 'shared/ui/Button/Button';

type ThemeSwitcherProps = {
	className?: string;
};

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
	const {theme, toggleTheme} = useTheme();

	return (
		<Button
			theme={ThemeButton.CLEAR}
			className={classNames(cls.ThemeSwitcher, {}, [className])}
			onClick={toggleTheme}
		>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	);
};

