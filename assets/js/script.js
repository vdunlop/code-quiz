const MAX_QUIZ_TIME = 10; // quiz timer in seconds
var secondsLeft = MAX_QUIZ_TIME;

function startTestTimer() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
 
      if(secondsLeft <= 0) {
        console.log ("timer ran out");
        // Timer ran out
        clearInterval(timerInterval);
      } else {
        console.log("timer continue", secondsLeft);
        // Continue quiz
      }  
  
    }, 1000);
}

  startTestTimer();