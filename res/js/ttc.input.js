// input process
if (ttcGame === undefined) {
    var ttcGame = {};
}

ttcGame.handleInput = function() {
	$("#game").bind("mousedown", function(e) {
		var canvasPosition = $(this).offset();
		var mouseX = e.pageX - canvasPosition.left;
		var mouseY = e.pageY - canvasPosition.top;

		for (var index in ttcGame.circles) {
			var x = ttcGame.circles[index].x;
			var y = ttcGame.circles[index].y;
			var r = ttcGame.circles[index].radius;

			if ((mouseX-x)*(mouseX-x) + (mouseY-y)*(mouseY-y)
				< r*r) {
				ttcGame.targetCircleIndex = index;
				break;
			}
		}
	});
	$("#game").bind("mousemove", function(e) {
		if (ttcGame.targetCircleIndex === undefined) {
			return;
		}

		var offset = $(this).offset();
		var mouseX = e.pageX - offset.left;
		var mouseY = e.pageY - offset.top;
		var circle = ttcGame.circles[ttcGame.targetCircleIndex];
		circle.x = mouseX;
		circle.y = mouseY;

		ttcGame.connectCircles();
	});
	$("#game").bind("mouseup", function(e) {
		ttcGame.targetCircleIndex = undefined;
	});
};
