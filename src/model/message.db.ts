import { IMessage } from './message';

export interface IMessageDB {
	addNewMessage(message: IMessage): Promise<{ error?: Error }>;
	removeMessage(message: IMessage): Promise<{ error?: Error }>;
	clearMessage(message: IMessage): Promise<{ error?: Error }>;
	clearUserMessage(userID: number): Promise<{ error?: Error }>;
}
