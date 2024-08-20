class MobileNavbar {
    constructor(menuMobile, listaNav, linksNav) {
        // Seleciona o menu mobile, a lista de navegação e os links de navegação
        this.menuMobile = document.querySelector(menuMobile);
        this.listaNav = document.querySelector(listaNav);
        this.linksNav = document.querySelectorAll(linksNav);
        this.classeAtiva = "ativo"; // Classe CSS para o estado ativo

        // Vincula o método handleClick ao contexto da classe
        this.handleClick = this.handleClick.bind(this);
    }

    // Anima os links de navegação
    animarLinks() {
        this.linksNav.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "") // Remove a animação se já estiver aplicada
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                    index / 7 + 0.3
                }s`); // Aplica a animação com um atraso baseado no índice do link
        });
    }

    // Manipula o clique no menu mobile
    handleClick() {
        this.listaNav.classList.toggle(this.classeAtiva); // Alterna a classe "ativo" na lista de navegação
        this.menuMobile.classList.toggle(this.classeAtiva); // Alterna a classe "ativo" no menu mobile
        this.animarLinks(); // Chama a função para animar os links
    }

    // Adiciona o evento de clique ao menu mobile
    adicionarEventoDeClique() {
        this.menuMobile.addEventListener("click", this.handleClick);
    }

    // Inicializa o menu mobile
    init() {
        if (this.menuMobile) { // Verifica se o menu mobile existe
            this.adicionarEventoDeClique(); // Adiciona o evento de clique
        }
        return this; // Retorna a instância da classe
    }
}

// Cria uma nova instância da classe MobileNavbar e inicializa
const mobileNavbar = new MobileNavbar(
    ".menu-mobile", // Seletor do menu mobile
    ".lista-nav", // Seletor da lista de navegação
    ".lista-nav li" // Seletor dos itens de navegação
);
mobileNavbar.init(); // Chama o método init para iniciar a funcionalidade
