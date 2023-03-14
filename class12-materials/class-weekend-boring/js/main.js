document.querySelector('#check').addEventListener('click', check)
function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  if (day =="sunday" || day=="saturday") {
    document.querySelector('#placeToSee').innerText = "weekend!"
  }else if (day == "tuesday" || day == "thursday") {
    document.querySelector('#placeToSee').innerText = "class day!"
  }else {
    document.querySelector('#placeToSee').innerText = "boring day"
  }


}
