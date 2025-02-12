// Calculate average Number
let arr = [2,2,2,2,2];

const arrayAverage = (arr) =>{
    let total = 0;
    for(let i=0; i<arr.length; i++){
        total = total + arr[i];
    }
    return total/arr.length;
}

// Odd even finder
const isEven = a => {
    if(a%2==0){
        console.log("The number",a,"is an even number");
    }else{
        console.log("The number",a,"is not an even number");
    }
}

// testing

console.log(arrayAverage(arr));
isEven(5);
isEven(102);