//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let numArr=[19,42,55,72,12,15]
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function sumAll(aryOfNums) {
    let total=aryOfNums.reduce( (acc,c) => +acc+ +c)
    alert(total)
}
sumAll(numArr)

//Create a function that takes string
//Print the reverse of that string to the console

//Create a function that takes in a string
//Alert if the string is a palindrome or not
