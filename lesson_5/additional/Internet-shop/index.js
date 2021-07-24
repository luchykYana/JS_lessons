const {name, quantity, price, img} = document.forms.form;
const btn = document.getElementById('btn');
const key = 'key';

const save = (name, quantity, price, img) => {
    const store = JSON.parse(localStorage.getItem(key)) || [];
    store.push({id: store.length+1, name, quantity, price, img});
    localStorage.setItem(key, JSON.stringify(store));
}

btn.onclick = () =>{
    save(name.value, quantity.value, price.value, img.value);
}


let form = document.getElementById('form');
form.style.width = '440px';
form.style.height = '260px';
form.style.border = '5px solid silver';
form.style.borderBottom = '20px double silver';
form.style.borderLeft = '20px double silver';
form.style.padding = '20px';
form.style.margin = '40px';

let form_div = document.getElementsByClassName('form_div');
for (const formDivElement of form_div) {
    formDivElement.style.margin = '30px';
    formDivElement.style.textAlign = 'right';
}

let inputs = document.getElementsByTagName('input');
for (const input of inputs) {
    input.style.width = '300px';
}

let down = document.getElementsByClassName('down');
for (const downElement of down) {
    downElement.style.display = 'flex';
    downElement.style.width = '440px';
    downElement.style.marginLeft = '80px';
    downElement.style.gridColumnGap = '150px';
    downElement.style.textAlign = 'center';
}

let button = document.getElementById('btn');
button.style.width = '180px';
button.style.height = '54px';
button.style.fontSize = '20px';
button.style.borderRadius = '20px';
button.style.backgroundColor = 'white';
button.style.border = '2px solid black';
button.style.fontWeight = 'bold';

let list = document.getElementById('list');
list.style.width = '200px';
list.style.height = '50px';
list.style.border = '2px solid black';
list.style.borderRadius = '20px';
list.style.alignItems = 'center';

let h2 = list.children;
for (const h2Element of h2) {
    h2Element.style.margin = '10px';
    let a = h2Element.children;
    for (const aElement of a) {
        aElement.style.textDecoration = 'none';
        aElement.style.color = 'black';
    }
}