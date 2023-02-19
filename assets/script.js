const questionContainerElement = document.getElementById('question-container')


function startGame (){
console.log('Started')
startButton.classList.add('hide')
questionContainerElement.classList.remove('hide')
setNextQuestion()

}

function setNextQuestion (){

}

function showQuestion(question) {
 
  }

function selectAnswer () {

}

const question = 
    [
        {
        question: 'What is 5+99?',
        answers: [
            {text: '104', correct:true},
            {text: '400', correct:false}
        ]
     }
]

[
    {
    question: 'How many vowels in Taumatawhakatangi­hangakoauauotamatea­turipukakapikimaunga­horonukupokaiwhen­uakitanatahu?',
    answers: [
        {text: '42', correct:true},
        {text: '7000', correct:false}
    ]
 }
]

[
    {
    question: 'When did Ireland join the EU?',
    answers: [
        {text: '1977', correct:false},
        {text: '1972', correct:true}
    ]
 }
]

[
    {
    question: 'Who is the best course provider?',
    answers: [
        {text: 'Code Institute', correct:true},
        {text: 'Schmoogle', correct:false}
    ]
 }
]






