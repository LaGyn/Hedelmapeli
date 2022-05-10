let canvas = document.getElementById("header");
let ctx = canvas.getContext("2d");
ctx.font = "50px Arial";
ctx.fillStyle = "rgb(238, 238, 114)";
ctx.textAlign = "center";
//ctx.strokeText("Hedelmäpeli", canvas.width/2, canvas.height/2+20);
ctx.fillText("Hedelmäpeli",canvas.width/2,canvas.height/2+20);

let raha = 50;
let voitto = 0;
function panos1(){
    document.getElementById("tulostusAlue").innerHTML = "1€";
    raha = raha - 1;
    document.getElementById("rahaa").innerHTML = raha;
    //return raha;
}
function panos2(){
    document.getElementById("tulostusAlue").innerHTML = "2€";
    raha = raha - 2;
    document.getElementById("rahaa").innerHTML = raha;
    //return raha;
}
function panos3(){
    document.getElementById("tulostusAlue").innerHTML = "3€";
    raha = raha - 3;
    document.getElementById("rahaa").innerHTML = raha;
    //return raha;
}
function panos4(){
    document.getElementById("tulostusAlue").innerHTML = "4€";
    raha = raha - 4;
    document.getElementById("rahaa").innerHTML = raha;
    //return raha;
}

let img1 = document.getElementById("kuva1");
let img2 = document.getElementById("kuva2");
let img3 = document.getElementById("kuva3");
let img4 = document.getElementById("kuva4");

let nappi1 = document.getElementById("nappi1");

let nappi2 = document.getElementById("nappi2");
nappi2.addEventListener('click', lukitse2);
let nappi3 = document.getElementById("nappi3");
nappi3.addEventListener('click', lukitse3);
let nappi4 = document.getElementById("nappi4");
nappi4.addEventListener('click', lukitse4);

function pelaa(){
    if (document.getElementById("tulostusAlue").value = "1€" || "2€" || "3€" || "4€"){
        document.getElementById("kuva1").innerHTML = "";
        document.getElementById("kuva2").innerHTML = "";
        document.getElementById("kuva3").innerHTML = "";
        document.getElementById("kuva4").innerHTML = "";
        let luku1 = Math.floor((Math.random() * 5) + 1);
        let luku2 = Math.floor((Math.random() * 5) + 1);
        let luku3 = Math.floor((Math.random() * 5) + 1);
        let luku4 = Math.floor((Math.random() * 5) + 1);

        if (img1.style.border="1px solid rgb(29, 86, 15)"){
            nappi1.addEventListener('click', lukitse1);
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
            } else {
                return;
            }
        }
        
        if (img2.style.borderColor="rgb(29, 86, 15)"){
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
    } else {
        alert("Aseta panos!");
    }
    
}

function lukitse1(){
    img1.style.border="3px solid red";
}
function lukitse2(){
    img2.style.border="3px solid red";
}
function lukitse3(){
    img3.style.border="3px solid red";
}
function lukitse4(){
    img4.style.border="3px solid red";
}