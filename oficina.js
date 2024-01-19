/*menu mobile*/
let btnAbrir = document.getElementById("btnAbrir");
let menu = document.getElementById("menu-mobile");

function abrir(){
    menu.className = 'menu-mobile';
}
function fechar(){
    menu.className = 'abrir-menu';
}
/*carrose de imagem*/
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let i = 0;

function carrosel(){
    i++;
    if(i > img.length - 1){
        i = 0;
    }

    const windowWidth = window.innerWidth;

    // Verifica se a largura da tela é menor que 1063 pixels
    if (windowWidth < 1063) {
        imgs.style.transform = `translateX(${-i * 350}px)`;
    } else {
        imgs.style.transform = `translateX(${-i * 1100}px)`;
    }
}
setInterval(carrosel, 2800);
/*menu dropdown*/
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