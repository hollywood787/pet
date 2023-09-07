import cls from './Spinner.module.scss';

export default function Spinner() {
	return (
		<div className={cls.ldsEllipsis}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}
