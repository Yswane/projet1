const titre = document.querySelector(".moveIsland");
const cadre = document.querySelector("div.titleIsland");

const maxHeight = cadre.clientHeight;
const maxWidth = cadre.clientWidth;


titre.style.position = "relative";
let topPos = 0;
let leftPos = 0;
let forceH = -1;
let forceW = -1;

function animation() {
    if (topPos == 0) { forceH *= -1 }
    else if (topPos == maxHeight - titre.offsetHeight) {forceH *= -1}
    
    if (leftPos == 0) { forceW *= -1 }
    else if (leftPos == maxWidth - titre.offsetWidth) {forceW *= -1}
    
    topPos += forceH;
    leftPos += forceW;
        
    titre.style.top = topPos + "px";
    titre.style.left = leftPos + "px";
    
    requestAnimationFrame(animation);
}


requestAnimationFrame(animation);