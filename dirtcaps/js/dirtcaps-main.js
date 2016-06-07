
//Hover trilll

/* Thanks to http://tympanus.net/codrops/2016/05/11/distorted-button-effects-with-svg-filters/ */


var turbVal = { val: 0.000001 };
var turb = document.querySelectorAll('#filter feTurbulence')[0];

var btTl = new TimelineLite({ paused: true, onUpdate: function() {
  turb.setAttribute('baseFrequency', '0.000001 ' + turbVal.val);
} });



btTl.to(turbVal, 0.4, { val: 0.4 });
btTl.to(turbVal, 0.2, { val: 0.000001 });
/*

$('warp').addEventListener('mouseover', function() {
  btTl.restart();
    console.log('hoi');
  });
*/

$( ".warp:nth-child(1)" ).mouseover(function() {
    btTl.restart();
});

$( ".warp:nth-child(2)" ).mouseover(function() {
    btTl.restart();
});
$( ".warp:nth-child(3)" ).mouseover(function() {

    btTl.restart();
});
$( ".warp:nth-child(4)" ).mouseover(function() {
    btTl.restart();
});

