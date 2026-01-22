export const calculateSalaryBreakdown = (annualCTC: number) => {
  const monthlyCTC = annualCTC / 12;

  // Standard Deductions (Estimated for a general tool)
  const monthlyPF = Math.min(monthlyCTC * 0.12, 1800); // Capped at 1800 for many regions
  const professionalTax = 200;

  // Simple Tax Estimation (Example: 10% for income above a certain threshold)
  let monthlyTax = 0;
  if (monthlyCTC > 50000) {
    monthlyTax = (monthlyCTC - 50000) * 0.15; // 15% tax on amount above 50k
  }

  const totalDeductions = monthlyPF + professionalTax + monthlyTax;
  const takeHome = monthlyCTC - totalDeductions;

  return {
    monthlyCTC: Math.round(monthlyCTC),
    takeHome: Math.round(takeHome),
    monthlyPF: Math.round(monthlyPF),
    professionalTax: Math.round(professionalTax),
    monthlyTax: Math.round(monthlyTax),
    totalDeductions: Math.round(totalDeductions),
    takeHomePercent: Math.round((takeHome / monthlyCTC) * 100),
  };
};
