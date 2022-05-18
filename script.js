let canvas = document.getElementById("header");
let ctx = canvas.getContext("2d");
ctx.font = "50px Arial";
ctx.fillStyle = "rgb(238, 238, 114)";
ctx.textAlign = "center";
ctx.fillText("Hedelmäpeli",canvas.width/2,canvas.height/2+20);
ctx.strokeText("Hedelmäpeli", canvas.width/2, canvas.height/2+20);

let raha = 50;
let voitto = 0;
let panos = document.getElementById("panos").innerHTML;
let kierros = 0;
let uusiVoitto = 0;

const locks = [0,0,0,0];
const slots = [0,1,2,3];
const kuvat = document.querySelectorAll(".kehys");
const images = ['apple.png','cherry.png','number.jpg','pear.png','watermelon.png'];

let img1 = document.getElementById("kuva1");
let img2 = document.getElementById("kuva2");
let img3 = document.getElementById("kuva3");
let img4 = document.getElementById("kuva4");

function asetaPanos(uusiPanos){
    if (raha >= uusiPanos){
        panos = uusiPanos
        document.getElementById("panos").innerHTML = panos;
        freeLocks();
        palautaKuvat();
        kierros = 0;
    }
    else {
        alert("Sinulla ei ole tarpeeksi rahaa!");
    }
    
}

function pelaa(uusiKierros){
    if (kierros < 2){
        kierros = kierros + uusiKierros;
        if (kierros == 1){
            raha = raha - panos;
            document.getElementById("rahaa").innerHTML = raha;
        }
        if (kierros == 2){
            document.getElementById("panos").innerHTML = "";
        }
    arpoo();
    tarkistaVoitto();
    kolmeKertaa();
    }
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
    } 
    else if (slots[0] == 1 && slots[1] == 1 && slots[2] == 1 && slots[3] == 1){
        voitto = 3 * panos;
        tulostaVoitto();
    }
    else if (slots[0] == 2 && slots[1] == 2 && slots[2] == 2 && slots[3] == 2){
        voitto = 10 * panos;
        tulostaVoitto();
    }
    else if (slots[0] == 3 && slots[1] == 3 && slots[2] == 3 && slots[3] == 3){
        voitto = 4 * panos;
        tulostaVoitto();
    }
    else if (slots[0] == 4 && slots[1] == 4 && slots[2] == 4 && slots[3] == 4){
        voitto = 5 * panos;
        tulostaVoitto();
    }
    else {
        document.getElementById("voitto").innerHTML = "Ei voittoa!";
    }
}

function kolmeKertaa(){
    let seiska = 0;
    if (slots[0] == 2){
        seiska ++;
    }
    if (slots[1] == 2){
        seiska ++;
    }
    if (slots[2] == 2){
        seiska ++;
    }
    if (slots[3] == 2){
        seiska ++;
    }
    if (seiska == 3){
        voitto = 5 * panos;
        tulostaVoitto();
    }
}

function tulostaVoitto(){
    raha = raha + voitto;
    document.getElementById("rahaa").innerHTML = raha;
    document.getElementById("voitto").innerHTML = "Voitit " + voitto + " €!";
    document.getElementById("panos").innerHTML = "";
}


document.getElementByClassList.add("locked");

function freeLocks(){
    if (locks[0] == 1){
        locks[0] = 0;
        kuvat[0].classList.remove("locked");
    }
    if (locks[1] == 1){
        locks[1] = 0;
        kuvat[1].classList.remove("locked");
    }
    if (locks[2] == 1){
        locks[2] = 0;
        kuvat[2].classList.remove("locked");
    }
    if (locks[3] == 1){
        locks[3] = 0;
        kuvat[3].classList.remove("locked");
    }
}

function palautaKuvat(){
    img1.src = "images/apple.png";
    img2.src = "images/cherry.png";
    img3.src = "images/pear.png";
    img4.src = "images/watermelon.png";
}
