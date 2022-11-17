let meditations= [
    {id:1,title: "Get alone with nature - hear the sounds of real wildlife to feel true happiness",rating: 4.1},
    {id:2,title: "Discover true peace and tranquility with meditation to the sounds of the famous Tibetan meditation instrument",rating: 4.4},
    {id:3,title: "Meditations for sleep - calm your soul and let in the cosmic force",rating: 4.0},
    {id:4,title: "Get to know the true essence of existence on the planet, immerse yourself in your own universe - in your mind",rating: 5.0},
    {id:5,title: "Realize the power of your subconscious - see your power",rating: 3.1},
    {id:6,title: "Feel how all the problems dissipate and only common sense and self-knowledge appear",rating: 4.2},
    {id:7,title: "See the real world without earthly problems and adversities immerse yourself in the astral",rating: 4.5}
]
let interval
function startNotifications(){
    interval = setInterval(()=>{

        let counterNotifications = document.querySelector(".counter")
        let value = Number(counterNotifications.textContent)
        counterNotifications.textContent = value+1
    },3000)
}

function delay(func, ms) {
    clearInterval(interval)
    return function() {
      setTimeout(func, ms);
    };
}

let notificationsButon = document.querySelector(".bell")
notificationsButon.addEventListener('mouseover',()=>{

    delay(startNotifications, 10000)();
})
startNotifications()

function createLI(object){
    let liElem = document.createElement('li')
    liElem.className = "informationBlock__list__item"
    liElem.textContent = object.id + object.title + object.rating
    return liElem
}
let ulList = document.querySelector('.informationBlock__list')
function renderList(){
    ulList.innerHTML = ''
    for (let i =0;i<meditations.length;i++){
        ulList.appendChild(createLI(meditations[i]))
    }
    
}
renderList()

let replaceButton = document.querySelector('.replace')
let deleteButton = document.querySelector('.delete')
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  

replaceButton.addEventListener('click',()=>{
    let second = Math.round(Math.random() * meditations.length)
    let first = Math.round(Math.random() * meditations.length)
    let firstEL  = meditations[first]
    let secondEL  = meditations[second]
    meditations[first]= secondEL
    meditations[second] = firstEL
    renderList()
})

deleteButton.addEventListener('click',()=>{
    
    if (meditations.length==0){
        alert("ALO EMPTY!")
    }
    else{
        meditations = meditations.splice(1)
        renderList()
    }

})