console.log("inv:rdy");
jQuery(document).ready(function($){
	// Cambio de color del nav con el scroll
	$(document).scroll(function () {
		console.log('scolling');
		var $nav = $("#inversionistas-navegacion");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
	// Configuracion slider inicio
	$('#inicio-slider').slick({
		arrows: false,
		dots: true
	});
});