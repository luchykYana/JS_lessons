//Передаємо у функцію будь-яке число і перевіряємо чи це є результатом якогось степеня двійки
//Якщо так, повертаємо степінь
//Якщо ні, "Not step 2"


// function step2(n){
//     for(let i = 0; i < 100; i++){
//         if(Math.pow(2, i) === n){
//             return i;
//         }
//     }
//     return 'Not step 2';
// }
//
// console.log(step2(1024));
// console.log(step2(256));
// console.log(step2(333));



// function step2(n){
//     let i = 0;
//     while(Math.pow(2, i) <= n){
//         if(Math.pow(2, i) === n){
//             return i;
//         }
//          i++;
//     }
//     return 'Not step 2';
// }
// console.log(step2(1099511627776));
// console.log(step2(256));
// console.log(step2(333));
