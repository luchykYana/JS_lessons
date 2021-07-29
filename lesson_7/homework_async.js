
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


// wakeUp = (isTrue) => new Promise((resolve, reject) => setTimeout(() => {
//     if(isTrue){
//         console.log('1. Wake up!');
//         resolve();
//     }
//     else{
//         console.log('False');
//         reject('You don`t wake up!');
//     }
// }, 500))
//
// feedTheCat = (isTrue) => new Promise((resolve, reject) => setTimeout(() => {
//     if(isTrue){
//         console.log('2. Feed Busya');
//         resolve();
//     }
//     else{
//         console.log('False');
//         reject('You don`t feed cat');
//     }
// }, 300))
//
// breakfast = (isTrue) => new Promise((resolve, reject) => setTimeout(() => {
//     if(isTrue){
//         console.log('3. Breakfast');
//         resolve();
//     }
//     else{
//         console.log('False');
//         reject('You don`t have breakfast');
//     }
// }, 1000))
//
// takeAShower = (isTrue) => new Promise((resolve, reject) => setTimeout(() => {
//     if(isTrue){
//         console.log('Take a shower');
//         resolve();
//     }
//     else{
//         console.log('False');
//         reject('You don`t have a shower');
//     }
// }, 500))
//
// goToTheStore = (isTrue) => new Promise((resolve, reject) => setTimeout(() => {
//     if(isTrue){
//         console.log('5. Go to the store');
//         resolve();
//     }
//     else{
//         console.log('False');
//         reject('You didn`t go to the store');
//     }
// }, 2000))
//
// lunch = (isTrue) => new Promise((resolve, reject) => setTimeout(() => {
//     if(isTrue){
//         console.log('6. Lunch');
//         resolve();
//     }
//     else{
//         console.log('False');
//         reject('You don`t have a lunch');
//     }
// }, 1000))
//
// doHomework = (isTrue) => new Promise((resolve, reject) => setTimeout(() => {
//     if(isTrue){
//         console.log('7. Do homework');
//         resolve();
//     }
//     else{
//         console.log('False');
//         reject('You don`t finish your homework');
//     }
// }, 3000))
//
// toGoForAWalk = (isTrue) => new Promise((resolve, reject) => setTimeout(() => {
//     if(isTrue){
//         console.log('8. To go for a walk');
//         resolve();
//     }
//     else{
//         console.log('False');
//         reject('You didn`t go for a walk');
//     }
// }, 4000))
//
// supper = (isTrue) => new Promise((resolve, reject) => setTimeout(() => {
//     if(isTrue){
//         console.log('9. Supper');
//         resolve();
//     }
//     else{
//         console.log('False');
//         reject('You don t have a supper');
//     }
// }, 1000))
//
// fallAsleep = (isTrue) => new Promise((resolve, reject) => setTimeout(() => {
//     if(isTrue){
//         console.log('False');
//         reject('You didn`t go to bad');
//     }
//     else{
//         console.log('11. Fall asleep');
//         resolve();
//     }
// }, 1000))
//
//
//
// async function myDay(){
//     try{
//         await wakeUp(true);
//         await feedTheCat(true);
//         await breakfast(true);
//         await takeAShower(true);
//         await goToTheStore(false);
//         await lunch(true);
//         await doHomework(true);
//         await toGoForAWalk(true);
//         await supper(true);
//         await takeAShower(true);
//         await fallAsleep(true);
//         console.log('The end 3');
//     }
//     catch (reason){
//         console.log(reason);
//     }
// }
//
// myDay();