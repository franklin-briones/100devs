//--- Easy
//create a variable and assign it a number

let varName=1;

//minus 10 from that number
varName-=10;

//print that number to the console
console.log(varName)

//--- Medium
//create a variable that holds a value from the input



//add 25 to that number

inputVal+=25;

//alert that number
alert(inputVal)

//--- Hard
//create a variable that holds the h1
const h1Holder=document.querySelector("h1")
//add an event listener to that element that console logs the sum of the two previous variables
h1Holder.addEventListener('click',sumFunc)

function sumFunc()
{
    let inputVal=document.querySelector("#danceDanceRevolution").value
    console.log(Number(inputVal)+varName)
}