// A $( document ).ready() block.
$( document ).ready(function() {

$('.svg-btn').attr('disabled','disabled');

//Get windowWidth and decide icon scale
var exitArray = [];
var windowWidth = $( window ).width();
console.log(windowWidth);
var scale = 0.2;
var scale2 = 0.35;
if (windowWidth < 800) {
  scale = 0.4;
  scale2 = 0.55;
}

question1('svg-btn', 'exercise-btn', 1);



















function question1(elClass, nextClass, counter) {

//Intro icon anim
var els = document.querySelectorAll('.'+elClass);
var domNode = anime({
  targets: els,
  top: '0px',
  duration: 1000,
  elasticity: 500
});
setTimeout(function(){ $( "."+elClass ).addClass( "shake-slow shake-constant shake-constant--hover"); $('.'+elClass).removeAttr('disabled'); }, 1000);



//When svg-btn pressed move to middle
$( "."+elClass ).click(function() {

  $("."+elClass).removeClass( "shake-slow shake-constant shake-constant--hover" )

  var id = $(this).attr('id');
  console.log(id);
  console.log(id.slice(-1));

  var elm = this;
  var newone = elm.cloneNode(true);
  elm.parentNode.replaceChild(newone, elm);

  var el = document.querySelector('#'+id);

if (id.slice(-1) == "1") {

var id2 = elClass+'2';
$("."+elClass).attr('disabled','disabled');

  var domNode = anime({
    targets: el,
    top:'20vh',
    left:'25vw',
    duration: 1000,
    elasticity: 500
  });

}else{

var id2 = elClass+'1'
$("."+elClass).attr('disabled','disabled');

  domNode = anime({
    targets: el,
    top:'20vh',
    left:'-25vw',
    duration: 1000,
    elasticity: 500
  });

}


  domNode = anime({
    targets: el,
    scale: scale,
    duration: 1000,
    delay: 1000,
    elasticity: 500
  });

//Not picked icon exit anim
el = document.querySelector('#'+id2);
domNode = anime({
  targets: el,
  top: '-80vh',
  duration: 1000,
  delay: 2000,
  elasticity: 500
});

setTimeout(function(){ $( '.exercise-container' ).css( "display", "block" ); question2("exercise-btn", 2); console.log(nextClass); }, 3000);

});

}




function question2(elClass, counter) {

//Intro icon anim
var els = document.querySelectorAll('.'+elClass);
var domNode2 = anime({
  targets: els,
  top: '0px',
  duration: 1000,
  elasticity: 500
});
setTimeout(function(){ $( "."+elClass ).addClass( "shake-slow shake-constant shake-constant--hover"); $('.'+elClass).removeAttr('disabled'); }, 1000);



//When svg-btn pressed move to middle
$( "."+elClass ).click(function() {

  $("."+elClass).removeClass( "shake-slow shake-constant shake-constant--hover" )

  var id = $(this).attr('id');
  console.log(id);
  console.log(id.slice(-1));

  var elm = this;
  var newone = elm.cloneNode(true);
  elm.parentNode.replaceChild(newone, elm);

  var el = document.querySelector('#'+id);

if (id.slice(-1) == "1") {

var id1 = elClass+'1';
$("."+elClass).attr('disabled','disabled');
console.log(id1);
  var domNode2 = anime({
    targets: el,
    top:'15vh',
    left:'37.5vw',
    duration: 1000,
    elasticity: 500
  });

exitArray = [elClass+'2',elClass+'3',elClass+'4'];

}else if (id.slice(-1) == "2") {

var id2 = elClass+'2'
$("."+elClass).attr('disabled','disabled');
console.log(id2);
  domNode2 = anime({
    targets: el,
    top:'15vh',
    left:'12.5vw',
    duration: 1000,
    elasticity: 500
  });

exitArray = [elClass+'1',elClass+'3',elClass+'4'];

}else if (id.slice(-1) == "3") {

var id3 = elClass+'3'
$("."+elClass).attr('disabled','disabled');
console.log(id3);
  domNode2 = anime({
    targets: el,
    top:'15vh',
    left:'-12.5vw',
    duration: 1000,
    elasticity: 500
  });

exitArray = [elClass+'2',elClass+'1',elClass+'4'];

}else if (id.slice(-1) == "4") {

var id4 = elClass+'4'
$("."+elClass).attr('disabled','disabled');
console.log(id4);
  domNode2 = anime({
    targets: el,
    top:'20vh',
    left:'-37.5vw',
    duration: 1000,
    elasticity: 500
  });

exitArray = [elClass+'2',elClass+'3',elClass+'1'];

}


  domNode2 = anime({
    targets: el,
    scale: scale2,
    duration: 1000,
    delay: 1000,
    elasticity: 500
  });

//Not picked icon exit anim

for (var i = 0; i < exitArray.length; i++) {
console.log(exitArray);
var currentEl = '#'+exitArray[i];
domNode2 = anime({
  targets: currentEl,
  top: '-80vh',
  scale: 2,
  duration: 1000,
  delay: 2000,
  elasticity: 500
});

}

domNode2 = anime({
  targets: '#exercise-h1',
  marginbottom: '20vh',
  opacity: 0,
  scale: 2,
  duration: 1000,
  delay: 2000,
  elasticity: 200
});

});

}





});
