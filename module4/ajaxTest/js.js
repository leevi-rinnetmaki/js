async function myFun(){
    const joke1 = await fetch("https://api.chucknorris.io/jokes/random");
    const joke2 = await joke1.json();
    console.log(joke2.value)
}

myFun()