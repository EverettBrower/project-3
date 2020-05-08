//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

let bitBatBotOrNot = n => {
  //your code goes here
  let result = "";
  if (n % 3 == 0) {
    result = `${result}Bit`;
  }
  if (n % 5 == 0) {
    result = `${result}Bat`;
  }
  if (n % 7 == 0) {
    result = `${result}Bot`;
  } else if (n % 3 != 0 && n % 5 != 0 && n % 7 != 0) {
    result = `${result}Not`;
  }
  return result;
};

//var inputArr = [];

let findAllbitBatBotOrNots1 = arr => {
  //your code goes here
  let newArr = arr.map(n => n.toString() + ": " + bitBatBotOrNot(n));
  return newArr;
};

//use map method

let findAllbitBatBotOrNots2 = arr => {
  //your code goes here
  //use for statement
  let newArr2 = [];
  for (var i = 0; i < arr.length; i++) {
    let count = newArr2.push(`${arr[i]}: ${bitBatBotOrNot(arr[i])}`);
  }
  return newArr2;
};

let findAllbitBatBotOrNots3 = arr => {
  //your code goes here
  //use for..of statement
  let newArr3 = [];
  for (num of arr) {
    let update = newArr3.push(`${num}: ${bitBatBotOrNot(num)}`);
  }
  return newArr3;
};

let findAllbitBatBotOrNots4 = arr => {
  //your code goes here
  //use forEach method
  let newArr4 = [];
  arr.forEach(num => {
    let update = newArr4.push(`${num}: ${bitBatBotOrNot(num)}`);
  });
  return newArr4;
};

//Extra Credit function
let findAllbitBatBotOrNotsXC = arr => {
  let newArr5 = [];
  for (num in arr) {
    let update = newArr5.push(`${num}: ${bitBatBotOrNot(n)}`);
  }
  return newArr5;
};
//test the functions

findAllbitBatBotOrNots1(arrOf1To100);

findAllbitBatBotOrNots2(arrOf1To100);

findAllbitBatBotOrNots3(arrOf1To100);

findAllbitBatBotOrNots4(arrOf1To100);
