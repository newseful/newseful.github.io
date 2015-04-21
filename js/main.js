if (window.location.pathname.match('docs')) {
	NodeList.prototype.forEach = Array.prototype.forEach;
	NodeList.prototype.reduce = Array.prototype.reduce;

	function updateCurrentIndicator() {
		var breaker = false;
		var currentPosition = links.reduce(function(a, l) {
			l.classList.remove('panel__navigation-link--current');
			
			if (breaker)
				return a;

			var section = docReader.querySelector(l.getAttribute('href'));
			if (section.offsetTop - 64 <= docReader.scrollTop) {
				++a;
			}

			if (docReader.scrollTop >= docReader.scrollHeight - section.getBoundingClientRect().height - 50) {
				a = links.length - 1;
				breaker = true;
			}

			return a;
		}, -1);

		if (currentPosition < 0)
			currentPosition = 0;

		links[currentPosition].classList.add('panel__navigation-link--current');
	}

	var docReader = document.querySelector('.left-panel');
	var navigation = docReader.querySelector('.panel__navigation-list');
	var links = docReader.querySelectorAll('.panel__navigation-link');

	links.forEach(function(l) {
		l.addEventListener('click', function(e) {
			e.preventDefault();
			var offset = docReader.querySelector(this.getAttribute('href')).offsetTop;
			docReader.scrollTop = offset - 64;

			updateCurrentIndicator();
		});
	});

	docReader.addEventListener('scroll', function(e) {
		updateCurrentIndicator();
	});
}