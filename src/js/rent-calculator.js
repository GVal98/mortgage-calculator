import { log, root } from './math';

function calculateRentYears(yearInterestPercents, propertyValue, monthlySavings, downPayment) {
  const periods = 12;
  const yearInterest = yearInterestPercents / 100;
  const logBase = 1 + (yearInterest / periods);
  const rootNumber = (propertyValue - downPayment)
  / (monthlySavings * (periods / yearInterest) + downPayment) + 1;
  const logNumber = root(periods, rootNumber);
  return log(logBase, logNumber);
}

function calculateOverpayment(rentValue, rentYears) {
  return rentValue * rentYears * 12;
}

export default function calculateRent(
  yearInterestPercents,
  propertyValue,
  monthlySavings,
  downPayment,
  rentValue,
) {
  const rentYears = calculateRentYears(
    yearInterestPercents,
    propertyValue,
    monthlySavings,
    downPayment,
  );
  const overpaymentRent = calculateOverpayment(rentValue, rentYears);
  return { rentYears, overpaymentRent };
}
