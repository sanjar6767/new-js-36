let idInput = document.getElementById("id")
let ideInput = document.getElementById("ide")
let btn = document.getElementById("btn")
let hello = document.getElementById("hello")

let lonins = {
    login:"sanjar",
    password: "0000"
}

hello.textContent = "hello " + lonins.login

btn.addEventListener("click",()=>{
    if(idInput.value === lonins.login){
        window.location.href = "student.html"
    }
    else{
        alert("bu xato")
    }
})