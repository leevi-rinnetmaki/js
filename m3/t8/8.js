function src(src){
    return document.getElementById(src);
}

function calculate(){
    switch(true){
        case operation[0].selected:
            result.innerHTML=parseInt(num1.value)+parseInt(num2.value);
            break;
        case operation[1].selected:
            result.innerHTML=num1.value-num2.value;
            break;
        case operation[2].selected:
            result.innerHTML=num1.value*num2.value;
            break;
        case operation[3].selected:
            result.innerHTML=num1.value/num2.value;
            break;
    }
}

const [num1, num2, operation, start, result] = [src("num1"), src("num2"), src("operation"), src("start"), src("result")];

start.addEventListener("click", calculate);