console.group('Exercise 1')

let div = document.getElementById("myDiv");

let paragraph = document.querySelector('p');
let paragraph2 = document.querySelector('p');

div.style.background = 'lightblue';
console.log(paragraph.innerText);
console.log(paragraph2.innerText);

console.groupEnd();

console.group('Exercise 4');
let click = document.getElementById('click');
function showAlert() {
   alert('The button has been clicked!');
}

click.addEventListener("click", showAlert);
