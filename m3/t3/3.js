'use strict';
const names = ['John', 'Paul', 'Jones'];
const target=document.getElementById("target");

for(let i of names){
    target.innerHTML+=`<li>${i}</li>`;
}