export const calculateLoanEligibility = (
  monthlyIncome: number,
  existingEMI: number,
  interestRate: number,
  tenureYears: number,
  foirPercent: number = 50, // Default bank standard
) => {
  // Max EMI user can afford according to FOIR
  const maxAllowableEMI = monthlyIncome * (foirPercent / 100) - existingEMI;
  const safeEMI = maxAllowableEMI > 0 ? maxAllowableEMI : 0;

  const monthlyRate = interestRate / 12 / 100;
  const months = tenureYears * 12;

  // Reverse EMI formula to find Principal: P = E / [r(1+r)^n / ((1+r)^n - 1)]
  let maxLoanAmount = 0;
  if (safeEMI > 0 && monthlyRate > 0) {
    maxLoanAmount =
      safeEMI /
      ((monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1));
  }

  return {
    safeEMI: Math.round(safeEMI),
    maxLoanAmount: Math.round(maxLoanAmount),
    foirUsed: foirPercent,
  };
};
