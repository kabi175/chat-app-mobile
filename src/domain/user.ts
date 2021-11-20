import { singleton } from 'tsyringe';
import { UserApi } from '../data/user.api';
import { IUser } from '../model';

@singleton()
export class UserService {
	userApi: UserApi;
	constructor(userApi: UserApi) {
		this.userApi = userApi;
	}

	async signIn(
		email: string,
		password: string
	): Promise<{ user?: IUser; token?: string; error?: Error }> {
		const { id, username, token, error } = await this.userApi.signIn(
			email,
			password
		);
		if (error) {
			return { error };
		}
		return {
			user: { id: id as number, email, displayName: username as string },
			token,
		};
	}

	async signUp(
		username: string,
		email: string,
		password: string
	): Promise<{ user?: IUser; token?: string; error?: Error }> {
		const { error } = await this.userApi.signUp(username, email, password);
		if (error) {
			return { error };
		}
		return await this.signIn(email, password);
	}
}
