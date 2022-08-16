// Write your code here!
//Remove main div
const main = document.getElementById('main');
main.remove();


//Create new heading element with ID atttribute

const newHeader = document.createElement('h1');

newHeader.setAttribute('id', 'victory');

newHeader.textContent = 'Mark-kilela is the champion';

main.appendChild(newHeader);