import { createSlice } from '@reduxjs/toolkit';
import { UserStateInterface } from '@/entities/user';

const initialState: UserStateInterface = {};

export const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {},
	extraReducers: () => {
	}
});
