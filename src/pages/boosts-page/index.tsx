import styles from './boosts-page.module.scss';
import cn from 'classnames';

import { Balance } from '@/features/balance';
import { Container, PageWrapper, Title } from '@/shared/ui';
import { useEffect } from 'react';

export default function BoostsPage() {
	const tg = window.Telegram.WebApp;
	const BackButton = tg.BackButton;

	useEffect(() => {
		BackButton.show();

		BackButton.onClick(() => {
			BackButton.hide();
			window.history.back();
		});

		tg.onEvent('backButtonClicked', () => {
			BackButton.hide();
			window.history.back();
		});

		return () => {
			BackButton.hide();
		};
	}, [BackButton]);

	return (
		<PageWrapper>
			<Container className={styles.container}>
				<div className={styles.top}>
					<Balance/>
					<a href="#">How it works?</a>
				</div>
				<Title className={styles.title}>
					Free daily boosters:
				</Title>
				<div className={styles.freeBoostsBody}>
				</div>
				<Title className={cn(styles.title)}>
					Boosters
				</Title>
				<div className={styles.boostsBox}>
				</div>
			</Container>
		</PageWrapper>
	);
}
