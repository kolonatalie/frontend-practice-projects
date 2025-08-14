# Challenge Project: Credit Card Checker

A JavaScript project to validate credit card numbers using the **[Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm#Description)**. This is part of my learning journey while studying JavaScript Syntax on **[Codecademy](https://www.codecademy.com)**.

---

## Project Goals

- Validate credit card numbers using the **Luhn algorithm**.
- Identify which credit card numbers are invalid.
- Determine which companies have issued invalid card numbers.
- Automate the checking process to handle multiple cards efficiently.

---

## ✅ What It Does

### 1. `validateCred(array)`
Validates a single credit card number using the **Luhn algorithm**.

- Returns `true` for a valid card
- Returns `false` for an invalid card

### 2. `findInvalidCards(batch)`
Checks a nested array of credit card numbers and returns **only the invalid ones**.

### 3. `idInvalidCardCompanies(invalidCards)`
Analyzes invalid cards and returns a **list of companies** (no duplicates!) that may have issued them.

| First Digit | Company               |
|-------------|------------------------|
| `3`         | Amex (American Express) |
| `4`         | Visa                    |
| `5`         | Mastercard              |
| `6`         | Discover                |

Unknown companies are reported to the console.

---

## Bonus Features

### 4. `convertStringToCard(string)`
Converts a credit card number string (e.g. `'4539677908016808'`) to an array of digits.

### 5. `makeCardValid(cardArray)`
Takes an **invalid** credit card array and **corrects** the final digit so it becomes valid.

---

## Example Output

```js
validateCred([4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]); // true

findInvalidCards(batch);
// ➜ Returns all invalid cards from the batch array

idInvalidCardCompanies(invalidCards);
// ➜ [ 'Visa', 'Mastercard', 'Amex (American Express)', 'Discover' ]

convertStringToCard("4539677908016808");
// ➜ [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]

makeCardValid([5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]);
// ➜ Returns a valid version of the input card
```
---

## Future Ideas

- Integrate with a simple UI to paste and validate card numbers
- Track card issuer statistics (e.g. how many invalid cards per company)
- Validate cards from user input in real-time

---

## 📬 Feedback
Feel free to open an issue or submit a pull request if you want to contribute or improve the project!

---

### Created by [kolonatalie](https://github.com/kolonatalie)
I’m always open to feedback and collaboration!

* [GitHub](https://github.com/kolonatalie)
* [LinkedIn](https://www.linkedin.com/in/kolonatalie/)
* [Portfolio](https://kolonatalie.github.io/portfolio/)
