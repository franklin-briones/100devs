//Create a conditonal that checks their age
let personAge=document.querySelector("#danceDanceRevolution")
//If under 16, tell them they can not drive
if (personAge>16) {
    alert("You cannot drive")
}
else if (personAge<18) {
    alert("can't hate from outside the club")
}else if (personAge<21) {
    alert("You cannot drink")
}else if (personAge<25){
    alert("You cannot rent cars affordably")
}else if (personAge<30){
    alert("You cannot rent fancy cars affordably")
}else if (personAge>30){
    alert("There is nothing left to lookforward to?")
}
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
const h1Holder=document.querySelector("h1")
//add an event listener to that element that console logs the sum of the two previous variables
h1Holder.addEventListener('click',sumFunc)
//On click of the h1
function sumFunc() {
    document.querySelector("p").value=
}
//Take the value from the input
//Place the result of the conditional in the paragraph
