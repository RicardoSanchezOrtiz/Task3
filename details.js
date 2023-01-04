let contenedor = document.getElementById("contenedorCards")
let lista = data.events[0]
let card =document.createElement("div")
card.classList.add("d-flex")
card.classList.add("justify-content-evenly")
card.innerHTML= `<div class="row g-0">
<div class="col-md-6">
  <img src="${data.events[0].image}" class="img-fluid rounded-start" alt="Metallica en concierto" style="width:100rem">
</div>
<div class="col-md-6 mx-">
  <div class="card-body">
    <h5 class="card-title">${data.events[0].name}</h5>
    <p class="card-text">${data.events[0].description}</p>
    <p class="card-text">${data.events[0]._id}</p>
    <p class="card-text">Date: ${data.events[0].date}</p>
    <p class="card-text">Category: ${data.events[0].category}</p>
    <p class="card-text">Place: ${data.events[0].place}</p>
    <p class="card-text">Capacity: ${data.events[0].capacity}</p>
    <p class="card-text">Assistance: ${data.events[0].assistance}</p>
    <p class="card-text">Price: ${data.events[0].price}</p>
  </div>
</div>
</div>`
console.log(card)
contenedor.appendChild(card)

