import { CurrencyTypes } from "helpers/enum";

export function showCurrencySymbol(currency: string) {
  switch (currency) {
    case "RUB":
      return "Р";
    default:
      return "Р";
  }
}

export const prettifyPrice = (price: number, currency: CurrencyTypes) => {
  return `${Number(price).toLocaleString("ru-RU")} ${showCurrencySymbol(
    currency
  )}`;
};
