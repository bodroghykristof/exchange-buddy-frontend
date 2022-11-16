export const CURRENCIES: string[] = ["HUF", "EUR", "USD", "GBP", "RUB", "JPY", "CHF"];

export function getNotBaseCurrencies() : string[] {
    return CURRENCIES.filter(c => c !== DEFAULT_BASE_CURRENCY);
}

export const DEFAULT_BASE_CURRENCY: string = "HUF";
export const DEFAULT_CURRENCY_ONE: string = DEFAULT_BASE_CURRENCY;
export const DEFAULT_CURRENCY_TWO: string = "EUR";