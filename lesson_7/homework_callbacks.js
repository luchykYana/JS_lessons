
// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
//     Напиклад.
//     Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
//
// І так далі


// wakeUp = (callback) => setTimeout(() => {
//     console.log('1. Wake up!');
//     callback();
//     }, 500)
//
// feedTheCat = (callback) => setTimeout(() => {
//     console.log('2. Feed Busya');
//     callback();
//     }, 300)
//
// breakfast = (callback) => setTimeout(() => {
//     console.log('3. Breakfast');
//     callback();
//     }, 1000)
//
// takeAShower = (callback) => setTimeout(() => {
//     console.log('Take a shower');
//     callback();
//     }, 500)
//
// goToTheStore = (callback) => setTimeout(() => {
//     console.log('5. Go to the store');
//     callback();
//     }, 2000)
//
// lunch = (callback) => setTimeout(() => {
//     console.log('6. Lunch');
//     callback();
//     }, 1000)
//
// doHomework = (callback) => setTimeout(() => {
//     console.log('7. Do homework');
//     callback();
//     }, 3000)
//
// toGoForAWalk = (callback) => setTimeout(() => {
//     console.log('8. To go for a walk');
//     callback();
//     }, 4000)
//
// supper = (callback) => setTimeout(() => {
//     console.log('9. Supper');
//     callback();
//     }, 1000)
//
// fallAsleep = (callback) => setTimeout(() => {
//     console.log('11. Fall asleep');
//     callback();
//     }, 1000)
//
// wakeUp(() => {
//     feedTheCat(() => {
//         breakfast(() => {
//             takeAShower(() => {
//                 goToTheStore(() => {
//                     lunch(() => {
//                         doHomework(() => {
//                             toGoForAWalk(() => {
//                                 supper(() => {
//                                     takeAShower(() => {
//                                         fallAsleep(() => {
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