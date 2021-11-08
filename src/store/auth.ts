import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import userService from '../domain/user';

export interface AuthState {
	username?: string;
	email?: string;
	token?: string;
	error?: string;
}

const initialState: AuthState = {};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action: PayloadAction<AuthState>) => {
			state = action.payload;
		},
		clearAuth: (state) => {
			state = {};
		},
	},
});

export const { setAuth, clearAuth } = authSlice.actions;

export const signIn =
	(username: string, password: string) => (dispatch: Function) => {
		userService
			.signIn(username, password)
			.then(({ username, email, token, error }) => {
				dispatch(
					setAuth({ username, email, token, error: error?.message })
				);
			});
	};

export const signUp =
	(username: string, password: string, email: string) =>
	(dispatch: Function) => {
		userService
			.signUp(username, password, email)
			.then((res) => {
				if (res.error) {
					dispatch(setAuth({ error: res.error.message }));
				} else {
                    dispatch(signIn(username, password));
				}
			})
			.catch((err) => {
				dispatch(setAuth({ error: err.message }));
			});
	};
export default authSlice.reducer;
