//
// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.
// ===
// Від базового компютера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// ===
// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// ===
// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//
// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// ===
// Від базового ПК необхідно зробити ігровий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.


// class Computer{
//
//     constructor(ram, cpu_power, model) {
//         this.ram = ram;
//         if(cpu_power > 0 && cpu_power < 1000){
//             this.cpu_power = cpu_power;
//         }
//         this.model = model;
//     }
//     turn_on(){
//         console.log('Включився');
//     }
// }
//
// class Laptop extends Computer{
//
//     constructor(ram, cpu_power, model, diagonal) {
//         super(ram, cpu_power, model);
//         this.diagonal = diagonal;
//         this.battery = cpu_power / (diagonal * ram);
//     }
//     turn_on() {
//         super.turn_on();
//         console.log('ноутбук');
//     }
// }
//
// class Ultrabook extends Laptop{
//
//     constructor(ram, cpu_power, model, diagonal, weight) {
//         super(ram, cpu_power, model, diagonal);
//         this.battery = cpu_power / (diagonal * ram);
//         this.weight = weight;
//     }
//     turn_on() {
//         if(this.weight > 2 && this.battery < 4){
//             console.log('Error');
//         }
//         else{
//             super.turn_on();
//             console.log('моделі \'ультрабук\'');
//         }
//     }
// }
//
// class PC extends Computer{
//
//     constructor(ram, cpu_power, model, fpc = 0) {
//         super(ram, cpu_power, model);
//         this.fpc = fpc = cpu_power / ram;
//     }
//
//     turn_on() {
//         super.turn_on();
//         console.log('ПК');
//     }
//     games(game_name){
//         console.log('You are playing ' + game_name + 'with ' + this.fpc + ' FPC');
//     }
//     upgrade_cpu_power(percent){
//         if(percent < 10 && percent > 0){
//             this.cpu_power += this.cpu_power / 100 * percent;
//         }
//     }
//     upgrade_ram(){
//         this.ram *= 2;
//     }
//     change_ram(ram){
//         this.ram = ram;
//     }
//     change_cpu_power(cpu){
//         this.cpu_power = cpu;
//     }
//     change_model(model){
//         this.model = model;
//     }
// }
//
// class Gaming_Computer extends PC{
//
//     constructor(ram, cpu_power, model, fpc = 0) {
//         super(ram, cpu_power, model, fpc);
//         this.fpc_game = this.fpc * 2;
//     }
//
//     turn_on() {
//         super.turn_on();
//         console.log('для ігор');
//     }
//     games(game_name) {
//         let temp = this.cpu_power;
//         this.cpu_power -= this.cpu_power/100*0.1;
//         if(this.cpu_power < 500 && this.ram < 8){
//             console.log('На цьому відрі ігри не запускаються');
//             this.cpu_power = temp;
//             return;
//         }
//         else{
//             super.games(game_name);
//             this.cpu_power = temp;
//         }
//         return;
//     }
// }
//
//
// let computer = new Computer(8, 500, '23e45df');
// let laptop = new Laptop(16, 800, 'gs68263', 22);
// let ultrabook = new Ultrabook(16, 900, '234guiy',24, 1.6);
// let pc = new PC(8, 600,'435giy');
// let game_computer = new Gaming_Computer('16', 900, '35ftydkty');
//
// console.log(computer);
// computer.turn_on();
// console.log('---------------------------');
//
// console.log(laptop);
// laptop.turn_on();
// console.log('---------------------------');
//
// console.log(ultrabook);
// ultrabook.turn_on();
// console.log('---------------------------');
//
// console.log(pc);
// pc.turn_on();
// pc.games('Long Dark 3 ');
// console.log('---------------------------');
//
// console.log(game_computer);
// game_computer.turn_on();
// game_computer.games('Long Dark 3 ');
// console.log(game_computer);