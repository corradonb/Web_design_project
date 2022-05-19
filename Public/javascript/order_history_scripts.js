function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
async function fetchData() {
    const res=await fetch('/fetch_route');
    const data=await res.json();
    const {scpu, smotherboard, sgpu, spsu, scooler, case1, req} = data[0];
    let text=scpu + ", " + smotherboard + ", " + sgpu + ", " + spsu + ", " + scooler + ", " + case1 + ", " + req;
    recordFirstOrder(text);
    for(let i=1;i<data.length; i++) {
        const {scpu, smotherboard, sgpu, spsu, scooler, case1, req} = data[i];
        text=scpu + ", " + smotherboard + ", " + sgpu + ", " + spsu + ", " + scooler + ", " + case1 + ", " + req;
        recordOrder(text);
    }
}

function recordFirstOrder(element) {
    const div = document.createElement('div');
    const main=document.getElementById('main');
    main.appendChild(div);
    div.setAttribute("id", "firstOrder");
    div.style.backgroundColor="rgb(73, 80, 97)";
    div.innerHTML=element;
    div.style.marginBottom="10px";
    let auxNr1=0.2*Math.floor(Math.random() * 5);
    let nr1= Math.max(0.4, auxNr1);
    let auxNr=Math.floor(Math.random() * 600);
    let nr2= Math.max(400, auxNr);
    div.style.color=`rgba(255, 82, 116, ${nr1})`;
    div.style.width=`${nr2}px`;
    console.log("first order created")
}
//do next one as long as there are new objects in json
function recordOrder(element) {
    const div = document.createElement('div');
    const main=document.getElementById('main');
    main.appendChild(div);
    div.style.backgroundColor="rgb(73, 80, 97)";
    div.innerHTML=element;
    div.style.marginBottom="10px";
    const firstOrder=document.getElementById("firstOrder");
    div.style.color=getComputedStyle(firstOrder).color;
    div.style.width=`${firstOrder.getBoundingClientRect().width}px`;
    console.log("order created");
}

function init() {
    fetchData();
}

window.onload = init;
