import calculateMortrage from './mortrage-calculator';
import calculateRent from './rent-calculator';

export default class App {
  constructor(elementsIds) {
    this.elementsIds = elementsIds;
  }

  init() {
    this.numberFormat = new Intl.NumberFormat('ru-RU');
    this.values = {};
    this.findElements();
    this.container.addEventListener('input', (e) => this.update(e));
    this.calculate();
  }

  update(e) {
    this.updateInput(e.target);
    this.calculate();
  }

  updateInput(input) {
    const inputNumber = this.cleanNumber(input.value);
    const formattedValue = this.formatNumber(inputNumber);
    if (input.type === 'range') {
      input.previousElementSibling.value = formattedValue;
      return;
    }
    input.value = formattedValue;
    input.nextElementSibling.value = inputNumber.replace(/\.$/, '');
  }

  formatNumber(value) {
    if (value.includes('.')) {
      const [integer, decimal] = value.split('.');
      return `${this.numberFormat.format(integer)},${decimal}`;
    }
    return this.numberFormat.format(value);
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
      this.values.freeMoney,
      this.values.mortrageInterest,
    );
    const rent = calculateRent(
      this.values.depositInterest,
      this.values.propertyValue,
      this.values.freeMoney,
      this.values.downPayment,
      this.values.rentValue,
    );
    this.render(Object.assign(mortrage, rent));
  }

  render(result) {
    for (const [key, output] of this.outputs) {
      output.innerHTML = this.numberFormat.format(Math.round(result[key]));
    }
  }

  getValues() {
    for (const [key, input] of this.inputs) {
      this.values[key] = +this.cleanNumber(input.value);
    }
  }

  cleanNumber(value) {
    return value.replace(',', '.').replace(/[^\d.]/g, '');
  }
}
