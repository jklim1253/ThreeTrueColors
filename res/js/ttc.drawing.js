// drawing function wrappers.
if (ttcGame === undefined) {
    var ttcGame = {};
}

ttcGame.thinLineThickness = 1;
ttcGame.lines = [];

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
