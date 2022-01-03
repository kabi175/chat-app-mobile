import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import friendReducer from './friend';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		friend: friendReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
