//barra//

window.onscroll = function(){

    scroll = document.documentElement.scrollTop;
    header = document.getElementById("header");

    if(scroll > 2){
        header.classList.add('nav_mod');
    }

    else{
        header.classList.remove('nav_mod');
    }
}


document.getElementById("menu").addEventListener("click", mostrarmenu);
nav = document.getElementById("nav");
document.getElementById("sombra").addEventListener("click", quitarmenu);


function mostrarmenu(){
    nav.style.left ="0px";
    sombra.style.display ="block"
};

function quitarmenu(){
    nav.style.left = "-1000px"
    sombra.style.display ="inline"

}




