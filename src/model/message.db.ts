import { IUser } from '.';
import { IMessage } from './message';

/**
 * MessageDB is a class that represents a database of messages.
 */
export interface IMessageDB {
	addMessage(message: IMessage): Promise<{ error?: Error }>;
	getMessagesByID(
		messageID: string
	): Promise<{ error?: Error; messages?: IMessage[] }>;
	getMessagesByUserID(
		userID: number
	): Promise<{ error?: Error; messages?: IMessage[] }>;
	removeMessageByID(messageID: string): Promise<{ error?: Error }>;
	removeUserMessage(user: IUser): Promise<{ error?: Error }>;
	removeAllMessage(): Promise<{ error?: Error }>;
}
