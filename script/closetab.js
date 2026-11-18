closeTab(document.getElementById("tab1"));
closeTab(document.getElementById("tab2"));

openTab(document.getElementById("tab1"));
openTab(document.getElementById("tab2"));

//By default, Tabs are hidden
document.getElementById("tab1").hidden = false;
document.getElementById("tab2").hidden = true;

function closeTab(elmnt) {
    document.getElementById("close" + elmnt.id).onclick = function() {
        document.getElementById(elmnt.id).hidden = true;
    }
}

function openTab(elmnt) {
    document.getElementById("open" + elmnt.id).onclick = function() {
        document.getElementById(elmnt.id).hidden = false;
    }
}