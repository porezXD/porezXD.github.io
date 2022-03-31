


//================================================
//=================click mechanic=================
//================================================
let power = 1;
document.getElementById("power").innerHTML = power;

let points = 101111100;
document.getElementById("points").innerHTML = Math.round(points);

//=======================================
//=================CLICK=================
//=======================================
let btn = document.getElementById("button");
btn.addEventListener("click", function() {
    points += power;
    document.getElementById("points").innerHTML = Math.round(points);
});

btn.addEventListener("mousedown", function() {
    anime({
        targets: 'div.button',
        scale: '1.1',
        rotate: function(){
            return anime.random(-10, 10);
        },
        duration: '100',
        easing: 'easeOutQuad',
        background: function randomcolor(){
            let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            return randomColor;
        },
    })
});

btn.addEventListener("mouseup", function(){
    anime({
        targets: 'div.button',
        scale: '1',
        duration: '100',
        easing: 'easeOutQuad',
        
    })
});


//=================SHOP=================

//============================================
//=================+2 upgrade=================
//============================================
let price20 = 20;
let lvl20 = 0;
document.getElementById("lvl20").innerHTML = lvl20;
document.getElementById("price20").innerHTML = price20;

let dwa = document.getElementById("dwa");
dwa.addEventListener("click", function() {
    if(points >= price20){
        power += 2;
        points -= price20;
        price20 = Math.round(price20 * 1.15);
        lvl20 += 1;
        document.getElementById("lvl20").innerHTML = lvl20;
        document.getElementById("points").innerHTML = Math.round(points);
        document.getElementById("power").innerHTML = power;
        document.getElementById("price20").innerHTML = price20;
    } 
});

//============================================
//=================+5 upgrade=================
//============================================
let price50 = 50;
let lvl50 = 0;
document.getElementById("lvl50").innerHTML = lvl50;
document.getElementById("price50").innerHTML = price50;

let piec = document.getElementById("piec");
piec.addEventListener("click", function() {
    if(points >= price50){
        power += 5;
        points -= price50;
        price50 = Math.round(price50 * 1.3);
        lvl50 += 1;
        document.getElementById("lvl50").innerHTML = lvl50;
        document.getElementById("points").innerHTML = Math.round(points);
        document.getElementById("power").innerHTML = power;
        document.getElementById("price50").innerHTML = price50;
        
    } 
});

//=====================================================
//=================auto click mechanic=================
//=====================================================
let pointsps = 0;
document.getElementById("pointsps").innerHTML = pointsps;
//============================================
//=================auto click=================
//============================================
let priceauto2 = 200;
let lvlauto = 0;
document.getElementById("lvlauto").innerHTML = lvlauto;
document.getElementById("priceauto2").innerHTML = priceauto2;

auto2.addEventListener("click", function() {
    if(points >= priceauto2){
        pointsps += 1;
        points -= priceauto2;
        lvlauto += 1;
        document.getElementById("lvlauto").innerHTML = lvlauto;
        document.getElementById("pointsps").innerHTML = pointsps;
        if(priceauto2 <= 1000){
            priceauto2 = Math.round(priceauto2 * 1.1);
            document.getElementById("priceauto2").innerHTML = priceauto2;
        } else {
            priceauto2 = Math.round(priceauto2 * 1.05);
            document.getElementById("priceauto2").innerHTML = priceauto2;
        }
    }
});

let i = 0;
function pps() {         
  setTimeout(function() { 
    let pointspms = pointsps / 100;
    points += pointspms;
    document.getElementById("points").innerHTML = Math.round(points);  
    i++;                   
    pps();                 
  }, 10)
}pps(); 












