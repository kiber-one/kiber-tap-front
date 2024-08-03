import styles from './nav-bar.module.scss';

import { useNavigate } from 'react-router-dom';

import { navButtons } from '@/widgets/nav-bar/model';
import { NavButton } from '@/widgets/nav-bar/ui';
import { Container } from '@/shared/ui';

export const NavBar = () => {
	const navigate = useNavigate();
	const handleSetPage = (path: string) => navigate(path);

	return (
		<nav className={styles.nav}>
			<Container>
				<ul className={styles.list}>
					{navButtons.map((item) => (
						<li className={styles.listItem} key={item.id}>
							<NavButton
								callback={handleSetPage}
								{...item}
							/>
						</li>
					))}
				</ul>
			</Container>
		</nav>
	);
};
