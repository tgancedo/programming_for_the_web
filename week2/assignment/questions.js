const questions = [
  { question: 'lorem?', answer: 'lorem' },
  { question: 'ipsum', answer: 'ipsum' },
  { question: 'blue', answer: 'blue' }
];
console.log(questions);

const questionLength = questions.length;
const questionIndex = Math.floor(Math.random() * questionLength);
const answer = window.prompt(questions[questionIndex].question);
window.alert('You answered ' + answer + '. The correct answer was ' + questions[questionIndex].answer + '.');

if (answer === questions[questionIndex].answer) {
  document.write('<p id="text">' + 'Nice!');
  document.body.style.backgroundColor = 'green';
} else {
  document.write('<p id="text">' + 'Sorry, maybe next time!');
  document.body.style.backgroundColor = 'red';
}
