export const pluralize = (amountElement: number, declensionWords: string[]) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return declensionWords[amountElement % 100 > 4 && amountElement % 100 < 20 ? 2 : cases[amountElement % 10 < 5 ? amountElement % 10 : 5]];
};
