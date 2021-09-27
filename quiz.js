const quizForm = document.querySelector('.quiz-form');
const submitAnswerBtn = document.querySelector('#submit-answer-btn');
const outputE1 = document.querySelector('#output');
const correctAns = ['90°', 'right angled', '32 cm', '75 cm square', '12 cm'];

const calculateScore = () => {
  let score = 0,
    i = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAns[i]) {
      score++;
    }
    i++;
  }
  outputE1.innerText = 'Your score is ' + score;
};
submitAnswerBtn.addEventListener('click', calculateScore);
