
	var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;
	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function (dnd){
		if(this.currEditingMode === 1){
			this.currentShape = new Line(dnd.initPosDnD_x, dnd.initPosDnD_y,0,0,this.currLineWidth,this.currColour);
			this.currentShape.paint(ctx);
			console.log("On inter start")
		}
		else {
			this.currentShape = new Rectangle(dnd.initPosDnD_x, dnd.initPosDnD_y, 0, 0, this.currLineWidth, this.currColour);
			this.currentShape.paint(ctx);
		}

	}.bind(this);
	this.onInteractionUpdate = function (dnd){
		if(this.currEditingMode === 1){
			this.currentShape.largeur = dnd.finalPosDnD_x;
			this.currentShape.hauteur = dnd.finalPosDnD_y;
			console.log("On inter update")
			this.currentShape.paint(ctx);
		}
		else{
			this.currentShape.endX = dnd.finalPosDnD_x;
			this.currentShape.endY = dnd.finalPosDnD_y;
			this.currentShape.paint(ctx);
		}

	}.bind(this);
	this.onInteractionEnd = function (dnd){
		if(this.currentShape === 1){
			this.currentShape.largeur = dnd.finalPosDnD_x;
			this.currentShape.hauteur = dnd.finalPosDnD_y;
			this.currentShape.paint(ctx);
			console.log("On inter end")
		}
		else{
			this.currentShape.endX = dnd.finalPosDnD_x;
			this.currentShape.endY = dnd.finalPosDnD_y;
			this.currentShape.paint(ctx);
		}

	}.bind(this);
};


