import { api } from '@/app/api';
import type { ActionResult } from '@/shared/types';
import type { SignInRequestInterface, SignInResponseInterface } from "@/entities/auth";

export const authService = api.injectEndpoints({
	endpoints: (builder) => ({
		signIn: builder.mutation<ActionResult<SignInResponseInterface>, SignInRequestInterface>({
			query: (dto) => ({
				url: '/auth/sign-in/telegram', method: 'POST', body: dto,
			})
		}),
	})
});
