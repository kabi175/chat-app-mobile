import { singleton } from 'tsyringe';
import { IMessage, IMessageDB, IUser } from '../model';

@singleton()
export class InMemoryMessageDB implements IMessageDB {
	messages: IMessage[];

	constructor() {
		this.messages = [];
	}

	async addNewMessage(message: IMessage): Promise<{ error?: Error }> {
		this.messages.push(message);
		return {};
	}

	async removeMessage(message: IMessage): Promise<{ error?: Error }> {
		this.messages = this.messages.filter((m) => m.id !== message.id);
		return {};
	}

	async clearMessage(): Promise<{ error?: Error }> {
		this.messages = [];
		return {};
	}

	async clearUserMessage(userId: number): Promise<{ error?: Error }> {
		this.messages = this.messages.filter(
			(m) => m.from !== userId && m.to !== userId
		);
		return {};
	}
}
