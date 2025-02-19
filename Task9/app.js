
// Question 1 

let arr = [1,2,3,4,5];
let square = arr.map((el)=>{
    return el*el;
});
console.log("Square of the array elements are : ",square);
let sum = arr.reduce((sum,el)=>{
    return sum+el;
});
console.log("The sum of those array elements are :",sum);
console.log("The average of the array elements :",avg = sum / arr.length);


// Question 2

let newArr = arr.map((el)=>{
    return el+5;
});
console.log(newArr);


// Quesetion 3

let string = ["rahat","borshon","jim","shahriar"];
let newString = string.map((string)=>{
    return string.toUpperCase();
});
console.log(newString);

// Question 4
function doubleAndReturnArgs (arr1, ...args){
   console.log(arr1);
   console.log(args.map((el)=>{
    return el*2;
   }));
};

doubleAndReturnArgs([2,4,65],3,3);