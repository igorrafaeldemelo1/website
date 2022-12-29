function menuHanburguer() {
    var btn = document.getElementById('btnHanburguer')
    btn.style.display = 'none'

    let chip = `<svg onclick="btnClose()"  id="btnHanburguer" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x-lg text-black " viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>`;

    document.getElementById('iten').innerHTML = chip

    var menu = document.getElementById('container-2')
    menu.style.display = 'block';

}
function btnClose() {
    var btn = document.getElementById('btnHanburguer')
    btn.style.display = 'none'

    let chip = `<svg onclick="menuHanburguer()" id="btnHanburguer" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list " viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
</svg>`;

    document.getElementById('iten').innerHTML = chip

    var menu = document.getElementById('container-2')
    menu.style.display = 'none';

}
function webMenu() {
    var btn = document.getElementById('webBtnHanburguer')
    btn.style.display = 'none'

    let chip = `<svg onclick="webBtnClose()"  id="webBtnHanburguer" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x-lg " viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>`;

    document.getElementById('itens').innerHTML = chip
    spell()
    spellMedia()
}
function spellMedia() {
    var menu1 = document.getElementById('container-4')
    menu1.style.display = 'block';
    menu1.style.animation = 'go-back-media 1s'
}
function spell() {
    var menu = document.getElementById('container-3')
    menu.style.display = 'block';
    menu.style.animation = 'go-back 1s'
}

function webBtnClose() {
    var btn = document.getElementById('webBtnHanburguer')
    btn.style.display = 'none'
    returnig()

    let chip = `<svg onclick="webMenu()" id="webBtnHanburguer" xmlns="http://www.w3.org/2000/svg" width="40" height="40"
    fill="currentColor" class="bi bi-list " viewBox="0 0 16 16">
    <path fill-rule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
</svg>`;

    document.getElementById('itens').innerHTML = chip

    var menu = document.getElementById('container-2')
    menu.style.display = 'none';
    returnigMedia()
}
function returnig() {
    var menu = document.getElementById('container-3')
    
    menu.style.animation = 'go-return 1s'
    setTimeout(function () {
        menu.style.display = 'none';
    }, 1000);
}
function returnigMedia() {
    var menul = document.getElementById('container-4')
    menul.style.animation = 'go-return-media 1s'
    setTimeout(function () {
        menul.style.display = 'none'
    }, 1000);
    
}