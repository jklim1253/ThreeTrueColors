// ttc main procedures.
if (ttcGame === undefined) {
    var ttcGame = {};
}

$(document).ready(function(){
    var canvas = document.getElementById("game");
    ttcGame.ctx = canvas.getContext("2d");

    var width = canvas.width;
    var height = canvas.height;

    ttcGame.createRandomCircles(width, height);
    ttcGame.connectCircles();
});
