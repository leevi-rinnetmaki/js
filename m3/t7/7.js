const trigger = document.getElementById("trigger");
const id = document.getElementById("target");

function over(){
    id.src="img/picB.jpg";
}

function out(){
    id.src="img/picA.jpg"
}

trigger.addEventListener("mouseover", over);
trigger.addEventListener("mouseout", out);