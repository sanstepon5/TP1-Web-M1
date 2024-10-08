// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Forme(startX, StartY, couleur, epaisseur) {
    this.startX = startX;
    this.startY = StartY;
    this.couleur = couleur;
    this.epaisseur = epaisseur;
    this.getInitX = function (){
        return this.startX;
    }
    this.getInitY = function (){
        return this.startY;
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

function Drawing(){
    this.shapeArr = new Map();
}