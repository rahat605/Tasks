// Question 1
let input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter your text';
document.querySelector('body').append(input);

let btn = document.createElement('button');
btn.innerText = "Click Me!";
document.querySelector('body').append(btn);

// Question 2
btn.setAttribute("id","btn");
input.setAttribute("placeholder","username");

// Question 3
let btn2 = document.querySelector("#btn");
btn2.classList.add('btn');

// Question 4
let h1 = document.createElement('h1');
h1.innerText = "DOM Practice";
document.querySelector('body').append(h1);
h1.setAttribute("id","h1");
h1.classList.add('h1');

// Question 5
let p = document.createElement('p');
p.innerHTML = "Rahat is practicing <b>DOM</b>";
document.querySelector('body').append(p);