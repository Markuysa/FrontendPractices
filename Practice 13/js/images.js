

let mainImage = document.querySelector(".mainImge")

let bottomImages = document.querySelector(".bottomImages")

function changeImages(target){
    let temp = target.src
    target.src = mainImage.src
    mainImage.src = temp
    // mainImage = target
    
    
}

bottomImages.addEventListener('click',(event)=>{

        
    let target = event.target.closest("img")
    if (!target) return;

    if (!bottomImages.contains(target)) return;

    changeImages(target)
})