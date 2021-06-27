const toggle = document.querySelectorAll('nav .toggle');
const menu = document.querySelector('#header nav');
const links = document.querySelectorAll('#header nav ul li a');

for (const element of toggle) {
    element.addEventListener('click', openCloseMenu);
}

for (const link of links){
    link.addEventListener('click', closeMenu)
}

function openCloseMenu(){
    menu.classList.toggle('show');
}

function closeMenu(){
    menu.classList.remove('show');
}

/* Testimonials carousel swiper */

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWraperSize: true 
        }
    }
});

/* ScrollReveal */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .text, #home .image,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .swiper-wrapper,
    #contact .text, #contact .links,
    footer .brand, footer .social
`, {interval: 100})

//Botão voltar para o topo

const backToTopButton = document.querySelector('.back-to-top');

function backToTop(){
    if (window.scrollY >= 500) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }  
};

/* Menu ativo conforme seção visível da pagina */

const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection(){
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd){
            document
            .querySelector('nav ul li a[href*=' + sectionId +']')
            .classList.add('active')
        } else {
            document
            .querySelector('nav ul li a[href*=' + sectionId +']')
            .classList.remove('active')
        }
    }
};

/* When Scroll */

window.addEventListener('scroll', function(){
    backToTop()
    activateMenuAtCurrentSection()
});