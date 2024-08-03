import { Fragment, lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { NavBar } from '@/widgets';
import { Loading, PageWrapper } from '@/shared/ui';
import { ROUTER_MAP } from '@/shared/constatns';

const HomePage = lazy(() => import('@/pages/home-page'));
const BoostsPage = lazy(() => import('@/pages/boosts-page'));
const ComingSoonPage = lazy(() => import('@/pages/coming-soon-page'));

export const App = () => {
	// todo попробовать настроить через botFather
	useEffect(() => {
		window.Telegram.WebApp.expand();
	}, []);

	return (
		<Fragment>
			<Suspense fallback={<PageWrapper><Loading/></PageWrapper>}>
				<Routes>
					<Route>
						<Route path={ROUTER_MAP.home} element={<HomePage/>}/>
						<Route path={ROUTER_MAP.tasks} element={<ComingSoonPage/>}/>
						<Route path={ROUTER_MAP.frens} element={<ComingSoonPage/>}/>
						<Route path={ROUTER_MAP.shop} element={<ComingSoonPage/>}/>
						<Route path={ROUTER_MAP.settings} element={<ComingSoonPage/>}/>
						<Route path={ROUTER_MAP.boosts} element={<BoostsPage/>}/>
					</Route>
				</Routes>
			</Suspense>
			<NavBar/>
		</Fragment>
	);
};
