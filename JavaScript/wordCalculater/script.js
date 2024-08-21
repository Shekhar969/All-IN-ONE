let Text = document.querySelectorAll("#UserInput")
let Btn =document.querySelector("#CalBtn")
let Status =document.querySelector("#Ans")

Btn.addEventListener("click" , calculate);
function calculate(){
     var textlen =Text.value;
    Status.innerHTML =textlen.length;
}