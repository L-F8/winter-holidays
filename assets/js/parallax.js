const bg = document.getElementById('bg');

window.addEventListener('scroll', function () {
    let offset = window.pageYOffset;
    bg.style.transform = `translateY(${offset * 0.5}px)`;
});