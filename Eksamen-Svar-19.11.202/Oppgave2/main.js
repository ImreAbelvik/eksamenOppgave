// Henter inn databord tabelen
var tbodyEl = document.querySelector("tbody");

// skafer kanppen leger oå en eventlistener for å se om den blir trykt ned.
var buttonEl = document.querySelector("button");
buttonEl.addEventListener("click", getData);

// henter inn dataen fra brukeren
function getData() {
    var bunnlinjeData = Number(document.querySelector("#bunnlinje").value);
    var topplinjeData = Number(document.querySelector("#topplinje").value);
    var hoydeData = Number(document.querySelector("#hoyde").value);
    var forskyvningData = Number(document.querySelector("#forskyvning").value);

    // regner ut arealet
    var arealData = ((topplinjeData + bunnlinjeData) * hoydeData) / 2;

    // finner ut hva for nå firkant det er 
    if (topplinjeData === bunnlinjeData & bunnlinjeData === hoydeData & forskyvningData == 0){
        var navnData = "Kvadrat";
    } else if(bunnlinjeData === topplinjeData & forskyvningData == 0) {
        var navnData = "Rektangel";
    } else if (bunnlinjeData === topplinjeData & forskyvningData != 0) {
        var navnData = "Parallellogram";
    } else if (bunnlinjeData != topplinjeData) {
        var navnData = "Trapes";
    }

    console.log(bunnlinjeData, topplinjeData, hoydeData, forskyvningData, arealData, navnData);

    // leger til dataen i et object for å sende det til areyen
    var data = {
        navn: navnData,
        bunnlinje: bunnlinjeData,
        topplinje: topplinjeData,
        hoyde: hoydeData,
        forskyvning: forskyvningData,
        areal: arealData 
    }

    firkantData.push(data);
    settOppDataBordet();

}

// Lager arrayen med firkantene som object inni
var firkantData = [
    {
        navn: "Kvadrat",
        bunnlinje: 10,
        topplinje: 10,
        hoyde: 10,
        forskyvning: 0,
        areal: 100
    },
    {
        navn: "Rektangel",
        bunnlinje: 20,
        topplinje: 20,
        hoyde: 5,
        forskyvning: 0,
        areal: 100
    },
    {
        navn: "Parallellogram",
        bunnlinje: 20,
        topplinje: 20,
        hoyde: 10,
        forskyvning: 2,
        areal: 200
    },
    {
        navn: "Trapes",
        bunnlinje: 20,
        topplinje: 10,
        hoyde: 5,
        forskyvning: 2,
        areal: 75
    },
    {
        navn: "Trapes",
        bunnlinje: 5,
        topplinje: 3,
        hoyde: 10,
        forskyvning: 5,
        areal: 40
    }
]


// Setter opp borde med verdiene sine
function settOppDataBordet() {
    tbodyEl.innerHTML = "";
    for (var i = 0; i < firkantData.length; i++){
        // henter inn verdien til firkanten 
        var {navn, bunnlinje, topplinje, hoyde, forskyvning, areal} = firkantData[i];

        // lager data raden
        var trEl = document.createElement("tr");
        // lager td ellement til vert av data setten
        var tdNameEl = document.createElement("td");
        var tdBunnlinjeEl = document.createElement("td");
        var tdTopplinjeEl = document.createElement("td");
        var tdHoydeEl = document.createElement("td");
        var tdForskyvningEl = document.createElement("td");
        var tdArealEl = document.createElement("td");

        // Legger til en id til tr
        trEl.id = i;

        //legger til en klasse på hvær td
        tdNameEl.classList.add(i);
        tdBunnlinjeEl.classList.add(i);
        tdTopplinjeEl.classList.add(i);
        tdHoydeEl.classList.add(i);
        tdForskyvningEl.classList.add(i);
        tdArealEl.classList.add(i);

        // Gjør navnet til firkanten tykere
        tdNameEl.classList.add("bold")

        // legger inn dataen fra arreyen til vært av data radene
        tdNameEl.innerHTML = navn;
        tdBunnlinjeEl.innerHTML = bunnlinje;
        tdTopplinjeEl.innerHTML = topplinje;
        tdHoydeEl.innerHTML = hoyde;
        tdForskyvningEl.innerHTML = forskyvning;
        tdArealEl.innerHTML = areal;

        // Legger alle elementene inn i tr
        trEl.appendChild(tdNameEl);
        trEl.appendChild(tdBunnlinjeEl);
        trEl.appendChild(tdTopplinjeEl);
        trEl.appendChild(tdHoydeEl);
        trEl.appendChild(tdForskyvningEl);
        trEl.appendChild(tdArealEl);

        tbodyEl.appendChild(trEl);

    }
    klik();
}

settOppDataBordet();

// Lager en funcsjon som gjør det mulig for burkerne å klike på raden
function klik() {
    var trArreyEl = document.querySelectorAll("tr");
    trArreyEl.forEach(element => {
        element.addEventListener("click", skafFirkantVerdi);
    });
}

// en verdi for å sjke om slett kanp alerede eksisterer
var buttonExsist = Boolean;
// dette skafer verdiene til den firkanten brukeren tryket på.
function skafFirkantVerdi(e) {
    // tester om slett kanpen alt eksisterer
    if (buttonExsist == true) {
        newButtonEl.hidden = true;
    }

    var number = e.target.classList;

    number = number[0];
    console.log(number);

    var dataVerdier = firkantData[Number(number)];
    console.log(dataVerdier);

    tegnFirkant();

    // lager en knap som kan trykes på for å slette en tr
    var bodyEl = document.querySelector(".buttonEl");
    var newButtonEl = document.createElement("button");
    newButtonEl.innerHTML = "Slett raden";
    newButtonEl.id = "slett";
    bodyEl.appendChild(newButtonEl);
    buttonExsist = true;

    newButtonEl.addEventListener("click", slett);

    // sletter colonenen som er trykket på
    function slett() {
        newButtonEl.hidden = true;
        buttonExsist = false;
        firkantData.splice(Number(number), 1);
        settOppDataBordet();
    }

}

// Del 3
// Skafer canvasen og gjør den klar for å brukes
var canvas = document.querySelector("#myCanvas");
var ctx = canvas.getContext("2d");

function tegnFirkant() {
    /* // Paths
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(150, 50);
    ctx.lineTo(100, 200);
    ctx.lineTo(50, 50)
    // ctx.closePath();
    ctx.stroke();
    // ctx.fill();*/

    //ctx.fillRect(50, 50, hoyde, brede)
}

