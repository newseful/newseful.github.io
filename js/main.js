$(document).ready(function() {

	$(".archive a").on("click", function(e) {
		e.preventDefault();
		var href=$(this).attr('href').substr(1);
		var query = document.getElementById(href);

		console.log(query);
		$('html, body').animate({
        scrollTop: $(query).offset().top - 85
    }, 200);
	})
});