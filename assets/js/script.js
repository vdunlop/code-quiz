const MAX_QUIZ_TIME = 5; // quiz timer in seconds
var secondsLeft = MAX_QUIZ_TIME;
var startQuizBtn = document.querySelector("#startQuizBtn");
var timeLeftDisplayEl = document.getElementById("#timeLeftDisplay");

// This function displays the current time remaining on the 
// quiz timer (time left).
function displayTimeRemaining() {
 //   debugger;
 //   console.log("time remaining " + secondsLeft);
 //   console.log("element " + timeLeftDisplayEl);
    timeLeftDisplayEl.textContent = timeLeftDisplayEl.textContent + secondsLeft;

}

// This function starts the quiz timer, monitors for it to run out,
// displays time remaining.
function startTestTimer() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
 
      if(secondsLeft <= 0) {
        console.log ("timer ran out");
        // Timer ran out
        clearInterval(timerInterval);
      } else {
        // Continue quiz
        // Display current time remaining
        displayTimeRemaining();
      }  
  
    }, 1000);
}

// Add event listener here for the Start Quiz button
startQuizBtn.addEventListener("click",function() {
    startTestTimer();
    // 
}) 
