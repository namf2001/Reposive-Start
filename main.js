const menuBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu-section');
const menuNavUl = document.querySelector('.menu-nav ul');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('on');
    menu.classList.toggle('on');
    menuNavUl.classList.toggle('hidden');
});

// header animation
const header = document.querySelector('.header');
    let scroll;
    setInterval(() => {
        scroll = window.scrollY;
    }, 1000);


window.addEventListener('scroll', () => {
    header.classList.toggle('hidden-header', scroll < window.scrollY);
    console.log(scroll, window.scrollY);
});
