
           /*   CLOCK  */
setInterval(function(){
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        // Add leading zeros
        minutes = (minutes < 10 ? "0" : "") + minutes;
        seconds = (seconds < 10 ? "0" : "") + seconds;
        hours = (hours < 10 ? "0" : "") + hours;

        // Compose the string for display
        var currentTimeString = hours + ":" + minutes;
            $(".clock").html(currentTimeString);


},1000);
            /* GREETINGS */
var currentTime = new Date();
var hours = currentTime.getHours();
var greetings = document.getElementsByClassName("greetings");

var timeGreetings = "";
    if(hours > 3 && hours < 11) timeGreetings = "Morning";
    else if(hours > 22 || hours < 4) timeGreetings = "Night";
    else if(hours > 10 && hours < 14) timeGreetings = "Noon";
    else if(hours > 13 && hours < 18) timeGreetings = "Afternoon";
    else if(hours > 17 && hours < 23) timeGreetings = "Evening";

    greetings[0].innerHTML = "Good " + timeGreetings + "!";
greetings[0].onclick = function(){}




         /*   FOCUS INPUT   */
// Create a "close" button
// var myNodelist = document.getElementsByClassName("closeFocus");
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[0].appendChild(span);
//
// // Click on a close button to go back to focus
// var close = document.getElementsByClassName("close");
// close[0].onclick = function(){
//    //focus = "";
//    //var forming = "  <div class='prompt' style=''><div class='clock'></div><div class='greetings currentlyWorking'></div> <h3>What is your main focus for today?</h3><form class='focus' action=<%= route %> method='post'><input type='text' name='focus' autocomplete='off'><button type='submit' name='button' style='display: none;'></button></form></div>"
// //if(newFocus === ""){
//     var forming = "<form class='focus' action= '<%= route %>' method='post'>  <input id ='focusInput' type='text' name='newFocus' autocomplete='off'>  <button type='submit' name='button' style='display: none;'></button> </form>";
//     document.getElementById("unchecking").innerHTML = forming;
//
//
// }
//
// // Add a "checked" symbol when clicking on a focus
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);
