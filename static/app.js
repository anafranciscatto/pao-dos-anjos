// Passo 1: Captura de elementos do DOM
let nextDom = document.getElementById('next'); // Botão "Próximo"
let prevDom = document.getElementById('prev'); // Botão "Anterior"

let carouselDom = document.querySelector('.carousel'); // Contêiner do carrossel
let SliderDom = carouselDom.querySelector('.carousel .list'); // Lista de slides
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail'); // Contêiner de miniaturas
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item'); // Itens de miniatura
let timeDom = document.querySelector('.carousel .time'); // Elemento de tempo

// Move o primeiro item de miniatura para o final
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

// Definição de intervalos de tempo
let timeRunning = 3000; // Tempo de execução para a transição de slide
let timeAutoNext = 7000; // Tempo para avançar automaticamente para o próximo slide

// Configuração da ação de clique nos botões "Próximo" e "Anterior"
nextDom.onclick = function(){
    showSlider('next'); // Exibe o próximo slide    
}

prevDom.onclick = function(){
    showSlider('prev'); // Exibe o slide anterior    
}

// Inicialização de temporizadores
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click(); // Clique automático no botão "Próximo" após um intervalo
}, timeAutoNext)

// Função para exibir o próximo ou anterior slide
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item'); // Seleciona todos os itens de slide
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item'); // Seleciona todos os itens de miniatura
    
    // Move os slides e as miniaturas dependendo do tipo (próximo ou anterior)
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]); // Move o primeiro slide para o final
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]); // Move a primeira miniatura para o final
        carouselDom.classList.add('next'); // Adiciona classe para animação de transição
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]); // Move o último slide para o início
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]); // Move a última miniatura para o início
        carouselDom.classList.add('prev'); // Adiciona classe para animação de transição
    }

    // Limpa a classe de transição após o tempo de execução
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    // Limpa o temporizador de avanço automático e redefine-o
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click(); // Clique automático no botão "Próximo" após um intervalo
    }, timeAutoNext)
}

// --
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".menu-btn");
    const cards = document.querySelectorAll(".card");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove a classe "active" de todos os botões
            buttons.forEach((btn) => btn.classList.remove("active"));
            // Adiciona a classe "active" ao botão clicado
            button.classList.add("active");

            // Filtra os cards
            const category = button.dataset.category;
            cards.forEach((card) => {
                if (category === "all" || card.dataset.category === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Exibir todos os cards inicialmente
    buttons[0].click();
});
