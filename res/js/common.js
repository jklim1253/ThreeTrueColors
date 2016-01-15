// my game engine using canvas 2d

var Debugger = function() {};
Debugger.log = function(msg) {
	try {
		console.log(msg);
	}
	catch (exception) {
		return;
	}
};

function canvasSupport() {
	return Modernizr.canvas;
}
function D2R(degree) {
	return degree*Math.PI/180;
}
