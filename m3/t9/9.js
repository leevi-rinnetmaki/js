let [calculation, startButton, result] = [document.getElementById("calculation"), document.getElementById("start"), document.getElementById("result")];
startButton.addEventListener("click", calculator);
function calculator(){
    if(calculation.value.includes("+")){
        let valueArray = calculation.value.split("+");
        result.innerHTML=parseInt(valueArray[0])+parseInt(valueArray[1]);
    }
    else if(calculation.value.includes("-")){
        let valueArray = calculation.value.split("-");
        result.innerHTML=parseInt(valueArray[0])-parseInt(valueArray[1]);
    }
    else if(calculation.value.includes("*")){
        let valueArray = calculation.value.split("*");
        result.innerHTML=parseInt(valueArray[0])*parseInt(valueArray[1]);
    }
    else if(calculation.value.includes("/")){
        let valueArray = calculation.value.split("/");
        result.innerHTML=parseInt(valueArray[0])/parseInt(valueArray[1]);
    }
}