import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { api } from '@/app/api';
import { userService } from '@/entities/user';

const rootReducer = combineReducers({
	user: userService.reducer,
	[api.reducerPath]: api.reducer
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		const defaultMiddleware = getDefaultMiddleware();

		return defaultMiddleware.concat([api.middleware]);
	},
	devTools: true
});
