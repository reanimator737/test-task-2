/**
 * format prices values like in design
 * 25000000 => 250,000.00
 */
export const fromCentsToDollars = (x: number | string) => {
  const answer = (+x / 100).toFixed(2);
  return answer.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};
