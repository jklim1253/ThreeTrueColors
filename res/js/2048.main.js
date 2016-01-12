// 2048 main

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

	Debugger.log("2048 now");

	function drawScreen() {
		// background.
		context.fillStyle = "#fefeee";
		context.fillRect(0,0,canvas.width,canvas.height);

		context.strokeStyle = "#ededdd";
		context.strokeRect(10, 10, canvas.width-20, canvas.height-20);

		// board
		context.fillStyle = "#feeeee";
		context.fillRect(50, 150, 300, 300);

		context.strokeStyle = "#dccccc";
		context.lineWidth = 10;
		context.strokeRect(55, 155, 290, 290);

		// title
		context.fillStyle = "#000000";
		context.font = "50px Sans-serif bold";
		context.textBaseline = "top";
		context.textAlign = "center";
		context.fillText("2048", 200, 50);

		// point
	}

	drawScreen();
}
