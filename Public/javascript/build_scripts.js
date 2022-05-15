var retainChipset;
var getChipset;

function onClickIntel() {
    var a = document.getElementById("intel_button");
    var b = document.getElementById("amd_button");
    a.style.backgroundColor = 'rgba(255, 82, 116, 0.8)';
    b.style.backgroundColor = 'rgb(61, 67, 81)';
    var x = document.getElementById("intel");
    var y = document.getElementById("amd");
    x.style.display = "block";
    y.style.display = "none";
    localStorage.setItem("retainChipset", "intel");
}
function onClickAmd() {
    var a = document.getElementById("intel_button");
    var b = document.getElementById("amd_button");
    b.style.backgroundColor = 'rgba(255, 82, 116, 0.8)';
    a.style.backgroundColor = 'rgb(61, 67, 81)';
    var x = document.getElementById("intel");
    var y = document.getElementById("amd");
    x.style.display = "none";
    y.style.display = "block";
    localStorage.setItem("retainChipset", "amd");
}
function createPopup() {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.classList.add("popup")
    
    const text = document.createElement('div');
    div.appendChild(text);
    text.innerHTML="Congratulations! Your order has been registered";
    text.style.textAlign="center";
    text.style.marginTop="5vh";
    text.style.fontSize="18px";
    
    const button=document.createElement('a');
    button.classList.add("btn");
    div.appendChild(button);
    button.innerHTML="Check order";
    button.href="order_history";

    /*
    const close=document.createElement('button');
    button.classList.add("btn");
    div.appendChild(button);
    button.innerHTML="Close"; */

}

function handleSubmit(event) {
    const cpu = document.querySelector('[name="cpu"]:checked').value;
    const motherboard = document.querySelector('[name="motherboard"]:checked').value;
    const gpu = document.querySelector('[name="gpu"]:checked').value;
    const psu = document.querySelector('[name="psu"]:checked').value;
    const cooler = document.querySelector('[name="cooler"]:checked').value;
    const case1 = document.querySelector('[name="case"]:checked').value;

    const order_string = cpu + ", " + motherboard + ", " + gpu + ", " + psu + ", " + cooler + ", " + case1;
    createPopup();
    event.preventDefault();
}

function init() {
    getChipset=localStorage.getItem("retainChipset");
    console.log(getChipset);
    if (getChipset != null) {
        if (getChipset == "intel") {
            var a = document.getElementById("intel_button");
            var b = document.getElementById("amd_button");
            a.style.backgroundColor = 'rgba(255, 82, 116, 0.8)';
            b.style.backgroundColor = 'rgb(61, 67, 81)';
            var x = document.getElementById("intel");
            var y = document.getElementById("amd");
            x.style.display = "block";
            y.style.display = "none";
        }
        if (getChipset == "amd") {
            var a = document.getElementById("intel_button");
            var b = document.getElementById("amd_button");
            b.style.backgroundColor = 'rgba(255, 82, 116, 0.8)';
            a.style.backgroundColor = 'rgb(61, 67, 81)';
            var x = document.getElementById("intel");
            var y = document.getElementById("amd");
            x.style.display = "none";
            y.style.display = "block";
        }
    }
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
    
}

window.onload=init;