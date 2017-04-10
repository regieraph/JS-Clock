// setTimeout(function(){clock()}, 1000);
//
// function clock(){
//   $('#butt').animate({left: '250px'});
// }


//VARIABLES FOR DATES AND TIME******
var dates = new Date();

var datesAll = dates.getDate();
var day = dates.getDay();
var month = dates.getMonth();
var year = dates.getYear();


//ELEMENT VARIABLES
var body = document.getElementById('body');
var newDivSeconds = document.createElement('span');
var newDivMinutes = document.createElement('span');
var newDivHours = document.createElement('span');
var newDate = document.createElement('div');
body.appendChild(newDate);
body.appendChild(newDivHours);
body.appendChild(newDivMinutes);
body.appendChild(newDivSeconds);


//VARIABLE CLASSES
newDivSeconds.className = 'seconds';
newDivMinutes.className = 'minutes';
newDivHours.className = 'hours';
newDate.className = 'date';


//VARIABLE ATTRIBUTES


//DATE AND TIME
setInterval(function(){ time();}, 1000)

function time(){
 var dates = new Date();

 var newDates = dates.toDateString();
 // var clock = dates.toLocaleTimeString();
 var seconds = dates.getSeconds();
 var minutes = dates.getMinutes();
 var hours = dates.getHours() % 12;
 var stringSeconds= String(seconds);
 var stringMinutes= String(minutes);
 var stringHours= String(hours);

 newDate.textContent = newDates;
 newDivSeconds.textContent =  stringSeconds;
 newDivMinutes.textContent = stringMinutes + '   :' ;
 newDivHours.textContent = stringHours + '     :    ';


//ALARM
  if(stringSeconds == 00) {
    $('#bulbasaur').fadeIn(500);
    $('#bulbasaur').fadeOut(10000);
  }
  if(stringSeconds == 15){
    $('#pidgey').fadeIn(500);
    $('#pidgey').fadeOut(10000);
  }
  if(stringSeconds == 45){
    $('#pikachu').fadeIn(500);
    $('#pikachu').fadeOut(10000);
  }
  if(stringSeconds == 30){
    $('#lugia').fadeIn(500);
    $('#lugia').fadeOut(10000);
  }
  if(stringMinutes == 00){
    $('#dragonball').fadeIn(500);
    $('#dragonball').fadeOut(500);
    $('#dragonball').fadeIn(500);
    $('#dragonball').fadeOut(500);
    $('#dragonball').fadeIn(500);
    $('#dragonball').fadeOut(500);
  }
  }
 time();





//CLOCK MOVING

// setTimeout(function(){ clock();}, 1000)
//
// function clock(){
//
// }
//
// clock();


//
// body.addEventListener('onload', time(), false)
