// Clearing the screen elements set up. 
var startContainerEl = document.querySelector(".startContainer");
var questionContainerEl = document.querySelector(".questionContainer");

// Timer values
const MAX_QUIZ_TIME = 10; // quiz timer in seconds
var secondsLeft = MAX_QUIZ_TIME;

// Buttons we will listen for.
var startQuizBtn = document.querySelector("#startQuizBtn");
var answerABtn = document.querySelector("#reply1");
var answerBBtn = document.querySelector("#reply2");
var answerCBtn = document.querySelector("#reply3");
var answerDBtn = document.querySelector("#reply4");

// Upper right corner timer display
var timeLeftDisplayEl = document.getElementById("#timeLeftDisplay");
var initialTimeLeftDisplay = timeLeftDisplayEl.textContent;

// The quiz is stored here;
const NUMBER_OF_QUESTIONS = 5;
var currentQuestion = 0;
var questions = ["Which of the following is NOT a correct variable declaration",
  "Which of the following is NOT a Falsy",
  "Which is NOT a primitive value or primitive data type",
  "Java Question 4",
  "Java Question 5"];
  var answerChoices = [["var x = 1;", "var if;", "var functionName = function(){};", "var z=x+y;"],
                      ["null","undefined","\"false\"", "-0"],
                    ["null","object","symbol","string"],
                    ["1","2","3","4"],
                    ["answer1","answer2","answer3","answer4"]];
  var correctAnswers = ["A", "D", "C", "A", "B"];

// This function displays the current time remaining on the 
// quiz timer (time left).
function displayTimeRemaining() {
  //   debugger;
  //   console.log("time remaining " + secondsLeft);
  //   console.log("element " + timeLeftDisplayEl);
  timeLeftDisplayEl.textContent = initialTimeLeftDisplay + secondsLeft;
}

// This function starts the quiz timer, monitors for it to run out, and
// displays time remaining.
function startTestTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;

    if (secondsLeft <= 0) {
      console.log("timer ran out");
      // Timer ran out
      clearInterval(timerInterval);
      // Clear Timer display - set to zero
      timeLeftDisplayEl.textContent = initialTimeLeftDisplay + secondsLeft;
      allDoneDisplay();
    } else {
      // Continue quiz
      // Display current time remaining
      displayTimeRemaining();
      //processQuestion();
    }

  }, 1000);
}

// This section of functions will process answers A through D and determine
// whether they are correct or not
function processAnswerA() {
  console.log("Answer A");
  console.log("current question " + currentQuestion);
  console.log(questions[currentQuestion]);
  currentQuestion++;
  if (currentQuestion >= NUMBER_OF_QUESTIONS) {
    allDoneDisplay();
  } else {
    console.log("processing A not all done");

    clearScreen();
    processQuestion();
  }
}

function processAnswerB() {
  console.log("Answer B");
  console.log("current question " + currentQuestion);
  console.log(questions[currentQuestion]);
  currentQuestion++;
  if (currentQuestion >= NUMBER_OF_QUESTIONS) {
    allDoneDisplay();
  } else {
    console.log("processing B not all done");
    clearScreen();
    processQuestion();
  }
}
function processAnswerC() {
  console.log("Answer C");
  console.log("current question " + currentQuestion);
  console.log(questions[currentQuestion]);
  currentQuestion++;
  if (currentQuestion >= NUMBER_OF_QUESTIONS) {
    allDoneDisplay();
  } else {
    console.log("processing C not all done");
    clearScreen();
    processQuestion();
  }
}
function processAnswerD() {
  console.log("Answer D");
  console.log("current question " + currentQuestion);
  console.log(questions[currentQuestion]);
  currentQuestion++;
  if (currentQuestion >= NUMBER_OF_QUESTIONS) {
    allDoneDisplay();
  } else {
    console.log("processing D not all done");
    clearScreen();
    processQuestion();
  }
}

function clearScreen() {
  //debugger;
  console.log("CLEAR SCREEN");
  console.log("current question " + currentQuestion);
startContainerEl.setAttribute("hidden","true");
element = document.getElementById('clearContainer');
if (element.style.display == 'none') {
  element.style.display = 'block';
}
questionContainerEl.setAttribute("hidden", "false");

//.setAttribute('style','display:none;');
//document.getElementsByClassName('startContainerOn').style.display = 'none';
}

// Display the question on the screen.
function processQuestion() {

  if (currentQuestion >= NUMBER_OF_QUESTIONS) {
    console.log("complete");
  } else {
    console.log("not complete " + currentQuestion);
    console.log(" PROCESS NEXT QUESTION");
    console.log("displaying question " + currentQuestion);
    console.log("display question" + questions[currentQuestion]);
    //debugger;
    element = document.getElementById("reply1");
    element.textContent = answerChoices[currentQuestion][0];
    element = document.getElementById("reply2");
    element.textContent = answerChoices[currentQuestion][1];
    element = document.getElementById("reply3");
    element.textContent = answerChoices[currentQuestion][2];
    element = document.getElementById("reply4");
    element.textContent = answerChoices[currentQuestion][3];

    currentQuestion++;
  }
}

function allDoneDisplay() {
  console.log("ALL DONE");
}

// Event listener for the Start Quiz button click
startQuizBtn.addEventListener("click", function (event) {
  event.stopPropagation;
  secondsLeft = MAX_QUIZ_TIME; // Reset the timer.
  currentQuestion = 0;  // Reset the current question.
  //debugger;
  startContainerEl.setAttribute("hidden","false"); // main screen is visible
  questionContainerEl.setAttribute("hidden", "true"); // questions are hidden
  clearScreen();
  processQuestion();
  startTestTimer();
  // 
})

// Event listenters for answer buttons clicked.
answerABtn.addEventListener("click", function (event) {
  event.stopPropagation();
  processAnswerA();
})
answerBBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  processAnswerB();
})
answerCBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  processAnswerC();
})
answerDBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  processAnswerD();
})
