// 1) Напишіть код, який :

// // a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// let item = document.getElementById('main_header');
// item.style.color = 'red';
// item.innerText = 'june-2021';


// // b) робить шириниу елементу ul 400px
// let ulItems = document.getElementsByTagName('ul');
// for (const ulItem of ulItems) {
//     ulItem.style.width = '400px';
// }


// // c) робить шириниу всіх елементів з класом linkList шириною 50%
// let itemsLinkList = document.getElementsByClassName('linkList');
// for (const itemsLinkListElement of itemsLinkList) {
//     itemsLinkListElement.style.width = '50%';
// }


// // d) отримує текст який зберігається в елементі з класом listElement2
// let textFromListElement2 = document.getElementsByClassName('listElement2');


// // e) отримує всі елементи li та змінює ім колір фону на сірий
// let liItems = document.getElementsByTagName('li');
// for (const liItem of liItems) {
//     liItem.style.backgroundColor = 'grey';
// }


// // f) отримує всі елементи 'a' та додає їм клас anchor
// let aItems = document.getElementsByTagName('a');
// for (const aItem of aItems) {
//     aItem.classList.add('anchor');
// }


// // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let aItems = document.getElementsByTagName('a');
// for (const aItem of aItems) {
//     if(aItem.textContent === 'link3'){
//         aItem.style.fontSize = '40px';
//     }
// }


// // h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let aItems = document.getElementsByTagName('a');
// for (const aItem of aItems) {
//     aItem.classList.add(`element_${aItem.textContent}`);
// }


// // i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let sub_headerItems = document.getElementsByClassName('sub-header');
// let color = prompt('Enter color');
// for (const sub_headerItem of sub_headerItems) {
//     sub_headerItem.style.backgroundColor = color;
// }


// // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// // Колір отримати з prompt()
// let sub_headerItems = document.getElementsByClassName('sub-header');
// let color = prompt('Enter color');
// for (const sub_headerItem of sub_headerItems) {
//     if(sub_headerItem.textContent === 'content 2 segment'){
//         sub_headerItem.style.color = color;
//     }
// }


// // k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content_1Items = document.getElementsByClassName('content_1');
// let text = prompt('Enter text');
// for (const content1Item of content_1Items) {
//     content1Item.innerText = text;
// }


// // l) отримати елементи p та змінити їм padding на 20px
// let pItems = document.getElementsByTagName('p');
// for (const pItem of pItems) {
//     pItem.style.padding = '20px';
// }


// // m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
// let text2Items = document.getElementsByClassName('text2');
// for (const text2Item of text2Items) {
//     text2Item.innerText = 'june-2021';
// }