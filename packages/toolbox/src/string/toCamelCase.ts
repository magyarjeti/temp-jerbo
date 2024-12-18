export const toCamelCase = (str: string): string => {
	return str
		.replace(/([a-z])([A-Z])/g, '$1 $2') // Add spaces between lowercase and uppercase
		.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2') // Handle acronyms properly
		.toLowerCase()
		.split(/[\s_\-]+/) // Split by spaces, underscores, or hyphens
		.map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
		.join('');
};
