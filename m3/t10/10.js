const source = document.getElementById("source");
const target = document.getElementById("target");
const sub = source[2];


function hi(){
    const fname = source[0].value;
    const lname = source[1].value;
    target.innerHTML=`Your name is ${fname} ${lname}.`;
    source.setAttribute("onsubmit", "return false")
    //event.preventDefault();

}

sub.addEventListener("click", hi);