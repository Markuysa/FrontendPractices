
//------------------------------------------------------------------------------------------------------------------//
const escHandler = ()=>{
    document.keydown(function(e) {
        if (e.keyCode == 27) {
            return true
        }
        return false
    });
    
}

const checkPassword=(password)=>{
    if (password == null){
        alert("canceled")
        return;
    }
    else {
        if (password == "i'm in charge")
        alert("Hello")
        else{            
            alert("Incorrect password!")
        }
    }
}


const firstTask= ()=>{

    console.log("asdasd")
    let userChoice = prompt("Желаете пройти регистрацию на сайте?")
    if (userChoice.toLowerCase() == "да"){
        alert("Круто!")
    }
    else{
        alert("Попробуй еще раз")
        firstTask()
    }
};

const secondTask = ()=>{
    let login = prompt("Input the login")
    let password
    if (login==null || login.length == 0)
        alert("Canceled")
    else{
        if (login.toLowerCase() == 'admin'){
            password = prompt("Input the password")
            checkPassword(password)
        }
        else 
            alert("Close the programm, noname!")
    }

};
//setting listeners
let firstButton = document.querySelector(".firstTask")
let secondButton = document.querySelector(".secondTask")

firstButton.addEventListener('click',firstTask);
secondButton.addEventListener('click',secondTask);

//------------------------------------------------------------------------------------------------------------------//
let count=0;
const like_button = ()=>{
    let counter=document.querySelector(".counter")
    let heart = document.querySelector('.heart')
    if (count % 2==0){
        counter.textContent = String(Number(counter.textContent) + 1) 
        heart.classList.add("active");
    }else {
        counter.textContent = String(Number(counter.textContent) - 1) 
        heart.classList.remove("active");
    }
    count++;
}

let like=document.querySelector(".like_button")
like.addEventListener('click',like_button)




