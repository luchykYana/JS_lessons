//
// // Зробити свій розпорядок дня.
// //
// //     У вас має бути більше 10 асинхронних дій з рандомними затримками.
// //     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// // Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// //
// //     Напиклад.
// //     Прикнутись - 0.3с
// // Поснідати - 1с
// // Піти в душ - 0.5с
// // Дочекатись автобус - 3с
// // Пообідати - 1с
// //
// // І так далі
//
//
// wakeUp = (isTrue, callback) => setTimeout(() => {
//     if(isTrue){
//         console.log('1. Wake up!');
//         callback();
//     }
//     else{
//         console.log('False');
//         console.log('You don`t wake up!');
//     }
//     }, 500)
//
// feedTheCat = (isTrue, callback) => setTimeout(() => {
//
//         if(isTrue){
//             console.log('2. Feed Busya');
//             callback();
//         }
//         else{
//             console.log('False');
//             console.log('You don`t feed cat');
//         }
//     }, 300)
//
// breakfast = (isTrue, callback) => setTimeout(() => {
//     if(isTrue){
//         console.log('3. Breakfast');
//         callback();
//     }
//     else{
//         console.log('False');
//         console.log('You don`t have breakfast');
//     }
//     }, 1000)
//
// takeAShower = (isTrue, callback) => setTimeout(() => {
//     if(isTrue){
//         console.log('Take a shower');
//         callback();
//     }
//     else{
//         console.log('False');
//         console.log('You don`t have a shower');
//     }
//     }, 500)
//
// goToTheStore = (isTrue, callback) => setTimeout(() => {
//     if(isTrue){
//         console.log('5. Go to the store');
//         callback();
//     }
//     else{
//         console.log('False');
//         console.log('You didn`t go to the store');
//     }
//     }, 2000)
//
// lunch = (isTrue, callback) => setTimeout(() => {
//     if(isTrue){
//         console.log('6. Lunch');
//         callback();
//     }
//     else{
//         console.log('False');
//         console.log('You don`t have a lunch');
//     }
//     }, 1000)
//
// doHomework = (isTrue, callback) => setTimeout(() => {
//     if(isTrue){
//         console.log('7. Do homework');
//         callback();
//     }
//     else{
//         console.log('False');
//         console.log('You don`t finish your homework');
//     }
//     }, 3000)
//
// toGoForAWalk = (isTrue, callback) => setTimeout(() => {
//     if(isTrue){
//         console.log('8. To go for a walk');
//         callback();
//     }
//     else{
//         console.log('False');
//         console.log('You didn`t go for a walk');
//     }
//     }, 4000)
//
// supper = (isTrue, callback) => setTimeout(() => {
//     if(isTrue){
//         console.log('9. Supper');
//         callback();
//     }
//     else{
//         console.log('False');
//         console.log('You don t have a supper');
//     }
//     }, 1000)
//
// fallAsleep = (isTrue, callback) => setTimeout(() => {
//     if(isTrue){
//         console.log('11. Fall asleep');
//         callback();
//     }
//     else{
//         console.log('False');
//         console.log('You didn`t go to bad');
//     }
//     }, 1000)
//
// wakeUp(true,() => {
//     feedTheCat(true, () => {
//         breakfast(false, () => {
//             takeAShower(true, () => {
//                 goToTheStore(true, () => {
//                     lunch(true, () => {
//                         doHomework(true, () => {
//                             toGoForAWalk(true, () => {
//                                 supper(true, () => {
//                                     takeAShower(true, () => {
//                                         fallAsleep(true, () => {
//                                             console.log('The end 1');
//                                         })
//                                     })
//                                 })
//                             })
//                         })
//                     });
//                 });
//             });
//         });
//     });
// })