Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.strokeStyle = this.couleur;
    ctx.lineWidth = this.epaisseur;
    ctx.beginPath();
    ctx.rect(this.getInitX(), this.getInitY(), this.getLargeur(),this.getHauteur());
    ctx.stroke();

}

Line.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.strokeStyle = this.couleur;
    ctx.lineWidth = this.epaisseur;
    ctx.beginPath();

    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getEndX(), this.getEndY());
    ctx.stroke();

};

Drawing.prototype.paint = function(ctx) {
    console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
