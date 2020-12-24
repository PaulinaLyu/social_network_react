export const requiredField = value => {
	if (value) return undefined;
	return "Пожалуйста заполните форму";
}

export const maxLengthCreator = (maxLength) => (value) => {
	if (value.length > maxLength) return `Максимальная длина ${maxLength} символов`;
	return undefined;
}