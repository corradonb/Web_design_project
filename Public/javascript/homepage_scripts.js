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



