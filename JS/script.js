let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
    let unfor = document.getElementById("unforgettable");
    let rightSec = unfor.querySelector("#right-sec");
    let topImg = rightSec.querySelector(".top");
    let bottomImg = rightSec.querySelector(".bottom");
    let div = topImg.querySelector("img");
    let div2 = bottomImg.querySelector("img");
    div.setAttribute("style","top: 1%");
    div2.setAttribute("style","top: 26.8%");
    if(scrollPos!=0){
        div.setAttribute("style","top: -3.320000001%");
        div2.setAttribute("style","top: 31%");
    }
    // console.log(scrollPos);
}

document.addEventListener('scroll', function (e) {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function () {
            doSomething(lastKnownScrollPosition);
            ticking = false;
        });
        ticking = true;
    }
});