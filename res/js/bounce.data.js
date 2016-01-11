// data declarations.
if (BounceGame === undefined) {
    var BounceGame = {};
}

BounceGame.objects = [];
BounceGame.ballRadius = 10;
BounceGame.ballColor = "#FF0000";
BounceGame.ballMax = 10;

BounceGame.mouse = function(x, y) {
	this.x = x;
	this.y = y;
}
BounceGame.position = function(x, y) {
	this.x = x;
	this.y = y;
};
BounceGame.Ball = function(center, radius, color) {
	this.center = center;
	this.radius = radius;
	this.color = color;
};
BounceGame.makeBall = function() {
	var mx = BounceGame.mouse.x;
	var my = BounceGame.mouse.y;
	var radius = BounceGame.ballRadius + Math.random()*5;
	var color = BounceGame.ballColor;

	BounceGame.objects.push(new BounceGame.Ball(new BounceGame.position(mx, my), radius, color));
	if (BounceGame.objects.length > BounceGame.ballMax) {
		BounceGame.objects.shift();
	}
}
