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


// Toggle TLDR

$(function(){
    $("#tldrClick").click(function(){
        $(".tldr-text").toggle();
    })
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



//Hide fixed nav

$(window).scroll(function(){
  var threshold = 200; // number of pixels before bottom of page that you want to start fading
  var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
    if( op <= 0 ){
        $(".hide-on-scroll").hide();
    } else {
        $(".hide-on-scroll").show();
    }
    $(".hide-on-scroll").css("opacity", op );
});
