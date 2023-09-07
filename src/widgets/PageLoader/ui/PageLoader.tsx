import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import Spinner from 'shared/ui/Spinner/Spinner';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
	className?: string;
}

export function PageLoader({className = ''}: PageLoaderProps) {
	return (
		<div className={classNames(cls.PageLoader, {}, [className])}>
			<Spinner />
		</div>
	);
}
