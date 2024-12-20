export const toPascalCase = (str: string): string => {
	const match = str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);
	if (!match) {
		return str;
	}
	return match.map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase()).join('');
};
