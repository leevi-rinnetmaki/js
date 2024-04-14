'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const target=document.getElementById("target");

let myArray=[];
for(let i in students){
  myArray.push(document.createElement("option"));
  myArray[i].innerHTML=students[i].name;
  myArray[i].setAttribute("value", students[i].id);
  target.appendChild(myArray[i]);
}