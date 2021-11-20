import { IUser } from './user';

export type UserState = 'online' | 'offline';

export interface IState {
	id: number;
	state: UserState;
	createdAt: Date;
	userId: string;
}
