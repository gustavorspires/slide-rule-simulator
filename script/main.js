/*let newX = 0, newY = 0, startX = 0, startY = 0;

const card = document.getElementById('card')
const cursor = document.getElementById('cursor')

card.addEventListener('mousedown', mouseDown)
cursor.addEventListener('mousedown', mouseDown)

function mouseDown(e){
startX = e.clientX
console.log("oi")

document.addEventListener('mousemove', mouseMove)
document.addEventListener('mouseup', mouseUp)
}

function mouseMove(e){
newX = startX - e.clientX 
card.ondragstart = function() {
    return false
}

cursor.ondragstart = function() {
    return false;
};

console.log("oiii")

startX = e.clientX

card.style.left = (card.offsetLeft - newX) + 'px'
cursor.style.left = (card.offsetLeft - newX) + 'px'
}

function mouseUp(e){
document.removeEventListener('mousemove', mouseMove)
console.log("oii")
}*/


let newX = 0, startY = 0, startX = 0;

const card = document.getElementById('card');
const cursor = document.getElementById('cursor');

card.addEventListener('mousedown', mouseDownCard);
cursor.addEventListener('mousedown', mouseDownCursor);

function mouseDownCard(e){
    startX = e.clientX;
    document.addEventListener('mousemove', mouseMoveCard);
    document.addEventListener('mouseup', mouseUp);
}

function mouseDownCursor(e){
    startX = e.clientX;
    document.addEventListener('mousemove', mouseMoveCursor);
    document.addEventListener('mouseup', mouseUp);
}

function mouseMoveCard(e){
    newX = startX - e.clientX;
    card.ondragstart = function() {
        return false
    }
    card.style.left = (card.offsetLeft - newX) + 'px';
    startX = e.clientX;
}

function mouseMoveCursor(e){
    newX = startX - e.clientX;
    cursor.ondragstart = function() {
        return false
    }
    cursor.style.left = (cursor.offsetLeft - newX) + 'px';
    startX = e.clientX;
}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMoveCard);
    document.removeEventListener('mousemove', mouseMoveCursor);
}

