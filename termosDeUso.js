let btnAbrir = document.getElementById("btnAbrir");
let menu = document.getElementById("menu-mobile");

function abrir(){
    menu.className = 'menu-mobile';
}
function fechar(){
    menu.className = 'abrir-menu';
}
let itenMenu = document.getElementById('itenDrop');
let menuDrop = document.getElementById('dropdown');
let imagemSeta = document.getElementById('imagemSeta');

function drop(){

    if(menuDrop.style.display == 'block'){
        menuDrop.style.display = 'none';
        imagemSeta.style.transform = 'rotate(0deg)';
        imagemSeta.style.transitionDuration = '100ms'
       
    }else{
        menuDrop.style.display = 'block';
        imagemSeta.style.transform = 'rotate(180deg)';
        imagemSeta.style.transitionDuration = '100ms'
    }
}