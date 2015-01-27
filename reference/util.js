var Converter = {};

Converter.pxToVw = function(px) {
	var scalar = 100/window.innerWidth;
	return px * scalar;
}

Converter.pxToVh = function(px) {
	var scalar = 100/window.innerHeight;
	return px * scalar;
}