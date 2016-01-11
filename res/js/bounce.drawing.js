// drawing function wrappers.
if (BounceGame === undefined) {
    var BounceGame = {};
}

BounceGame.clear = function() {
	var ctx = BounceGame.context;
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};
BounceGame.drawObjects = function() {
	for (var index in BounceGame.objects) {
		var ball = BounceGame.objects[index];
		BounceGame.drawCircle(ball.center.x, ball.center.y, ball.radius, ball.color);
	}
};
BounceGame.drawCircle = function(x, y, radius, color) {
    var ctx = BounceGame.context;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
};
BounceGame.drawLine = function(x1, y1, x2, y2, thickness) {
    var ctx = BounceGame.context;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.lineWidth = thickness;
    ctx.strokeStyle = "#cfc";
    ctx.stroke();
};
