import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext';
import {useContext} from 'react';

type UseThemeResult = {
	toggleTheme: () => void;
	theme: Theme;
};

export function useTheme(): UseThemeResult {
	const {theme = Theme.NORMAL, setTheme} = useContext(ThemeContext);

	const toggleTheme = () => {
		const newTheme = theme === Theme.DARK ? Theme.NORMAL : Theme.DARK;
		if (setTheme) {
			setTheme(newTheme);
		}
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	return {
		theme,
		toggleTheme,
	};
}
