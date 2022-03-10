import {SERVER} from "../settings.js"

const URL= SERVER +"/cars"

export function addAddCarHandles() {
  document.getElementById("btn-add-car").onclick = addCar()
}
function addCar() {
  const car = {}
  car.brand = document.getElementById("input-brand").value
  car.model = document.getElementById("input-model").value
  car.pricePrDay = document.getElementById("input-price").value
  car.bestDiscound = document.getElementById("input-discount").value

  /*Denne block-kode skal bruges hver gang man skal have noget andet 
  end GET- bortset fra Delete, da det ikke returnere noget*/
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    //JSON.stringify omformer et javacript-objekt til en String
    body: JSON.stringify(car)
  }
  fetch(URL, options)
    .then(res => res.json())
    .then(newCar => {
      document.getElementById("car-info-all").innerText = JSON.stringify(newCar)
    })
    .catch(e => console.error(e))
}