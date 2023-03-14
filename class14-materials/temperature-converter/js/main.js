//Write your pseduo code first! 
document.querySelector('#convert').addEventListener('click',convert)

function convert() {
let temp=document.querySelector('#tempInC').value
temp=temp*1.8+32

document.querySelector('#newTemp').innerText=temp
}