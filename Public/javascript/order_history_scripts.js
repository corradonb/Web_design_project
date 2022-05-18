function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function recordFirstOrder() {
    const div = document.createElement('div');
    const main=document.getElementById('main');
    main.appendChild(div);
    div.setAttribute("id", "firstOrder");
    div.style.backgroundColor="rgb(73, 80, 97)";
    div.innerHTML="TODO: fetch data from json";
    let nr1= 0.2*Math.floor(Math.random() * 5);
    let auxNr=Math.floor(Math.random() * 800);
    let nr2= Math.max(600, auxNr);
    div.style.color=`rgba(255, 82, 116, ${nr1})`;
    div.style.width=`${nr2}px`;
    console.log("first order created")
}
//do next one as long as there are new objects in json
function recordOrder() {
    const div = document.createElement('div');
    const main=document.getElementById('main');
    main.appendChild(div);
    div.style.backgroundColor="rgb(73, 80, 97)";
    div.innerHTML="TODO: fetch data from json";
    const firstOrder=document.getElementById("firstOrder");
    div.style.color=getComputedStyle(firstOrder).color;
    div.style.width=`${firstOrder.getBoundingClientRect().width}px`;
    console.log("order created");
}

function init() {
    recordFirstOrder();
    recordOrder();
    recordOrder();
}

window.onload = init;
