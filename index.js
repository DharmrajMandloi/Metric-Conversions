let convertBtn = document.getElementById("convert-btn")
let inputBtn = document.getElementById("inputbtn")
let lenCon = document.getElementById("lencon")
let volCon = document.getElementById("volcon")
let massCon = document.getElementById("masscon")

convertBtn.addEventListener("click", function(){
    let num = inputBtn.value
    if(num===""){
        lenCon.textContent = ``
        volCon.textContent = ``
        massCon.textContent = ``
        return
    }
    lenCon.textContent = `${num} meters = ${(num*3.280).toFixed(3)} feet | ${num} feet = ${(num*0.304).toFixed(3)} meters`
    volCon.textContent = `${num} liters = ${(num*0.264).toFixed(3)} gallons | ${num} gallons = ${(num*3.785).toFixed(3)} liters`
    massCon.textContent = `${num} kilos = ${(num*2.204).toFixed(3)} pounds | ${num} pounds = ${(num*0.453).toFixed(3)} kilos`
}) 