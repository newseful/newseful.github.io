var Converter = {};

Converter.pxToVw = function(px) {
	var scalar = 100/window.innerWidth;
	return px * scalar;
}

Converter.pxToVh = function(px) {
	var scalar = 100/window.innerHeight;
	return px * scalar;
}

String.prototype.insert = function (index, string) {
  if (index > 0)
    return this.substring(0, index) + string + this.substring(index, this.length);
  else
    return string + this;
}

Converter.vhToPx = function(vh) {
	var scalar = window.innerHeight / 100;
	return vh * scalar;
}

Converter.vwToPx = function(vw) {
	var scalar = window.innerWidth / 100;
	return vw * scalar;
}

var imageMap = function(range, prefix) {
	map = [];

	for (var i = 1; i <= range; ++i) {
		map.push(prefix + "-0" + i + ".jpg");
	}

	return map;
}