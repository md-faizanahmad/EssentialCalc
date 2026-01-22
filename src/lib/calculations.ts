/**
 * Calculates EMI and loan breakdown
 * P = Principal, R = Annual Interest Rate, N = Tenure in Years
 */
export const calculateLoanDetails = (
  P: number,
  annualRate: number,
  years: number,
) => {
  const monthlyRate = annualRate / 12 / 100;
  const numberOfMonths = years * 12;

  // EMI Formula: [P x R x (1+R)^N] / [(1+R)^N-1]
  const emi =
    (P * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
    (Math.pow(1 + monthlyRate, numberOfMonths) - 1);

  const totalAmount = emi * numberOfMonths;
  const totalInterest = totalAmount - P;

  return {
    emi: Math.round(emi),
    totalInterest: Math.round(totalInterest),
    totalAmount: Math.round(totalAmount),
    principalPercent: Math.round((P / totalAmount) * 100),
    interestPercent: Math.round((totalInterest / totalAmount) * 100),
  };
};

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
};
