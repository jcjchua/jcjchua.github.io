$(document).ready(function() {

$("#sbutton").click(function() {
	$("#discount-container").fadeOut( "slow" );
});

$(".navbaritem").css("cursor", "pointer")
	
$(".navbaritem").hover(
  function () {
    $(this).addClass('hover');
  }, 
  function () {
    $(this).removeClass('hover');
});

var $root = $('html, body');
$('a').click(function(){
	event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

function parallax() {
    var scrolled = $(window).scrollTop();
    $('.parallax').css("top", -(scrolled * 0.6) + 'px');
}

$(window).scroll(function() {
    parallax();
})

$(function() {
    	$('.banner').unslider({
    		speed: 500,               //  The speed to animate each slide (in milliseconds)
			delay: 3000,              //  The delay between slide animations (in milliseconds)
			complete: function() {},  //  A function that gets called after every slide animation
			keys: true,               //  Enable keyboard (left, right) arrow shortcuts
			dots: true,               //  Display dot navigation
			fluid: false             //  Support responsive design. May break non-responsive designs
		});
	});
});

//NOT IN USE FOR NOW
$( "#opener" ).click(function() {
    $( "#contact-container" ).show();
});