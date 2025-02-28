const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const productDetailCloseIcon = document.querySelector('.product-detail-close')


const menuHamIcon = document.querySelector('.menu')
const mobilMenu = document.querySelector('.mobile-menu')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const producDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)
producDetailContainer.addEventListener('click', closeProductDetailAside)



function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')


}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    mobilMenu.classList.toggle('inactive')

    closeProductDetailAside();
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobilMenu.classList.contains('inactive')
    const isDesktopMenu = desktopMenu.classList.contains('inactive')
    if (!isMobileMenuClosed || !isDesktopMenu) {
        mobilMenu.classList.add('inactive')
        desktopMenu.classList.add('inactive')
    }

    const isProductDetailClosed = producDetailContainer.classList.contains('inactive')
    
    if (!isProductDetailClosed) {
        producDetailContainer.classList.add('inactive')
    }
   
     shoppingCartContainer.classList.toggle('inactive')
    
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive')
    producDetailContainer.classList.remove('inactive')
    
}

function closeProductDetailAside() {
    producDetailContainer.classList.add('inactive')
}

const productList =[]
productList.push({
    name : 'Bike',
    price: 120 ,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})

productList.push({
    name : 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})

productList.push({
    name : 'Bike',
    price: 120 ,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})

function renderProducts(arr) {
    for(product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
     
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        productImg.addEventListener("click", openProductDetailAside)
     
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
     
        const productInfoDiv = document.createElement('div')
     
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p')
        productName.innerText = product.name
     
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
     
        const producInfoFigure = document.createElement('figure')
        const producImgCart = document.createElement('img')
        producImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
     
        producInfoFigure.appendChild(producImgCart)
     
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(producInfoFigure)
     
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
     
        cardsContainer.appendChild(productCard)
     
     
     }
}

renderProducts(productList)

