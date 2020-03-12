// Section 4: Loan Calculator
// [Part 2] - Calculate & Error

// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate Results
function calculateResults(e){
  console.log('Calculating...');

  // UI Vars
  // we need all of our form fields
  const UIamount =  document.getElementById('amount');
  const UIinterest = document.getElementById('interest');
  const UIyears = document.getElementById('years');
  const UImonthlypayment = document.getElementById('monthly-payment');
  const UItotalpayment = document.getElementById('total-payment');
  const UItotalinterest = document.getElementById('total-interest');

  // parseFloat() will turn it into a decimal
  // Calculation/Formulas for principal, interest, and payments 
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  e.preventDefault();
}