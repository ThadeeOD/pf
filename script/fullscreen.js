fullscreenTab(document.getElementById("tab1"));
fullscreenTab(document.getElementById("tab2"));

smallscreenTab(document.getElementById("tab1"));
smallscreenTab(document.getElementById("tab2"));

//Hide the smallscreen button by default
document.getElementById("smallscreentab1").hidden = true;
document.getElementById("smallscreentab2").hidden = true;

//Define the style of a "Fullscreen" or "Smallscreen" Tab
const fullscreen = 'document.getElementById(elmnt.id).style.width = "100%"; document.getElementById(elmnt.id).style.height = "95%"; document.getElementById(elmnt.id).style.left = "0"; document.getElementById(elmnt.id).style.top = "0"; document.getElementById("fullscreen" + elmnt.id).hidden = true; document.getElementById("smallscreen" + elmnt.id).hidden = false;';
const smallscreen = 'document.getElementById(elmnt.id).style.width = "500px"; document.getElementById(elmnt.id).style.height = "500px"; document.getElementById("fullscreen" + elmnt.id).hidden = false; document.getElementById("smallscreen" + elmnt.id).hidden = true;'

const posX = 0;
const posY = 0;
const width = 0;
const height = 0;


function isTabFullscreen(elmnt) {
    if (document.getElementById(elmnt.id).style.height = "100%") {

    }
}

function fullscreenTab(elmnt) {
    document.getElementById("fullscreen" + elmnt.id).onclick = function() {
        eval(fullscreen);
    }
}

function smallscreenTab(elmnt) {
    document.getElementById("smallscreen" + elmnt.id).onclick = function() {
        eval(smallscreen);
    }
}