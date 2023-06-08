let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".container");



menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");

    
}
let mode = document.getElementById('mode');
let link = document.querySelectorAll('a.navLeftLinks');
let vidInfo = document.querySelectorAll('div.vid-info');
let modebutton = document.getElementById('modebutton');
// let modebuttonimg = document.getElementById('modebuttonimg');
function modechanger(){
    mode.style.color = 'white';
    mode.style.backgroundColor = 'black';
    link.forEach(function(link) {
        link.style.color = 'white';
    });
    document.getElementById('modebuttonimg').src= 'images/darkmode.svg';
    document.getElementById('modebutton').onclick = modechangerlight;
}
function modechangerlight(){
    mode.style.color = 'black';
    mode.style.backgroundColor = 'white';
    link.forEach(function(link) {
        link.style.color = 'black';
    });
    document.getElementById('modebuttonimg').src= 'images/lightmode.svg';
    document.getElementById('modebutton').onclick = modechanger;
}

