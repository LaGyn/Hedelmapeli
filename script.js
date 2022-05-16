let canvas = document.getElementById("header");
let ctx = canvas.getContext("2d");
ctx.font = "50px Arial";
ctx.fillStyle = "rgb(238, 238, 114)";
ctx.textAlign = "center";
//ctx.strokeText("Hedelmäpeli", canvas.width/2, canvas.height/2+20);
ctx.fillText("Hedelmäpeli",canvas.width/2,canvas.height/2+20);

let raha = 50;
let voitto = 0;
let panos = document.getElementById("tulostusAlue").innerHTML;
let kierros = 0;

const locks = [0,0,0,0];
const slots = [0,1,2,3];
const kuvat = document.querySelectorAll(".kehys");
// Kuvat:
const images = ['apple.png','cherry.png','number.jpg','pear.png','watermelon.png'];

let img1 = document.getElementById("kuva1");
let img2 = document.getElementById("kuva2");
let img3 = document.getElementById("kuva3");
let img4 = document.getElementById("kuva4");

function asetaPanos(uusiPanos){
    panos = uusiPanos
    document.getElementById("tulostusAlue").innerHTML = panos;
}

function pelaa(uusiKierros){
    
    kierros = kierros + uusiKierros;
    if (kierros == 1 || kierros % 5 == 0){
        raha = raha - panos;
        document.getElementById("rahaa").innerHTML = raha;
    }
   
    arpoo();
    tarkistaVoitto();
    
}

function arpoo(){
    if (locks[0] == 0){
        let luku1 = Math.floor((Math.random() * [images.length]) );
        slots[0] = luku1;
        img1.src = `images/${[images[luku1]]}`;// luvut väliltä 0-4!*/
    }
    if (locks[1] == 0){
        let luku2 = Math.floor((Math.random() * [images.length]) );
        slots[1] = luku2;
        img2.src = `images/${[images[luku2]]}`;// luvut väliltä 0-4!*/
    }
    if (locks[2] == 0){
        let luku3 = Math.floor((Math.random() * [images.length]) );
        slots[2] = luku3;
        img3.src = `images/${[images[luku3]]}`;// luvut väliltä 0-4!*/
    }
    if (locks[3] == 0){
        let luku4 = Math.floor((Math.random() * [images.length]) );
        slots[3] = luku4;
        img4.src = `images/${[images[luku4]]}`;// luvut väliltä 0-4!*/
    }
}

function lukitse(slot){
    if(locks[slot]==0){
        locks[slot] = 1;
        kuvat[slot].classList.add("locked");
    }
    else {
        locks[slot] = 0;
        kuvat[slot].classList.remove("locked");
    }
}

function tarkistaVoitto(){
    if (slots[0] == 0 && slots[1] == 0 && slots[2] == 0 && slots[3] == 0){
        voitto = 6 * panos;
        tulostaVoitto();
        document.getElementById("tulostusAlue").innerHTML = "";
        //slots.toString() == "0,0,0,0"
    } 
    else if (slots[0] == 1 && slots[1] == 1 && slots[2] == 1 && slots[3] == 1){
        voitto = 3 * panos;
        tulostaVoitto();
        document.getElementById("tulostusAlue").innerHTML = "";
    }
    else if (slots[0] == 2 && slots[1] == 2 && slots[2] == 2 && slots[3] == 2){
        voitto = 10 * panos;
        tulostaVoitto();
        document.getElementById("tulostusAlue").innerHTML = "";
    }
    else if (slots[0] == 3 && slots[1] == 3 && slots[2] == 3 && slots[3] == 3){
        voitto = 4 * panos;
        tulostaVoitto();
        document.getElementById("tulostusAlue").innerHTML = "";
    }
    else if (slots[0] == 4 && slots[1] == 4 && slots[2] == 4 && slots[3] == 4){
        voitto = 5 * panos;
        tulostaVoitto();
        document.getElementById("tulostusAlue").innerHTML = "";
    }
    else {
        document.getElementById("voitto").innerHTML = "Ei voittoa!";
    }
}

/*function kolmeKertaa(){
tutki kuinka monta kertaa slotissa esiintyy merkkijono jossa seiskoja eli 2
}*/

function tulostaVoitto(){
    document.getElementById("voitto").innerHTML = "Voitit " + voitto + " €!";
}


/*document.getElementByClassList.add("locked");

function freeLocks(){
    for (let lock in locks){
        lock=0;
    }
    const kuvat = document.querySelectorAll(".kehys")
    kuvat.forEach(function(kuva){
        console.log(kuva)
        kuva.classList.remove('locked')
    })
}*/
