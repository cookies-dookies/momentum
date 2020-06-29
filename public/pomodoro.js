/*   TIMER */
  var timeleft = 1500;
  var downloadTimer = setInterval(function(){
  var minutes = Math.floor(timeleft/60);
  var seconds = timeleft % 60;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;
  if(timeleft <= 0){
  clearInterval(downloadTimer);
  document.getElementById("countdown").innerHTML = "Finished";
  } else {
  document.getElementById("countdown").innerHTML = minutes + " : " + seconds;
  }
  timeleft -= 1;
  }, 1000);
