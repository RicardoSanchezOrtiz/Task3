
let contenedor = document.getElementById("contenedorCards");
let lista = data.events

function crearCard(array, where){
    let card = document.createElement("div")
    card.classList.add("d-flex")
    card.classList.add("justify-content-evenly")
    card.classList.add("flex-wrap")
    for (let contador of lista){
      card.innerHTML +=`<div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
        <img src="${contador.image}" class="card-img-top" alt="Metallica en concierto">
        <div class="card-body d-flex flex-column justify-content-between">
          <h5 class="card-title">${contador.name}</h5>
          <p class="card-text">${contador.description}</p>
          <p class="card-text">${contador.date}</p>
          <a href="#" class="detailsButton">Details</a>
        </div>
        </div>`
    }
    where.appendChild(card)
    
  }
crearCard(data.events, contenedor)