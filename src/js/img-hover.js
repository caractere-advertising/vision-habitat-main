const imgHoverCont = document.querySelector('.links-hover-img'); 
const imgHover = document.querySelector('#hover-img');
const links = document.querySelectorAll('.links-item');

document.addEventListener('mousemove', (e) => {
    imgHoverCont.style.left = e.clientX + 20 + 'px'; 
    imgHoverCont.style.top = e.clientY + 20 + 'px';
});

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const imgUrl = link.dataset.image;
        if (imgUrl) {
            imgHover.src = imgUrl;
            imgHoverCont.classList.add('visible');
        }
    });
    link.addEventListener('mouseleave', () => {
        imgHoverCont.classList.remove('visible'); 
    });
});