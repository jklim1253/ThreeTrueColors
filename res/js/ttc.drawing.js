// drawing function wrappers.
if (ttcGame === undefined) {
    var ttcGame = {};
}

ttcGame.clear = function() {
	var ctx = ttcGame.ctx;
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};
ttcGame.drawAllLines = function() {
	for (var index in ttcGame.lines) {
		var sp = ttcGame.lines[index].startPoint;
		var ep = ttcGame.lines[index].endPoint;
		var thickness = ttcGame.lines[index].thickness;

		ttcGame.drawLine(sp.x, sp.y, ep.x, ep.y, thickness);
	}
};
ttcGame.drawAllCircles = function() {
	for (var index in ttcGame.circles) {
		var circle = ttcGame.circles[index];
		
		ttcGame.drawCircle(circle.x, circle.y, circle.radius);
	}
};
ttcGame.drawCircle = function(x, y, radius) {
    var ctx = ttcGame.ctx;
    ctx.fillStyle = "gold";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
};
ttcGame.drawLine = function(x1, y1, x2, y2, thickness) {
    var ctx = ttcGame.ctx;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.lineWidth = thickness;
    ctx.strokeStyle = "#cfc";
    ctx.stroke();
};
