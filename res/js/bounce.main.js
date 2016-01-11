// Bounce main procedures.
if (BounceGame === undefined) {
    var BounceGame = {};
}

$(document).ready(function(){
	BounceGame.begin();
});

BounceGame.begin = function() {
	BounceGame.initialize();

	setInterval(BounceGame.mainloop, 30);
};

BounceGame.initialize = function() {
	this.canvas = document.getElementById("game");
	this.context = this.canvas.getContext("2d");
	this.width = this.canvas.width;
	this.height = this.canvas.height;
};

BounceGame.mainloop = function() {
	BounceGame.handleInput();
	BounceGame.clear();
	BounceGame.drawObjects();
};
