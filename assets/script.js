

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
questionContainerElement.classList.remove('hide')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click',startGame)
nextButton.addEventListener('click', () =>);
 {
    currentQuestionIndex ++
    setNextQuestion () }


function startGame() {
    startButton.classList.add('hide')
    setNextQuestion()
}


function setNextQuestion () {
resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {

    questionElement.innerText= question.question
    question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct =answer.correct
        }

        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    }        
    )};

function resetState(){

    clearStatusClass(document.body)
    nextButton.classList.add
    ('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }
  
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = 
    [
{
        question: 'What is 5+99?',
        answers: [
            {text: '104', correct:true},
            {text: '400', correct:false}
        ]
     },




    {
    question: 'How many vowels in Taumatawhakatangi­hangakoauauotamatea­turipukakapikimaunga­horonukupokaiwhen­uakitanatahu?',
    answers: [
        {text: '42', correct:true},
        {text: '7000', correct:false}
    ]
 },


    {
    question: 'When did Ireland join the EU?',
    answers: [
        {text: '1977', correct:false},
        {text: '1972', correct:true}
    ]
 },



    {
    question: 'Who is the best course provider?',
    answers: [
        {text: 'Code Institute', correct:true},
        {text: 'Schmoogle', correct:false}
    ]
 },

]