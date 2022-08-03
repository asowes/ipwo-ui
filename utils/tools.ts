// eslint-disable-next-line no-useless-escape
export const parserNumber = (input) => input.replace(/[^\w\.-]+/g, '');

export const parserNumber1 = (input) => input.replace(/[^\d.]/g, '');
