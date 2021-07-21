// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
//
// class User{
//     constructor(id, name, username, email,
//                 address = {street, suit , city, zipcode, geo:{lat,lng}},
//                 phone, website, company = {name, catchPhrase, bs}) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = {
//             street: address.street,
//             suit: address.suit,
//             city: address.city,
//             zipcode: address.zipcode,
//             geo:{
//                 lat: address.geo.lat,
//                 lng: address.geo.lat
//             }
//         }
//         this.phone = phone;
//         this.website = website;
//         this.company = {
//             name: company.name,
//             catchPhrase: company.catchPhrase,
//             bs: company.bs
//         }
//     }
// }
// let user = new User(1,'Leanne Graham','Bret','Sincere@april.biz', {street: 'Kulas Light',
//     suite: 'Apt. 556', city: 'Gwenborough',zipcode: '92998-3874', geo:{lat: '-37.3159', lng: '81.1496'}},
//     '1-770-736-8031 x56442', 'hildegard.org',
//     {name:'Romaguera-Crona',catchPhrase: 'Multi-layered client-server neural-net',bs: 'harness real-time e-markets'});
//
// console.log(user);








// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// class Tag {
//     constructor(titleOfTag, action, attrs = {
//                     attr1: {titleOfAttr, actionOfTag},
//                     attr2: {titleOfAttr, actionOfTag}}) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs = {
//             attr1: {
//                 titleOfAttr: attrs.attr1.titleOfAttr,
//                 actionOfAttr: attrs.attr1.actionOfAttr
//             },
//             attr2: {
//                 titleOfAttr: attrs.attr2.titleOfAttr,
//                 actionOfAttr: attrs.attr2.actionOfAttr
//             }
//         };
//     }
// }
//
// let div = new Tag('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента' +
//     ' документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. ' +
//     'Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, ' +
//     'а для тега добавить атрибут class или id с именем селектора.',
//     {attr1: {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега div.'},
//           attr2: {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}})
//
// console.log(div);
