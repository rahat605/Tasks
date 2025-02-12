let num = [10, 20, 30, 40, 50]; //Find out if each num is multiples of 10 or not
let ans = num.every((el) => el % 10 == 0);
if (ans == true) {
  console.log("Every number of the array is mutiples of 10");
} else {
  console.log("Every number of the array is not mutiples of 10");
}


let minVal = num.reduce((min, el) => { //minimum value from the array
  if (min < el) {
    return min;
  } else {
    return el;
  }
});
console.log(minVal);
