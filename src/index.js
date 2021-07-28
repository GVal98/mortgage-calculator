import 'normalize.css';
import './sass/main.scss';
import App from './js/app';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App(
    'container',
    'down-payment',
    'property-value',
    'interest-rate',
    'term-years',
    'monthly-payment-mortrage',
    'total-payment-mortrage',
    'overpayment-mortrage',
    'rent-value',
    'monthly-save',
    'deposit-interest',
    'rent-years',
    'overpayment-rent',
  );
  app.init();
});
