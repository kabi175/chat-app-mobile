import { InMemoryFriendDB } from '../data/friend.db';
import { IFriendDB } from '../model/friend.db';

export class FriendService {
	friendDB: IFriendDB;
	constructor() {
		this.friendDB = new InMemoryFriendDB();
	}
}
