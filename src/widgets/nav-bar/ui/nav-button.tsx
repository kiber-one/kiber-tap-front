import styles from './nav-button.module.scss';

import cn from 'classnames';
import { type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

export const NavButton = (props: Props) => {
	const { path, icon, text, className, callback } = props;
	const location = useLocation();

	return (
		<button
			className={cn(styles.navButton, className, location.pathname === path && 'active')}
			onClick={() => callback(path)}
			type="button"
		>
			<span className={styles.icon}>
				{icon}
			</span>
			<span className={styles.text}>
				{text}
			</span>
		</button>
	);
};

type Props = {
	path: string;
	text: string;
	icon: ReactNode;
	className?: string;
	callback: (path: string) => void;
}
