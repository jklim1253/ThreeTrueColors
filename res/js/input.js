var KeyBoardStatic = function(){
	this.Enter = 13;
	this.Tab = 9;
	this.Esc = 27;
	this.Space = 32;
	this.Backspace = 8;
	this.Shift = 16;
	this.Control = 17;
	this.Alt = 18;
	this.Capslock = 20;
	this.Numlock = 144;
	this.Num0 = 48;
	this.Num1 = 49;
	this.Numplus = 107;
	this.Numminus = 109;
	this.PageUp = 33;
	this.PageDown = 34;
	this.A = 65;
	this.B = 66;
	this.C = 67;
	this.D = 68;
	this.E = 69;
	this.F = 70;
	this.G = 71;
	this.H = 72;
	this.I = 73;
	this.S = 83;
	this.W = 87;
};
AppMain.KeyBoard = new KeyBoardStatic();
AppMain.keyState = [];
AppMain.clickState = [];

AppMain.prototype.inputProcess = function() {
};
