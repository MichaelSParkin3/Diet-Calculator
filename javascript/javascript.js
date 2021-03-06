// A $( document ).ready() block.
$( document ).ready(function() {

$('.svg-btn').attr('disabled','disabled');

//Get windowWidth and decide icon scale
var windowWidth = $( window ).width();
console.log(windowWidth);
var scale = 0.2;
if (windowWidth < 800) {
  scale = 0.4;
}

question1('svg-btn', 'exercise-btn', 1);


// //Intro icon anim
// var els = document.querySelectorAll('.svg-btn');
// var domNode = anime({
//   targets: els,
//   top: '0px',
//   duration: 1000,
//   elasticity: 500
// });
// setTimeout(function(){ $( ".svg-btn" ).addClass( "shake-slow shake-constant shake-constant--hover"); $('.svg-btn').removeAttr('disabled'); }, 1000);
//
//
//
// //When svg-btn pressed move to middle
// $( ".svg-btn" ).click(function() {
//
//   $('.svg-btn').removeClass( "shake-slow shake-constant shake-constant--hover" )
//
//   var id = $(this).attr('id');
//   console.log(id);
//   console.log(id.slice(-1));
//
//   var elm = this;
//   var newone = elm.cloneNode(true);
//   elm.parentNode.replaceChild(newone, elm);
//
//   var el = document.querySelector('#'+id);
//
// if (id.slice(-1) == "1") {
//
// var id2 = 'svg-btn2'
// $('.svg-btn').attr('disabled','disabled');
//
//   var domNode = anime({
//     targets: el,
//     top:'20vh',
//     left:'25vw',
//     duration: 1000,
//     elasticity: 500
//   });
//
// }else{
//
// var id2 = 'svg-btn1'
// $('.svg-btn').attr('disabled','disabled');
//
//   domNode = anime({
//     targets: el,
//     top:'20vh',
//     left:'-25vw',
//     duration: 1000,
//     elasticity: 500
//   });
//
// }
//
//
//   domNode = anime({
//     targets: el,
//     scale: scale,
//     duration: 1000,
//     delay: 1000,
//     elasticity: 500
//   });
//
// //Not picked icon exit anim
// el = document.querySelector('#'+id2);
// domNode = anime({
//   targets: el,
//   top: '-80vh',
//   duration: 1000,
//   delay: 2000,
//   elasticity: 500
// });
//
// });


















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

setTimeout(function(){ $( '.exercise-container' ).css( "display", "block" ); console.log(nextClass); }, 3000);

});

}




function question2(elClass, counter) {

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

});

}





});
