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
      rentValue: 'rent-value',
      depositInterest: 'deposit-interest',
      freeMoney: 'free-money',
    },
    outputs: {
      mortrageYears: 'mortrage-years',
      overpaymentMortrage: 'overpayment-mortrage',
      rentYears: 'rent-years',
      overpaymentRent: 'overpayment-rent',
      monthlySavings: 'monthly-savings',
    },
  });
  app.init();
});
