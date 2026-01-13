const increbutton = document.getElementById("incre")
const decrebutton = document.getElementById("decre")
const resetbutton = document.getElementById("reset")

const Displaycount = document.getElementById("count")


let count = 0;
//increment
increbutton.addEventListener("click",() => {
    count++;
    Displaycount.innerText = count;
})
//decrement
decrebutton.addEventListener("click",() => {
    count--;
    Displaycount.innerText = count;
})
//reset
resetbutton.addEventListener("click",() => {
    count = 0;
    Displaycount.innerText = 0;
})