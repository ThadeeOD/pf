dragTab(document.getElementById("tab1"));
dragTab(document.getElementById("tab2"));

function dragTab(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closedragTab;
        // call a function whenever the cursor moves:
        document.onmousemove = tabDrag;
    }

    function tabDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closedragTab() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}