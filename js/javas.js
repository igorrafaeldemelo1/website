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

function skillsCard(Nunb){
    const text = document.getElementById('inerText')
    const text1 = document.getElementById('innerText')
    if(Number(Nunb)==1){
        text.innerText = 'GitHub' ;
        text1.innerText = 'I have a basic knowledge with github, knowing the basic push, pull commit commands. '
    }
    if(Number(Nunb)==2){
        text.innerText = 'BootStrap' ;
        text1.innerText = 'He has a Medium knowledge in BootStrap, knowing how to manipulate styles and responsiveness.'
    }
    if(Number(Nunb)==3){
        text.innerText = 'CSS3' ;
        text1.innerText = 'Advanced knowledge in Css3, despite using BootStrap and Scss manipulating css, I m getting deeper and deeper into this tool.'
    }
    if(Number(Nunb)==4){
        text.innerText = 'JavaScript' ;
        text1.innerText = 'Medium knowledge in JavaScript, getting deeper and deeper with the Obj orientation, knowing how to manipulate the DOM, and programming logic.'
    }
    if(Number(Nunb)==5){
        text.innerText = 'My/Sql' ;
        text1.innerText = 'Basic knowledge in my/sql, know how to create a database, manipulate data and CRUD principles.'
    }
    if(Number(Nunb)==6){
        text.innerText = 'Scss' ;
        text1.innerText = 'Medium knowledge in scss, particle I really like this tool I m using it practically in all my projects.'
    }
    if(Number(Nunb)==7){
        text.innerText = 'HTML5' ;
        text1.innerText = 'Advanced knowledge, knowing practically all structures and tools of HTML.'
    }
    
}