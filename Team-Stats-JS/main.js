const team = {
  _players: [
    { firstName: 'John', lastName: 'Doe', age: 18 },
    { firstName: 'Thomas', lastName: 'Edison', age: 21 },
    { firstName: 'Nikola', lastName: 'Tesla', age: 19 }
      ],
  _games: [
    {opponent: 'Sharks', teamPoints: 20, opponentPoints: 15},
    {opponent: 'Lions', teamPoints: 35, opponentPoints: 28},
    {opponent: 'Tigers', teamPoints: 42, opponentPoints: 39}
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  // Method to add a new player to the team
  addPlayer(newFirstName, newLastName, newAge) {
    if (typeof newFirstName === 'string' && typeof newLastName === 'string' && typeof newAge === 'number') {
      const player = { firstName: newFirstName, lastName: newLastName, age: newAge };
      this._players.push(player);
    } else {
      console.log('Invalid input');
    }
  },
  // Method to add new game results
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    if (typeof newOpponent === 'string' && typeof newTeamPoints === 'number' && typeof newOpponentPoints === 'number') {
      const game = { opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints};
      this._games.push(game);
    } else {
      console.log('Invalid input');
    }
  }
};
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);

console.log(team._players);
console.log(team._games);