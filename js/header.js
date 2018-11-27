let menu = document.querySelector('.burguer');
let barra1 = document.querySelector('.barra:first-child');
let barra2 = document.querySelector('.barra:nth-child(2)');
let barra3 = document.querySelector('.barra:last-child');
let lateral = document.querySelector('nav');
let opaco = document.querySelector('.opaco');
let header = document.querySelector('header');
let body = document.querySelector('body');

menu.onclick = () => {
    barra1.classList.toggle('barrinha');
    barra2.classList.toggle('barrinha');
    barra3.classList.toggle('barrinha');
    lateral.classList.toggle('navVisible');
    opaco.classList.toggle('opacoVisible');
    menu.classList.toggle('burguerClick');
}


body.onscroll = () => {
    if(scrollY >= 60){
        header.classList.add('header1');
    }
    else{
        header.classList.remove('header1');
    
    }    
}




