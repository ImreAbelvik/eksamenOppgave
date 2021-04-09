// Leger til lyden og p elemente i documentet
var audioEl = document.querySelector("#audio-EVH");
var pEl = document.querySelector("p");

// skafer Canvasen å gjør det klar til å tegnes på når brukeren oppgir brede.
var canvas = document.querySelector("#myCanvas");
var ctx = canvas.getContext("2d");

// Skafer knappen.
var buttenEl = document.querySelector("button");

// Kjører hvoedfunksjoen når kanpen trykes inn.
buttenEl.addEventListener("click", run);

// lager en liste hvor vi kan lagge til bredene
var brukteBreder = [];

// Hoved funcsjonen som kjører når knapen trykes inn
function run() {
    var bredde = document.querySelector("input").value;
    console.log(bredde);

    // Sjeker at verdien brukeren oppga er gyldig
    if (bredde > 9 || bredde < 0) {
        alert("Verdien du oppga er ugyldig");
        return;
    } 

    // Sjeker at verdien bruker oppga ikke er brukt
    for (var i = 0; i < brukteBreder.length; i++) {
        if (brukteBreder[i] == bredde){
            alert("Du har alt brukt dene bredden");
            return;
        }
    }
    brukteBreder.push(bredde);


    // finner ut hva hoyden og arialet skal være 
    var hoyde = 10 - bredde;
    console.log(hoyde);
    var arial = hoyde * bredde;

    // gjør om bredde og hoyde til px;
    bredde *= 50;
    hoyde *= 50;

    tegnFirkanten(50, 50, bredde, hoyde);

    canvas.classList.remove("usynlig");
    
    //canvas.classList.add("animation");
    // Spil av lyd
    audioEl.classList.remove("usynlig");
    audioEl.play();
    canvas.animate([{opacity:0},{opacity:1}],2000)
    
    // Skriver ut hva arialet er 
    pEl.innerHTML = `Arialet til firkanten er ${arial} cm^2`;

}

// Funksjo som tegner firkanten.
function tegnFirkanten(x, y, bredde, hoyde) {
    // fjerner firkanten som var tegnet der fra før
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Tegner den nye firkanten.
    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, bredde, hoyde);
}


  