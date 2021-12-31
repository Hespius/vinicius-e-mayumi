class MobileNavBar {
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.animatedLinks();
    }

    animatedLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation 
            ? (link.style.animation = "") 
            : (link.style.animation = `cabeçalho-menu-lista-item-transicao 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".cabeçalho-menu-mobile",
    ".cabeçalho-menu-lista",
    ".cabeçalho-menu-lista li"  
);

mobileNavBar.init();