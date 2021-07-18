
// // - створити функцію яка обчислює та повертає площу прямокутника висотою
// function squareOfRectangle(a,b){
//     return a*b;
// }
// console.log(squareOfRectangle(3, 4));


// // - створити функцію яка обчислює та повертає площу кола
// function squareOfCircle(R){
//     const p = 3.14;
//     return p * Math.pow(R,2);
// }
// console.log(squareOfCircle(3));


// // - створити функцію яка обчислює та повертає площу циліндра
// function squareOfCylinder(r,h){
//     const p = 3.14;
//     return 2 * p * r * (h + r);
// }
// console.log(squareOfCylinder(4, 8));


// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function returnMinOutputMax(){
//     let min = arguments[0], max = arguments[0];
//     for(argument of arguments){
//         if(argument < min){
//             min = argument;
//         }
//         if(argument > max){
//             max = argument;
//         }
//     }
//     console.log(max);
//     return min;
// }
// console.log(returnMinOutputMax(4, 1, 67, -4, 23));


// // - створити функцію яка  створює блок з текстом. Текст задати через аргумент
// function textBlock(str){
//     document.write(`<div>${str}</div>`);
// }
// textBlock('hello');


// // - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function textList(str){
//     document.write(`<ul>`);
//     for(let i = 0; i < 3; i++){
//         document.write(`<li>${str}</li>`);
//     }
//     document.write(`</ul>`);
// }
// textList('hello');


// // - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function textList2(str,n){
//     document.write(`<ul>`);
//     for(let i = 0; i < n; i++){
//         document.write(`<li>${str}</li>`);
//     }
//     document.write(`</ul>`);
// }
// textList2('hello');


// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function listOfElements(mas){
//     document.write(`<ul>`);
//     for(item of mas){
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`);
// }
// let mas = ['hello', 67, true, 'qwerty', 3, 56, false];
// listOfElements(mas);