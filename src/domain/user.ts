async function signIn(
	authEmail: string,
	password: string
): Promise<{
	username?: string;
	email?: string;
	token?: string;
	error?: Error;
}> {
	const res = await fetch('/api/user/signin', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			authEmail,
			password,
		}),
	});
	const { username, token, email, error } = await res.json();
	return { username, email, token, error };
}

async function signUp(
	username: string,
	email: string,
	password: string
): Promise<{
	error?: Error;
}> {
	try {
		const res = await fetch('/api/user/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				email,
				password,
			}),
		});
		const { error } = await res.json();
		return { error };
	} catch (err) {
		return { error: err as Error };
	}
}

export default { signIn, signUp };
