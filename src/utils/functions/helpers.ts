

// format country currency
export const formatCurrencyMXN = (value: number): string => {
  const formatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  });
  return formatter.format(value);
};
