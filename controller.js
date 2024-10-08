
	var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;
	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	this.currColour = document.getElementById('colour').value
	this.currLineWidth = document.getElementById('spinnerWidth').value;

	document.getElementById('butRect').onclick = (_) => this.onRectButtonClick()
	document.getElementById('butLine').onclick = (_) => this.onLineButtonClick()
	document.getElementById('colour').onchange = (_) => this.onColorChange()
	document.getElementById('spinnerWidth').onchange = (_) => this.onWidthSpinnerChange()

	this.onRectButtonClick = function () {
		this.currEditingMode = editingMode.rect;
	}
	this.onLineButtonClick = function () {
		this.currEditingMode = editingMode.line;
	}
	this.onColorChange = function () {
		this.currColour = document.getElementById('colour').value;
	}
	this.onWidthSpinnerChange = function () {
		this.currLineWidth = document.getElementById('spinnerWidth').value;
	}

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function (dnd){
		if(this.currEditingMode === editingMode.line) {
			this.currentShape = new Line();
		}
		else {
			this.currentShape = new Rectangle();
		}
		drawing.paint(ctx);
		this.currentShape.paint(ctx);
	}.bind(this);

	this.onInteractionUpdate = function (dnd){
		console.log(this.currColour)
		if(this.currEditingMode === editingMode.line) {
			this.currentShape = new Line(dnd.initPosDnD_x, dnd.initPosDnD_y,this.currLineWidth, this.currColour,
				dnd.finalPosDnD_x, dnd.finalPosDnD_y);
		}
		else{
			this.currentShape = new Rectangle(dnd.initPosDnD_x, dnd.initPosDnD_y,this.currLineWidth, this.currColour,
				dnd.finalPosDnD_x - dnd.initPosDnD_x,dnd.finalPosDnD_y - dnd.initPosDnD_y);
		}
		drawing.paint(ctx);
		this.currentShape.paint(ctx);
	}.bind(this);

	this.onInteractionEnd = function (dnd){
		if(this.currEditingMode === editingMode.line){
			this.currentShape = new Line(dnd.initPosDnD_x, dnd.initPosDnD_y,this.currLineWidth, this.currColour,
				dnd.finalPosDnD_x, dnd.finalPosDnD_y);
		}
		else{
			this.currentShape = new Rectangle(dnd.initPosDnD_x, dnd.initPosDnD_y,this.currLineWidth, this.currColour,
				dnd.finalPosDnD_x - dnd.initPosDnD_x,dnd.finalPosDnD_y - dnd.initPosDnD_y);
		}

		drawing.paint(ctx);
		this.currentShape.paint(ctx);
		drawing.formesArr.push(this.currentShape);

	}.bind(this);
}


