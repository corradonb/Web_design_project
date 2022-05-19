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
    div.setAttribute("id", "popup");
    
    const text = document.createElement('div');
    div.appendChild(text);
    text.innerHTML="Please input relevant request data";
    text.style.textAlign="center";
    text.style.marginTop="5vh";
    text.style.fontSize="18px";

    const link=document.createElement('a');
    div.appendChild(link);
    link.href="order_history";
    link.style.width="100%";
    link.style.height="100%";
    link.style.position= "absolute";
    link.style.top="0";
    link.style.left="0";
        
    const button=document.createElement('button');
    button.classList.add("btn");
    div.appendChild(button);
    button.style.position="absolute"
    button.innerHTML="Close"; 

    button.addEventListener("click", onClickDelete);
}
document.addEventListener('keydown', (event)=>{
    if(event.key=='Escape') {
        onClickDelete(event);
    }
    else {
        return;
    }
})
function onClickDelete(event){
    const a = document.getElementById("popup");
    if(a!=null)
        a.remove();
    else
        return;
    if(event.currentTarget.tagName=='BUTTON')
        event.stopPropagation();

}

function handleSubmit(event) {
    const cpu = document.querySelector('[name="cpu"]:checked').value;
    const motherboard = document.querySelector('[name="motherboard"]:checked').value;
    const gpu = document.querySelector('[name="gpu"]:checked').value;
    const psu = document.querySelector('[name="psu"]:checked').value;
    const cooler = document.querySelector('[name="cooler"]:checked').value;
    const case1 = document.querySelector('[name="case1"]:checked').value;
    const req=document.querySelector('[name="req"]').value;
    const regex= /^[0-9A-Za-z-_ ]+$/;
    if(regex.test(req)) {

    }
    else {
    createPopup();
    event.preventDefault();
    }

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