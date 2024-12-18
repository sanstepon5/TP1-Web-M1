
	var editingMode = { rect: 0, line: 1, ellipse: 2 };

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
	document.getElementById('butEllipse').onclick = (_) => this.onEllipseButtonClick()
	document.getElementById('colour').onchange = (_) => this.onColorChange()
	document.getElementById('spinnerWidth').onchange = (_) => this.onWidthSpinnerChange()

	this.onRectButtonClick = function () {
		this.currEditingMode = editingMode.rect;
	}
	this.onLineButtonClick = function () {
		this.currEditingMode = editingMode.line;
	}
	this.onEllipseButtonClick = function () {
		this.currEditingMode = editingMode.ellipse;
	}
	this.onColorChange = function () {
		this.currColour = document.getElementById('colour').value;
	}
	this.onWidthSpinnerChange = function () {
		this.currLineWidth = document.getElementById('spinnerWidth').value;
	}

	new DnD(canvas, this);
	this.onInteractionCreatingShapes = function (dnd){
		if(this.currEditingMode === editingMode.line) {
			this.currentShape = new Line(dnd.initPosDnD_x, dnd.initPosDnD_y,this.currLineWidth, this.currColour,
				dnd.finalPosDnD_x, dnd.finalPosDnD_y);
		}
		else if(this.currEditingMode === editingMode.rect) {
			this.currentShape = new Rectangle(dnd.initPosDnD_x, dnd.initPosDnD_y, this.currLineWidth, this.currColour,
				dnd.finalPosDnD_x - dnd.initPosDnD_x, dnd.finalPosDnD_y - dnd.initPosDnD_y);

		}
		else if(this.currEditingMode === editingMode.ellipse) {
			this.currentShape = new Ellipse(dnd.initPosDnD_x,dnd.initPosDnD_y, this.currLineWidth, this.currColour,
				dnd.finalPosDnD_x -dnd.initPosDnD_x, dnd.finalPosDnD_y - dnd.initPosDnD_y,Math.PI / 4, 0 , 2 * Math.PI);
		}
		drawing.paint(ctx);
		this.currentShape.paint(ctx);

	}.bind(this);
	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function (dnd){
		if(this.currEditingMode === editingMode.line) {
			this.currentShape = new Line();
		}
		else if(this.currEditingMode === editingMode.rect) {
			this.currentShape = new Rectangle();
		}
		else if(this.currEditingMode === editingMode.ellipse) {
			this.currentShape = new Ellipse();
		}
		drawing.paint(ctx);
		this.currentShape.paint(ctx);
	}.bind(this);

	this.onInteractionUpdate = function (dnd){
		this.onInteractionCreatingShapes(dnd);
	}.bind(this);

	this.onInteractionEnd = function (dnd){
		this.onInteractionCreatingShapes(dnd);
		let newId = generateUniqueId();
		drawing.shapeArr.set(newId,this.currentShape);

		updateShapeList(newId, this.currentShape, this.currEditingMode);
		//adding the onclick
		document.getElementById("liRemove" + newId).onclick = (event) =>
			remove(drawing,event.currentTarget.id.substring(8),ctx,canvas)

	}.bind(this);
}

function remove (drawing,id,ctx,canvas) {
	drawing.shapeArr.delete(id);
	document.getElementById('liRemove' + id).remove()
	drawing.paint(ctx,canvas);//erase the fig
}

//

//------------------- generating id for the buttons deleting the shapes-----

	let generatedIds = new Set();

	function generateUniqueId() {
		let id;
		do {
			let timestamp = Date.now().toString(36).slice(-8);
			let random = Math.floor(Math.random() * 1000000).toString(36).padStart(6, '0');
			id = `${timestamp}-${random}`;
		} while (generatedIds.has(id));

		generatedIds.add(id);
		return id;
	}
