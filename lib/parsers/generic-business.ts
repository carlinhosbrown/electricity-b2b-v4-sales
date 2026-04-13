export function parseBusinessInvoiceText(text: string) {
  return { detectedAccessTariff: /6\.1TD/.test(text) ? "6.1TD" : /3\.0TD/.test(text) ? "3.0TD" : null, annualizedEstimate: 0, cups: text.match(/ES\d{16}[A-Z]{2}/)?.[0] || null };
}
