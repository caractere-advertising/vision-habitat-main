const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('#megamenu');

if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('is-open');

        burgerBtn.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-open');
        burgerBtn.setAttribute('aria-expanded', String(!isOpen));
        mobileMenu.setAttribute('aria-hidden', String(isOpen));
        document.body.style.overflow = isOpen ? '' : 'hidden';
    });
}
