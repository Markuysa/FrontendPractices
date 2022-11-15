
let maxlength = prompt("Input the length")

let textBlock = document.querySelector(".textBlock__content")

let textContent = textBlock.textContent
const formDots = (len)=>{
    result = ''
    for (let i =0;i<len;i++){
        result+='.'
        if (i%10==0)
            result+='\n'
    }
    return result;
}

textBlock.textContent = textContent.substring(0,maxlength) + formDots(textContent.length-maxlength)


