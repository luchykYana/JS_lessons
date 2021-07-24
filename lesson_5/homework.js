// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName

// -- отримує текст з параграфа з id "content"
let content = document.getElementById('content');
console.log(content);

// // -- отримує текст з блоку з id "rules"
// let rules = document.getElementById('rules');
// console.log(rules);

// // -- замініть текст параграфа з id 'content' на будь-який інший
// content.innerText = ('The above example will form an array of objects whose key is the age number, and its properties ' +
//     'are objects which have that same age number. So we are grouping the people based on their ages.');

// // -- замініть текст параграфа з id 'rules' на будь-який інший
// rules.innerText = ('Метод map вызывает переданную функцию callback один раз для каждого элемента, в порядке их появления' +
//     ' и конструирует новый массив из результатов её вызова. Функция callback вызывается только для индексов массива,' +
//     ' имеющих присвоенные значения, включая undefined. Она не вызывается для пропущенных элементов массива (то есть ' +
//     'для индексов, которые никогда не были заданы, которые были удалены или которым никогда не было присвоено значение.');

// // -- змініть кожному елементу колір фону на червоний
// let list = document.body.children;
// for (const listElement of list) {
//     listElement.style.backgroundColor = 'red';
// }

// // -- змініть кожному елементу колір тексту на синій
// for (const listElement of list) {
//     listElement.style.backgroundColor = 'blue';
// }

// // -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// let rules = document.getElementById('rules');
// console.log(rules.classList);

// // -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
// let fc_rules = document.getElementsByClassName('fc_rules');
//
// for (const fcRule of fc_rules) {
//     fcRule.addEventListener('click',()=>{
//         console.log(fcRule.textContent);
//     })
//     fcRule.addEventListener('click',()=>{
//             console.log('hello');
//     })
// }

// // -- поміняти колір тексту у всіх елементів fc_rules на червоний
//
// for (const fcRule of fc_rules) {
//     fcRule.style.backgroundColor = 'red';
// }
