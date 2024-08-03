import { Fragment, type PropsWithChildren, useEffect } from 'react';
import { authService } from '@/entities/auth';

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const [signInAsync] = authService.useSignInMutation();
	const tg = window.Telegram.WebApp;
	const id = tg.initDataUnsafe.user?.id;

	useEffect(() => {
		if (!tg || !id) return;

		tg.ready();


		const signIn = async () => {
			try {
				await signInAsync({ id }).unwrap();
			}
			catch (error) {
				console.error('Error signing in:', error);
			}
		};

		signIn();
	}, []);

	return <Fragment>{children}</Fragment>;
};
