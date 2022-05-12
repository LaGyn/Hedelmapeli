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
let vapaa = true;

let img1 = document.getElementById("kuva1");
let img2 = document.getElementById("kuva2");
let img3 = document.getElementById("kuva3");
let img4 = document.getElementById("kuva4");

/*let nappi1 = document.getElementById("nappi1");
nappi1.addEventListener('click', lukitse);
let nappi2 = document.getElementById("nappi2");
nappi2.addEventListener('click', lukitse);
let nappi3 = document.getElementById("nappi3");
nappi3.addEventListener('click', lukitse);
let nappi4 = document.getElementById("nappi4");
nappi4.addEventListener('click', lukitse);*/

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
    if (vapaa == true && lock == 0){
    let luku1 = Math.floor((Math.random() * 5) + 1);
    let luku2 = Math.floor((Math.random() * 5) + 1);
    let luku3 = Math.floor((Math.random() * 5) + 1);
    let luku4 = Math.floor((Math.random() * 5) + 1);

    if (luku1 == 1){
        img1.src="images/apple.png";
    } else if (luku1 == 2){
        img1.src="images/cherry.png";
    } else if (luku1 == 3){
        img1.src="images/number.jpg";
    } else if (luku1 == 4){
        img1.src="images/pear.png";
    } else if (luku1 == 5){
        img1.src="images/watermelon.png";
    }
      
    if (luku2 == 1){
        img2.src="images/apple.png";
    } else if (luku2 == 2){
        img2.src="images/cherry.png";
    } else if (luku2 == 3){
        img2.src="images/number.jpg";
    } else if (luku2 == 4){
        img2.src="images/pear.png";
    } else if (luku2 == 5){
        img2.src="images/watermelon.png";
    }

    if (luku3 == 1){
        img3.src="images/apple.png";
    } else if (luku3 == 2){
        img3.src="images/cherry.png";
    } else if (luku3 == 3){
        img3.src="images/number.jpg";
    } else if (luku3 == 4){
        img3.src="images/pear.png";
    } else if (luku3 == 5){
        img3.src="images/watermelon.png";
    }

    if (luku4 == 1){
        img4.src="images/apple.png";
    } else if (luku4 == 2){
        img4.src="images/cherry.png";
    } else if (luku4 == 3){
         img4.src="images/number.jpg";
    } else if (luku4 == 4){
        img4.src="images/pear.png";
    } else if (luku4 == 5){
        img4.src="images/watermelon.png";
    }
}
}

const locks = [0,0,0,0];

function lukitse(lock){
    
    if(locks[lock]==0){
        locks[lock] == 1;
    }
    else {
        locks[lock] = 0;
    }
}

/*function lukitse1(){
    vapaa == false;
    img1.style.border="3px solid red";
}
function lukitse2(){
    vapaa == false;
    img2.style.border="3px solid red";
}
function lukitse3(){
    vapaa == false;
    img3.style.border="3px solid red";
}
function lukitse4(){
    vapaa == false;
    img4.style.border="3px solid red";
}*/