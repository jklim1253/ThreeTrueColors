// data declarations.
if (ttcGame === undefined) {
    var ttcGame = {};
}

ttcGame.circles = [];
ttcGame.lines = [];
ttcGame.thinLineThickness = 1;

ttcGame.Circle = function(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
};
ttcGame.Line = function(startPoint, endPoint, thickness) {
    this.startPoint = startPoint;
    this.endPoint = endPoint;
    this.thickness = thickness;
};
ttcGame.createRandomCircles = function(width, height) {
    var count = 5;
    var radius = 10;
    for (var i = 0; i < count; ++i) {
        var x = radius + Math.random()*(width - 2*radius);
        var y = radius + Math.random()*(height - 2*radius);

        ttcGame.circles.push(new ttcGame.Circle(x,y,radius));
//        ttcGame.drawCircle(x, y, radius);
    }
};
ttcGame.connectCircles = function() {
    ttcGame.lines.length = 0;
    for (var i = 0; i < ttcGame.circles.length; ++i) {
        var startPoint = ttcGame.circles[i];
        for (var j = i+1; j < ttcGame.circles.length; ++j) {
            var endPoint = ttcGame.circles[j];
            ttcGame.lines.push(new ttcGame.Line(
                startPoint, endPoint, ttcGame.thinLineThickness
            ));
//            ttcGame.drawLine(
//                startPoint.x, startPoint.y,
//                endPoint.x, endPoint.y,
//                ttcGame.thinLineThickness);
        }
    }
};
