import { IUser } from '../model/user';

export class UserApi {
	constructor() {}

	server = 'http://192.168.43.24:8080/';

	async signIn(
		authEmail: string,
		password: string
	): Promise<{
		id?: number;
		username?: string;
		email?: string;
		token?: string;
		error?: Error;
	}> {
		try {
			const res = await fetch(`${this.server}user/`, {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: authEmail,
					password,
				}),
			});
			const {
				displayName: username,
				id,
				token,
				email,
				error,
			} = await res.json();
			return { id, username, email, token, error };
		} catch (err) {
			return { error: err as Error };
		} finally {
			console.log('signin req made');
		}
	}

	async signUp(
		username: string,
		email: string,
		password: string
	): Promise<{
		error?: Error;
	}> {
		try {
			const res = await fetch(`${this.server}user/`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					displayName: username,
					email,
					password,
				}),
			});
			const { error } = await res.json();
			return { error };
		} catch (err) {
			return { error: err as Error };
		} finally {
			console.log('signup req made');
		}
	}
}
