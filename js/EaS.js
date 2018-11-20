function draw() {
    var side = Number(document.querySelector('#drawSize').querySelector('.selected').innerHTML);
    var drawMode = document.querySelector('#drawMode').querySelector('.selected').innerHTML;
    var canvas = document.querySelector('#canvas');
    var area = side * side ;
    var gridSize = 512 / Number(side);
    var gridStyle = 'repeat(' + side +', 1fr)';
    canvas.style.setProperty('grid-template-columns', gridStyle);
    canvas.style.setProperty('grid-template-rows', gridStyle);
    canvas.innerHTML = ' ';
    for(i=0;i<area;i++) {
        var dot = document.createElement('div');
        dot.classList.add('dot');
        if (drawMode == 'Classic') { dot.setAttribute('onmouseover','shade(this)');}
        if (drawMode == 'Greyscale') { dot.setAttribute('onmouseover','grey(this)'); }
        if (drawMode == 'Color') { dot.setAttribute('onmouseover','color(this)'); }
        canvas.appendChild(dot);
    }
}

function shade(e) {
    e.classList.add('shade');
}
function grey(e) {
    var greyDot = document.createElement('div');
    greyDot.classList.add('grey');
    greyLevel = e.querySelectorAll('.grey').length
    if(greyLevel<11){e.appendChild(greyDot);}
}
function color(e) {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    var colorDot = document.createElement('div');
    colorDot.classList.add('color');
    colorDot.style.backgroundColor = color;
    if (e.innerHTML.length < 2) {
        e.appendChild(colorDot); 
    }
}

function reset() {
    var dots = document.querySelectorAll('.dot');
    for(i=0;i<dots.length;i++) {
        dots[i].classList.remove('shade');
        dots[i].innerHTML = ' ';
    }
}

function scrollLeftUp() {
    var display = document.querySelectorAll('.left > .display > span');
    var current;
    var target;
    for(i=0;i<display.length;i++) {
        if(display[i].classList.contains('selected')) {
            current = i;
        }
    }
    if(current>0) {
        target = current - 1;
        display[current].classList.remove('selected');
        display[target].classList.add('selected');
        draw();
    }
}
function scrollLeftDown() {
    var display = document.querySelectorAll('.left > .display > span');
    var current;
    var target;
    for(i=0;i<display.length;i++) {
        if(display[i].classList.contains('selected')) {
            current = i;
        }
    }
    if( current < (display.length-1) ) {
        target = current + 1;
        display[current].classList.remove('selected');
        display[target].classList.add('selected');
        draw();
    }
}

function scrollRightUp() {
    var display = document.querySelectorAll('.right > .display > span');
    var current;
    var target;
    for(i=0;i<display.length;i++) {
        if(display[i].classList.contains('selected')) {
            current = i;
        }
    }
    if(current>0) {
        target = current - 1;
        display[current].classList.remove('selected');
        display[target].classList.add('selected');
        draw();
    }
}
function scrollRightDown() {
    var display = document.querySelectorAll('.right > .display > span');
    var current;
    var target;
    for(i=0;i<display.length;i++) {
        if(display[i].classList.contains('selected')) {
            current = i;
        }
    }
    if( current < (display.length-1) ) {
        target = current + 1;
        display[current].classList.remove('selected');
        display[target].classList.add('selected');
        draw();
    }
}