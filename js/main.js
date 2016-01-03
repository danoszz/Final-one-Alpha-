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
});


$(document).ready(function(){
    $('#dvdz-toggle-two').change(function(){
        if(this.checked)
            $('#panel-two').slideDown('slow');
        else
            $('#panel-two').slideUp('slow');

    });
});

$(document).ready(function(){
    $('#dvdz-toggle-three').change(function(){
        if(this.checked)
            $('#panel-three').slideDown('slow');
        else
            $('#panel-three').slideUp('slow');

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

// Grid Masonry

/*
$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 900,
  isFitWidth: true,
  gutter: 30,
  isAnimated: true.
  animationOptions: {
    duration: 400
  }
});

*/

$(document).ready( function() {

  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 180,
    isFitWidth: true
  });

});


// Call the Animation Overlay

$(document).ready(function() {
  $(".animsition-overlay").animsition({
    inClass: 'overlay-slide-in-bottom',
    outClass: 'overlay-slide-out-bottom',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : true,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});
