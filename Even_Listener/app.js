let input = document.querySelector("input");
let h2 = document.querySelector("h2");
input.addEventListener("keyup",function(e){
        if(e.key >= 'a' && e.key <='z' || e.key == ' '){
            h2.innerText = input.value;
        }else {
            h2.innerText = "Wrong input!";
        }
    })

let btn = document.createElement("button");
btn.innerText = "Click Me!";
document.querySelector("body").append(btn);

btn.addEventListener("click",function(){
    btn.classList.add("green");
    console.log("Click is working");
})