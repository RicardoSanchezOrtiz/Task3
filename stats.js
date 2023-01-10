let eventTable = document.getElementById("eventTable")
let upcomingTable = document.getElementById("upcomingTable")
let pastTable = document.getElementById("pastTable")
let list;
let orderList;
let objeto;
let attended
let estimate
let capacity
let attendance

fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(res => res.json())
    .then(info =>{
        objeto = info
        list = info.events
        orderList = organizeList()
        attended = list.filter(category => category.assistance).map(category => category.assistance)
        estimate = list.filter(category => category.estimate).map(category => category.estimate)
        attendance = attended.concat(estimate)
        capacity = list.map(category => category.capacity).sort((a,b) => b - a)
        generateRowEvent()
        generateRowUpcoming()
        generateRowPast()
    }
)

function organizeList (){
    let organizedList =[]
    for(let i = 0; i < list.length; i++){
        organizedList.push(list[i]);
        organizedList[i].percentage = ((organizedList[i].assistance ?? organizedList[i].estimate)/organizedList[i].capacity*100).toFixed(2)
    }
    return organizedList.sort((a,b) => b.percentage - a.percentage)
}

function findName(param){
    let finder = list.find( category => category.capacity == capacity[param])
    return finder.name
}


function generateRowEvent(){
    eventTable.innerHTML += `<tr>
    <td>${orderList[0].percentage} ${orderList[0].name}</td>
    <td>${orderList[orderList.length-1].percentage} ${orderList[orderList.length-1].name}</td>
    <td>${capacity[0]} ${findName(0)}</td>
  </tr>`
}


function generateRowUpcoming(){
    let upcomingEvents = list.filter(event => objeto.currentDate < event.date);
    upcomingEvents.forEach(function templateUpcoming(array){
        upcomingTable.innerHTML += `<tr>
        <td>${array.category}</td>
        <td>${array.estimate*array.price}</td>
        <td>${((array.estimate/array.capacity)*100).toFixed(2)}</td>
        </tr>`
    })
}

function generateRowPast(){
    let pastEvents = list.filter(event => objeto.currentDate > event.date);
    pastEvents.forEach(function templatePast(array){
        pastTable.innerHTML +=`<tr>
        <td>${array.category}</td>
        <td>${array.assistance*array.price}</td>
        <td>${((array.assistance/array.capacity)*100).toFixed(2)}</td>
        </tr>`
    })
}