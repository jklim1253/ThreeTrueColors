// input process
if (BounceGame === undefined) {
    var BounceGame = {};
}

BounceGame.clicked = false;

BounceGame.handleInput = function() {
	$("#game").bind("mousedown", function(e) {
		BounceGame.clicked = true;
	});
	$("#game").bind("mousemove", function(e) {
//		if (BounceGame.targetCircleIndex === undefined) {
//			return;
//		}
//
//		var offset = $(this).offset();
//		var mouseX = e.pageX - offset.left;
//		var mouseY = e.pageY - offset.top;
//		var circle = BounceGame.circles[BounceGame.targetCircleIndex];
//		circle.x = mouseX;
//		circle.y = mouseY;
//
//		BounceGame.connectCircles();
	});
	$("#game").bind("mouseup", function(e) {
//		BounceGame.targetCircleIndex = undefined;
		if (!BounceGame.clicked) return;

		var offset = $(this).offset();
		BounceGame.mouse.x = e.pageX - offset.left;
		BounceGame.mouse.y = e.pageY - offset.top;

		BounceGame.makeBall();

		BounceGame.clicked = false;
	});
};
