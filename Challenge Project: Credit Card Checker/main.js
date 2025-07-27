// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// 1. Validates a credit card number using the Luhn algorithm

const validateCred = arr => {
  if (!Array.isArray(arr) || arr.length === 0) return false;
  // Copy input array to avoid mutation
  const creditCardCopy = [...arr];
  // Loop from right to left, doubling every other digit
  for (let i = creditCardCopy.length - 1; i >= 0; i-- ) {
    let digit = creditCardCopy[i];

    if ((creditCardCopy.length-1-i) % 2 === 1) { // Check if it's an odd-indexed position from the right
      digit *= 2;
      if (digit > 9) {
        digit -= 9; // If greater than 9, subtract 9
      }
    }
    creditCardCopy[i] = digit;
  }
   // Sum up all the digits in the array copy
  const sum = creditCardCopy.reduce((acc, curr) => acc + curr, 0);

  // If the sum modulo 10 is 0, the credit card number is valid; otherwise, it's invalid
  return sum % 10 === 0;
};

// 2. Find invalid credit card numbers

const findInvalidCards = cards => {
  const invalidCards = [];

  // Iterate through each credit card array in the 'cards' array
  for (const card of cards) {
    if (!validateCred(card)) {
      invalidCards.push(card);
    }
  }
  return invalidCards;
};

// 3. Company names that have issued invalid card numbers

const idInvalidCardCompanies = invalidCardsArray =>{
  const companiesToContact = [];

  // Iterate through each invalid credit card array
  for (const card of invalidCardsArray) {
    const firstDigit = card[0];
    let companyName = '';

    // Determine the company based on the first digit
    switch (firstDigit) {
      case 3:
        companyName = 'Amex (American Express)';
        break;
      case 4:
        companyName = 'Visa';
        break;
      case 5:
        companyName = 'Mastercard';
        break;
      case 6:
        companyName = 'Discover';
        break;
      default:
        console.log('Company not found for card starting with:', firstDigit);
        companyName = 'Unknown Company';
        break;
    }
    // Add the company name to the 'companiesToContact' array only if it's not already present
    if (companyName !== 'Unknown Company' && companiesToContact.indexOf(companyName) === -1) {
      companiesToContact.push(companyName);
    }
  }
  return companiesToContact;
};

// 4. BONUS: Convert a string representing a credit card number into an array of numbers
const convertStringToCard = str => {
  return str.split('').map(Number);
};

// 5. BONUS 2.0: Convert invalid card to valid
const makeCardValid = arr => {
  // A mutable copy of the input array
  let card = [...arr];

  for (let i = card.length - 2; i >= 0; i -= 2) {
    card[i] *= 2;
    if (card[i] > 9) card[i] -= 9;
  }
  let sum = card.reduce((a, b) => a + b, 0);
  let diff = sum % 10;
  if (diff !== 0) card[card.length - 1] = (card[card.length - 1] + (10 - diff)) % 10;
  return card;
};

// TEST CASES
// 1
// Test valid numbers
console.log('--- Valid Numbers ---'); // Expected: true
console.log('valid1:', validateCred(valid1));
console.log('valid2:', validateCred(valid2));
console.log('valid3:', validateCred(valid3));
console.log('valid4:', validateCred(valid4));
console.log('valid5:', validateCred(valid5));

// Test invalid numbers
console.log('\n--- Invalid Numbers ---'); // Expected: false
console.log('invalid1:', validateCred(invalid1));
console.log('invalid2:', validateCred(invalid2));
console.log('invalid3:', validateCred(invalid3));
console.log('invalid4:', validateCred(invalid4));
console.log('invalid5:', validateCred(invalid5));

// Test mystery numbers
console.log('\n--- Mystery Numbers ---');
console.log('mystery1:', validateCred(mystery1)); // Expected: true
console.log('mystery2:', validateCred(mystery2)); // Expected: false 
console.log('mystery3:', validateCred(mystery3)); // Expected: false 
console.log('mystery4:', validateCred(mystery4)); // Expected: false 
console.log('mystery5:', validateCred(mystery5)); // Expected: true

// 2
// Test findInvalidCards function with the batch array
console.log('\n--- Invalid Cards in Batch ---');
const foundInvalidCards = findInvalidCards(batch);
console.log(foundInvalidCards);

// 3
// Test idInvalidCardCompanies function with the invalid cards found from batch
console.log('\n--- Companies with Invalid Cards ---');
const invalidCompanies = idInvalidCardCompanies(findInvalidCards(batch));
console.log(invalidCompanies);
/* Expected output:
[ 'Visa', 'Mastercard', 'Amex (American Express)',  'Discover' ] */

// 4
// Test convertStringToCard
console.log('\n--- Convert String To Card Tests ---');
const testString1 = "4539677908016808";
console.log(`"${testString1}" converted:`, convertStringToCard(testString1)); // Expected: [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]