let cartBody = document.getElementById('cart');
window.addEventListener('click',(event) =>{

//клік на кнопку "купити"
if(event.target.classList.contains('button-buy')){
    console.log('клік на кнопку');
    addItems(event.target);
}

if(event.target.classList.contains('delete-items')){
  console.log('кілк на кнопку видалення товару');
  deleteItems(event.target)
}
function deleteItems (element){
  console.log('виділення товару')
  element.parentNode.remove();
}

function addItems(element){
    console.log('додавання товару');
  let li = document.createElement('li');
  li.innerHTML = element.dataset.img
               + element.dataset.name
               + element.dataset.price
               + '<div class="delete-items"> X </div>';
  cartBody.appendChild(li);
  M.toast({html: 'товар додан у кошик:)'})
}
});