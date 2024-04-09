'use strict';
const juttu = document.getElementById("juttu");

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

function primeCalculator(x){
    if(x>1 && x==Math.floor(x)){
        for(let z = 2; x>z; z++){
            if(x % z == 0){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}

function dice(rolls, sides){
    let rollSum = 0;
    for(let x=0; x<rolls; x++){
        rollSum += Math.floor((Math.random()*sides)+1);
        console.log(rollSum);
    }
    return rollSum;
}

function choice(decision){
    switch(decision){

        case -2:
            setInterval(myTimer, 100);
            function myTimer() {
                let spammi = document.createElement("p");
                spammi.appendChild(document.createTextNode("späm"));
                juttu.appendChild(spammi);
            }
            break;

        case -1:
            juttu.innerHTML="";
            break;
        case 0:
            const addTest = document.createElement("p");
            addTest.appendChild(document.createTextNode("test"));
            juttu.appendChild(addTest);
            console.log(addTest, typeof addTest);
            break;

        case 1:
            console.log("I'm printing to console!");
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
            juttu.innerHTML=`sum: ${eka+toka+kolmas}<br> product: ${eka*toka*kolmas}<br> average: ${(eka+toka+kolmas)/3}`;
            break;

        case 4:
            let school = Math.floor(Math.random()*4);
            let studentName = prompt("What is the students name? ");
            switch(school){
                case 0:
                    school="Gryffindor";
                    juttu.innerHTML=`${studentName}, you are ${school}`;
                    break;
                case 1:
                    school="Slytherin";
                    juttu.innerHTML=`${studentName}, you are ${school}`;
                    break;
                case 2:
                    school="Hufflepuff";
                    juttu.innerHTML=`${studentName}, you are ${school}`;
                    break;
                case 3:
                    school="Ravenclaw";
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
                juttu.innerHTML="The square root is not calculated.";
            }
            break;

        case 7:
            /*
            const rolls = prompt("How many dice rolls? :) ");
            let rollSum = 0;
            for(let x = rolls; x>0; x--){
                rollSum+=Math.floor((Math.random()*6)+1)
            }
            juttu.innerHTML=rollSum;
            */
            juttu.innerHTML=dice(prompt("How many dice rolls? :) "), 6);
            break;

        case 8:
            const startYear = prompt("Start year? :)");
            const endYear = prompt("End year? :)");
            juttu.innerHTML="";
            juttu.appendChild(document.createElement("ul"));
            for(let x=startYear; x < endYear; x++){
                console.log(x, leapCounter(x));
                if(leapCounter(x)){
                    const addListElement = document.createElement("li");
                    addListElement.appendChild(document.createTextNode(x));
                    juttu.firstChild.appendChild(addListElement);
                }
            }
            break;

        case 9:
            const possiblePrime = prompt("Give me a number, and I will calculate if it's a prime.");
            if(primeCalculator(possiblePrime)){
                juttu.innerHTML=`${possiblePrime} is a prime number :)`;
            }
            else{
                juttu.innerHTML=`${possiblePrime} is not a prime number :(`;
            }
            break;
        
        case 10:
            const numberOfDice = prompt("How many dice?");
            const sumOfTheEye = prompt("Sum of the eye numers?");
            let sumReached = 0;
            let sumNotReached = 0;
            let temporaryEyeSum = 0;
            let pointer = 0;
            let diceRolls = [];
            for(let fill = 0; fill < numberOfDice; fill++){
                diceRolls.push(1);
            }

            for(let ender = 0; ender < 6**numberOfDice; ender++){
                console.log(diceRolls);
                for(let eye of diceRolls){
                    temporaryEyeSum += eye;
                    /*console.log(temporaryEyeSum);*/
                }
                if(temporaryEyeSum == sumOfTheEye){
                    sumReached += 1;
                }
                else{
                    sumNotReached += 1;
                }
                temporaryEyeSum = 0;
                pointer = 0;

                while(diceRolls[pointer]>=6){
                    diceRolls[pointer]=1;
                    pointer++;
                }
                diceRolls[pointer]++;
            }
            juttu.innerHTML=`${((sumReached/(6**numberOfDice))*100).toFixed(2)}%`;
            break;

        default:
            console.log("default");
            juttu.innerHTML="default";
            break;
    }
}