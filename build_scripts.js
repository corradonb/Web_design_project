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