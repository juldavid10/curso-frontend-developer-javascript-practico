const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart ')
const menuHamIcon = document.querySelector('.menu')
const mobilMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)


function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive')
    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')


}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive')
    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }
    mobilMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobilMenu.classList.contains('inactive')
    const isDesktopMenu = desktopMenu.classList.contains('inactive')
    if (!isMobileMenuClosed || !isDesktopMenu) {
        mobilMenu.classList.add('inactive')
        desktopMenu.classList.add('inactive')
    }
   
     aside.classList.toggle('inactive')
    
}