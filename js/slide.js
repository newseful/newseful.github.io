NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.reduce = Array.prototype.reduce;
NodeList.prototype.forEach = Array.prototype.forEach;

var Slider = function(el) {
	this.el = el;
	this.slidesContainer = this.el.querySelector('.slides');
	this.slides = this.getSlides();
	this.slideWidth = window.innerWidth;
	this.slideHeight = this.getSlideHeight();
	this.totalWidth = this.slideWidth * this.slides.length;

	this.advance = this.el.querySelector('.advance');
	this.retreat = this.el.querySelector('.retreat');

	this.position = 0;

	this.layout();
	this.listen();
}

Slider.prototype.getSlideHeight = function() {
	this.slides.forEach(function(s, i) {
		if (i > 0) {
			s.style.display = 'none';
		}
	});

	this.slideHeight = this.el.parentNode.getBoundingClientRect().height;
}

Slider.prototype.getKeySlide = function() {
	return this.slides[0];
}

Slider.prototype.getSlides = function() {
	return this.el.querySelectorAll('.slide');
}

Slider.prototype.layout = function() {
	var _this = this;

	this.el.style.width = this.slideWidth + 'px';
	this.el.style.height = this.slideHeight + 'px';
	this.slidesContainer.style.width = this.totalWidth + 'px';
	this.slidesContainer.style.marginLeft = '0px';
	this.slides.forEach(function(s) {
		s.style.display = 'block';
		s.style.float = 'left';
		s.style.width = _this.slideWidth + 'px';
		s.style.height = _this.slideHeight + 'px';
		s.style.position = 'relative';
	});
}

Slider.prototype.move = function(n) {
	var toMove = n * this.slideWidth,
			position = -1 * parseInt(this.slidesContainer.style.marginLeft),
			newPosition = position + toMove;

	if (newPosition > this.totalWidth - this.slideWidth) {
		newPosition = 0;
	}

	this.slidesContainer.style.marginLeft = -1 * newPosition + 'px';
	this.position += n;
}

Slider.prototype.advanceSlide = function() {
	this.move(1);
}

Slider.prototype.retreatSlide = function() {
	this.move(-1);
}

Slider.prototype.listen = function() {
	this.advance.addEventListener('click', this.advanceSlide.bind(this));
	this.retreat.addEventListener('click', this.retreatSlide.bind(this));
}

