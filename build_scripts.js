function onClickIntel() {
    var a = document.getElementById("intel_button");
    var b = document.getElementById("amd_button");
    a.style.backgroundColor = 'rgba(255, 82, 116, 0.8)';
    b.style.backgroundColor = 'rgb(61, 67, 81)';
    var x = document.getElementById("intel");
    var y = document.getElementById("amd");
    x.style.display = "block";
    y.style.display = "none";
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
}
function handleSubmit(event) {
    const cpu = document.querySelector('[name="cpu"]:checked').value;
    const motherboard = document.querySelector('[name="motherboard"]:checked').value
    const gpu = document.querySelector('[name="gpu"]:checked').value
    const case1 = document.querySelector('[name="case"]:checked').value
    const order_string = cpu + " " + motherboard + " " + gpu + " " + case1;
    window.alert(order_string);
    event.preventDefault();
}

function init() {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
    
}

window.onload=init;