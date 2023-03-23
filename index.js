//Get DOM elements
let counter = document.getElementById("counter");
let count_el = document.getElementById("count-el");
let save_el =document.getElementById("save-el");
let saved = document.getElementById("saved");

let num = 0
//Create function that are triggered when buttons are clicked
function count() {
  counter.textContent = ++num;  
}
function save() {
    saved.textContent += num + " - ";
    counter.textContent = 0;
    num = 0;   
}
//console.log("connected");
