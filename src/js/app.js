import calculateMortrage from './mortrage-calculator';
import calculateRent from './rent-calculator';

export default class App {
  constructor(elementsIds) {
    this.elementsIds = elementsIds;
  }

  init() {
    this.values = {};
    this.findElements();
    this.container.addEventListener('change', () => this.calculate());
    this.calculate();
  }

  findElements() {
    this.container = document.getElementById(this.elementsIds.container);
    this.findGroupOfElements('inputs');
    this.findGroupOfElements('outputs');
  }

  findGroupOfElements(groupName) {
    this[groupName] = new Map();
    for (const [key, id] of Object.entries(this.elementsIds[groupName])) {
      this[groupName].set(key, document.getElementById(id));
    }
  }

  calculate() {
    this.getValues();
    const mortrage = calculateMortrage(
      this.values.propertyValue,
      this.values.downPayment,
      this.values.monthlyPayment,
      this.values.mortrageInterest,
    );
    const rent = calculateRent(
      this.values.depositInterest,
      this.values.propertyValue,
      this.values.monthlySavings,
      this.values.downPayment,
      this.values.rentValue,
    );
    this.render(Object.assign(mortrage, rent));
  }

  render(result) {
    for (const [key, output] of this.outputs) {
      output.innerHTML = Math.round(result[key]);
    }
  }

  getValues() {
    for (const [key, input] of this.inputs) {
      this.values[key] = +input.value;
    }
  }
}