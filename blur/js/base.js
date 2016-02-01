function Scene() {
	var _sceneid,
		_scenetag;

	function _input() {
		console.log("should override this function.");
	}
	function _update() {
		console.log("should override this function.");
	}
	function _draw() {
		console.log("should override this function.");
	}

	return {
		id: _sceneid,
		input: _input,
		update: _update,
		draw: _draw,
	};
}
function System() {
	var _input,
		_screen,
		_sound;
}
function AppMain(w,h) {
	var _canvas,
		_context;
	function _createCanvas() {
		var container = document.createElement("div");
		container.id = "container";
		_canvas = document.createElement("canvas");
		_canvas.width = w;
		_canvas.height = h;
		container.appendChild(_canvas);

		document.body.appendChild(container);

		_context = _canvas.getContext("2d");
	}
	var _scene;
	function _input() {
	}
	function _update() {
	}
	function _draw() {
	}

	return {
		canvas: _canvas,
		context: _context,
		initialize: function () {
			_createCanvas();
		},
		run: function() {
			_input();
			_update();
			_draw();
		},
	};
}

function onWindowLoad(e) {
	var main = new AppMain(400,400);
	main.initialize();
	main.run();
}
window.addEventListener("load", onWindowLoad, false);

