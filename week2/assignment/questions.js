const questions = [
  { question: 'lorem?', answer: 'lorem' },
  { question: 'ipsum', answer: 'ipsum' },
  { question: 'blue', answer: 'blue' }
];
console.log(questions);

const questionLength = questions.length;
const questionIndex = Math.floor(Math.random() * questionLength);
const answer = window.prompt(questions[questionIndex].question);
window.alert('You answered ' + answer + '. The correct answer is ' + questions[questionIndex].answer + '.');
