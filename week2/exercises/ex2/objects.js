const games = [
  { title: 'Loopin Louie', type: 'board', numberOfPlayers: '4', rating: '7/10', shortDescription: 'prevent a spinning plane from knocking down their chickens.' },
  { title: 'Connect Four', type: 'board', numberOfPlayers: '2', rating: '5/10', shortDescription: 'take turns dropping checkers to connect 4 in a row.' },
  { title: 'Hungry Hungry Hippos', type: 'board', numberOfPlayers: '4', rating: '4/10', shortDescription: 'furiously push hungry hippos tails a million times to eat the most marbles.' },
  { title: 'Guess Who?', type: 'board', numberOfPlayers: '2', rating: '5/10', shortDescription: 'guess who their opponents character is by questioning different characteristics.' }
];
console.log(games);

const promptResponse = window.prompt("I have 4 childhood games in my collection. Pick a number between 1 and 4 and I'll tell you about that game!");
window.alert('You selected ' + games[promptResponse - 1].title + ' which is a ' + games[promptResponse - 1].rating + ' rating ' + games[promptResponse - 1].type + ' game' + ' where ' + games[promptResponse - 1].numberOfPlayers + ' players ' + games[promptResponse - 1].shortDescription);
console.log(games[promptResponse - 1]);
