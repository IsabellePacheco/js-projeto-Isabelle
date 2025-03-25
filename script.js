// controle do menu mobile
const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('.navlist');


menuIcon.addEventListener('click', ()=> {
    menuIcon.classList.toggle('bx-x');
    navList.classList.toggle('open');
    // bloquear o scroll quando o menu estiver aberto
    document.body.style.overflow = navList.classList.contains('open')?
    'hidden' : 'auto';
});

// fechar menu ao clicar nos links
document.querySelectorAll('.navlist a').forEach(link=>{
    link.addEventListener('click', ()=> {
        menuIcon.classList.remove('bx-x');
        navList.classList.remove('open');
        document.body.style.overflow ='auto';
    });
});

// fechar ao rolar a página
window.addEventListener('scroll', ()=> {
    if(navList.classList.contains('open')){
        menuIcon.classList.remove('bx-x');
        navList.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
});

// navegação ativa
// seleciona todos os links de navegacao
const navLinks = document.querySelectorAll('.navlist a');

// funcao para selecionar a classe acitive no link clicado
function activeLink(){
    navLinks.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
}

// adiciona um evento de clique no link de navegação
navLinks.forEach(item=> item.addEventListener('click', activeLink));

// alterar modo escuro/ modo claro
// funcao para alterar as cores
function toggleMode(){
    const html = document.documentElement;
    html.classList.toggle('light');

    // salva o tema escolhida no LocalStorage
    const mode = html.classList.contains('light')? 'light' : 'dark';
    localStorage.setItem('theme', mode);

    // altera apararencia do titulo
    updateTextColor();

}
// função que altera a cor do texto de acordo com o tema
function updateTextColor(){
    currentColor = document.documentElement.classList.contains('light') ? 'black' : '#fff';
    titleElement.style.color = currentColor;
}

// carrega o tema salvo no LocalSronger ao carregar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme){
    document.documentElement.classList.toggle('light', savedThame === 'light');
}


// animação do titulo principal
// seleciona o elemento titulo e define as variaveis para a animacao
const titleElement = document.querySelector('#name');
const text = "ISABELLE";
let index = 0;
let isTyping = true;
let currentColor = document.documentElement.classList.contains('light') ? 'black' : '#fff';

// fução para animar o texto (digitando e apagando)
function animateText(){
    if (isTyping){
        if(index < text.length){
            titleElement.textContent = text.slice(0,index + 1);
            index++;
        }else{
            isTyping = false;
        }
    }else {
        if (index > 1){
            titleElement.textContent = text.slice(0, index -1);
        }
    }
}



