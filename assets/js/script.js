// Clearing the screen elements set up. 
var startContainerEl = document.querySelector(".startContainer");
var questionContainerEl = document.querySelector(".questionContainer");
var allDoneContainerEl = document.querySelector(".allDoneContainer");
var highScoresContainerEl = document.querySelector(".highScoresContainer");

// Local storage set up.
var numberOfScores = 0;  // number of scores recorded
var currentFinalScore = 0;
var currentInitials = "";

// Timer values
const MAX_QUIZ_TIME = 300; // quiz timer in seconds
var secondsLeft = MAX_QUIZ_TIME;
var stopTimer = false;  // set to true when quiz is complete before timer is up

// Buttons we will listen for.
var startQuizBtn = document.querySelector("#startQuizBtn");
var answerABtn = document.querySelector("#reply1");
var answerBBtn = document.querySelector("#reply2");
var answerCBtn = document.querySelector("#reply3");
var answerDBtn = document.querySelector("#reply4");
var formSubmitBtn = document.querySelector("#formSubmit");
var goBackBtn = document.querySelector("#goBack");
var clearHighScoresBtn = document.querySelector("#clearHighScores");

// Upper right corner timer display
var timeLeftDisplayEl = document.getElementById("#timeLeftDisplay");
var initialTimeLeftDisplay = timeLeftDisplayEl.textContent;

// The quiz is stored here;
const NUMBER_OF_QUESTIONS = 5;
var currentQuestion = 0;
var questions = ["Which of the following is NOT a correct variable declaration",
  "Which of the following is NOT a Falsy",
  "Which is NOT a primitive value or primitive data type",
  "Which of the following is NOT always required in an if conditional",
  "Which of the following is NOT true about functions"];
var answerChoices = [["var x = 1;", "var if;", "var functionName = function(){};", "var z=x+y;"],
["null", "undefined", "\"false\"", "-0"],
["null", "object", "symbol", "string"],
["else", "if", "{}", "conditional statement"],
["reusable", "you can build your own", "some don't have a return value", "they don't follow scope"]];
var correctAnswers = ["B", "C", "B", "A", "D"];

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

    if (stopTimer) {
      console.log("stop timer");
      clearInterval(timerInterval);
      timeLeftDisplayEl.textContent = initialTimeLeftDisplay + secondsLeft;
    } else {
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
    }
    secondsLeft--;
  }, 1000);
}

// This function will reduce the timer for an incorrect answer.
function processAnswerIncorrect() {
  console.log("answerincorrect");
  secondsLeft = secondsLeft - 10;
};

// This function sets the <h2> that displays the results of the question.
// Whether the answer was correct or incorrect.
function setAnswerStatusText(results) {
  console.log("setanswerstatustext - results = " + results);
};

// This section of functions will process answers A through D and determine
// whether they are correct or not
function processAnswerA() {
  console.log("Answer A");
  console.log("current question " + currentQuestion);
  console.log(questions[currentQuestion]);

  console.log("processing A not all done");
  clearMainScreen();
  if (correctAnswers[currentQuestion] == "A") {
    setAnswerStatusText("correct");
  } else {
    setAnswerStatusText("incorrect");
    processAnswerIncorrect();
  }

  currentQuestion++;
  if (currentQuestion >= NUMBER_OF_QUESTIONS) {
    allDoneDisplay();
  } else {
    processQuestion();
  }
}

function processAnswerB() {
  console.log("Answer B");
  console.log("current question " + currentQuestion);
  console.log(questions[currentQuestion]);

  console.log("processing B not all done");
  clearMainScreen();
  if (correctAnswers[currentQuestion] == "B") {
    setAnswerStatusText("correct");
  } else {
    setAnswerStatusText("incorrect");
    processAnswerIncorrect();
  }

  currentQuestion++;
  if (currentQuestion >= NUMBER_OF_QUESTIONS) {
    allDoneDisplay();
  } else {
    processQuestion();
  }
  /*currentQuestion++;
  if (currentQuestion >= NUMBER_OF_QUESTIONS) {
    allDoneDisplay();
  } else {
    console.log("processing B not all done");
    clearMainScreen();
    processQuestion();
  }*/
}

