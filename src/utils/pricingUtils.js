export function calculatePrice(baseRate, billing, currency, matrix) {

    const billingConfig = matrix.billing[billing];

    const currencyConfig = matrix.currencies[currency];

    const value =
        baseRate *
        billingConfig.discount *
        currencyConfig.rate;

    return new Intl.NumberFormat(currencyConfig.locale, {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
    }).format(value);

}