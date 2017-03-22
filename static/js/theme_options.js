!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function o(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function r(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(c," ")),u.json?JSON.parse(e):e}catch(n){}}function t(n,o){var i=u.raw?n:r(n);return e.isFunction(o)?o(i):i}var c=/\+/g,u=e.cookie=function(r,c,f){if(void 0!==c&&!e.isFunction(c)){if(f=e.extend({},u.defaults,f),"number"==typeof f.expires){var a=f.expires,d=f.expires=new Date;d.setTime(+d+864e5*a)}return document.cookie=[n(r),"=",i(c),f.expires?"; expires="+f.expires.toUTCString():"",f.path?"; path="+f.path:"",f.domain?"; domain="+f.domain:"",f.secure?"; secure":""].join("")}for(var p=r?void 0:{},s=document.cookie?document.cookie.split("; "):[],m=0,x=s.length;x>m;m++){var v=s[m].split("="),k=o(v.shift()),l=v.join("=");if(r&&r===k){p=t(l,c);break}r||void 0===(l=t(l))||(p[k]=l)}return p};u.defaults={},e.removeCookie=function(n,o){return void 0===e.cookie(n)?!1:(e.cookie(n,"",e.extend({},o,{expires:-1})),!e.cookie(n))}});

$(document).ready(function() {

	$('body').append('<div class="theme_options_panel">' +
						'<div class="heading">SETTINGS</div>' +
						
						'<div class="options_content">' +
							'<div class="options_title">LAYOUT STYLE</div>' +
							'<a class="layout wide" rel="wide" href="#">WIDE</a>' +
							'<a class="layout" rel="boxed" href="#">BOXED</a>' +
							'<div class="space_20"></div>' +
							
							'<div class="options_title">COLOUR SCHEME</div>' +
							'<a class="scheme red" rel="red" href="#"></a>' +
							'<a class="scheme green" rel="green" href="#"></a>' +
							'<a class="scheme yellow" rel="yellow" href="#"></a>' +
							'<a class="scheme blue" rel="blue" href="#"></a>' +
							'<a class="scheme orange" rel="orange" href="#"></a>' +
							
							'<a class="scheme ocean" rel="ocean" href="#"></a>' +
							'<a class="scheme pink" rel="pink" href="#"></a>' +
							'<a class="scheme darkblue" rel="darkblue" href="#"></a>' +
							'<a class="scheme purple" rel="purple" href="#"></a>' +
							'<a class="scheme brown" rel="brown" href="#"></a>' +
							
							'<div class="options_title">BACKGROUND PATTERN</div>' +
							'<a class="bg_pattern" rel="bg" href="#"><img src="assets/images/bg_patterns/preview/bg.png" alt="" /></a>' +
							'<a class="bg_pattern" rel="bg2" href="#"><img src="assets/images/bg_patterns/preview/bg2.png" alt="" /></a>' +
							'<a class="bg_pattern" rel="bg3" href="#"><img src="assets/images/bg_patterns/preview/bg3.png" alt="" /></a>' +
							'<a class="bg_pattern" rel="bg4" href="#"><img src="assets/images/bg_patterns/preview/bg4.png" alt="" /></a>' +
							'<a class="bg_pattern" rel="bg5" href="#"><img src="assets/images/bg_patterns/preview/bg5.png" alt="" /></a>' +
							'<a class="bg_pattern" rel="bg6" href="#"><img src="assets/images/bg_patterns/preview/bg6.png" alt="" /></a>' +
							'<a class="bg_pattern" rel="bg7" href="#"><img src="assets/images/bg_patterns/preview/bg7.png" alt="" /></a>' +
							'<a class="bg_pattern" rel="bg8" href="#"><img src="assets/images/bg_patterns/preview/bg8.png" alt="" /></a>' +
							'<a class="bg_pattern" rel="bg9" href="#"><img src="assets/images/bg_patterns/preview/bg9.png" alt="" /></a>' +
							'<a class="bg_pattern" rel="bg10" href="#"><img src="assets/images/bg_patterns/preview/bg10.png" alt="" /></a>' +
							
							'<a class="reset" href="#">RESET SETTINGS</a>' +
						'</div>' +
						'<div class="option_btn"><i class="fa fa-cogs"></i></div>' +
					'</div>');
	
	
	// Open or Close Theme Options Panel
	$('.theme_options_panel .option_btn').click(function() {
		
		if( $('.theme_options_panel').css('left') != '0px' ) {
			$('.theme_options_panel').animate({left:'0px'}, {duration:250});
		} else {
			$('.theme_options_panel').animate({left:'-205px'}, {duration:250});
		}
		
	});
	
	
	// Initialize Layout From Settings
	var impulse_layout = ($.cookie('impulse_layout') !== undefined) ? $.cookie('impulse_layout') : 'wide';
	var impulse_colour_scheme = ($.cookie('impulse_colour_scheme') !== undefined) ? $.cookie('impulse_colour_scheme') : 'red';
	var impulse_bg_pattern = ($.cookie('impulse_bg_pattern') !== undefined) ? $.cookie('impulse_bg_pattern') : 'bg';
	
	if(impulse_layout == "boxed") {
		$('body').removeClass();
		$('body').addClass('container').addClass('boxed').addClass(impulse_bg_pattern);
	}
	$('head #impulse_ui').attr('href', 'assets/css/themes/'+ impulse_colour_scheme +'/'+ impulse_colour_scheme +'.css');
	$('#header #nav_bar a.logo img').attr('src', 'assets/images/impulse_logos/logo_' + impulse_colour_scheme + '.png');
	
	
	// Change Layout
	$('.theme_options_panel a.layout').click(function() {
		
		var theme_layout = $(this).attr('rel');
		$.cookie('impulse_layout', theme_layout, { expires: 7, path: '/' });

		if(theme_layout == "wide") {
			$('body').removeClass();
		} else {
			$('body').addClass('container').addClass('boxed').addClass('bg');
		}
		
		revapi.revredraw();
	});
	

	// Change Colour Scheme
	$('.theme_options_panel a.scheme').click(function() {
		
		var colour_scheme = $(this).attr('rel');
		$.cookie('impulse_colour_scheme', colour_scheme, { expires: 7, path: '/' });
		
		$('head #impulse_ui').attr('href', 'assets/css/themes/'+ colour_scheme +'/'+ colour_scheme +'.css');
		$('#header #nav_bar a.logo img').attr('src', 'assets/images/impulse_logos/logo_' + colour_scheme + '.png');
		
		return false;
	});
	
	
	// Change Boxed Layout Background Pattern
	$('.theme_options_panel a.bg_pattern').click(function() {
		
		var theme_bg_pattern = $(this).attr('rel');
		$.cookie('impulse_bg_pattern', theme_bg_pattern, { expires: 7, path: '/' });
		
		$('body').removeClass();
		$('body').addClass('container').addClass('boxed').addClass(theme_bg_pattern);
		
		return false;
	});
	
	
	// Reset Settings
	$('.theme_options_panel a.reset').click(function() {
		
		$.removeCookie('impulse_layout', { path: '/' });
		$.removeCookie('impulse_colour_scheme', { path: '/' });
		$.removeCookie('impulse_bg_pattern', { path: '/' });
		
		$('body').removeClass();
		$('head #impulse_ui').attr('href', 'assets/css/themes/red/red.css');
		$('#header #nav_bar a.logo img').attr('src', 'assets/images/impulse_logos/logo_red.png');
		revapi.revredraw();
		
		return false;
	});
	
});