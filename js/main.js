/*global $:false */

// Function big menu overlay
(function () {
    var triggerBttn = document.getElementById('trigger-overlay'),
        overlay = document.querySelector('div.overlay');
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
        support = { transitions : Modernizr.csstransitions };

    function toggleOverlay() {
        if( classie.has( overlay, 'open' ) ) {
            classie.remove( overlay, 'open' );
            classie.add( overlay, 'close' );
            var onEndTransitionFn = function( ev ) {
                if( support.transitions ) {
                    if( ev.propertyName !== 'visibility' ) return;
                    this.removeEventListener( transEndEventName, onEndTransitionFn );
                }
                classie.remove( overlay, 'close' );
            };
            if( support.transitions ) {
                overlay.addEventListener( transEndEventName, onEndTransitionFn );
            }
            else {
                onEndTransitionFn();
            }
        }
        else if( !classie.has( overlay, 'close' ) ) {
            classie.add( overlay, 'open' );
        }
    }

    triggerBttn.addEventListener( 'click', toggleOverlay );
})();


// Animating Hamburger Icon

(function() {

  "use strict";

  var toggles = document.querySelectorAll(".nav-button");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();


// Password Simple Authentication


function validateForm() {

        var pw = document.loginform.pword.value;
        var password = "Fabrique";
        var errorMessage = document.getElementById("error-message");

        if (pw == password) {
            return true;
        }
        else {

            classie.remove( errorMessage, 'hide' )
            document.getElementById("error-message").innerHTML = 'Sorry, wrong password!';
            return false;
        }
  }


// Toggle E,E,E,E
// Need improvement --> Multiple ID's (one, two, three etc.) to one var --> var instead of ID


$(document).ready(function(){


    $('#dvdz-toggle-one').change(function(){
        if(this.checked)
            $('#panel').slideDown('slow');
        else
            $('#panel').slideUp('slow');

    });
    $('#dvdz-toggle-two').change(function(){
        if(this.checked)
            $('#panel-two').slideDown('slow');
        else
            $('#panel-two').slideUp('slow');

    });
     $('#dvdz-toggle-three').change(function(){
        if(this.checked)
            $('#panel-three').slideDown('slow');
        else
            $('#panel-three').slideUp('slow');

    });
    $('#dvdz-toggle-four').change(function(){
        if(this.checked)
            $('#panel-four').slideDown('slow');
        else
            $('#panel-four').slideUp('slow');

    });
});

// Toggle Profile Pic


$("#toggle-pic").click(function() {
    $(this).find('img').toggle();
});


// Progress Bars

$(function() {

    $('#dvdz-toggle-three').change(function(){
        if(this.checked)
          $('progress').each(function() {
            var max = $(this).val();
            $(this).val(0).animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
                    });
        });
});


// Scroll Animation

var $animation_elements = $('.bounce-up');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } /*else {
      $element.removeClass('in-view');
    } */
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


// Blur Menu


  $(document).ready(function(){

    var back = 200;
    var middle = 400;
    var front = 600;
    var YY,
        offset,
        sizeBack,
        sizeMiddle,
        sizeFront;

    // For mouse users
    $('html').mousemove(function(e){

      offset = $('html').offset();
      YY = e.clientY - offset.top;

      sizeBack   = Math.abs(back-YY)/95;
      sizeMiddle = Math.abs(middle-YY)/98;
      sizeFront  = Math.abs(front-YY)/100;

      // apply blur
      $('.back').css({
        '-webkit-filter': 'blur('+ (sizeBack) +'px)',
        '-webkit-transform': 'translate3d(200px,'+ -YY/20 +'px,'+ -YY/20 +'px) rotate(45deg)',
        '-moz-transform': 'translate3d(200px,'+ -YY/20 +'px,'+ -YY/20 +'px) rotate(45deg)',
        'transform': 'translate3d(200px,'+ -YY/20 +'px,'+ -YY/20 +'px) rotate(45deg)'
      });
      $('.middle').css({
        '-webkit-filter': 'blur('+ (sizeMiddle) +'px)',
        '-webkit-transform': 'translate3d(200px,'+ -YY/15 +'px,'+ -YY/15 +'px) rotate(45deg)',
        '-moz-transform': 'translate3d(200px,'+ -YY/15 +'px,'+ -YY/15 +'px) rotate(45deg)',
        'transform': 'translate3d(200px,'+ -YY/15 +'px,'+ -YY/15 +'px) rotate(45deg)'
      });
      $('.front').css({
        '-webkit-filter': 'blur('+ (sizeFront) +'px)',
        '-webkit-transform': 'translate3d(200px,'+ -YY/10 +'px,'+ -YY/10 +'px) rotate(45deg)',
        '-moz-transform': 'translate3d(200px,'+ -YY/10 +'px,'+ -YY/10 +'px) rotate(45deg)',
        'transform': 'translate3d(200px,'+ -YY/10 +'px,'+ -YY/10 +'px) rotate(45deg)'
      });
    });
  });
