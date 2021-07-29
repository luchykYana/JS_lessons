
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


// wakeUp = () => new Promise(resolve => setTimeout(() => {
//     console.log('1. Wake up!');
//     resolve();
//     }, 500))
//
// feedTheCat = () => new Promise(resolve => setTimeout(() => {
//     console.log('2. Feed Busya');
//     resolve();
//     }, 300))
//
// breakfast = () => new Promise(resolve => setTimeout(() => {
//     console.log('3. Breakfast');
//     resolve();
//     }, 1000))
//
// takeAShower = () => new Promise(resolve => setTimeout(() => {
//     console.log('Take a shower');
//     resolve();
//     }, 500))
//
// goToTheStore = () => new Promise(resolve => setTimeout(() => {
//     console.log('5. Go to the store');
//     resolve();
//     }, 2000))
//
// lunch = () => new Promise(resolve => setTimeout(() => {
//     console.log('6. Lunch');
//     resolve();
//     }, 1000))
//
// doHomework = () => new Promise(resolve => setTimeout(() => {
//     console.log('7. Do homework');
//     resolve();
//     }, 3000))
//
// toGoForAWalk = () => new Promise(resolve => setTimeout(() => {
//     console.log('8. To go for a walk');
//     resolve();
//     }, 4000))
//
// supper = () => new Promise(resolve => setTimeout(() => {
//     console.log('9. Supper');
//     resolve();
//     }, 1000))
//
// fallAsleep = () => new Promise(resolve => setTimeout(() => {
//     console.log('11. Fall asleep');
//     resolve();
//     }, 1000))
//
// async function myDay(){
//     await wakeUp();
//     await feedTheCat();
//     await breakfast();
//     await takeAShower();
//     await goToTheStore();
//     await lunch();
//     await doHomework();
//     await toGoForAWalk();
//     await supper();
//     await takeAShower();
//     await fallAsleep();
//     console.log('The end 3');
// }
//
// myDay();