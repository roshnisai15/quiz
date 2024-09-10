var questions = [
    {
        question: "What does CSS stands for?",
        options: ["Computing Style Sheet", "Creative Style Sheet", "Cascading Style Sheet", "Creative Styling Sheet"],
        answer: "Cascading Style Sheet"
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Preprocessor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "How to print a page using Javascript?",
        options: ["window.print()", "browser.print()", "navigator.print()", "document.print()"],
        answer: "window.print()"
    },
    {
        question: "Which language runs on a web browser?",
        options: ["Java", "C", "Python", "Javascript"],
        answer: "Javascript"
    },
    {
        question: " How do you declare a javascript variable ?",
        options: ["variable carName;", "var carName;", "v carName;", "none of this"],
        answer: "var carName;"
    },
    {
        question: "How do you called a function named 'myFunction'?",
        options: ["call myFunction()", "myFunction()", "call function myFunction()"],
        answer: "myFunction()"
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        options: ['alert("Hello World")', 'alertBox("helloWorld")', 'msg("Hello World")', 'msgBox("Hello World")'],
        answer: 'alert("Hello World")'
    },
    {
        question: "What is the most used programming language in 2021?",
        options: ["Java", "C", "Python", "Javascript"],
        answer: "Javascript"
    },
    {
        question: "When JS develope?",
        options: ["1990", "1995", "1999", "1892"],
        answer: "1995"
    },
    {
        question: "Which of the following is not Css Box model property?",
        options: ["margin", "padding", "border-radius", "border-collapse"],
        answer: "border-collapse"
    }

    // Add more questions as needed
];

var currentQuestionIndex = 0;
var score = 0;
var timer;
var count = 60;

function startTimer() {
    timer = setInterval(() => {
        count--;
        document.getElementById('timer').innerText = count;
        if (count <= 0) {
            clearInterval(timer);
            document.getElementById('next-btn').click(); // Move to next question when time is up
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    count = 60;
    document.getElementById('timer').innerText = count;
    startTimer();
}

function showQuestion() {
    var Question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = Question.question;
    var Options = document.getElementById('options-container');
    Options.innerHTML = ''; // Clear previous options

   
    Question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        Options.appendChild(button);
        
       
    });

    resetTimer();
}
var c1=0;
var w1=0;
function checkAnswer(selectedOption) {
    const Question = questions[currentQuestionIndex];
    if (selectedOption === Question.answer) {
        c1++;
        document.getElementById('correct').innerText = `Correct: ${c1}`;
        // document.getElementById('correct').style.color =  '#9aeabc';
        score++;
        document.getElementById('score').innerText = `Score: ${score}`;
    }
    else
    {
        w1++;
        document.getElementById('wrong').innerText = `Wrong: ${w1}`;
        // document.getElementById('wrong').style.color =  'red';
    }
    // document.getElementById('next-btn').disabled = false;
}

var currentQuestionIndex = 0;
function nextQuestion() {
    currentQuestionIndex++;
    document.getElementById('total').innerText=`Total Question: ${currentQuestionIndex}`;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
        // document.getElementById('next-btn').disabled = true;
        if(currentQuestionIndex>8)
        {
            document.getElementById('next-btn').innerText="Finish";
        }
    } else {
        document.getElementById('question').innerText = 'Quiz completed!';
        document.getElementById('options-container').innerHTML = '';
        document.getElementById('timer').style.display = 'none';
        document.getElementById('next-btn').style.display = 'none';
        var totalscore=c1-w1*1/2;
        document.getElementById('tscore').innerText = `Total Score: ${totalscore}`;
    
    }
}

// Initialize the quiz
showQuestion();