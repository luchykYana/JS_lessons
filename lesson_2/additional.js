// =====ДОДАТКОВО 1=======
//
//     зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];


// // 1. перебрати його циклом while
// let i = 0;
// while(i < numbers.length){
//     console.log(numbers[i]);
//     i++;
// }

// // 2. перебрати його циклом for
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let j = 0;
// while (j < numbers.length){
//     if(j%2===1){
//         console.log(numbers[j]);
//     }
//     j++;
// }

// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for(let i = 0; i < numbers.length; i++){
//     if(i%2===1){
//         console.log(numbers[i]);
//     }
// }

// // 5. перебрати циклом while та вивести  числа тільки парні  значення
// let k = 0;
// while(k < numbers.length){
//     if(numbers[k]%2 === 0){
//         console.log(numbers[k]);
//     }
//     k++;
// }

// // 6. перебрати циклом for та вивести  числа тільки парні  значення
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i]%2===0){
//         console.log(numbers[i]);
//     }
// }

// // 7. замінити кожне число кратне 3 на слово "okten"
// for(let i = 0; i < numbers.length; i++){
//     if(i%3===0){
//         numbers[i] = 'okten';
//     }
// }
// console.log(numbers);

// // 8. вивести масив в зворотньому порядку.
// for(let i = numbers.length-1; i >= 0; i--){
//     console.log(numbers[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// // 1. перебрати його циклом while
// let i = numbers.length-1;
// while(i >=0){
//     console.log(numbers[i]);
//     i--;
// }

// // 2. перебрати його циклом for
// for(let i = numbers.length-1; i >=0 ; i--){
//     console.log(numbers[i]);
// }

// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let j = numbers.length-1;
// while (j >=0){
//     if(j%2===1){
//         console.log(numbers[j]);
//     }
//     j--;
// }

// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for(let i = numbers.length; i >=0; i--){
//     if(i%2===1){
//         console.log(numbers[i]);
//     }
// }

// // 5. перебрати циклом while та вивести  числа тільки парні  значення
// let k = numbers.length-1;
// while(k >=0){
//     if(numbers[k]%2 === 0){
//         console.log(numbers[k]);
//     }
//     k--;
// }

// // 6. перебрати циклом for та вивести  числа тільки парні  значення
// for(let i = numbers.length; i >=0 ; i--){
//     if(numbers[i]%2===0){
//         console.log(numbers[i]);
//     }
// }

// // 7. замінити кожне число кратне 3 на слово "okten"
// for(let i = numbers.length; i >=0; i--){
//     if(i%3===0){
//         numbers[i] = 'okten';
//     }
// }
// console.log(numbers);

// // 10 створити пустий масив та :
// // - заповнити його 50 парними числами за допомоги циклу.
// // - заповнити його 50 непарними числами за допомоги циклу.
//
// let num1 = [];
// let num2 = [];
// let n = 0, m = 0;
// for(let i = 1; i < 101; i++){
//     if(i%2===0){
//         num1[n] = i;
//         n++;
//     }
//     if(i%2===1){
//         num2[m] = i;
//         m++;
//     }
// }
// console.log(num1);
// console.log(num2);





// // 1. Створити пустий масив та :
// //   -- Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// //   -- Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let num3 = [];
let num4 = [];

for(let i = 0; i < 20; i++){
    num3[i] = Math.floor(Math.random()*100);
    num4[i] = Math.floor(Math.random()*(732-8)+8);
}

//
// // 2. Вивести за допомогою console.log кожен третій елемент
// for(let i = 0; i < num3.length; i++){
//     if((i+1)%3===0){
//         console.log(num3[i]);
//         console.log(num4[i]);
//     }
// }


// // 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for(let i = 0; i < num3.length; i++){
//     if((i+1)%3===0){
//         if(num3[i]%2===0){
//             console.log(num3[i]);
//         }
//         if(num4[i]%2===0){
//             console.log(num4[i]);
//         }
//     }
// }



// // 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let num5 = [];
// let l = 0;
// for(let i = 0; i < num3.length; i++){
//     if((i+1)%3===0){
//         if(num3[i]%2===0){
//             console.log(num3[i]);
//             num5[l] = num3[i];
//             l++;
//         }
//         if(num4[i]%2===0){
//             console.log(num4[i]);
//             num5[l] = num4[i];
//             l++;
//         }
//     }
// }



// // 5. Вивести кожен елемент масиву, сусід справа якого є парним
// // EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//
// let example = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for(let i = 0; i < example.length; i++){
//     if(example[i+1]%2 === 0){
//         console.log(example[i]);
//     }
// }



// // 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// //
//
// let purchase = [100,250,50,168,120,345,188];
// let suma = 0, b = 0;
// for(let i = 0; i < purchase.length; i++){
//     suma += purchase[i];
//     b++;
// }
// console.log(suma / b);



// // 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let rand1 = [];
// let rand2 = [];
// for (let i = 0; i < 10; i++){
//     rand1[i] = Math.floor(Math.random()*100);
//     rand2[i] = rand1[i]*5;
// }
// console.log(rand1);
// console.log(rand2);



// // 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let all = [45, 'str', true, 'car', 65, 23, 0, false, 'left', 3];
// let numbers2 = [];
// let temp = 0;
//
// for(let i = 0; i < all.length; i++){
//     if(typeof all[i] === 'number'){
//         numbers2[temp] = all[i];
//         temp++;
//     }
// }
// console.log(numbers2);