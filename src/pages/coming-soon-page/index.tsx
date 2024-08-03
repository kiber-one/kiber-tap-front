import styles from './coming-soon-page.module.scss';
import { Container, PageWrapper } from '@/shared/ui';

export default function ComingSoonPage() {
	return (
		<PageWrapper>
			<div className={styles.wrapper}>
				<Container className={styles.container}>
					Скоро...
				</Container>
			</div>
		</PageWrapper>
	);
};
