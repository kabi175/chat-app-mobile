import { IUser } from './user';

export interface IMessage {
	id: string;
	text: string;
	createdAt: Date;
	user: IUser;
}
