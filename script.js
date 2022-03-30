
//=================click mechanic=================
let power = 1;
document.getElementById("power").innerHTML = power;

let points = 1000;
document.getElementById("points").innerHTML = Math.round(points);

//=================CLICK=================
let btn = document.getElementById("button");
btn.addEventListener("click", function() {
    points += power;
    document.getElementById("points").innerHTML = Math.round(points);
});



//=================auto click mechanic=================
let pointsps = 0;
document.getElementById("pointsps").innerHTML = pointsps;

//=================auto click=================
let priceauto2 = 200;
document.getElementById("priceauto2").innerHTML = priceauto2;

auto2.addEventListener("click", function() {
    if(points >= priceauto2){
        
        pointsps += 1;
        points -= priceauto2;
        document.getElementById("pointsps").innerHTML = pointsps;
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
}
pps(); 





//=================SHOP=================


//=================+2 upgrade=================
let price20 = 20;
document.getElementById("price20").innerHTML = price20;

let dwa = document.getElementById("dwa");
dwa.addEventListener("click", function() {
    if(points >= price20){
        power += 2;
        points -= price20;
        price20 = Math.round(price20 * 1.5);
        document.getElementById("points").innerHTML = Math.round(points);
        document.getElementById("power").innerHTML = power;
        document.getElementById("price20").innerHTML = price20;
    } 
});

//=================+5 upgrade=================
let price50 = 50;
document.getElementById("price50").innerHTML = price50;

let piec = document.getElementById("piec");
piec.addEventListener("click", function() {
    if(points >= price50){
        power += 5;
        points -= price50;
        price50 = Math.round(price50 * 1.5);
        document.getElementById("points").innerHTML = Math.round(points);
        document.getElementById("power").innerHTML = power;
        document.getElementById("price50").innerHTML = price50;
    } 
});



















