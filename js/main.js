window.onload = function(e) {
	var links = document.querySelectorAll('.archive a');

	for (var i = 0; i < links.length; ++i) {
		var a = links[i];
		a.addEventListener('click', function(e) {
			e.preventDefault();
			var href = this.getAttribute('href').substr(1);
			var query = document.getElementById(href);
			document.querySelector('body').scrollTop = query.getBoundingClientRect().top - 80;
		});
	}
};