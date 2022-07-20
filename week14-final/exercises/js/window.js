var isSetTimmeoutRunning = false;  
function startCountdown(){
  if( isSetTimmeoutRunning == false ){
    isSetTimmeoutRunning = true;
    var userInput = Number(document.getElementById("userInput").value);
    var userMilliseconds = userInput*1000;
    setTimeout(function(){
      isSetTimmeoutRunning = false;
      alert(userInput + " seconds have passed.");
    }, userMilliseconds);
    var counter = userInput;
    document.getElementById("countdown-text").innerHTML = "<b>" + counter + "</b>";
    var interval = setInterval(function(){
      counter--;
      document.getElementById("countdown-text").innerHTML = "<b>" + counter + "</b>";
      if( counter == 0 ){
        document.getElementById("countdown-text").innerHTML = "";
        clearInterval(interval);
      }
    }, 1000);
  }
}