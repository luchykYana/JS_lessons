// //
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
// // Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// class Client{
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let client = [
//     client1 = new Client(1,'Leanne','Graham','Sincere@april.biz', '1-770-736-8031 x56442',['ham','bread','cheese']),
//     client2 = new Client(2,'Ervin', 'Howell','Shanna@melissa.tv', '010-692-6593 x09125',['eggs', 'sausages']),
//     client3 = new Client(3,'Clementine', 'Bauch','Nathan@yesenia.net','1-463-123-4447',['bread','butter','tea','coffee','jam','candies','cookies']),
//     client4 = new Client(4,'Patricia', 'Lebsack','Julianne.OConner@kory.org', '493-170-9623 x156',['juice','ice cream']),
//     client5 = new Client(5,'Chelsey', 'Dietrich','Lucio_Hettinger@annie.ca', '1-(254)954-1289',['ice cream']),
//     client6 = new Client(6,'Dennis', 'Schulist','Karley_Dach@jasper.info', '1-477-935-8478 x6430',['pizza','cola','crisps']),
//     client7 = new Client(7,'Kurtis','Weissnat','Telly.Hoeger@billy.biz','210-067-6132',['cabbage','carrot','onion','potato']),
//     client8 = new Client(8,'Nicholas','Runolfsdottir','Sherwood@rosamond.me', '586.493.6943 x140',['apple','kivi','lemon','grapes','cherry']),
//     client9 = new Client(9,'Glenna','Reichert','Chaim_McDermott@dana.io', '(775)976-6794 x41206',['watermelon','strawberry']),
//     client10 = new Client(10,'Clementina', 'DuBuque','Rey.Padberg@karina.biz', '024-648-3804',['almonds','rise','butter'])
// ]
// client.sort((a,b) => a.order.length - b.order.length);
// console.log(client);



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// function constructor(model,manufacturer,year,maxSpeed,capacityOfEngine){
//     let car = {
//         model: model,
//         manufacturer: manufacturer,
//         year: year,
//         maxSpeed: maxSpeed,
//         capacityOfEngine:capacityOfEngine,
//         drive: function (){
//             console.log('їдемо зі швидкістю ' + this.maxSpeed + ' км на годину');
//         },
//         info: function (){
//             for(let item in car){
//                 console.log(item + ': ' + car[item]);
//             }
//         },
//         increaseMaxSpeed: function (newSpeed){
//             this.maxSpeed = newSpeed;
//         },
//         changeYear: function (newValue){
//             this.year = newValue
//         },
//         addDriver: function (driver){
//             car.driver = driver;
//         }
//     }
//     return car;
// }
// let honda = constructor('Honda','Japan',2008,240,2.4);
// honda.drive();
// console.log('-----------------------------');
// honda.info();
// console.log('-----------------------------');
// honda.increaseMaxSpeed(300);
// honda.info();
// console.log('-----------------------------');
// honda.changeYear(2000);
// honda.info();
// console.log('-----------------------------');
// honda.addDriver({
//     name: 'Ostap',
//     age: 22,
//     level: 'B'
// });
// console.log(honda);




// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
//
// class Car{
//
//     constructor(model,manufacturer,year,maxSpeed,capacityOfEngine) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.capacityOfEngine = capacityOfEngine;
//     }
//
//     drive(){
//         console.log('їдемо зі швидкістю ' + this.maxSpeed + ' км на годину');
//     }
//     info(){
//         for (const key in this) {
//             console.log(key + ': ' + this[key]);
//         }
//     }
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed = newSpeed;
//     }
//     changeYear(newValue){
//         this.year = newValue
//     }
//     addDriver(driver){
//         this.driver = driver;
//     }
//
// }
//
// let honda = new Car('Honda','Japan',2008,240,2.4);
// honda.drive();
// console.log('-----------------------------');
// honda.info();
// console.log('-----------------------------');
// honda.increaseMaxSpeed(300);
// honda.info();
// console.log('-----------------------------');
// honda.changeYear(2000);
// honda.info();
// console.log('-----------------------------');
// honda.addDriver({
//     name: 'Ostap',
//     age: 22,
//     level: 'B'
// });
// console.log(honda);






// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// class Person{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// class Cinderella extends Person{
//     constructor(name, age, footSize) {
//         super(name,age);
//         this.footSize = footSize;
//     }
// }
// class Prince extends Person{
//     constructor(name, age, shoeSize) {
//         super(name, age);
//         this.shoeSize = shoeSize;
//     }
// }
//
// let girls = [
//     cinderella1 = new Cinderella('Annabel', 20, 31),
//     cinderella2 = new Cinderella('Daisy', 19, 36),
//     cinderella3 = new Cinderella('Emily', 24, 28),
//     cinderella4 = new Cinderella('Kelly', 22, 32),
//     cinderella5 = new Cinderella('Flora', 23, 29),
//     cinderella6 = new Cinderella('Olivia', 21, 34),
//     cinderella7 = new Cinderella('Chloe', 19, 27),
//     cinderella8 = new Cinderella('May', 21, 30),
//     cinderella9 = new Cinderella('Lizbeth', 21, 33),
//     cinderella10 = new Cinderella('Nora', 24, 35),
// ]
// let prince = new Prince('Charles', 25, 32);
//
// for(let girl of girls){
//     if(girl.footSize === prince.shoeSize){
//         console.log(girl);
//     }
// }
//
// girls.find(function (a){
//     if(a.footSize === 32) {
//         console.log(a);
//     }
// });