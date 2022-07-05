const inputShopItem = document.querySelector('.input-shop-item');
const shopList = document.querySelector('.shop-list');
const buttonAddItem = document.querySelector('.button-add-item');
const buttonDelItem = document.querySelector('.button-del-item');

//добавить в список покупок при нажатии на кнопку
buttonAddItem.addEventListener('click', function(e){
    let listItem = document.createElement('li');
    listItem.innerHTML = inputShopItem.value;
    shopList.appendChild(listItem);
});

buttonDelItem.addEventListener('click', function(e){
    let shopList2 = document.querySelector('.shop-list');
    let count = shopList2.childElementCount;
    for(var i = 0; i<count; i++){
        shopList2.removeChild(shopList2.childNodes[0]);
    }   
});



