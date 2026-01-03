const bg = document.getElementById('bg');

window.addEventListener('scroll', function () {
    let offset = window.pageYOffset;
    bg.style.transform = `translateY(${offset * 0.3}px)`;
});


const wwoBg = document.getElementById('wwo-bg');
const wwoCt = document.querySelector('wwo-content');

window.addEventListener('scroll', function () {
    let offset = window.pageYOffset;
    wwoBg.style.transform = `translateY(-${offset * 0.35}px)`;
});