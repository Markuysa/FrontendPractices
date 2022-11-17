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
    alert(user)
    if (user.login==undefined && user.password=="" && user.email=="")
        return false;
    return true;
}

let createElement = (index)=>{
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
    alert(user)
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
}zz

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

