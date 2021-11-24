import { IUser } from '.';

/**
 * User DataBase interface for the storing and retrieving of friends.
 */
export interface IFriendDB {
	addFriend(friend: IUser): Promise<{ error?: Error }>;
	removeFriend(friend: IUser): Promise<{ error?: Error }>;
	removeAllFriend(): Promise<{ error?: Error }>;
	getFriends(): Promise<{ error?: Error; friends?: IUser[] }>;
	getFriendByEmail(email: string): Promise<{ error?: Error; friend?: IUser }>;
	getFriendByID(id: number): Promise<{ error?: Error; friend?: IUser }>;
}
