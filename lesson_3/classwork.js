
// // - створити функцію яка приймає масив та виводить його
// function consoleMas(mas){
//     console.log(mas);
// }
// consoleMas([1,2,3,4,5]);


// // - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function consoleMin(a,b,c){
//     if(a < b && a < c){
//         console.log(a);
//     }
//     else if(b < c && b < a){
//         console.log(b);
//     }
//     else{
//         console.log(c);
//     }
// }
// consoleMin(5,2,9);


// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function consoleMax(a,b,c){
//     if(a > b && a > c){
//         console.log(a);
//     }
//     else if(b > c && b > a){
//         console.log(b);
//     }
//     else{
//         console.log(c);
//     }
// }
// consoleMax(5,2,9);


// // - створити функцію яка повертає найбільше число з масиву
// function maxElementInArray(mas){
//     let max = mas[0];
//     for(let item of mas){
//         if(item > max){
//             max = item;
//         }
//     }
//     return max;
// }
// console.log(maxElementInArray([3, 7, 1, -67, 3, 45, 1, 23, 0, 76, -9]));


// // - створити функцію яка повертає найменьше число з масиву
// function minElementInArray(mas){
//     let min = mas[0];
//     for(let item of mas){
//         if(item < min){
//             min = item;
//         }
//     }
//     return min;
// }
// console.log(minElementInArray([3, 7, 1, -67, 3, 45, 1, 23, 0, 76, -9]));


// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function sumOfElementsInArray(mas){
//     let sum = 0;
//     for(let item of mas){
//         sum += item;
//     }
//     return sum;
// }
// console.log(sumOfElementsInArray([3, 7, 1, -67, 3, 45, 1, 23, 0, 76, -9]));


// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function averageOfElementsInArray(mas){
//     let sum = 0;
//     let i = 0
//     for(let item of mas){
//         sum += item;
//         i++;
//     }
//     return sum/i;
// }
// console.log(averageOfElementsInArray([3, 7, 1, -67, 3, 45, 1, 23, 0, 76, -9]));


// // - створити функцію яка заповнює масив рандомними числами
// // (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// //     Для виведення використати попередню функцію.
// function randArray(){
//     let mas = [];
//     for(let  i = 0; i < 10; i++){
//         mas[i] = Math.round(Math.random()*100);
//     }
//     //розкоментувати функцію на рядках 3-5
//     consoleMas(mas);
// }
// randArray();




// // - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// // EXAMPLE:
// //     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// //
// function returnKeysOfArray(mas){
//     let keys = [];
//     let n = 0;
//     for(let argument of mas){
//         for(let key in argument){
//             keys[n] = key;
//             n++;
//         }
//     }
//     return keys;
// }
// console.log(returnKeysOfArray([{name: 'Dima', age: 13}, {model: 'Camry'}]));



// //     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// // EXAMPLE:
// //     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
// function returnInfoOfArray(mas){
//     let info = [];
//     let n = 0;
//     for(let argument of mas){
//         for(let key in argument){
//             info[n] = argument[key];
//             n++;
//         }
//     }
//     return info;
// }
// console.log(returnInfoOfArray([{name: 'Dima', age: 13}, {model: 'Camry'}]));






// //     - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// //     EXAMPLE:
// // [1,2,3,4]
// //     [2,3,4,5]
// // результат
// //     [3,5,7,9]
// function sumOfItemsInIndex(mas1, mas2){
//     let mas = [];
//     let i = 0;
//     while (mas1[i] !== undefined){
//         mas[i] = mas1[i] + mas2[i]
//         i++;
//     }
//     return mas;
// }
// console.log(sumOfItemsInIndex([1, 2, 3, 4], [2, 3, 4, 5]));



// // - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let mas1 = ['a', 'b', 'c'];
// for(let i = 1; i < 4; i++){
//     mas1.push(i);
// }
// console.log(mas1);



// // - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let mas2 = [1, 2, 3];
// let mas3 = mas2.reverse();
// console.log(mas3);



// // - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let mas4 = [1, 2, 3];
// for(let i = 4; i < 7; i++){
//     mas4.push(i);
// }
// console.log(mas4);



// // - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let mas5 = [1, 2, 3];
// for(let i = 6; i > 3; i--){
//     mas5.unshift(i);
// }
// console.log(mas5);



// // - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// let mas6 = [1, 2, 3, 4, 5];
// mas6.splice(0, 3);
// console.log(mas6);


// // - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// let mas7 = [1, 2, 3, 4, 5];
// mas7.splice(2, 5);
// console.log(mas7);



// // - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
// let mas8 = [1, 2, 3, 4, 5];
// mas8.splice(3, 5, 'a', 'b', 'c');
// console.log(mas8);


// // - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let mas9 = [38, 23, -6, 4, 9, 1234, 12, 3, 1, -45];
// for(let i = 0; i < mas9.length; i++){
//     if(mas9[i]%2===0){
//         console.log(mas9[i]);
//     }
// }



// // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let mas10 = [38, 23, -6, 4, 9, 1234, 12, 3, 1, -45];
// let mas11 = [];
// for(let i = 0; i < mas10.length; i++){
//     mas11[i] = mas10[i];
// }
// console.log(mas11);



// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let mas12 = [ 'a', 'b', 'c'];
// let str = '';
// for(let i = 0; i < mas12.length; i++){
//    str += mas12[i];
// }
// console.log(str);


// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let mas13 = [ 'a', 'b', 'c'];
// let str2 = '';
// let i = 0;
// while(i < mas13.length){
//    str2 += mas13[i];
//     i++
// }
// console.log(str2);



// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let mas14 = [ 'a', 'b', 'c'];
// let str3 = '';
// for(let letter of mas14){
//     str3 += letter;
// }
// console.log(str3);