const MAX_QUIZ_TIME = 5; // quiz timer in seconds
var secondsLeft = MAX_QUIZ_TIME;

// Buttons we will listen for.
var startQuizBtn = document.querySelector("#startQuizBtn");
var answerABtn = document.querySelector("#reply1");
var answerBBtn = document.querySelector("#reply2");
var answerCBtn = document.querySelector("#reply3");
var answerDBtn = document.querySelector("#reply4");

var timeLeftDisplayEl = document.getElementById("#timeLeftDisplay");
var initialTimeLeftDisplay = timeLeftDisplayEl.textContent;

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
    var timerInterval = setInterval(function() {
      secondsLeft--;
 
      if(secondsLeft <= 0) {
        console.log ("timer ran out");
        // Timer ran out
        clearInterval(timerInterval);
        // Clear Timer display - set to zero
        timeLeftDisplayEl.textContent = initialTimeLeftDisplay + secondsLeft;
      } else {
        // Continue quiz
        // Display current time remaining
        displayTimeRemaining();
      }  
  
    }, 1000);
}

// This section of functions will process answers A through D and determine
// whether they are correct or not
function processAnswerA(){
  console.log("Answer A");
}
function processAnswerB(){
  console.log("Answer B");
}
function processAnswerC(){
  console.log("Answer C");
}
function processAnswerD(){
  console.log("Answer D");
}

// Add event listener here for the Start Quiz button click
startQuizBtn.addEventListener("click",function() {
    startTestTimer();
    // 
}) 

answerABtn.addEventListener("click",function() {
  processAnswerA();
})
answerBBtn.addEventListener("click",function() {
  processAnswerB();
})
answerCBtn.addEventListener("click",function() {
  processAnswerC();
})
answerDBtn.addEventListener("click",function() {
  processAnswerD();
})
