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
    if (kierros < 2){
        kierros = kierros + uusiKierros;
        if (kierros == 1){
            raha = raha - panos;
            document.getElementById("rahaa").innerHTML = raha;
        }
        if (kierros == 2){
            document.getElementById("voitto").innerHTML = "Ei voittoa!";
        }
        arpoo();
    } 
}

function arpoo(){
    if (locks[0] == 0){
        let luku1 = Math.floor((Math.random() * [images.length]) );
        img1.src =`images/${[images[luku1]]}`;
    }
    if (locks[1] == 0){
        let luku2 = Math.floor((Math.random() * [images.length]) );
        img2.src = `images/${[images[luku2]]}`;
    }
    if (locks[2] == 0){
        let luku3 = Math.floor((Math.random() * [images.length]) );
        img3.src = `images/${[images[luku3]]}`;
    }
    if (locks[3] == 0){
        let luku4 = Math.floor((Math.random() * [images.length]) );
        img4.src = `images/${[images[luku4]]}`;
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
// Seuraavana vertaus funktio joka tarkistaa tuliko voittoa.

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
