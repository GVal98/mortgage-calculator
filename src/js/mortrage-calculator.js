import { log } from './math';

function calculateMortrageMonths(yearInterestPercents, creditAmount, monthlyPayment) {
  const monthlyInterest = (yearInterestPercents || 0.01) / 100 / 12;
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
  if (creditAmount <= 0) {
    return { totalPayment: 0, overpaymentMortrage: 0, mortrageYears: 0 };
  }
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
