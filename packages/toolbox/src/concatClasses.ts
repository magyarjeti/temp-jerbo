export const concatClasses = (...classNames: (string | false | null | undefined)[]) => {
	return classNames.filter(Boolean).join(' ');
};
