let showCaptchaButon = document.querySelector(".showCaptcha")
let captchaModal = document.querySelector(".captchaWrapper")
let captchaTextBlock = document.querySelector(".captcha__content__text")
let sumbitFormButton = document.querySelector('.sendFormButton')
let usersList = []
const showCaptcha = ()=>{


    captchaModal.style.opacity  = "1"
    captchaModal.style.visibility = "visible"
    event.preventDefault()
}

showCaptchaButon.addEventListener('click',showCaptcha)
flag = true
let currentExpressionCaptcha
const submitCaptcha = ()=>{
    let innerCaptchaText = document.querySelector(".userCaptchaInput")
    let errorMessage = document.querySelector(".errorMessage")
    if (innerCaptchaText.value!="") {
        if (flag){
            if (innerCaptchaText.value == captchaTextBlock.textContent){
                captchaModal.style.opacity  = "0"
                captchaModal.style.visibility = "collapse"
                sumbitFormButton.disabled = false
            }
            else{
                errorMessage.textContent = "Incorrect!!! Try again"
                currentExpressionCaptcha = getRandomExpressionCaptcha()
                setRandomCaptcha(currentExpressionCaptcha.expressionContent)
                flag=false;
                
            }
        }else{
            if (innerCaptchaText.value==currentExpressionCaptcha.value){
                captchaModal.style.opacity  = "0"
                captchaModal.style.visibility = "collapse" 
                sumbitFormButton.disabled = false
            }else {
                errorMessage.textContent = "Incorrect!!! Try again"
                currentExpressionCaptcha = getRandomExpressionCaptcha()
                setRandomCaptcha(currentExpressionCaptcha.expressionContent)
            }

        }
        innerCaptchaText.value=""
    }
    else {
        errorMessage.textContent = "Input the captcha!!"
    }

    event.preventDefault()
}

let sumbitCaptchaButton = document.querySelector('.submitCaptcha')
sumbitCaptchaButton.addEventListener('click',submitCaptcha)


let closeModalCaptcha = document.querySelector('.closeButton')

closeModalCaptcha.addEventListener('click',()=>{
    captchaModal.style.opacity  = "0"
    captchaModal.style.visibility = "hidden"
})



const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const randomDigit = "0123456789"
const randomOperand = "*/-+^"
const setRandomCaptcha = (captchaText)=>{
    

    captchaTextBlock.textContent = captchaText

} 

const getRandomTextCaptcha = ()=>{

    let captchaText = ""
    for (let i = 1; i < 7; i++) {
        captchaText += randomchar.charAt(
            Math.random() * randomchar.length)
    }
    return captchaText
}

const getRandomExpressionCaptcha = ()=>{

    let expression = {

    }
    let expressionText = ""
    expressionText += randomDigit.charAt(
        Math.random() * randomDigit.length)
    expressionText += randomOperand.charAt(
        Math.random() * randomOperand.length)
    expressionText += randomDigit.charAt(
        Math.random() * randomDigit.length)
    
    expression.expressionContent = expressionText
    switch(expressionText[1]){
        case '*':{
            expression.value = Number(expressionText[0]) * Number(expressionText[2])
            break
        }
        case '+':{
            expression.value = Number(expressionText[0]) + Number(expressionText[2])
            break
        }
        case '-':{
            expression.value = Number(expressionText[0]) - Number(expressionText[2])
            break
        }
        case '/':{
            expression.value = Number(expressionText[0]) / Number(expressionText[2])
            break
        }
        case '^':{
            expression.value = Number(expressionText[0])**Number(expressionText[2])
            break
        }
    }
    return expression
}
setRandomCaptcha(getRandomTextCaptcha())

let user = {}
const isEmpty = (user)=>{
    if (user.login==undefined && user.password=="" && user.email=="")
        return false;
    return true;
}

let createElement = (index)=>{
    let close = document.createElement('div')
    close.className = "closeLI"
    let liElem = document.createElement("li")
    liElem.className = "usersList__user"
    liElem.textContent = usersList[index].login
    return liElem
}

let backetIcon = document.querySelector(".backetIcon")
let usersModal = document.querySelector(".users")
let usersListDOM = document.querySelector(".usersList")


const checkSumbit= ()=>{
    event.preventDefault()
    let login = document.querySelector('.formInputLogin')
    let email = document.querySelector('.formInputEmail')
    let password = document.querySelector('.formInputPassword')

    user.login = login.value
    user.password = password.value
    user.email = email.value
    if (!isEmpty(user)){
        alert("INPUT THE INFORMATION!!!!!")
    }
    else {
        usersList.push(user)
        usersListDOM.appendChild(createElement(counter))
        login.value = ""
        email.value = ""
        password.value = ""
        counter+=1
    }
}

sumbitFormButton.addEventListener('click',checkSumbit)




function Accumulator(stringValue){

    currentValue = stringValue
    return{

        value : stringValue,
        read: function(){
            let number = prompt("Input the number")
            this.value  = Number(this.value)+Number(number)
        }
    }
}

let setAcc = document.querySelector(".createAcc")
let incAcc = document.querySelector(".increaseAcc")
let accInput = document.querySelector(".accDataInput")
let accData = document.querySelector('.accData')
let accum
const setAccumulator = ()=>{

    accum = new Accumulator(accInput.value)
    accData.textContent = accum.value

}
setAcc.addEventListener('click',setAccumulator)
const incAccumulator = ()=>{

    accum.read(accInput.value)
    
    accData.textContent = accum.value
}
incAcc.addEventListener('click',incAccumulator)
//------------------------------------------------------------------------------------------------------------------------//

counter = 0
const openBacket = ()=>{


   

    usersModal.style.visibility = "visible"
    usersModal.style.opacity = "1"


    

}


backetIcon.addEventListener('click',openBacket)


let closeBacketButton = document.querySelector(".closeButtonBacket")

const closeBacket = ()=>{
    usersModal.style.visibility = "hidden"
    usersModal.style.opacity = "0"

}

closeBacketButton.addEventListener('click',closeBacket)



let notification = document.querySelector(".notification")

setTimeout(()=>{
    notification.style.visibility = "hidden"
    notification.style.opacity = "0"
},1500)


let imageBlock = document.querySelector(".imageBlock__content")


flag = true

imageBlock.addEventListener('click',(e)=>{
    e.preventDefault()
    mouseX = e.pageX;
    mouseY = e.pageY; 
    alert(mouseX+" "+mouseY)
})
imageBlock.style.display = "flex"
imageBlock.style.flexDirection = "column"
imageBlock.style.justifyContent = "center"
imageBlock.style.alignItems = "center"



let link = document.querySelector('.link')


link.style.color ="red"





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

let replaceButton = document.querySelector('.replace')
let deleteButton = document.querySelector('.delete')
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function deleteLi(target){
    let close = target.querySelector('span')
    close.addEventListener('click',()=>{

        target.style.display="none"
    })
}
let listNotifications = document.querySelector(".list_items")

listNotifications.addEventListener('click',(event)=>{

    let target = event.target.closest("li")
    if (!target) return;

    if (!listNotifications.contains(target)) return
    deleteLi(target);

})



