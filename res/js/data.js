
if (ttcGame === undefined) {
    var ttcGame = {};
}

ttcGame.createRandomCircles = function(width, height) {
    var count = 5;
    var radius = 10;
    for (var i = 0; i < count; ++i) {
        var x = Math.random()*width;
        var y = Math.random()*height;
        ttcGame.drawCircle(x, y, radius);
    }
};
