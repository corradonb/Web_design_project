/*
function getStarted() {
    let button=document.querySelector(".go_to_build");
    button.addEventListener('click',handleClick);
}
function handleClick() {
    window.location.href="build.html";
}

window.onload=getStarted;
*/
function onClickCancel(){
    var x=document.getElementById("login_container");
    var y=document.getElementById("signup_container");
    x.style.display="none";
    y.style.display="none";
}

function onClickLogin(){
    var x=document.getElementById("login_container");
    x.style.display="block";
}
function onClickSignup(){
    var x=document.getElementById("signup_container");
    x.style.display="block";
}
function handleSubmit(event) {
    const username = document.querySelector('[name="name"]').value;
    const password = document.querySelector('[name="password"]').value;
    const regex1 = /^[0-9A-Za-z-_ ]+$/;
    const regex2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const credentials = username + ", " + password;
    if(regex1.test(username)){
        window.alert(credentials);
    }
    else{
        window.alert("Invalid username");
        event.preventDefault();
    }
}

document.addEventListener('keydown', (event)=>{
    if(event.key=='Escape') {
        onClickDelete();
    }
    else {
        return;
    }
})

function onClickDelete(event){
    var x=document.getElementById("login_container");
    var y=document.getElementById("signup_container");
    x.style.display="none";
    y.style.display="none";
}

function init() {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
}

window.onload = init;


