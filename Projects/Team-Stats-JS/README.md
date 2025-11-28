# ⚽ Team Stats Manager (OOP Fundamentals)

A simple console application built as a [Codecademy challenge](https://www.codecademy.com/learn/introduction-to-javascript), modeling a sports team using JavaScript Objects. This project demonstrates core **Object-Oriented Programming (OOP) principles** and data encapsulation.

---

## Technical Focus

This project implements a single `team` object to manage two types of data: player rosters and game statistics. It highlights data encapsulation by utilizing:

* **Private Properties:** Data is stored in properties prefixed with an underscore (`_players`, `_games`), indicating they should not be accessed directly.
* **Getter Methods:** Public `get players()` and `get games()` methods provide controlled, read-only access to the internal data structures.
* **Custom Methods:** Public methods (`addPlayer`, `addGame`) are used to manage and mutate the internal state securely, ensuring data integrity.

## Features & Functionality

The `team` object provides the following public interface:

* **`team.players` / `team.games`**: View the current roster and game log (via getters).
* **`team.addPlayer(firstName, lastName, age)`**: Adds a new player object to the internal roster.
* **`team.addGame(opponent, teamPoints, opponentPoints)`**: Records results of a newly played game.
* **Data Validation:** Includes basic `typeof` checks within the methods to ensure only valid data types are pushed to the arrays.

## Getting Started

This is a console application and requires **Node.js** to run.

1.  Navigate into the project directory:
    ```bash
    cd Team-Stats-JS
    ```
2.  Run the JavaScript file using Node:
    ```bash
    node main.js
    ```

## 📝 Usage Example

The `main.js` file demonstrates how to interact with the object's methods:

```javascript
// Adding data
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);

// Accessing the updated data via getters
console.log(team.players); 
console.log(team.games); 
```

## Potential Extensions
* **Calculate Total Games:** Add a method to get the total number of games played.
* **Calculate Average Score:** Implement methods to calculate the team's average score across all games, or the opponent's average score.

---

*Created by [kolonatalie](https://github.com/kolonatalie) • Connect: [LinkedIn](https://www.linkedin.com/in/kolonatalie/) | [Portfolio](https://kolonatalie.github.io/portfolio/)*