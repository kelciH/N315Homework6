import { route } from "../model/model.js";

function toggleMoblieMenu(menu) {
    //console.log(menu);
    menu.classList.toggle("open");
}

$("#hamburger-icon").click(() => {
    $("#hamburger-icon").toggleClass("open");
});

function initRouting() {
    $(window).on("hashchange", route);
    route();
}
 

function initListeners() {}
 
$(document).ready(function () {
    initRouting();
});