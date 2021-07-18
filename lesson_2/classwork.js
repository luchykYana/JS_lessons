
// // --створити масив з:
// // - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль
//
// let numbers = [1, 56, 23, -67, 4];
// let str = ['html', 'css', 'js', 'react', 'ts'];
// let mas = ['okten', 5, true, 18, false];
//
// for (let i = 0; i < mas.length; i++) {
//     console.log(numbers[i]);
//     console.log(str[i]);
//     console.log(mas[i]);
// }



// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// // Вивести в консоль
//
// let a = [];
// a[0] = 6;
// a[1] = 'str';
// a[2] = 1234567;
// a[3] = false;
// a[4] = -78;
//
// for(let i = 0; i < a.length; i++){
//     console.log(a[i]);
// }




// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// // - За допомогою циклу while вивести в документ 20 блоків h2 c довільним текстом всередині.
// // - За допомогою циклу while вивести в документ 20 блоків h2 c довільним текстом і індексом всередині.
//
//
// for(let i = 0; i < 10; i++){
//     document.write(`<div>Programming is magic. So, Okten school is Hogwarts</div>`);
// }
//
//
// let wand = ['JavaScript', 'TypeScript', 'Java', 'Python', 'Node.JS', 'C', 'C++', 'C#', 'Ruby', 'HTML/CSS' ];
// for(let i = 0; i < 10; i++){
//     document.write(`<div>${i+1})Choose wand to create magic: ${wand[i]}</div>`);
// }
//
//
// let i = 0;
// while(i < 20){
//     document.write(`<h2>Alohomora</h2>`);
//     i++;
// }
//
//
// let accio = ['constant professional self-improvement', 'high market demand', 'high wages', 'work without a diploma',
//     'creative profession', 'glasses for working on a computer', 'idea how to fix a bug in the middle of the night',
//     'improved text typing on the keyboard', "Can you repair my printer?", 'Stack Overflow', 'Linux', 'Hello, World!',
//     'If it works don\'t touch it', '1 + 1 = 11', 'comments in the code', 'light theme vs dark theme', 'computer',
//     'video on youtube "programming in 5 minutes"', 'GitHub', 'press F your normal life'];
// i = 0
// while (i < 20){
//     document.write(`<h2>${i+1})Accio ${accio[i]}</h2>`);
//     i++;
// }




// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let num = [3, 4, 1, -5, 45, 23, 12, 0, -67, 10];
// let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// let status = [true, true, false, false, false, true, false, true, false];
//
// for(let i = 0; i < num.length; i++){
//     console.log(num[i]);
//     console.log(letters[i]);
//     console.log(status[i]);
// }




// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let mass = [45, true, 'hello', 'ok', false, 12, 567, true, 'qwerty', 89];
//
// for(let i = 0; i < mass.length; i++){
//     if(typeof mass[i] === "boolean"){
//         console.log(mass[i]);
//     }
// }
//
//
// for(let i = 0; i < mass.length; i++){
//     if(typeof mass[i] === "number"){
//         console.log(mass[i]);
//     }
// }
//
// for(let i = 0; i < mass.length; i++){
//     if(typeof mass[i] === "string"){
//         console.log(mass[i]);
//     }
// }




// // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//
// let elements = [];
// elements[0] = 22;
// elements[1] = 'white';
// elements[2] = 67;
// elements[3] = false;
// elements[4] = 'rabbit';
// elements[5] = 'hat';
// elements[6] = -98;
// elements[7] = true;
// elements[8] = 789;
// elements[9] = 0;
//
// for(let element of elements){
//     console.log(element);
// }
//
// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i < 10; i++){
//     console.log(i);
//     document.write(`${i}`);
// }
//
// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i < 100; i++){
//     console.log(i);
//     document.write(`${i}`);
// }
//
// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for(let i = 0; i < 100; i = i + 2){
//     console.log(i);
//     document.write(`${i}`);
// }
//
// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for(let i = 1; i < 100; i = i + 2){
//     console.log(i);
//     document.write(`${i}`);
// }



// // - Дано 2 масиви з рівною кількістю об'єктів.
// // Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// //
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// //     Записати цей об'єкт в новий масив
// // Example:
// //     let usersWithCities = [
// //         {
// //             id: 1, // <===
// //             name: 'vasya',
// //             age: 31,
// //             status: false,
// //             address: {
// //                 user_id: 1, // <===
// //                 country: 'Ukraine',
// //                 city: 'Ternopil'
// //             }
// //         },
// //     ]
// let usersWithCities = [];
//
// for(let i = 0; i < usersWithId.length; i++){
//     for(let j = 0; j < usersWithId.length; j++) {
//         if (usersWithId[i].id === citiesWithId[j].user_id) {
//             usersWithCities[i] = {
//                 id: usersWithId[i].id,
//                 name: usersWithId[i].name,
//                 age: usersWithId[i].age,
//                 status: usersWithId[i].status,
//                 address: {
//                     user_id: citiesWithId[j].user_id,
//                     country: citiesWithId[j].country,
//                     city: citiesWithId[j].city
//                 }
//             }
//         }
//     }
// }
//
// console.log(usersWithCities);
