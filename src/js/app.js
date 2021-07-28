import calculate from './calculate';

export default class App {
  constructor(
    containerId,
    downPaymentInputId,
    propertyValueInputId,
    interestRateInputId,
    termYearsInputId,
    monthlyPaymentMortrageElId,
    totalPaymentMortrageElId,
    overpaymentMortrageElId,
    rentValueInputId,
    monthlySaveInputId,
    depositInterestInputId,
    rentYearsElId,
    overpaymentRentElId,
  ) {
    this.containerId = containerId;
    this.downPaymentInputId = downPaymentInputId;
    this.propertyValueInputId = propertyValueInputId;
    this.interestRateInputId = interestRateInputId;
    this.termYearsInputId = termYearsInputId;
    this.monthlyPaymentMortrageElId = monthlyPaymentMortrageElId;
    this.totalPaymentMortrageElId = totalPaymentMortrageElId;
    this.overpaymentMortrageElId = overpaymentMortrageElId;
    this.rentValueInputId = rentValueInputId;
    this.monthlySaveInputId = monthlySaveInputId;
    this.depositInterestInputId = depositInterestInputId;
    this.rentYearsElId = rentYearsElId;
    this.overpaymentRentElId = overpaymentRentElId;
  }

  init() {
    this.findElements();
    this.container.addEventListener('change', () => this.calculate());
  }

  findElements() {
    this.container = document.getElementById(this.containerId);
    this.downPaymentInput = document.getElementById(this.downPaymentInputId);
    this.propertyValueInput = document.getElementById(this.propertyValueInputId);
    this.interestRateInput = document.getElementById(this.interestRateInputId);
    this.termYearsInput = document.getElementById(this.termYearsInputId);
    this.monthlyPaymentMortrageEl = document.getElementById(this.monthlyPaymentMortrageElId);
    this.totalPaymentMortrageEl = document.getElementById(this.totalPaymentMortrageElId);
    this.overpaymentMortrageEl = document.getElementById(this.overpaymentMortrageElId);
    this.rentValueInput = document.getElementById(this.rentValueInputId);
    this.monthlySaveInput = document.getElementById(this.monthlySaveInputId);
    this.depositInterestInput = document.getElementById(this.depositInterestInputId);
    this.rentYearsEl = document.getElementById(this.rentYearsElId);
    this.overpaymentRentEl = document.getElementById(this.overpaymentRentElId);
  }

  calculate() {
    this.getValues();
    this.result = calculate(
      this.downPayment,
      this.propertyValue,
      this.interestRate,
      this.termYears,
      this.rentValue,
      this.monthlySave,
      this.depositInterest,
    );
    this.render();
  }

  render() {
    this.monthlyPaymentMortrageEl.innerHTML = this.result.monthlyPayment;
    this.totalPaymentMortrageEl.innerHTML = this.result.totalPayment;
    this.overpaymentMortrageEl.innerHTML = this.result.overpayment;
    this.rentYearsEl.innerHTML = this.result.rentYears;
    this.overpaymentRentEl.innerHTML = this.result.overpaymentRent;
  }

  getValues() {
    this.downPayment = +this.downPaymentInput.value;
    this.propertyValue = +this.propertyValueInput.value;
    this.interestRate = +this.interestRateInput.value;
    this.termYears = +this.termYearsInput.value;
    this.rentValue = +this.rentValueInput.value;
    this.monthlySave = +this.monthlySaveInput.value;
    this.depositInterest = +this.depositInterestInput.value;
  }
}
