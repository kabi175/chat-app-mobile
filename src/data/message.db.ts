import { IMessage, IMessageDB, IUser } from '../model';

export class InMemoryMessageDB implements IMessageDB {
	messages: IMessage[];

	constructor() {
		this.messages = [];
	}

	async addMessage(message: IMessage): Promise<{ error?: Error }> {
		this.messages.push(message);
		return {};
	}

	async removeMessageByID(
		messageID: string
	): Promise<{ error?: Error | undefined }> {
		this.messages = this.messages.filter((m) => m.id !== messageID);
		return {};
	}

	async removeUserMessage(user: IUser): Promise<{ error?: Error }> {
		this.messages = this.messages.filter(
			(m) => m.from !== user.id && m.to !== user.id
		);
		return {};
	}

	async removeAllMessage(): Promise<{ error?: Error }> {
		this.messages = [];
		return {};
	}

	async getMessageByID(
		messageID: string
	): Promise<{ error?: Error; message?: IMessage }> {
		const message = this.messages.find((m) => m.id === messageID);
		return { message };
	}

	async getMessagesByUserID(
		userID: number
	): Promise<{ error?: Error; messages?: IMessage[] }> {
		const messages = this.messages.filter(
			(m) => m.from === userID || m.to === userID
		);
		return { messages };
	}

	async getMessagesByID(
		messageID: string
	): Promise<{ error?: Error; messages?: IMessage[] }> {
		const messages = this.messages.filter((m) => m.id === messageID);
		return { messages };
	}
}
