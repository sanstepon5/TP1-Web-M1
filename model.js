// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Forme(couleur, epaisseur) {
    this.couleur = couleur;
    this.epaisseur = epaisseur;
}

function Line(pointAx, pointAy, pointBx, pointBy, epaisseur, couleur) {
    Forme.call(this, couleur, epaisseur);

    this.pointAx = pointAx;
    this.pointB = pointB;
}
Line.prototype = new Forme();

function Rectangle(pointHautGaucheX, pointHautGaucheY, largeur, hauteur, epaisseur, couleur) {
    Forme.call(this, couleur, epaisseur)

    this.pointHautGaucheX = pointHautGaucheX;
    this.pointHautGaucheY = pointHautGaucheY;
    this.largeur = largeur;
    this.hauteur = hauteur;
}
Rectangle.prototype = new Forme();



















function drawing(){
    this.formesArr = new Array();

    this.addForme = function(forme){
        this.formesArr.push(forme);
    }
}