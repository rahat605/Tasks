// Task 1
let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10];
let number = 5;
function testLarge(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > number) {
      console.log(arr[i]);
    }
  }
}

// Task 2
let str = "abcdabcdefgggh";
let str2 = "";

function uniqueStr() {
  for (let i = 0; i < str.length; i++) {
    let cstr = str[i];
    if (str2.indexOf(cstr) == -1) {
      str2 = str2 + cstr;
    }
  }
  console.log(str2);
}

// Task3
let country = ["Australia", "Germany", "United States of America"];

function findLongest() {
  if (
    country[0].length > country[1].length &&
    country[0].length > country[2].length
  ) {
    console.log(country[0]);
  } else if (
    country[1].length > country[0].length &&
    country[1].length > country[2].length
  ) {
    console.log(country[1]);
  } else {
    console.log(country[2]);
  }
}


// Task3 Alternative way
let country2 = ["Australia", "Germany", "United States of America"];
function findLongestCountry(){
    ansIdx = 0;
    for(let i=0; i<country2.length;i++){
        let ansLen = country2[ansIdx].length;
        let curLen = country2[i].length;
        if(ansLen<curLen){
            ansIdx = i;
        }
    }
    console.log(country2[ansIdx]);
    // return country2[ansIdx];
}

// Task 4
let str3 = "I am Rahat. I am from Bangladesh";
let vowel = ["a","A","e","E","I","i","o","O","U","u"];
let count = 0;
function findVowel(){
    for(let i=0;i<str3.length;i++){
        for(let j=0; j<vowel.length; j++){
            if(str3[i]==vowel[j]){
                count = count +1 ;
            }
        }
    }
    console.log("Number of vowels in the string is = ",count);
}

// Task 5
let start = 1;
let end = 100;
function genRandom(){
    console.log(Math.floor(Math.random()*end)+start);
}

uniqueStr(str);
testLarge(arr, number);
findLongest(country);
findLongestCountry(country2);
findVowel(str3);
genRandom();
