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
    this.couleur = function (){
        return this.couleur;
    }
    this.epaisseur = function (){
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

function Rectangle(startX,startY,largeur, hauteur, epaisseur, couleur) {
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
    this.formesArr = [];

    this.addForme = function(forme){
        this.formesArr.push(forme);
    }
    this.getForms = function(){
        return this.formesArr;
    }
}