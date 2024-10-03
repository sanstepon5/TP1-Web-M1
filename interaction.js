
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
    this.initPosDnD_x = 0;
    this.initPosDnD_y = 0;
    this.finalPosDnD_x = 0;
    this.finalPosDnD_y = 0;
    this.isActive = false;// peut-être pas obligatoire
    this.canvasDnD= canvas;

	// Developper les 3 fonctions gérant les événements

	// Associer les fonctions précédentes aux évènements du canvas.
};

DnD.prototype.pression = function(evt){
    this.initPosDnD_x = evt.x;
    this.initPosDnD_y = evt.y;
    this.isActive = true;

    console.log(getMousePosition(this.canvasDnD,evt));
}
DnD.prototype.deplacement = function(evt){
    getMousePosition(this.canvasDnD,evt);
}
DnD.prototype.relachement = function(evt){
    this.finalPosDnD_x = evt.x;
    this.finalPosDnD_y = evt.y;
    this.isActive = false;
    getMousePosition(this.canvasDnD,evt);
}



// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



