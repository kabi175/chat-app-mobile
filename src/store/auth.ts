import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import { container } from 'tsyringe';
import { UserService } from '../service';

export interface AuthState {
	username?: string;
	userID?: number;
	email?: string;
	token?: string;
	error?: string;
}

const initialState: AuthState = {
	username: 'kabilan',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action: PayloadAction<AuthState>) => {
			_.assign(state, action.payload);
		},
		clearAuth: (state: AuthState) => {
			_.forIn(state, (value, key) =>
				_.assign(state, { [key]: undefined })
			);
		},
	},
});

export const { setAuth, clearAuth } = authSlice.actions;

function authActions(userService: UserService) {
	const signIn =
		(email: string, password: string) => async (dispatch: Function) => {
			const { user, token, error } = await userService.signIn(
				email,
				password
			);
			if (error) {
				return dispatch(
					setAuth({
						error: error.message,
					})
				);
			}
			dispatch(
				setAuth({
					username: user?.displayName,
					email: user?.email,
					userID: user?.id,
					token,
				})
			);
		};

	const signUp =
		(username: string, password: string, email: string) =>
		async (dispatch: Function) => {
			const { user, token, error } = await userService.signUp(
				username,
				password,
				email
			);
			if (error) {
				return dispatch(
					setAuth({
						error: error.message,
					})
				);
			}
			dispatch(
				setAuth({
					username: user?.displayName,
					email: user?.email,
					userID: user?.id,
					token,
				})
			);
		};
	return { signIn, signUp };
}

export const { signIn, signUp } = authActions(container.resolve(UserService));

export default authSlice.reducer;
