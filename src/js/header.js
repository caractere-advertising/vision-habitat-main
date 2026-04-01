const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('#megamenu');

if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('is-open');

        burgerBtn.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-open');
        document.body.style.overflow = isOpen ? '' : 'hidden';
    });
}

const burgerBtnClose = document.querySelector('.burger-btn-close');

if (burgerBtnClose && mobileMenu) {
    burgerBtnClose.addEventListener('click', () => {
        burgerBtn.classList.remove('is-active');
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
    });
}