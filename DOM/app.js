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

let btn2 = document.createElement("button");
btn2.innerText = "Button 2";
document.querySelector("body").append(btn2);

// Form Event
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let email = document.querySelector("#email"); //normal way using id
  let pass = this.elements[1]; //using this and element

  console.log(email.value);
  console.log(pass.value);
  
  console.log("Successfully submitted!!");
});

//Keyboard Event
let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
  console.log("Key =", event.key, "Code = ", event.code);

  if (event.key == "Enter") {
    console.log("File saved successfully!!");
  } else if (event.key == "Delete") {
    console.log("File deleted successfully!!");
  }
  console.log("Key was pressed!");
});

//Mouse Event

let btns = document.querySelectorAll("button");

for (btn of btns) {
  btn.onclick = alertSystem;
  btn.onmouseenter = hoverSystem;
  btn.onmouseleave = hoverSystem2;
  console.dir(btn);
}

for (btn of btns) {
  btn.addEventListener("dblclick", doubleclick);
}

function alertSystem() {
  alert("Button was clicked");
}

function doubleclick() {
  alert("Double click detected!!");
}

function hoverSystem() {
  console.log("Mouse is on the button");
  btn.classList.add("red");
  btn.classList.add("border", "background");
}

function hoverSystem2() {
  console.log("Mouse leaving the button");
  btn.classList.remove("red");
  btn.classList.remove("border", "background");
}
