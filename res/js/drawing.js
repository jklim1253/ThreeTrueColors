
if (ttcGame === undefined) {
    var ttcGame = {};
}

ttcGame.drawCircle = function(x, y, radius) {
    var ctx = ttcGame.ctx;
    ctx.fillStyle = "gold";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
};
