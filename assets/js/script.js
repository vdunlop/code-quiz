// Clearing the screen elements set up. 
var startContainerEl = document.querySelector(".startContainer");
var questionContainerEl = document.querySelector(".questionContainer");
var allDoneContainerEl = document.querySelector(".allDoneContainer");
var highScoresContainerEl = document.querySelector(".highScoresContainer");

// Local storage set up.
var highScorersArr=[];  // 2D array for initials and score [initialsA,scoreA],[initialsB,scoreB]
var numberOfScores = 0;  // number of scores recorded
var currentFinalScore = 0;
var currentInitials = "";
var scoresLS = JSON.parse(localStorage.getItem('scoreList'));

// Timer values
const MAX_QUIZ_TIME = 300; // quiz timer in seconds
var secondsLeft = MAX_QUIZ_TIME;
var stopTimer = false;  // set to true when quiz is complete before timer is up
var timeLeftDisplayEl = document.getElementById("#timeLeftDisplay");
var initialTimeLeftDisplay = timeLeftDisplayEl.textContent;

// High scores for display
var listEl = document.getElementById("highScoreList");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var li5 = document.createElement("li");

// Buttons we will listen for.
var startQuizBtn = document.querySelector("#startQuizBtn");
var answerABtn = document.querySelector("#reply1");
var answerBBtn = document.querySelector("#reply2");
var answerCBtn = document.querySelector("#reply3");
var answerDBtn = document.querySelector("#reply4");
var formSubmitBtn = document.querySelector("#formSubmit");
var goBackBtn = document.querySelector("#goBack");
var clearHighScoresBtn = document.querySelector("#clearHighScores");

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
// quiz timer (time left, upper left corner).
function displayTimeRemaining() {
  //   debugger;
  //   console.log("time remaining " + secondsLeft);
  //   console.log("element " + timeLeftDisplayEl);
  timeLeftDisplayEl.textContent = initialTimeLeftDisplay + secondsLeft;
}

// This function starts the quiz timer, monitors for it to run out, and
// displays time remaining. This function can be called with global variable stopTimer
// to stop the timer and clear the interval. 
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
  element = document.getElementById("answerStatusText");
  element.textContent = "Results: " + results;
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

/* This set of functions process clearing all of the different screens:
main, question and answer, all done screen, high scores */
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

/* This set of functions process displaying all of the different screens:
main, question and answer, all done screen, high scores */
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
    // set up question
    element =document.getElementById("questionText");
    element.textContent = questions[currentQuestion];

    // set up answer choices
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

  // Hide the all done screen and display the high scores screen
  clearAllDoneScreen();
debugger;
  // Get the current list of high scores, sort and display the top 5
  highScorersArr = JSON.parse(localStorage.getItem('scoreList'));
  console.log ("in high score display " + highScorersArr);

  console.log("on high scores screen");
  //var sortedHighScorersArr = highScorersArr.toSorted();
    //highScorersArr.sort(firstItem,SecondItem)=> firstIem.grade - secondItem.grade);
li1.textContent = highScorersArr[0];
li2.textContent = highScorersArr[1];
li3.textContent = highScorersArr[2];
li4.textContent = highScorersArr[3];
li5.textContent = highScorersArr[4];

listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);
listEl.appendChild(li5);

}

// Remove any blank names (initials) elements from the scores array
function cleanScorersArray() {
  for (var i = 0; i<highScorersArr.length; i++ ) {
console.log("in for " + i + " " + highScorersArr[i]); 
console.log("in for " + i + " " + highScorersArr[i][0]);
console.log("in for " + i + " " + highScorersArr[i][1]);
if ((highScorersArr[i][0] == "") || (highScorersArr[i][0] == null)) {
  console.log('remove the thing');
  highScorersArr.splice(i,i);
  console.log("spliced " + highScorersArr);
} 
console.log("out for " + i + " " + highScorersArr[i]); 
console.log("out for " + i + " " + highScorersArr[i][0]);
console.log("out for " + i + " " + highScorersArr[i][1]);
  }
}

/* Save the current score and initials into local storage */
function processHighScores() {
  console.log ("in process high scores");
    currentInitials = allDoneContainerEl.children[2].children[0].value;
    debugger;
  
    // put current score and initials into the high scorers array and push it onto local storage
    // for future use.
    highScorersArr.push([currentInitials,currentFinalScore]);
    localStorage.setItem('scoreList',JSON.stringify(highScorersArr));
    console.log("initials in submit =" + currentInitials);
    //processHighScores();
  
    // display the high scores
    clearAllDoneScreen();
    highScoresDisplay();
  
  };

// EVENT LISTENERS
// Event listener for the Start Quiz button click
startQuizBtn.addEventListener("click", function (event) {
  event.stopPropagation;

  // Reset variables for the Start Quiz button being clicked a second, etc time
  secondsLeft = MAX_QUIZ_TIME; // Reset the timer.
  currentQuestion = 0;  // Reset the current question.
  //debugger;

  // At start, main screen is visible and all other screens are hidden
  // INITIALIZE
  startContainerEl.setAttribute("hidden", "false"); // main screen is visible
  questionContainerEl.setAttribute("hidden", "true"); // questions are hidden
  allDoneContainerEl.setAttribute("hidden", "true"); // all done is hidden
  highScoresContainerEl.setAttribute("hidden", "true");  // high scores is hidden
  clearMainScreen();
  highScorersArr = JSON.parse(localStorage.getItem('scoreList'));
  cleanScorersArray();

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

// Event listener for submit in the all done screen
 formSubmitBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  processHighScores();
 });

 // Event listeners for the goBack and clearHighScores buttons in high score display
  goBackBtn.addEventListener("click", function(event) {
  event.stopPropagation();
  processGoBack();
})

 clearHighScoresBtn.addEventListener("click", function(event) {
  event.stopPropagation();
  processClearHighScores();
})
