
let stringInicial = location.search
console.log(stringInicial)
let parametroUrl = new URLSearchParams(stringInicial)
console.log(parametroUrl)
let id = parametroUrl.get("_id")
console.log(id)

let contenedor = document.getElementById("contenedorCards")

let eventoBuscado = data.events.find(numeroId => numeroId._id == id )

contenedor.innerHTML= `<div class="row g-0">
<div class="col-md-6">
  <img src="${eventoBuscado.image}" class="img-fluid rounded-start" alt="Metallica en concierto" style="width:100rem">
</div>
<div class="col-md-6 mx-">
  <div class="card-body">
    <h5 class="card-title">${eventoBuscado.name}</h5>
    <p class="card-text">${eventoBuscado.description}</p>
    <p class="card-text">${eventoBuscado._id}</p>
    <p class="card-text">Date: ${eventoBuscado.date}</p>
    <p class="card-text">Category: ${eventoBuscado.category}</p>
    <p class="card-text">Place: ${eventoBuscado.place}</p>
    <p class="card-text">Capacity: ${eventoBuscado.capacity}</p>
    <p class="card-text">Assistance: ${eventoBuscado.assistance}</p>
    <p class="card-text">Price: ${eventoBuscado.price}</p>
  </div>
</div>
</div>`