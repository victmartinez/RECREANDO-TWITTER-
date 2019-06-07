let twitting = document.getElementById("twitting");
let twitted = document.getElementById("twitted");
let twitBtn = document.getElementById("twittBtn");
let contador = document.getElementById("counter");
// cuando apretemos TWEET se imprimirá en ul uhhh ayuda
twittBtn.addEventListener("click", postTwitt);

function postTwitt (evento){
let twittedTextLi = document.createElement("li")

twittedTextLi.textContent = twitting.value;
twitted.appendChild(twittedTextLi);
twitting.value= "";
 };

//  contador de caracteres
function count (string){
    let chartNumber = string.length;

} 