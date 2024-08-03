import styles from './home-page.module.scss';

import { Fragment } from 'react';

import { Coin } from '@/features/coin';
import { Balance } from '@/features/balance';
import { Container, PageWrapper } from '@/shared/ui';
import { StatusBar } from '@/features/status-bar';

export default function HomePage() {
	return (
		<Fragment>
			<PageWrapper>
				<Container className={styles.container}>
					<div className={styles.inner}>
						<div className={styles.info}>
							<div className={styles.infoItem}>
								<span className={styles.infoTitle}>Profit per tap</span>
								<span className={styles.infoDescription}>2</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.infoTitle}>Next level</span>
								<span className={styles.infoDescription}>15 000</span>
							</div>
							<div className={styles.infoItem}>
								<span className={styles.infoTitle}>Profit per hour</span>
								<span className={styles.infoDescription}>0</span>
							</div>
						</div>
						<Balance/>
						<div className={styles.stats}>
							<div className={styles.statsLine}>
								<div className={styles.statsItem}>
									Bronze {'>'}
								</div>
								<div className={styles.statsItem}>
									Level 1/10
								</div>
							</div>
							<div className={styles.statsBar}>
								<div className={styles.statsBarInner}></div>
							</div>
						</div>
						<Coin/>
					</div>
				</Container>
				<StatusBar/>
			</PageWrapper>
		</Fragment>
	);
}
