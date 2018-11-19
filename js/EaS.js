function draw() {
    var side = Number(document.querySelector('#drawSize').querySelector('.selected').innerHTML);
    var drawMode = document.querySelector('#drawMode').querySelector('.selected').innerHTML;
    var canvas = document.querySelector('#canvas');
    var divHTML ;
    if (drawMode == 'Classic') { divHTML = '<div class="dot" onmouseover="shade(this)"></div>'; }
    if (drawMode == 'Greyscale') { divHTML = '<div class="dot" onmouseover="grey(this)"></div>'; }
    if (drawMode == 'Color') { divHTML = '<div class="dot" onmouseover="color(this)"></div>'; }
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
function grey(e) {
    greyHTML = '<div class="grey"></div>';
    greyLevel = e.querySelectorAll('.grey').length
    if(greyLevel<11){e.innerHTML = e.innerHTML + greyHTML;}
}
function color(e) {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    colorHTML = '<div class="color" style="background-color: ' + color + '"></div>';
    if (e.innerHTML.length < 2) {
        e.innerHTML = colorHTML; 
    }
}

function reset() {
    console.log('resetting...');
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
        console.log(target + ', current: ' + current);
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
        console.log(target + ', current: ' + current);
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
        console.log(target + ', current: ' + current);
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
        console.log(target + ', current: ' + current);
        display[current].classList.remove('selected');
        display[target].classList.add('selected');
        draw();
    }
}