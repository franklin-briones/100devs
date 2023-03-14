//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  if(day === "tuesday" || day === "thursday"){
    console.log("YOU HAVE CLASS")
    document.querySelector('#placeToSee').innerText = "Class day!"
  }else if( day === "saturday" || day === "sunday"){
    console.log("Its The Weekend")
    document.querySelector('#placeToSee').innerText = "weekend!"
  }else{
    console.log("BORING")
    document.querySelector('#placeToSee').innerText = "boring day"
  }

}
