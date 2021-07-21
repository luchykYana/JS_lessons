

// // // - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// function randMas(){
//     let mas = [];
//     for(let i = 0; i < 20; i++){
//         mas[i] = Math.round(Math.random()*100);
//     }
//     return mas;
// }
// console.log(randMas());



// // // - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
// function randMas(n){
//     let mas = [];
//     for(let i = 0; i < n; i++){
//         mas[i] = Math.round(Math.random()*100);
//     }
//     return mas;
// }
//
// // // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// // let mas = randMas(10);
// // console.log(mas);
// // console.log(mas.sort((a, b) => a-b));
// // console.log(mas.sort((a, b) => b-a));
//
// // // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
// // let mas2 = randMas(10);
// // console.log(mas2);
// // let filter = mas2.filter(item => item % 2 === 0);
// // console.log(filter);
//
// // // - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
// // let mas3 = randMas(10);
// // console.log(mas3);
// // let map = mas3.map(String);
// // console.log(map);





// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// class User{
//
//
//     constructor(name, surname, id, email, phone) {
//         this.name = name;
//         this.surname = surname;
//         this.id = id;
//         this.email = email;
//         this.phone = phone;
//     }
// }
//
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// let users = [
//     user1 = new User('Leanne','Graham', 1, 'Sincere@april.biz', '1-770-736-8031 x56442'),
//     user2 = new User('Ervin', 'Howell', 2, 'Shanna@melissa.tv', '010-692-6593 x09125'),
//     user3 = new User('Clementine', 'Bauch', 3, 'Nathan@yesenia.net','1-463-123-4447'),
//     user4 = new User('Patricia', 'Lebsack', 4, 'Julianne.OConner@kory.org', '493-170-9623 x156'),
//     user5 = new User('Chelsey', 'Dietrich', 5, 'Lucio_Hettinger@annie.ca', '1-(254)954-1289'),
//     user6 = new User('Dennis', 'Schulist', 6, 'Karley_Dach@jasper.info', '1-477-935-8478 x6430'),
//     user7 = new User('Kurtis','Weissnat', 7, 'Telly.Hoeger@billy.biz','210-067-6132'),
//     user8 = new User('Nicholas','Runolfsdottir', 8, 'Sherwood@rosamond.me', '586.493.6943 x140'),
//     user9 = new User('Glenna','Reichert', 9, 'Chaim_McDermott@dana.io', '(775)976-6794 x41206'),
//     user10 = new User('Clementina', 'DuBuque', 10, 'Rey.Padberg@karina.biz', '024-648-3804')
// ];
//
// // Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по спаданню (sort)
// let filter2 = users.filter(user => user.id % 2 === 0);
// filter2.sort((a,b) => b.id - a.id);
// console.log(filter2);