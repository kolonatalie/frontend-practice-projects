# 🐋 Whale Talk Translator (JavaScript Algorithm)

A small, console-based JavaScript project that translates regular human phrases into **Whale Talk** (as per the Codecademy Challenge). This project focuses on fundamental **string and array manipulation**.

---

## Description & Functionality

This program defines a core algorithm to convert any given string input into its "whale talk" equivalent. The translation process follows three specific rules:

1.  **Vowel Isolation:** Only the vowels (`a`, `e`, `i`, `o`, `u`) from the input phrase are retained (the letter `y` is excluded).
2.  **Vowel Elongation:** The vowels **'e'** and **'u'** are intentionally doubled (e.g., `e` becomes `ee`, `u` becomes `uu`).
3.  **Loud Output:** The final translated output is converted to **UPPERCASE** to simulate loud whale sounds.


## Getting Started

Since this is a Node.js console application, you only need to have Node installed locally to run it.

1.  Navigate into the project directory:
    ```bash
    cd Whale-Talk-Translator-JS
    ```
2.  Run the JavaScript file using Node:
    ```bash
    node main.js
    ```

## 🧪 Example Output

| Input Phrase | Expected Whale Talk Output |
| :--- | :--- |
| `Code is like humor - if you have to explain it, it’s probably not that good` | `OEEIIEEUUOIOUUAEEOEEAIIIOAOAOO` |

## Technical Highlights

This project demonstrates proficiency in core JavaScript programming constructs:

* **Iteration:** Effective use of nested `for` loops for character and vowel comparison.
* **Data Manipulation:** Utilizing `Array.push()` to incrementally build the result array, followed by `Array.join('')` to construct the final string.
* **Conditional Logic:** Employing multiple `if` statements to handle the specific elongation rules for 'e' and 'u'.
* **String Methods:** Application of `String.toUpperCase()` for final presentation.

---

*Created by [kolonatalie](https://github.com/kolonatalie) • Connect: [LinkedIn](https://www.linkedin.com/in/kolonatalie/) | [Portfolio](https://kolonatalie.github.io/portfolio/)*