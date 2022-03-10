import {SERVER} from "../settings.js"

const URL= SERVER +"/cars"

/*Denne skal have keyword export, da metoden skal bruges i index.js */
export function getAllCars() {
  fetch(URL)
    .then(res => res.json())
    .then(cars => makeRows(cars))
    .catch(e => console.error(e))
}

/*Denne skal ike have keyworded export, da den kun bruges i denne fil 
og ikke skal bruges i andre filer */
function makeRows(rows) {
   
  const trows = rows.map(car=>`
  <tr>
  <td>${car.id}</td>
  <td>${car.brand}</td>
  <td>${car.model}</td>
  <td>${car.pricePrDay}</td>
  </tr>
  `).join("\n")
  document.getElementById("car-rows").innerHTML = trows

}


