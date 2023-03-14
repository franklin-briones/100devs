//Write your pseduo code first! 
// gather input if change to F or change to C
//gather input of temperature
//convert temperature
//output temperature


//need value that is in celsius

//convert from celsius to fahrenheight

//output converted temperature

document.querySelector('#yell').addEventListener('click',convert)

function convert() {
    let temp = document.querySelector('#celsiusOriginal').value
    console.log(temp)
    temp = temp*1.8 + 32
    console.log(temp)
    document.querySelector('#convertedTemp').innerText = `${temp} degrees Fahrenheight`
}