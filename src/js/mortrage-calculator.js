import { log } from './math';

function calculateMortrageMonths(yearInterestPercents, creditAmount, monthlyPayment) {
  const monthlyInterest = yearInterestPercents / 100 / 12;
  const logBase = 1 + monthlyInterest;
  const logNumber = monthlyPayment / (monthlyPayment - creditAmount * monthlyInterest);
  return log(logBase, logNumber);
}

function calculateCreditAmount(propertyValue, downPayment) {
  return propertyValue - downPayment;
}

function calculateTotalPayment(monthlyPayment, mortrageMonths) {
  return monthlyPayment * mortrageMonths;
}

function calculateOverpayment(totalPayment, creditAmount) {
  return totalPayment - creditAmount;
}

function calculateMortrageYears(mortrageMonths) {
  return mortrageMonths / 12;
}

export default function calculateMortrage(
  propertyValue,
  downPayment,
  monthlyPayment,
  yearInterestPercents,
) {
  const creditAmount = calculateCreditAmount(propertyValue, downPayment);
  const mortrageMonths = calculateMortrageMonths(
    yearInterestPercents,
    creditAmount,
    monthlyPayment,
  );
  const totalPayment = calculateTotalPayment(monthlyPayment, mortrageMonths);
  const overpaymentMortrage = calculateOverpayment(totalPayment, creditAmount);
  const mortrageYears = calculateMortrageYears(mortrageMonths);
  return { totalPayment, overpaymentMortrage, mortrageYears };
}
