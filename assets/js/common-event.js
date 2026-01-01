/**
 * Xu ly cac su kien chung cac cac phan giong nhau giua cac trang
 */

// Xu ly dong/mo overlay phan icon-search o menu header chung
const headerIconSearch = document.querySelector('.icon-search')
const searchOverlay = document.querySelector('.search-overlay')
const searchOverlayGroup = document.querySelector('.search-overlay-group')

headerIconSearch.addEventListener('click', (e) => {
    searchOverlay.classList.add('visible')
})

document.addEventListener('click', e => {
    if (searchOverlay.contains(e.target)
        && !headerIconSearch.contains(e.target)
        && !searchOverlayGroup.contains(e.target)) {
        searchOverlay.classList.remove('visible')
    }
})


// ============ Xu ly dong/mo hidden sidebar content khi click icon bars ============
const btnClose = document.querySelector('.btn-close')
const openMenuBtn = document.querySelector('.btn-open-menu')
const hiddenMenu = document.querySelector('.hidden-menu-left')

openMenuBtn.addEventListener('click', (e) => {
    e.preventDefault()
    hiddenMenu.classList.add('open')
})

btnClose.addEventListener('click', () => {
    hiddenMenu.classList.remove('open')
})

// Khi click vao vung k phai sidebar thi cung dong sidebar
document.addEventListener('click', (e) => {
    if (!hiddenMenu.contains(e.target) && !openMenuBtn.contains(e.target)) {
        hiddenMenu.classList.remove('open')
    }
})

// Khi cuon trang thi sidebar cung tu dong dong
document.addEventListener('scroll', () => {
    hiddenMenu.classList.remove('open')
})


// ============ Xu ly su kien khi hover vao cac menu item thi hien submenu
//  va hover submenu item hien menu-level-3 ============
const headerMenuLink = document.querySelectorAll('.header-menu ul li')

headerMenuLink.forEach((headerLink) => {
    const submenu = headerLink.querySelector('.transition-default')

    if (!submenu) {
        return
    }

    headerLink.addEventListener('mouseenter', () => {
        submenu.classList.add('transition-hover')
    })

    headerLink.addEventListener('mouseleave', () => {
        submenu.classList.remove('transition-hover')
    })
})

const submenuLi = document.querySelectorAll('.submenu-list ul li')

submenuLi.forEach((subLink) => {
    const menuLevel3 = subLink.querySelector('.hidden')

    if (!menuLevel3) return

    subLink.addEventListener('mouseenter', () => {
        menuLevel3.classList.add('show')
    })

    subLink.addEventListener('mouseleave', () => {
        menuLevel3.classList.remove('show')
    })
})


// ----------- Xu ly su kien khi truot den 1 height nhat dinh
// menu se truot va dinh sticky, hien thi nut back to top -----------
const header = document.querySelector("header");
const backToTop = document.querySelector('.return-home')

const OFFSET_DOWN = 600
const OFFSET_UP = 500

let isSticky = false
let isSlidingUp = false

window.addEventListener("scroll", () => {
    const y = window.scrollY;

    if (y > OFFSET_DOWN && !isSticky) {
        header.classList.add("sticky");
        isSticky = true
        document.body.style.position = 'relative'
        backToTop.classList.add('show')
    }

    if (y <= OFFSET_UP && isSticky && !isSlidingUp) {
        isSlidingUp = true
        header.classList.add('hide')
        document.body.style.position = ''
        backToTop.classList.remove('show')
    }
});

header.addEventListener("animationend", (e) => {
    if (e.animationName === "slideUp") {
        header.classList.remove("sticky", "hide");
        isSticky = false;
        isSlidingUp = false;
    }
});
