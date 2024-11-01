function Forme(startX, StartY, couleur, epaisseur) {
    this.startX = startX;
    this.startY = StartY;
    this.couleur = couleur;
    this.epaisseur = epaisseur;
    this.getStartX = function (){
        return this.startX;
    }
    this.getStartY = function (){
        return this.startY;
    }
    this.getCouleur = function() {
        return this.couleur;
    }
    this.getEpaisseur = function() {
        return this.epaisseur;
    }
}

function Line(startX, startY, epaisseur, couleur, endX, endY) {
    Forme.call(this, startX, startY, couleur, epaisseur);

    this.endX = endX;
    this.endY = endY;
    this.getEndX = function (){
        return this.endX;
    }
    this.getEndY = function (){
        return this.endY;
    }
}
Line.prototype = new Forme();

function Rectangle(startX,startY,epaisseur, couleur, largeur, hauteur) {
    Forme.call(this,startX,startY, couleur, epaisseur)

    this.largeur = largeur;
    this.hauteur = hauteur;

    this.getHauteur = function (){
        return this.hauteur;
    }
    this.getLargeur = function (){
        return this.largeur;
    }

}
Rectangle.prototype = new Forme();

function Ellipse(startX, startY, couleur, epaisseur, radiusX, radiusY, rotation,startAngle, endAngle) {
    Forme.call(this,startX, startY, couleur, epaisseur)
    this.radiusX = radiusX;
    this.radiusY = radiusY;
    this.rotation = rotation;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.getRadiusX = function() {
        return this.radiusX;
    }
    this.getRadiusY = function() {
        return this.radiusY;
    }
    this.getRotation = function() {
        return this.rotation;
    }
    this.getStartAngle = function() {
        return this.startAngle;
    }
    this.getEndAngle = function() {
        return this.endAngle;
    }

}
Ellipse.prototype = new Forme();

function Drawing(){
    this.shapeArr = new Map();
}