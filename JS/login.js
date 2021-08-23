let h3 = document.querySelector("h3");
function underThis(){
    h3.style.textDecoration = "underline";
}

function overThis(){
    h3.style.textDecoration = "none";
}
document.querySelector(".signup").onmouseover = underThis;
document.querySelector(".signup").onmouseout = overThis;

let email = document.querySelector("form").querySelector("#text");
email.focus();