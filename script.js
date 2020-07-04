text.onclick = function(event) {
    document.getElementById("popup").setAttribute("style", "display: block;");
    document.getElementById('text').setAttribute("style", "overflow: hidden;");
};
popup.onclick = function(event) {
    document.getElementById("popup").setAttribute("style", "display: none;");
    document.getElementById('text').setAttribute("style", "overflow: auto;");
};


