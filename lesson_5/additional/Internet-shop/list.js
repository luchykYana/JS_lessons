const listDiv = document.getElementById('list');
const key = 'key';
let store = JSON.parse(localStorage.getItem(key)) || [];

const showList = () => {
    if(!store.length){
        const empty = document.createElement('h3');
        empty.innerText ='List is empty';
        listDiv.appendChild(empty);
    }

    let buttonAll = document.createElement('button');
    for(let item of store){
        const itemDiv = document.createElement('div');
        const itemName = document.createElement('div');
        const itemQuantity = document.createElement('div');
        const itemPrice = document.createElement('div');
        const itemImg = document.createElement('img');
        const itemButton = document.createElement('button');
        itemImg.src = item.img;
        itemName.innerText = `Name: ${item.name}`;
        itemQuantity.innerText = `Quantitty: ${item.quantity}`;
        itemPrice.innerText = `Price: ${item.price}`;
        itemButton.innerText = `Delete`;
        buttonAll.innerText = `Delete all`;
        itemButton.onclick = () => {
            deleteItem(item.id);
        }

        itemDiv.append(itemImg, itemName, itemQuantity, itemPrice, itemButton);
        listDiv.appendChild(itemDiv);
    }

    buttonAll.onclick = () =>{
        deleteAll();
    }

    listDiv.appendChild(buttonAll);
}

const deleteItem = (id) => {
    store = store.filter(value => value.id !== id);
    localStorage.setItem(key, JSON.stringify(store));
    listDiv.innerHTML = '';
    showList();
}

const deleteAll = () => {
    localStorage.clear();
    showList();
    listDiv.innerHTML = 'List is empty';
}

showList();



let h2 = document.getElementsByTagName('h2');
for (const h2Element of h2) {
    h2Element.style.marginLeft = '40px';
}


let list = document.getElementById('list');
list.style.width = '300px';
list.style.heigth = '300px';
list.style.border = '5px solid silver';
list.style.margin = '30px';
list.style.padding = '10px';