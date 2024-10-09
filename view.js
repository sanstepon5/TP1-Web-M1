Rectangle.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.couleur;
    ctx.lineWidth = this.epaisseur;
    ctx.beginPath();
    ctx.rect(this.getInitX(), this.getInitY(), this.getLargeur(),this.getHauteur());
    ctx.stroke();

}

Line.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.couleur;
    ctx.lineWidth = this.epaisseur;
    ctx.beginPath();

    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getEndX(), this.getEndY());
    ctx.stroke();

};

Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.shapeArr.forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

function updateShapeList (index,shape,currEditingMode) {
    document.getElementById('shapeList').insertAdjacentHTML('beforeend', addShapeInHtml(shape,index,currEditingMode));
}

/**
 *
 * @param shape
 * @param index
 * @param currEditingMode
 * Construct the button that will be added each time a shape is finished
 * @returns {string}
 */
function addShapeInHtml(shape, index, currEditingMode) {
    let innerHtml = `<li id="liRemove${index}">`;
    if (currEditingMode === 0) {
        innerHtml += '<label >□ Rectangle</label>';
    } else if (currEditingMode === 1) {
        innerHtml += '<label> \ Line</label>';
    }

    innerHtml += '<button type="button" class="btn btn-default">';
    innerHtml += '<span class="glyphicon glyphicon-remove-sign"></span>';
    innerHtml += '</button>';
    innerHtml += '</li>'

    return innerHtml;
}



// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
