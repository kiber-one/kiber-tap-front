import styles from './page-wrapper.module.scss';

import cn from 'classnames';
import { Fragment, type PropsWithChildren } from 'react';

export const PageWrapper = ({ className, children }: Props) => {
	return (
		<Fragment>
			<div className={styles.user}>
				<div className={styles.avatar}></div>
				<span className={styles.username}>Aidamir</span>
			</div>
			<div className={cn(styles.pageWrapper, className)}>
				<div className={styles.animate}>
					{children}
				</div>
			</div>
		</Fragment>
	);
};

interface Props extends PropsWithChildren {
	className?: string;
}
