function log(base, number) {
  return Math.log(number) / Math.log(base);
}

function root(power, number) {
  return number ** (1 / power);
}

export default function calculate(
  downPayment,
  propertyValue,
  interestRate,
  termYears,
  rentValue,
  monthlySave,
  depositInterestPercent,
) {
  const monthlyInterest = interestRate / 100 / 12;
  const termsMonths = termYears * 12;
  const creditAmount = propertyValue - downPayment;
  const totalInterest = (1 + monthlyInterest) ** termsMonths;
  const monthlyPayment = creditAmount * ((monthlyInterest * totalInterest) / (totalInterest - 1));
  const totalPayment = termsMonths * monthlyPayment;
  const overpayment = totalPayment - creditAmount;
  const periods = 12;
  const depositInterest = depositInterestPercent / 100;
  const logBase = 1 + (depositInterest / periods);
  const rootNumber = (propertyValue - downPayment)
  / (monthlySave * (periods / depositInterest) + downPayment) + 1;
  const logNumber = root(periods, rootNumber);
  const rentYears = log(logBase, logNumber);
  const overpaymentRent = rentValue * rentYears * 12;
  return {
    monthlyPayment, totalPayment, overpayment, rentYears, overpaymentRent,
  };
}
