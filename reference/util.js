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
};