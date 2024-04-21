'use strict';
const output = document.querySelector("#output");
const form2 = document.querySelector("#two");
const query2 = document.querySelector("#query2");

const form3 = document.querySelector("#three");
const query3 = document.querySelector("#query3");

const form4 = document.querySelector("#four");
const query4 = document.querySelector("#query4");

const chuckButton = document.querySelector("#chuckButton");

const form6 = document.querySelector("#six");
const query6 = document.querySelector("#query6");












form2.addEventListener("submit", async (prev)=>{
  prev.preventDefault();
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query2.value}`);
  const res2 = await res.json();
  console.log(res2);
})












form3.addEventListener("submit", async (prev)=>{
  prev.preventDefault();
  output.innerHTML="";
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query3.value}`);
  const res2 = await res.json()
  //console.log(res2);
  

  const myDiv = document.createElement("div");
  myDiv.id = "results"
  output.appendChild(myDiv)

  for(let i of res2){
    //console.log(i.show.name, i.show.url, i.show.summary, i.show.image?.medium);
    const article = document.createElement("article");
    const name = document.createElement("h2");
    const link = document.createElement("a");
    const image = document.createElement("img");
    const summary = document.createElement("div");

    name.innerHTML = i.show.name;
    link.innerHTML = i.show.url;
    link.href = i.show.url;
    link.target = "_blank";
    image.src = i.show.image?.medium;
    image.alt = i.show.name;
    image.style.display = "block";
    summary.innerHTML = i.show.summary;


    article.appendChild(name);
    article.appendChild(link);
    article.appendChild(image);
    article.appendChild(summary);
    article.setAttribute("class", "article3");
    myDiv.appendChild(article);
  }
  //output.appendChild(article)
})












form4.addEventListener("submit", async (prev)=>{
  prev.preventDefault();
  output.innerHTML="";
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query4.value}`);
  const res2 = await res.json()
  //console.log(res2);
  

  const myDiv = document.createElement("div");
  myDiv.id = "results"
  output.appendChild(myDiv)

  for(let i of res2){
    //console.log(i.show.name, i.show.url, i.show.summary, i.show.image?.medium);
    const article = document.createElement("article");
    const name = document.createElement("h2");
    const link = document.createElement("a");
    const image = document.createElement("img");
    const summary = document.createElement("div");

    name.innerHTML = i.show.name;
    link.innerHTML = i.show.url;
    link.href = i.show.url;
    link.target = "_blank";
    image.src = i.show.image.medium ? i.show.image.medium : "https://via.placeholder.com/210x295?text=Not%20Found";
    image.alt = i.show.name;
    image.style.display = "block";
    summary.innerHTML = i.show.summary;


    article.appendChild(name);
    article.appendChild(link);
    article.appendChild(image);
    article.appendChild(summary);
    article.className="article3";
    myDiv.appendChild(article);
  }
  //output.appendChild(article)
})












chuckButton.addEventListener("click", async ()=>{
  let joke = await fetch ("https://api.chucknorris.io/jokes/random");
  joke = await joke.json();
  console.log(joke.value);
})












form6.addEventListener("submit", async (stopBeingAnnoying)=>{
  stopBeingAnnoying.preventDefault();
  output.innerHTML="";
  let res = await fetch(`https://api.chucknorris.io/jokes/search?query=${query6.value}`);
  res = await res.json();
  //console.log(res.result[0].value);
  for(let i of res.result){
    //console.log(i.value);
    const article = document.createElement("article");
    const p = document.createElement("p");
    p.innerHTML = i.value;
    article.appendChild(p);
    article.style.backgroundColor = "rgb(200,200,200)";
    article.style.padding = "10px 5px";
    article.style.margin = "20px 50px";
    output.appendChild(article);
  }
})