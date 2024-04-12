'use strict';
/*
navigator.geolocation.getCurrentPosition();
*/
const juttu = document.getElementById("juttu");
const juttu2 = document.getElementById("juttu2");

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
    }
    return rollSum;
}

function choice(decision){
    switch(decision){

        case -2:
            setInterval(myTimer, 100);
            function myTimer(){
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
            juttu.innerHTML=`The sum of the dice rolls is ${dice(prompt("How many dice rolls? :) "), 6)}.`;
            break;

        case 8:
            const startYear = prompt("Start year? :)");
            const endYear = prompt("End year? :)");
            juttu.innerHTML="";
            juttu.appendChild(document.createElement("ul"));
            for(let x=startYear; x < endYear; x++){
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


        /*I originally made case 11 to be my solution for the 10th assignment, but once I finished doing it, I realized that I did it the wrong way so I decide to write the worst code possible for the 10th assignment. Enjoy :)*/
        case 10:
            var fdsaokfjsldjfs = prompt("How many dice?");
            var fsagadgdfgdfgdf = prompt("Sum of the eye numers?");
            var sasfdjjkadau = 0;
            for (var asdafdsagsfghs=0; asdafdsagsfghs<1*10**4; asdafdsagsfghs+=1*10**0){
                if(fsagadgdfgdfgdf == dice(fdsaokfjsldjfs, 6)){
                    sasfdjjkadau += 1*10**0;
                }
            }
            juttu.innerHTML=`${((sasfdjjkadau/(1*10**4))*100).toFixed(2)}%`;
            break;
            
        /*A better solution for the 10th assignment as it gives more accurate results.*/
        case 11:
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

function choice2(decision){

    function j2clear(cleared=juttu2){
        cleared.innerHTML="";
    }

    function j2create(ele, con, att){
        let elementt = document.createElement(ele);
        let contentt = document.createTextNode(con);
        elementt.appendChild(contentt);
        elementt.setAttribute(att[0], att[1]);
        return elementt;
    }

    function j2add(ad, whereAdd=juttu2){
        whereAdd.appendChild(ad);
    }

    function j2cadd(ele, con, att=["class", "default"], whereAdd=juttu2){
       j2add(j2create(ele, con, att), whereAdd);
    }

    function j2addList(ou, items){
        j2clear();
        j2cadd(ou, "" ,["id", "array"]);
        for (let i of items){
            j2cadd("li", i, ["class", "arrayItem"], document.getElementById('array'));
        }
    }

    switch(decision){
        case -1:
            j2clear();
            break;

        case 0:{
            j2cadd("div", "hi", ["id", "idtest"]);
            j2addList("ul", [2,5,3]);
            let testiper = [{name: "Leevi"},{name: "Matti"}];
            console.log(testiper, testiper.name);
            break;
        }

        case 1:{
            let numbers = [];
            for (let i=0; i<5; i++){
                numbers.push(prompt(`Number ${i+1}`));
            }
            for(let i in numbers){
                console.log(numbers[4-i]);
            }
            break;
        }

        case 2:{
            j2clear();
            let participants = [];
            for (let i=prompt("How many participants?"); i>0; i--){
                participants.push(prompt(`Participant ${participants.length+1}`));
            }
            participants.sort();
            j2cadd("ol", "" ,["id", "orderedArray"]);
            for (let i of participants){
                j2cadd("li", i, ["class", "class"], document.getElementById('orderedArray'));
            }
            break;
        }

        case 3:{
            j2clear();
            let dogs = [];
            for (let i=0; i<6; i++){
                dogs.push(prompt(`Dog ${i+1}?`));
            }
            dogs.reverse();
            /*
            j2cadd("ul", "" ,["id", "unorderedArray"]);
            for (let i of dogs){
                j2cadd("li", i, ["class", "class"], document.getElementById('unorderedArray'));
            }
            */
           j2addList("li", dogs);
            break;
        }

        case 4:{
            let number = null;
            let numbers = [];
            do{
                number = prompt("Give me anumber");
                numbers.push(number);
            }
            while(number != 0);
            numbers.sort(function(a, b){return b - a});
            console.log(numbers);
            break;
        }

        case 5:{
            let number = null;
            let numbers = [];
            do{
                number=prompt("Give me a number");
                if(numbers.includes(number)){
                    numbers.push(number);
                    numbers.sort(function(a, b){return a - b});
                    console.log(numbers);
                    break;
                }
                else{
                    numbers.push(number);
                }

            }
            while(numbers.includes(number));
            break;
        }

        case 6:{
            function diceRolls(){
                return dice(1,6)
            }
            j2clear();
            let roll=diceRolls();
            let rolls=[];
            while(roll!=6){
                rolls.push(roll);
                roll=diceRolls();
            }
            rolls.push(roll);
            j2addList("ul", rolls);
            break;
        }

        case 7:{
            function diceRollsWithCustomQuantityOfSides(sides){
                return dice(1,sides);
            }
            j2clear();
            const diceSides = prompt("How many sides?");
            let roll=diceRollsWithCustomQuantityOfSides(diceSides);
            let rolls=[];
            while(roll!=diceSides){
                rolls.push(roll);
                roll=diceRollsWithCustomQuantityOfSides(diceSides);
                console.log(roll, rolls);
            }
            rolls.push(roll);
            j2addList("ul", rolls);
            break;
        }
        case 8:{
            function concat(stringArray){
                return stringArray.join("");
            }
            const pirateArray = ["Black Beard", "Henry Morgan", "Anne Bonny", "William Kid"];
            j2cadd("div", concat(pirateArray));
            break;
        }

        case 9:{
            const numbers = [0,1,2,3,4,5,6,7,8,9];
            function even(numArray){
                let returnArray = [];
                for (let i of numArray){
                    if(i%2==0){
                        returnArray.push(i);
                    }
                }
                return returnArray;
            }
            even(numbers);
            j2cadd("div", numbers)
            j2cadd("div", even(numbers));
            console.log(numbers, even(numbers));
            break;
        }

        case 10:{
            const amount = prompt("How many canditates?");
            let canditates = [];
            for (let i = 0; i < amount; i++){
                let name = prompt(`Name for candidate ${i+1}`);
                canditates.push({name: name, votes: 0});
            }
            const voters = prompt("How many voters?");
            let vote;
            for (let i = 0; i < voters; i++){
                vote = prompt("Who will you vote? :)");
                for (let i of canditates){
                    if(i.name == vote){
                        i.votes++;
                    }
                }
            }
            let winnerIndex = 0;
            let winnerVotes = 0;
            for (let i in canditates){
                if (canditates[i].votes > winnerVotes){
                    winnerVotes=canditates[i].votes;
                    winnerIndex=i;
                }
            }
            console.log(`The winner is ${canditates[winnerIndex].name}!`);
            for (let i of canditates){
                console.log(`${i.name}: ${i.votes} votes.`);
            }
        }
    }
}