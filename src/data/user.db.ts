import { singleton } from 'tsyringe';
import { IUser } from '../model';
import { IUserDB } from '../model/user.db';

/**
 * In-memory User DataBase implementation.
 */
export class InMemoryUserDB implements IUserDB {
	friends: IUser[];
	constructor() {
		this.friends = [];
	}
	async addFriend(user: IUser): Promise<{ error?: Error }> {
		this.friends.push(user);
		return {};
	}
	async removeFriend(user: IUser): Promise<{ error?: Error }> {
		this.friends = this.friends.filter((f) => f.id !== user.id);
		return {};
	}
	async removeAllFriend(): Promise<{ error?: Error }> {
		this.friends = [];
		return {};
	}
	async getFriends(): Promise<{ error?: Error; friends?: IUser[] }> {
		return { friends: this.friends };
	}
	async getFriendByEmail(
		email: string
	): Promise<{ error?: Error; friend?: IUser }> {
		const friend = this.friends.find((f) => f.email === email);
		return { friend };
	}
	async getFriendByID(
		id: number
	): Promise<{ error?: Error; friend?: IUser }> {
		const friend = this.friends.find((f) => f.id === id);
		return { friend };
	}
}
