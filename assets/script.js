// referring to the buttons and game content
const startButton = document.getElementById('start-btn');

const nextButton = document.getElementById('next-btn');

const questionContainerElement = document.getElementById('question-container');

const questionElement = document.getElementById('question');

const answerButtonsElement = document.getElementById('answer-buttons');

// this prompts the questions to be shuffled when they finish and make sure they are not repeated in the same order
let shuffledQuestions, currentQuestionIndex;

// prompts the start button to start the game when clicked
startButton.addEventListener('click', startGame);

// next button prompts a new question when clicked
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

// shuffles the questions and randomizes the order 
function startGame() {

  shuffledQuestions = questions.sort(() => Math.random() -5);
  startButton.classList.add('hide');

  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
  
}
// shuffles
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}


function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {

    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');

// if statement if the user gets the question right 
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }


    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');


  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);

  }
}

// section for 
function selectAnswer(e) {

  const selectedButton = e.target;

  const correct = selectedButton.dataset.correct;

  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);

  });


  if (shuffledQuestions.length > currentQuestionIndex + 1) {


    nextButton.classList.remove('hide');


  } else {

    startButton.innerText = 'Restart';

    startButton.classList.remove('hide');
  }
}

// states what functions should display if correct or wrong
function setStatusClass(element, correct) {
  clearStatusClass(element);


  if (correct) {

    element.classList.add('correct');


  } else {
    element.classList.add('wrong');

  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

// questions for game
const questions = 
    [
{
        question: 'What is 5+99?',
        answers: [
            {text: '104', correct: true},
            {text: '400', correct: false}
        ]
     },


    {
    question: 'How many vowels in Taumatawhakatangi­hangakoauauotamatea­turipukakapikimaunga­horonukupokaiwhen­uakitanatahu?',
    answers: [
        {text: '42', correct: true},
        {text: '7000', correct: false}
    ]
 },


    {
    question: 'When did Ireland join the EU?',
    answers: [
        {text: '1977', correct: false},
        {text: '1972', correct: true}
    ]
 },

 {
    question: 'What is a bonobo?',
    answers: [
        {text: 'a childrens cartoon character', correct: false},
        {text: 'a darling ape', correct: true}
    ]
 },

 {
    question: 'What is an Irish cure?',
    answers: [
        {text: 'tea', correct: false},
        {text: '7-Up/Sprite', correct: true}
    ]
 },

 {
    question: 'Are leprachauns real?',
    answers: [
        {text: 'Ah, sure', correct: true},
        {text: 'who told you?!', correct: false}
    ]
 },



    {
    question: 'Who is the best course provider?',
    answers: [
        {text: 'Code Institute', correct: true},
        {text: 'Schmoogle', correct: false}
    ]
 },
];
