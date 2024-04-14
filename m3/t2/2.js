const target=document.getElementById("target");

let first = document.createElement("li");
first.innerHTML="First item";

let second = document.createElement("li");
second.innerHTML="Second item";

let third = document.createElement("li");
third.innerHTML="Third item";


target.appendChild(first);
target.appendChild(second);
target.appendChild(third);