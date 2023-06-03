var productsInCart = JSON.parse(localStorage.getItem('cart')) ?? [];
const getListView = document.getElementById('shopping-item-list')
function closeModal() {
    const modal = document.querySelector('.cart-frame')
    modal.classList.remove('open')
    getListView.innerHTML = '';
}
function openModal() {
    const modal = document.querySelector('.cart-frame')
    modal.classList.add('open')
    
    const totalPrice = productsInCart.reduce((a, c) =>
        a + (c.productPrice * 1), 0
    );

    const cartCount = document.getElementById('count-item-id')
    cartCount.innerHTML = ` <span>${productsInCart.length ?? 0} item</span>
    <button type='button' onclick="clearAllItem()">
        <span>
            Clear all
        </span>
    </button>`

    const footerInner = document.getElementById('footer-inner-id');
    footerInner.innerHTML =
        `<span class='footer-title'>Total price</span>
        <span>${totalPrice} USD</span>`
    productsInCart.forEach((element) => {

        const shoppingCartItem = document.createElement('div')
        shoppingCartItem.className = 'shopping-cart-item'

        const boxItemIMG = document.createElement('div')
        boxItemIMG.className = 'box-img-item'
        boxItemIMG.innerHTML = `<span>
                                            <img src=${element.productIMG} alt='' />
                                        </span>`

        const contentItem = document.createElement('div')
        contentItem.className = 'content-item';
        contentItem.innerHTML = ` <div class='content-item-inner'>
                                                <span class='item-name'>
                                                    ${element.productName} #${element._id}
                                                <span class='item-name qty'><TbShoppingCartDiscount /> 1</span>
                                                </span>
                                                <span class='item-owner'>
                                                    ${element.owner}
                                                </span>
                                                <span class='item-sub'>
                                                    Creation fee: 0.0001 ether
                                                </span>
                                            </div>`
        shoppingCartItem.appendChild(boxItemIMG);
        shoppingCartItem.appendChild(contentItem);
        getListView.appendChild(shoppingCartItem);
    })
}
function clearAllItem() {
    localStorage.removeItem('cart')
    productsInCart = [];
    getListView.innerHTML = '';
}
function clickOutside(event) {
    var cartFrame = document.getElementById('cart-frame-id');
    var cartMain = document.getElementById('cart-main-id')
    if (cartFrame.contains(event.target) && !cartMain.contains(event.target)) {
        closeModal();
    }
}

document.addEventListener('click', clickOutside);