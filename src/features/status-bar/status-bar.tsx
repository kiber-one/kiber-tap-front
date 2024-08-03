import styles from './status-bar.module.scss';

import cn from 'classnames';
import { Link } from 'react-router-dom';
import { IoRocket } from 'react-icons/io5';
import { FaBoltLightning } from 'react-icons/fa6';

import { ROUTER_MAP } from '@/shared/constatns';
import { Container } from '@/shared/ui';

export const StatusBar = (props: Props) => {
	const { className } = props;
	const energy = 1000;
	const maxEnergy = 1000;

	return (
		<div className={cn(styles.statusBar, className)}>
			<Container className={styles.container}>
				<div className={styles.item}>
					<span className={styles.icon}>
						<FaBoltLightning/>
					</span>
					<span className={styles.text}>
						{energy}/{maxEnergy}
					</span>
				</div>
				<Link to={ROUTER_MAP.boosts} className={styles.item}>
					<span className={styles.icon}>
						<IoRocket/>
					</span>
					<span className={styles.text}>
						Boosts
					</span>
				</Link>
			</Container>
		</div>
	);
};

type Props = {
	className?: string;
}
