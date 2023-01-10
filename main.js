let contenedor1 = document.getElementById("checklist");
let contenedor2 = document.getElementById("contenedorCards");
let barraDeBusqueda = document.getElementById("buscador");
let lista;

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((res) => res.json())
  .then(infor =>{ 
    lista = infor.events
    crearCard(lista, contenedor2)})

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
          <a href="./details.html?_id=${contador._id}" class="detailsButton">Details</a>
        </div>
        </div>`
    }
    where.appendChild(card)
    
  }

function filtroCheck(casillasSombreadas){
  let filtro = []
  if(casillasSombreadas.length == 0){
    return lista
  }
  for(let selector of casillasSombreadas){
    filtro.push(selector.name)
  }
  let seleccionados =[]
  for ( let selector of lista){
    if(filtro.includes(selector.category.toLowerCase())){
      seleccionados.push(selector)
    }
  }
  console.log(seleccionados)
  return seleccionados
}

contenedor1.addEventListener('input', filtroCombinado)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
barraDeBusqueda.addEventListener( 'input' , filtroCombinado)

function filtroBusqueda (array){
  if (barraDeBusqueda.value == ""){
    return array
    }
  return array.filter(evento => evento.description.toLowerCase().includes(barraDeBusqueda.value.toLowerCase()) || evento['name'].toLowerCase().includes(barraDeBusqueda.value.toLowerCase()))
}

function filtroCombinado(){
  let checked =document.querySelectorAll('input[type="checkbox"]:checked')
  if (checked.length == 0 && barraDeBusqueda.value == ""){
    return crearCard(lista, contenedor2)
  }
  let filtradosCheck = filtroCheck(checked)
  let filtradosBusqueda = filtroBusqueda(filtradosCheck)
  if (filtradosBusqueda.length == 0){
    return contenedor2.innerHTML =`<h3 class="my-5">Your search was unsuccessful</h3>
    <h4>Please, try another search</h4>
    <h4>Toggle the categories you wish to see and look for the name of the event you're looking for</h4>`
  }
  console.log(filtradosBusqueda)
  return crearCard(filtradosBusqueda,contenedor2)
}