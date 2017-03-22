$(function() {
    "use strict";

	var revapi; // revolution slider instance variable
	
	main_menu();
	mobile_menu();
	sticky_header();
	
	shop_price_filter();
	shop_product_qty();
	shop_cart_qty();
	popup();
	
	contact_map();
	contact_form();
	
    revolution_slider();
	portfolio_filter();
    twitter_feed();
    flickr_feed();

    parallax_background_video();
    parallax_background_image();
	carousel_handler();
	tooltip();
	
	
});

function main_menu() {
	$('ul.sf-menu').superfish({
        speed:       'normal',
		disableHI:   false,
		delay:       150
	});
}

function mobile_menu() {
	$("#header #nav_bar #mobile_menu").sidr();
	$("#sidr .sidr_close").click(function() {
		$.sidr('close', 'sidr');
		return false;
	});
	
	$('li.groupheader .headerbutton').click(function() {
		
		if( $(this).hasClass('fa-angle-right') ) {
			$(this).removeClass('fa-angle-right').addClass('fa-angle-down');
		} else {
			$(this).removeClass('fa-angle-down').addClass('fa-angle-right');
		}
		
		$(this).siblings('ul').slideToggle();
		
    });
}

function sticky_header() {
	$("#header #nav_bar").sticky({
		topSpacing: 0,
		wrapperClassName: "header_sticky"
	});
}

function shop_price_filter() {
	$('#price_slider_range').slider({
		range: true,
		min: 0,
		max: 500,
		values: [75, 300],
		slide: function(event, ui) {
			$('#amount').val('$' + ui.values[0] + " - $" + ui.values[1]);
		}
	});
	$('#amount').val('$' + $('#price_slider_range').slider('values', 0) + ' - $' + $('#price_slider_range').slider('values', 1));
}

function shop_product_qty() {
	
	var qty_field = $('#shop_product.page .details .cart_qty .quantity');
	var qty_current = $(qty_field).val();
	
	// Increase Product Quantity
	$('#shop_product.page .details .cart_qty a.qty_plus').on('click', function() {
		qty_current++;
		$(qty_field).val(qty_current);
		
		return false;
	});
	
	// Decrease Product Quantity
	$('#shop_product.page .details .cart_qty a.qty_minus').on('click', function() {
		
		if(qty_current > 1) {
			qty_current--;
			$(qty_field).val(qty_current);
		} else {
			$(qty_field).val(1);
		}
		
		return false;
	});
	
}

function shop_cart_qty() {
	
	// Increase Product Quantity
	$('#shop_cart.page .cart_items .qty a.qty_plus').on('click', function() {
		
		var qty_current = $(this).siblings('.quantity').val();
		
		qty_current++;
		$(this).siblings('.quantity').val(qty_current);
		
		return false;
	});
	
	// Decrease Product Quantity
	$('#shop_cart.page .cart_items .qty a.qty_minus').on('click', function() {
		
		var qty_current = $(this).siblings('.quantity').val();
		
		if(qty_current > 0) {
			qty_current--;
			$(this).siblings('.quantity').val(qty_current);
		} else {
			$(this).siblings('.quantity').val(0);
		}
		
		return false;
	});
	
}

function popup() {
	$('.fancybox').fancybox({
		'transitionIn': 'fade',
		'transitionOut': 'fade',
		'speedIn': '800',
		'speedOut': '400',
		'overlayShow': true,
		'padding': '3',
		'hideOnContentClick' : true,
		'titlePosition' : 'outside',
		'titleFormat' : null
	});
}

function contact_map() {
	$('#contact.page #map').gmap3({
		map:{
			options:{
			   center: [37.789606,-122.395638],
			   zoom: 15,
			   mapTypeId: google.maps.MapTypeId.ROADMAP				    
			}
		},
		marker:{
			latLng:[37.789606,-122.395638]
		}
	});
}

function contact_form() {
	$("#contact_send").on('click', function() {
		
		var name     = $('input#name').val();
		var email    = $('input#email').val();
		var message  = $('textarea#message').val();
		var post     = 'name=' + name + '&email=' + email + '&message=' + message;
		
		$.post('sendmail.php', post, function(data) {
			$("#contact.page div#responce").html(data);
		});
		
		return false;
	});
}

function revolution_slider() {

   revapi = $('#slider .tp-banner').revolution({
				delay:4500,
				startwidth:1170,
				startheight:450,
				hideThumbs:10
			});
}

function portfolio_filter() {

	$(window).load(function() {

		$('.portfolio_items').isotope({
			filter: '*',
			animationOptions: {
				duration: 850,
				easing: 'linear',
				queue: false
			}
		});
		
	});
	
    $('.portfolio_filter a').on('click', function () {

        $('.portfolio_filter li a').removeClass('selected');
        $(this).addClass('selected');
        var selector = $(this).attr('data-filter');

        $('.portfolio_items').isotope({
            filter: selector,
            animationOptions: {
                duration: 850,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

}

function twitter_feed() {
    $(".tweets #latest_tweets, #footer .twitter_feed").tweet({
        username: 'crowdvalley',
        modpath: 'assets/plugins/twitter/',
        jointext: "auto",
        avatar_size: 25,
        count: 3,
        auto_join_text_default: "we said,",
        auto_join_text_ed: "we",
        auto_join_text_ing: "we were",
        auto_join_text_reply: "we replied to",
        auto_join_text_url: "we were checking out",
        loading_text: "loading tweets..."
    })
}

function flickr_feed() {
    $("#flickr_feed").jflickrfeed({
        limit: 9,
        qstrings: {
            id: '34903216@N04'
        },
        useTemplate: false,
        itemCallback: function (item) {
            $(this).append("<li><a target='_blank' href='" + item.link + "'><img src='" + item.image_m + "' alt=''/></a></li>");
        }
    });
}

function parallax_background_video() {
    $('.player').mb_YTPlayer();
}

function parallax_background_image() {
    $('.parallax_section.bg').parallax("50%", 0.6);
}

function carousel_handler() {

    $("#happy_clients #testimonials_carousel").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 700,
        singleItem: true
    });
}

function tooltip() {
	$('.tool_tip').tooltip();
}