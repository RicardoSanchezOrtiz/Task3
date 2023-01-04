let contenedor1 = document.getElementById("checklist");
let contenedor2 = document.getElementById("contenedorCards");
let barraDeBusqueda = document.getElementById("buscador");
let lista = data.events

function crearCard(array, where){
    where.innerHTML = ""
    let card = document.createElement("div")
    card.classList.add("d-flex")
    card.classList.add("justify-content-evenly")
    card.classList.add("flex-wrap")
    for (let contador of array){
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

function evento(){
  let checked =document.querySelectorAll('input[type="checkbox"]:checked')
  let filtro = []
  for(let selector of checked){
    filtro.push(selector.name)
  }
  let seleccionados =[]
  for ( let selector of lista){
    if(filtro.includes(selector.category.toLowerCase())){
      seleccionados.push(selector)
    }
  }
  console.log(seleccionados)
  console.log(filtro)
  crearCard(seleccionados, contenedor2)
}



contenedor1.addEventListener('change', evento)

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function filtroCategoria (array){
  let seleccionados = []
  if (barraDeBusqueda.value != ""){
    for ( let selector of array){
      if(selector.category.toLowerCase().includes(barraDeBusqueda.value.toLowerCase())){
        seleccionados.push(selector)
      }
    }
  }
  return seleccionados
}
function filtro(){
  let cardsFiltradas = filtroCategoria(lista)
  crearCard(cardsFiltradas, contenedor2)
}
barraDeBusqueda.addEventListener( 'input' , filtro())
