# 😴 Sleep Debt Calculator (Functional JavaScript)

A simple console application designed to calculate a user's weekly sleep debt or surplus. This project focuses on **functional programming principles** and effective use of helper functions and control flow.

---

## Description & Algorithm

The core of the program is the `calculateSleepDebt()` function, which orchestrates the calculation based on three distinct functions:

1.  **`getSleepHours(day)`:** Uses a `switch` statement to return the actual hours slept for any given day of the week.
2.  **`getActualSleepHours()`:** Aggregates the results from `getSleepHours()` for the entire week.
3.  **`getIdealSleepHours(idealHours)`:** Calculates the total ideal sleep hours for the week based on a customizable daily goal (defaults to 9 hours).

### Calculation Logic

The `calculateSleepDebt()` function then compares the actual vs. ideal hours and provides one of three outputs:

* **Perfect Sleep:** Actual hours equal ideal hours.
* **Sleep Surplus:** Actual hours exceed ideal hours.
* **Sleep Debt:** Actual hours are less than ideal hours.

## Getting Started (Execution)

This is a console application and requires **Node.js** to run.

1.  Navigate into the project directory:
    ```bash
    cd Sleep-Debt-Calculator
    ```
2.  Run the JavaScript file using Node:
    ```bash
    node index.js
    ```

## Technical Highlights

This project demonstrates proficiency in several core JavaScript concepts:

* **Functional Decomposition:** Breaking down the main task into smaller, reusable helper functions (`getSleepHours`, `getActualSleepHours`).
* **Control Flow:** Effective use of the `switch` statement for multi-case conditional logic within `getSleepHours`.
* **Input Handling & Defaults:** The `getIdealSleepHours` function accepts an optional parameter and includes **basic input validation** to prevent non-numeric or zero/negative input.
* **String/Template Literals:** Use of template literals (`` `...` ``) for clear, dynamic console output.

## 🧪 Example Console Output

```
This week you slept 56.5 hours.
Ideal amount is 63 hours.
You should get 6.5 more hours of rest.
```

## Potential Extensions

* **User Interface (HTML/CSS):** Convert this to a web application allowing interactive user input.
* **Robust Input Validation:** Implement more comprehensive error handling, particularly if accepting input from a UI or command-line arguments.

***

*Created by [kolonatalie](https://github.com/kolonatalie) • Connect: [LinkedIn](https://www.linkedin.com/in/kolonatalie/) | [Portfolio](https://kolonatalie.github.io/portfolio/)*