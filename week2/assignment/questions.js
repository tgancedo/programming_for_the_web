const questions = [
  { question: 'What geometric shape is generally used for stop signs?', answer: 'octagon' },
  { question: 'What is the rarest M&M color?', answer: 'brown' },
  { question: 'What is the most consumed manufactured drink in the world?', answer: 'tea' },
  { question: 'What does come down but never goes up?', answer: 'rain' },
  { question: 'How many hearts does an octopus have?', answer: 'three' }
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
