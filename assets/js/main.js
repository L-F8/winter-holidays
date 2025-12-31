const selectionGroupLi = document.querySelectorAll('.selection-group ul li')

selectionGroupLi.forEach((li) => {
    const dropdown = li.querySelector('.transition-default')

    if (!dropdown) return

    li.addEventListener("mouseenter", () => {
        dropdown.classList.add('transition-hover')
    })

    li.addEventListener('mouseleave', () => {
        dropdown.classList.remove('transition-hover')
    })
})

// ========================================== //
const items = document.querySelectorAll('.tem-item')

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        clearHoverState()

        const active = document.querySelector('.swiper-slide-active.tem-item')

        if (item.classList.contains('swiper-slide-prev')) {
            item.classList.add('is-hover-prev')
            active?.classList.add('is-force-hide')
        }

        if (item.classList.contains('swiper-slide-next')) {
            item.classList.add('is-hover-next')
            active?.classList.add('is-force-hide')
        }
    })

    item.addEventListener('mouseleave', () => {
        clearHoverState()
    })
})

function clearHoverState() {
    document.querySelectorAll('.tem-item').forEach(el => {
        el.classList.remove('is-hover-prev', 'is-hover-next', 'is-force-hide')
    })
}



// ============ Xu ly dong/mo hidden sidebar content ============
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

// Xu ly khi click vao vung k phai menu thi cung dong menu
document.addEventListener('click', (e) => {
    if (!hiddenMenu.contains(e.target) && !openMenuBtn.contains(e.target)) {
        hiddenMenu.classList.remove('open')
    }
})

document.addEventListener('scroll', () => {
    hiddenMenu.classList.remove('open')
})


// ============ Xu ly su kien khi hover vao cac menuitem thi hien submenu ============
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


// ----------- Xu ly su kien khi truot den 1 height nhat dinh se truot menu va dinh sticky -----------
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
