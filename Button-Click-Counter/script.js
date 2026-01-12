const button = document.getElementById("btn")
const buttoncounter = document.getElementById("sh-c")

let showcounter = 0
button.addEventListener("click",counter)

function counter(){
    showcounter++
    buttoncounter.innerText = showcounter
}