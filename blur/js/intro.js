function Intro(system) {
	function _input() {
		console.log("should override this function.");
	}
	function _update() {
		console.log("should override this function.");
	}
	function _draw() {
		if (!system.screen) {
			console.log("unknown screen");
			return;
		}
	}

	return {
		id: "intro",
		input: _input,
		update: _update,
		draw: _draw,
	};
}
