let para = document.createElement("p");
para.innerText = "Hey I am Red!";
document.querySelector("body").append(para);
para.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "I am a blue h3!";
document.querySelector("body").append(h3);
h3.classList.add("blue");

let div = document.createElement("div");
div.classList.add("border", "background");
document.querySelector("body").append(div);

let h1 = document.createElement("h1");
h1.innerText = "I'm in div";
div.append(h1);

let p2 = document.createElement("p");
p2.innerText = "ME TOO!";
div.append(p2);

//Mouse Event

let btn = document.querySelector("button");
console.dir(btn);

function alertSystem(){
    alert("Button was clicked");
}

function hoverSystem(){
    console.log("Button was clicked");
}
btn.onclick = alertSystem;
btn.onmouseenter = hoverSystem;