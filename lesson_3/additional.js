// ---------------ДОП---------------
//
// //     -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// //   EXAMPLE:
// //   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
// //   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
// //   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// function replacementByIndex(mas,index){
//     let i = 0;
//     while(mas[i] !== undefined){
//         if(i === index){
//             let temp = mas[i];
//             mas[i] = mas[i+1];
//             mas[i+1] = temp;
//         }
//         i++;
//     }
//     return mas;
// }
// console.log(replacementByIndex([9, 8, 0, 4], 0));
// console.log(replacementByIndex([9, 8, 0, 4], 1));
// console.log(replacementByIndex([9, 8, 0, 4], 2));




// // - Дано список імен.
// // let n1 = '    Harry       Potter      '
// // let n2 = '    Ron       Whisley      '
// // let n3 = '    Hermione       Granger      '
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// // let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'
// function normName(n){
//     let str = '';
//     let k = 0;
//     for(let i = 0; i < n.length; i++) {
//         if (n[i] !== ' ') {
//             str += n[i];
//         }
//         if(n[i] === ' '){
//             k++;
//             if(k === 5){
//                 str += ' ';
//             }
//         }
//     }
//     return str;
// }
// console.log(normName('    Harry       Potter      '));
// console.log(normName('    Ron       Whisley      '));
// console.log(normName('    Hermione       Granger      '));



// // - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// // Двожина масиву від 2 до 100
// // EXAMPLE:
// // [1,0,6,0,3] => [1,6,3,0,0]
// // [0,1,2,3,4] => [1,2,3,4,0]
// // [0,0,1,0]   => [1,0,0,0]
//
// function zeroInTheEnd(mas){
//     if(mas.length < 2 || mas.length > 100){
//         return '2 > Array[] > 100';
//     }
//     let k = mas.length-1;
//     for(let i = 0; i < mas.length; i++){
//         if(mas[i] === 0){
//             let j = i;
//             while(j < mas.length){
//                 mas[j] = mas[j+1];
//                 j++;
//             }
//             mas[k]  = 0;
//         }
//     }
//     return mas;
// }
// console.log(zeroInTheEnd([1,4,0,3,12,0,56,34,0,7,0,12,34]));


