# Team Stats JavaScript Project

A simple project built as part of my [Codecademy learning](https://www.codecademy.com/learn/introduction-to-javascript). It models a hypothetical sports team using JavaScript objects and arrays, allowing you to **add new players**, **record game results**, and **access team data**.

## About the Project

This project demonstrates:

- Use of **objects** and **arrays** for data organization  
- **Getter methods** to access private properties  
- **Custom methods** to update team stats  
- Basic **data validation** with `typeof`

### ⚙️ Features

- ➕ Add a new player  
- 🆕 Add a new game result  
- 📋 View current list of players  
- 📊 View all recorded games 
- ✅ Includes basic validation to ensure valid input types 


## Code Overview

```js
const team = {
  _players: [ ... ],
  _games: [ ... ],
  
  get players() { ... },
  get games() { ... },
  
  addPlayer(firstName, lastName, age) { ... },
  addGame(opponent, teamPoints, opponentPoints) { ... }
};
```
### Example Usage
```
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);

console.log(team.players);
console.log(team.games);
```

## What I Learned

- Structuring data using objects and arrays
- Writing clean methods to manage internal data
- Understanding encapsulation using getters
- Strengthening foundational JS skills
- Documentation: [JavaScript Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)


## ✨ Ideas for further practice

* **Calculate Total Games:** Add a method to get the total number of games played.
* **Calculate Average Score:** Implement methods to calculate the team's average score across all games, or the opponent's average score.


### Created by [kolonatalie](https://github.com/kolonatalie)
I’m always open to feedback and collaboration!

* [GitHub](https://github.com/kolonatalie)
* [LinkedIn](https://www.linkedin.com/in/kolonatalie/)
* [Portfolio](https://kolonatalie.github.io/portfolio/)

