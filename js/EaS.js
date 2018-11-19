function draw(side) {
    var canvas = document.querySelector('#canvas');
    var divHTML = '<div class="dot" onmouseover="shade(this)"></div>';
    var area = side * side ;
    var gridSize = 512 / Number(side);
    var gridStyle = 'repeat(' + side +', ' + gridSize + 'px)';
    canvas.style.setProperty('grid-template-columns', gridStyle);
    canvas.style.setProperty('grid-template-rows', gridStyle);
    canvas.innerHTML = ' ';
    for(i=0;i<area;i++) {
        canvas.innerHTML = canvas.innerHTML + divHTML;
    }
}

function shade(e) {
    e.classList.add('shade');
}