function processAnswerC() {
  console.log("Answer C");
  console.log("current question " + currentQuestion);
  console.log(questions[currentQuestion]);

  console.log("processing C not all done");
  clearMainScreen();
  if (correctAnswers[currentQuestion] == "C") {
    setAnswerStatusText("correct");
  } else {
    setAnswerStatusText("incorrect");
    processAnswerIncorrect();
  }

  currentQuestion++;
  if (currentQuestion >= NUMBER_OF_QUESTIONS) {
    allDoneDisplay();
  } else {
    processQuestion();
  }
  /*currentQuestion++;
  if (currentQuestion >= NUMBER_OF_QUESTIONS) {
    allDoneDisplay();
  } else {
    console.log("processing C not all done");
    clearMainScreen();
    processQuestion();
  }*/
}
function processAnswerD() {
  console.log("Answer D");
  console.log("current question " + currentQuestion);
  console.log(questions[currentQuestion]);


  console.log("processing D not all done");
  clearMainScreen();
  if (correctAnswers[currentQuestion] == "D") {
    setAnswerStatusText("correct");
  } else {
    setAnswerStatusText("incorrect");
    processAnswerIncorrect();
  }

  currentQuestion++;
  if (currentQuestion >= NUMBER_OF_QUESTIONS) {
    allDoneDisplay();
  } else {
    processQuestion();
  }
  /*currentQuestion++;
  if (currentQuestion >= NUMBER_OF_QUESTIONS) {
    allDoneDisplay();
  } else {
    console.log("processing D not all done");
    clearMainScreen();
    processQuestion();
  }*/
}

function clearMainScreen() {
  //debugger;
  console.log("CLEAR SCREEN");
  console.log("current question " + currentQuestion);

  // Turn off the main screen
  startContainerEl.setAttribute("hidden", "true");

  // Turn on the question container
  element = document.getElementById('clearQuestionContainer');
  if (element.style.display == 'none') {
    element.style.display = 'block';
  }
  questionContainerEl.setAttribute("hidden", "false");

  //.setAttribute('style','display:none;');
  //document.getElementsByClassName('startContainerOn').style.display = 'none';
}

function clearQuestionScreen() {
  //debugger;
  console.log("CLEAR QUESTION SCREEN");
  console.log("current question " + currentQuestion);

  // Turn off the question screen
  element = document.getElementById('clearQuestionContainer');
  element.style.display = 'none';
  questionContainerEl.setAttribute("hidden", "true");

  // Turn on the all done container
  element = document.getElementById('clearAllDoneContainer');
  if (element.style.display == 'none') {
    element.style.display = 'inline';
  }
  allDoneContainerEl.setAttribute("hidden", "false");

  //.setAttribute('style','display:none;');
  //document.getElementsByClassName('startContainerOn').style.display = 'none';
}

function clearAllDoneScreen() {
  //debugger;
  console.log("CLEAR ALL DONE SCREEN");
  console.log("current question " + currentQuestion);

  // Turn off the all done screen
  element = document.getElementById('clearAllDoneContainer');
  element.style.display = 'none';
  allDoneContainerEl.setAttribute("hidden", "true");

  // Turn on the high scores container
  element = document.getElementById('clearHighScoresContainer');
  if (element.style.display == 'none') {
    element.style.display = 'inline';
  }
  highScoresContainerEl.setAttribute("hidden", "false");

  //.setAttribute('style','display:none;');
  //document.getElementsByClassName('startContainerOn').style.display = 'none';
}

// Display the question on the screen.
function processQuestion() {

  if (currentQuestion >= NUMBER_OF_QUESTIONS) {
    console.log("complete");
    allDoneDisplay();
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

    // do this in process answer currentQuestion++;
  }
}

function allDoneDisplay() {
  console.log("ALL DONE");

  // Clear questions and display all done screen.
  clearQuestionScreen();
  console.log("on all done screen");
  //debugger;

  // Set the score and stop the timer
  currentFinalScore = secondsLeft;
  stopTimer = true;
  startTestTimer();
  //allDoneContainerEl.children[3].children[0].textContent = currentFinalScore;
  element = allDoneContainerEl.getElementsByClassName("finalScore");
  //getattributesbydocument.getElementById("finalScore");
  element[0].textContent = currentFinalScore;
}

function highScoresDisplay() {
  console.log("DISPLAY HIGH SCORES");

  clearAllDoneScreen();
  console.log("on high scores screen");

}
// Event listener for the Start Quiz button click
startQuizBtn.addEventListener("click", function (event) {
  event.stopPropagation;

  // Reset variables for the Start Quiz button being clicked a second, etc time
  secondsLeft = MAX_QUIZ_TIME; // Reset the timer.
  currentQuestion = 0;  // Reset the current question.
  //debugger;

  // At start, main screen is visible and all other screens are hidden
  startContainerEl.setAttribute("hidden", "false"); // main screen is visible
  questionContainerEl.setAttribute("hidden", "true"); // questions are hidden
  allDoneContainerEl.setAttribute("hidden", "true"); // all done is hidden
  highScoresContainerEl.setAttribute("hidden", "true");  // high scores is hidden
  clearMainScreen();

  // Display the first question and start the timer
  processQuestion();
  startTestTimer();
  //debugger;
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

function processHighScores() {
console.log ("in process high scores");
  currentInitials = allDoneContainerEl.children[2].children[0].value;
  //debugger;
  console.log("initials in submit =" + currentInitials);
  //processHighScores();
  clearAllDoneScreen();
  highScoresDisplay();

};

 formSubmitBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  processHighScores();
 });

