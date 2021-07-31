import 'normalize.css';
import './sass/main.scss';
import App from './js/app';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App({
    container: 'container',
    inputs: {
      downPayment: 'down-payment',
      propertyValue: 'property-value',
      mortrageInterest: 'mortrage-interest',
      monthlyPayment: 'monthly-payment',
      rentValue: 'rent-value',
      monthlySavings: 'monthly-savings',
      depositInterest: 'deposit-interest',
    },
    outputs: {
      mortrageYears: 'mortrage-years',
      totalPayment: 'total-payment',
      overpaymentMortrage: 'overpayment-mortrage',
      rentYears: 'rent-years',
      overpaymentRent: 'overpayment-rent',
    },
  });
  app.init();
});
