const text = document.querySelector(".typing");
const textToSay = [
 "Software Enginner.", "Mechanical Enginner.", "Telegram dev.",
 "Game dev.", "Web dev (kind of).",
 "Full stack dev.", "Cat lover.", "Enviroment Activist."];

function startTyping(){
   setTyper(text, textToSay);
}

function setTyper(text, textToSay){

const letterDelay = 75;
const earsetext = 2000;
const forward = 0;
const backward = 1;

var direction = forward;
var wordIndex = 0;
var letterIndex = 0;
var textInterval;

console.log("starting the typing guy");
startTyping();

function startTyping(){textInterval = setInterval(typeLetter, letterDelay);}
function typeLetter(){
const word = textToSay[wordIndex];
if (direction == forward){
   letterIndex++;
   if (letterIndex == word.length){
     direction = backward;
     clearInterval(textInterval);
     setTimeout(startTyping, earsetext);}}

else if (direction == backward){
   letterIndex--;
   if (letterIndex == 0){nextWord();}}

const textToType = word.substring(0, letterIndex);
text.textContent = textToType;}

function nextWord(){
letterIndex = 0;
direction = forward;
wordIndex++;
if (wordIndex == textToSay.length){wordIndex = 0;}}}
