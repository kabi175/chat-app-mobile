import { IUser } from '../model';
import { singleton } from 'tsyringe';

@singleton()
export class InMemoryUserDB {
	user?: IUser;
	friends: IUser[];
	constructor() {
		this.friends = [];
	}
	addFriend(user: IUser) {
		this.friends.push(user);
	}
	removeFriend(user: IUser) {
		this.friends = this.friends.filter((f) => f.id !== user.id);
	}
	removeAllFriends() {
		this.friends = [];
	}
}
