'use strict';

//const tehtava = Number(prompt("Mikä tehtävä?"));
const juttu = document.getElementById("juttu")
function leapCounter(year){
    if(year%100==0){
        if(year%400 == 0){
            return true;
        }
    }
    else if(year%4 == 0){
        return true;
    }
    else{
        return false;
    }
}

function choice(decision){
    switch(decision){

        case 0:
            /*
            let test = prompt("test");
            */
            /*
            let ele = document.createElement("p");
            let nod = document.createTextNode(test);
            ele.appendChild(nod);
            juttu.appendChild(ele);
            */
            /*
            juttu.appendChild(document.createElement("p").appendChild(document.createTextNode(test)));
            */
            /*
            juttu.appendChild(document.createElement("p").appendChild(document.createTextNode(prompt("test"))));
            */

            const addTest = document.createElement("p");
            addTest.appendChild(document.createTextNode("test"));
            juttu.appendChild(addTest);
            console.log(addTest, typeof addTest);
            break;

        case 1:
            console.log("I'm printing to console!")
            juttu.innerHTML="You might want to open the console :)";
            break;

        case 2:
            let name = prompt("What is your name? :) ");
            juttu.innerHTML=`Hello, ${name}!`;
            break;

        case 3:
            const eka = Number(prompt("First? "));
            const toka = Number(prompt("Second? "));
            const kolmas = Number(prompt("Third? "));
            juttu.innerHTML=`sum: ${eka+toka+kolmas} product: ${eka*toka*kolmas} average: ${(eka+toka+kolmas)/3}`;
            break;

        case 4:
            let school = Math.floor(Math.random()*4)+1;
            let studentName = prompt("What is the students name? ")
            switch(school){
                case 1:
                    school="Gryffindor"
                    juttu.innerHTML=`${studentName}, you are ${school}`;
                    break;
                case 2:
                    school="Slytherin"
                    juttu.innerHTML=`${studentName}, you are ${school}`;
                    break;
                case 3:
                    school="Hufflepuff"
                    juttu.innerHTML=`${studentName}, you are ${school}`;
                    break;
                case 4:
                    school="Ravenclaw"
                    juttu.innerHTML=`${studentName}, you are ${school}`;
                    break;
            }
            break;

        case 5:
            const year = Number(prompt("Give me a year :) "));

            if(leapCounter(year)){
                juttu.innerHTML=`${year} is a leap year :)`;
            }
            else{
                juttu.innerHTML=`${year} is not a leap year :(`;
            }
            /*
            let leap = false;
            if(year%100==0){
                if(year%400 == 0){
                    leap = true;
                }
            }
            else if(year%4 == 0){
                leap = true;
            }
            if(leap){
                juttu.innerHTML=`${year} is a leap year :)`;
            }
            else{
                juttu.innerHTML=`${year} is not a leap year :(`;
            }
            */
            break;

        case 6:
            if(confirm("Should I calculate the square root?")){
                const userNumber=Number(prompt("Give me a number :) "));
                if(userNumber<0){
                    juttu.innerHTML="The square root of a negative number is not defined";
                }
                else{
                    const userNumberRoot=Math.sqrt(userNumber);
                    juttu.innerHTML=`The square root of ${userNumber} is ${userNumberRoot}`;
                }
            }
            else{
                juttu.innerHTML="The square root is not calculated."
            }
            break;

        case 7:
            const rolls = prompt("How many dice rolls? :) ");
            let rollSum = 0;
            for(let x = rolls; x>0; x--){
                rollSum+=Math.floor((Math.random()*6)+1)
            }
            juttu.innerHTML=rollSum;
            break;

        case 8:
            const startYear = prompt("Start year? :)");
            const endYear = prompt("End year? :)");
            juttu.innerHTML=""
            for(let x=startYear; x < endYear; x++){
                console.log(x, leapCounter(x));
                if(leapCounter(x)){
                    const addListElement = document.createElement("li");
                    addListElement.appendChild(document.createTextNode(x));
                    juttu.appendChild(addListElement);
                }
            }
            break;

        default:
            console.log("default")
            juttu.innerHTML="default";
            break;
    }
}