
let links = ["https://www.youtube.com/","https://www.youtube.com/","https://www.youtube.com/","https://www.youtube.com/","https://www.youtube.com/","https://www.youtube.com/"]
let linksWrapper = document.querySelector(".contents")
function createLink(i){
    let linksWrap = document.createElement("div")
    linksWrap.className = "linkItem"
    let link = document.createElement('a')
    link.href = i
    link.textContent = i
    linksWrap.appendChild(link)

    return linksWrap
}
function renderLinks(){

    for (let i of links){
        let linkDiv = createLink(i);
        linksWrapper.appendChild(linkDiv);

    }
}

linksWrapper.addEventListener('click',(event)=>{

    let target = event.target.closest("a")
    if (!target) return;

    if (!linksWrapper.contains(target)) return;
    
    let permission = prompt("Are u sure?!?!?!?! y/n")
    if (permission != "y" ){
        event.preventDefault();
    }
})
renderLinks()




//<li class="block"><img src="/img/icons8-file-folder-20.png" alt=""><span class="block-text">asdasdasd</span></li>

let files = ["file 1","file 2","file 3","file 4","file 5","file 6","file 7","file 8"]
let ulElement= document.querySelector(".fileManager_files")
function createLi(innerTextElem){
    let liElement = document.createElement('li')
    liElement.className="block"
    let img = document.createElement("img")
    img.src = "/img/icons8-file-folder-20.png"
    let span = document.createElement("span")
    span.className = "block-text"
    span.textContent = innerTextElem;

    liElement.appendChild(img)
    liElement.appendChild(span)

    return liElement
}

function renderListFiles(){

    for (let i of files){
        let liEl = createLi(i)
        ulElement.appendChild(liEl)
    }



}

renderListFiles()
function switchColors(target){
    let allFIles = document.querySelectorAll(".block")
    for (let i of allFIles){

        if (i != target){
            i.classList.remove("selected")
        }else{
            i.classList.add("selected") 
        }
    }

}
ulElement.addEventListener('click',(event)=>{

    let target = event.target.closest("li")
    if (!target) return;

    if (!ulElement.contains(target)) return;
    
    if (event.ctrlKey){
        target.classList.toggle("selected")        
    }else{
        switchColors(target)
    }

})





colors = ["white","blue","green","yellow","red","violet"]
let polygon = document.querySelector(".animationPolygon")
let startAnimationPolygon = document.querySelector(".startAnimation")
counter = 0
function animation(){
    let rect = document.querySelector(".rectangle")
    let position = 0
    let id = setInterval(() => {
        if (position == 271){
            rect.style.top = "125px";
            rect.style.left = "125px";
            rect.style.scale = "5"
            setInterval(()=>{
                rect.style.backgroundColor = colors[counter]
                rect.style.scale = counter+""
                counter++;
                if (counter==5){
                    counter=0;
                }
                
            },100)
        }else{
            position++;
            rect.style.top = position +'px'
            rect.style.left = position +'px'
            
        }
    }, 10);
}
startAnimationPolygon.addEventListener('click',animation)
counter2 = 0
let wrapper= document.querySelector('.wrapper')
let plygonA= document.querySelector(".animationBlock")
let party = document.querySelector(".party")
let body = document.querySelector("body")
let linkss = document.querySelector(".linksWrapper")
function animationParty(){
    
    linksWrapper.style.display = "none"
    plygonA.style.display = "none"
    setInterval(()=>{
        linkss.style.backgroundColor = colors[counter]
        counter++;
        if (counter==6){
            counter=0;
        }
        
    },100)
}
party.addEventListener('click',animationParty)
