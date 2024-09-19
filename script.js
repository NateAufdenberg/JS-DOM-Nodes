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

console.groupEnd();

console.group('Exercise 5');

let input = document.getElementById('textInput');
let display = document.getElementById('textDisplay');

input.addEventListener('keydown', (event) => {
   console.log(`${event.key}`)
});

input.addEventListener('input', () => {
   display.textContent = input.value;
});
/*
console.groupEnd();

console.group('Exercise 6');

let items = [
   {name: 'Item 1'},
   {name: 'Item 2'},
   {name: 'Item 3'},
   {name: 'Item 4'}
];

let list = document.getElementById('itemList');



items.forEach(item => {
   const li = document.createElement('li');
   li.textContent = item;
   list.appendChild(li);
});*/

let items = [
   {name: 'Item 1'},
   {name: 'Item 2'},
   {name: 'Item 3'},
   {name: 'Item 4'}
];

document.addEventListener('DOMContentLoaded', () => {
   let ul = document.getElementById('itemList');

   items.forEach(item => {
      let li = document.createElement('li');

      li.textContent = item.name;
      ul.appendChild(li);
   });
});