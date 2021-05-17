$(document).ready(function () {
	$(".sub > a").click(function() {
		var ul = $(this).next(),
				clone = ul.clone().css({"height":"auto"}).appendTo(".main-menu"),
				height = ul.css("height") === "0px" ? ul[0].scrollHeight + "px" : "0px";
		clone.remove();
		ul.animate({"height":height});
		return false;
	});
       $('.main-menu > ul > li > a').click(function(){
	   $('.main-menu > ul > li > a, .sub a').removeClass('active');
	   $(this).addClass('active');
	}),
       $('.sub ul li a').click(function(){
	   $('.sub ul li a').removeClass('active');
	   $(this).addClass('active');
	});

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});
	$('a[href^="#b"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();
 
		var target = this.hash,
		$target = $(target);
 
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 1500, 'swing', function () {
			window.location.hash = target;
		});
	});
	$('.accordion-item .heading').on('click', function(e) {
    e.preventDefault();

    // Add the correct active class
    if($(this).closest('.accordion-item').hasClass('active')) {
        // Remove active classes
        $('.accordion-item').removeClass('active');
    } else {
        // Remove active classes
        $('.accordion-item').removeClass('active');

        // Add the active class
        $(this).closest('.accordion-item').addClass('active');
    }

    // Show the content
    var $content = $(this).next();
    $content.slideToggle(700);
    $('.accordion-item .content').not($content).slideUp('fast');
});
});

function questTypeOne(quest, answer) {
	var qNumber = $('input:radio[name='+quest+']:checked');
	var result = $('.'+quest+'-result');
			result.empty();
		if (qNumber.val() == answer) {
			result.append('<span class="msg-ok">Правильно</span>');
		} else {
			result.append('<span class="msg-er">Не правильно</span>');
		}
};

function questTypeTwo(quest, answer1, answer2) {
	var qNumber = $('input:checkbox[name='+quest+']:checked');
	var result = $('.'+quest+'-result');
			result.empty();
		if ((qNumber[0].value == answer1) && (qNumber[1].value == answer2)) {
			result.append('<span class="msg-ok">Правильно</span>');
		} else {
			result.append('<span class="msg-er">Не правильно</span>');
		}
};