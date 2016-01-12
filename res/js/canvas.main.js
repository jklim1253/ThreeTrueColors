// Canvas main

window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded() {
	MainApp();
}
function MainApp() {
	if (!canvasSupport) {
		return;
	}

	var canvas = document.getElementById("screen");
	var context = canvas.getContext("2d");

	Debugger.log("Drawing Canvas");

	function drawScreen() {

		// fill background.
		context.fillStyle = "#ffffaa";
		context.fillRect(0,0,500,300);

		// draw text
		context.fillStyle = "#000000";
		context.font = "20px Sans-Serif";
		context.textBaseline = "top";
		context.fillText("Hello World!", 195, 80);

		// draw image
		var helloImage = new Image();
		helloImage.onload = function() {
			context.drawImage(helloImage, 145, 90);
		}
		helloImage.src = "res/img/hello.png";

		// draw box
		context.strokeStyle = "#ffaaaa";
		context.strokeRect(10, 10, 480, 280);
	}

	drawScreen();
}
