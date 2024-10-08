
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;
	this.form = null;
	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function (dnd){
		if(this.currentShape === 0){
			this.form = new Rectangle(dnd.initPosDnD_x, dnd.initPosDnD_y,0,0,this.currLineWidth,this.currColour);
		}
		else{
			this.form = new Line(dnd.initPosDnD_x, dnd.initPosDnD_y,0,0,this.currLineWidth,this.currColour);
		}

	}.bind(this);
	this.onInteractionUpdate = function (dnd){
		if(this.currentShape === 0){
			this.form.largeur = dnd.finalPosDnD_x;
			this.form.hauteur = dnd.finalPosDnD_y;
		}
		else{
			this.form.endX = dnd.finalPosDnD_x;
			this.form.endY = dnd.finalPosDnD_y;
		}

	}.bind(this);
	this.onInteractionEnd = function (dnd){
		if(this.currentShape === 0){
			this.form.largeur = dnd.finalPosDnD_x;
			this.form.hauteur = dnd.finalPosDnD_y;
		}
		else{
			this.form.endX = dnd.finalPosDnD_x;
			this.form.endY = dnd.finalPosDnD_y;
		}

	}.bind(this);
};


