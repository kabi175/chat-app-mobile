export function trim(str: string): string {
	if (str.length <= 30) return str;
	return str.trim().slice(0, 30) + '...';
}
