const inputShopItem = document.querySelector('.input-shop-item');
const shopList = document.querySelector('.shop-list');
const buttonAddItem = document.querySelector('.button-add-item');


//добавить в список покупок при нажатии на кнопку
buttonAddItem.addEventListener('click', function(e){
    let listItem = document.createElement('li');
    listItem.innerHTML = inputShopItem.value;
    shopList.appendChild(listItem);
});



