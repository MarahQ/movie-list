'use strict'
imgarray = ['detective.png, fantasy.png, history.png, horror.png, musical.png, pirate.png, romantic.png, sci-fi.png, war.png, western.png']
category = ['Action, Adventure, Animation, Comedy, Detective, Fantasy, History, Horror, Musical, Pirate, Romantic, SCI-FI, War, Western']
function dropdown(category) {
    this.category = category;
}
let dropdown = document.getElementById('dropdown')
dropdown.prototype(){

    let option = document.createElement('option')
    option = category;
    let moviename = (moviename);
    let moviecategory = (moviecategory);
    let issueyear = (issueyear);
}

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

let row_1 = document.createElement('tr');
let row_1_data_1 = document.createElement('td');

document.getElementById("form").addEventListener("input", displayDate);
input.addEventListener(){
    input.moviename = (moviename);
    input.moviecategory = (moviecategory);
    input.issueyear = (issueyear);
    localStorage
    console.log(moviename, moviecategory, issueyear);
}
localStorage.setItem('moviename','text' );
localStorage.setItem('moviecategory','text');
localStorage.setItem('issueyear', 'text');
var lastname = localStorage.getItem("moviename");
var lastname = localStorage.getItem("moviecategory");
var lastname = localStorage.getItem("issueyear");
document.getElementById("form").innerHTML = localStorage.getItem("moviename");
document.getElementById("form").innerHTML = localStorage.getItem("moviecategory");
document.getElementById("form").innerHTML = localStorage.getItem("issueyear");
