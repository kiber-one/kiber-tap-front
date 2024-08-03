import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App, AuthProvider, store } from '@/app';

ReactDOM.createRoot(document.getElementById('kiber-tap-root')!).render(
	<React.StrictMode>
		{/*<BrowserRouter>*/}
		<BrowserRouter basename={'/kiber-one-game-front/'}>
			<Provider store={store}>
				<AuthProvider>
					<App/>
				</AuthProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
);
