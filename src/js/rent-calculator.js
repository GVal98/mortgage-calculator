import { log, root } from './math';

function calculateRentYears(yearInterestPercents, propertyValue, monthlySavings, downPayment) {
  const periods = 12;
  const yearInterest = (yearInterestPercents || 0.01) / 100;
  const logBase = 1 + (yearInterest / periods);
  const rootNumber = (propertyValue - downPayment)
  / (monthlySavings * (periods / yearInterest) + downPayment) + 1;
  const logNumber = root(periods, rootNumber);
  return log(logBase, logNumber);
}

function calculateMonthlySavings(freeMoney, rentValue) {
  return freeMoney - rentValue;
}

function calculateOverpayment(rentValue, rentYears) {
  return rentValue * rentYears * 12;
}

export default function calculateRent(
  yearInterestPercents,
  propertyValue,
  freeMoney,
  downPayment,
  rentValue,
) {
  if (propertyValue < downPayment) {
    return { rentYears: 0, overpaymentRent: 0, monthlySavings: 0 };
  }
  if (freeMoney < rentValue) {
    return { rentYears: -1, overpaymentRent: -1, monthlySavings: 0 };
  }
  const monthlySavings = calculateMonthlySavings(freeMoney, rentValue);
  const rentYears = calculateRentYears(
    yearInterestPercents,
    propertyValue,
    monthlySavings,
    downPayment,
  );
  const overpaymentRent = calculateOverpayment(rentValue, rentYears);
  return { rentYears, overpaymentRent, monthlySavings };
}
