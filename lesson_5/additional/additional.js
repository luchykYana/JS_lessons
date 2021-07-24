
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// // З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let addresses = [];
// for (const user of users) {
//         addresses.push(user.address);
// }
// console.log(addresses);


// // - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement.
// // Всі данні в одному блоці.
//
// let main_div = document.createElement('div');
// document.body.append(main_div);
// for (const user of users) {
//     const div = document.createElement('div');
//     div.innerHTML = `Name: ${user.name}<br>
//                      Age: ${user.age}<br>
//                      Status: ${user.status}<br>
//                      Address:<br>  Country: ${user.address.country}<br>
//                      City: ${user.address.city}<br>
//                      Street: ${user.address.street}<br>
//                      House number: ${user.address.houseNumber}`;
//     main_div.append(div);
//     div.style.margin = '20px';
//     div.style.padding = '10px';
//     div.style.border = '5px solid silver';
//     div.style.width = '150px';
// }
// main_div.style.display = 'flex';
// main_div.style.flexWrap = 'wrap';



// // - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// // розділивши всі властивості по своїм блокам (div>div*4)
// let main_div = document.createElement('div');
// document.body.append(main_div);
// for (const user of users) {

//     const div = document.createElement('div');
//     const nameDiv = document.createElement('div');
//     const ageDiv = document.createElement('div');
//     const statusDiv = document.createElement('div');
//     const addressDiv = document.createElement('div');

//     nameDiv.innerHTML = `Name: ${user.name}`;
//     ageDiv.innerHTML =  `Age: ${user.age}<br> `
//     statusDiv.innerHTML = `Status: ${user.status}<br>`
//     addressDiv.innerHTML = `Address:<br>  Country: ${user.address.country}<br>
//                           City: ${user.address.city}<br>
//                          Street: ${user.address.street}<br>
//                          House number: ${user.address.houseNumber}`;

//     main_div.append(div);
//     div.append(nameDiv,ageDiv,statusDiv,addressDiv);
//
//     div.style.margin = '20px';
//     div.style.padding = '10px';
//     div.style.border = '5px solid silver';
//     div.style.width = '150px';
//
//     nameDiv.style.borderBottom = '1px solid blue';
//     ageDiv.style.borderBottom = '1px solid red';
//     statusDiv.style.borderBottom = '1px solid green';
//     addressDiv.style.borderBottom = '1px solid purple';
// }
// main_div.style.display = 'flex';
// main_div.style.flexWrap = 'wrap';




// // - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// // розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// let main_div = document.createElement('div');
// document.body.append(main_div);
// for (const user of users) {
//     const div = document.createElement('div');
//     const nameDiv = document.createElement('div');
//     const ageDiv = document.createElement('div');
//     const statusDiv = document.createElement('div');
//     const addressDiv = document.createElement('div');
//     const addressCountryDiv = document.createElement('div');
//     const addressCityDiv = document.createElement('div');
//     const addressStreetDiv = document.createElement('div');
//     const addressHouseDiv = document.createElement('div');
//
//     nameDiv.innerHTML = `Name: ${user.name}`;
//     ageDiv.innerHTML =  `Age: ${user.age}<br> `;
//     statusDiv.innerHTML = `Status: ${user.status}<br>`;
//     addressDiv.innerHTML = `Address:`;
//     addressCountryDiv.innerHTML = `Country: ${user.address.country}<br>`;
//     addressCityDiv.innerHTML = `City: ${user.address.city}<br>`;
//     addressStreetDiv.innerHTML = ` Street: ${user.address.street}<br>`;
//     addressHouseDiv.innerHTML = `House number: ${user.address.houseNumber}`;
//
//
//
//     main_div.append(div);
//     div.append(nameDiv,ageDiv,statusDiv,addressDiv);
//     addressDiv.append(addressCountryDiv, addressCityDiv,addressStreetDiv,addressHouseDiv);
//
//     div.style.margin = '20px';
//     div.style.padding = '10px';
//     div.style.border = '5px solid silver';
//     div.style.width = '150px';
//
//     nameDiv.style.borderBottom = '1px solid blue';
//     ageDiv.style.borderBottom = '1px solid red';
//     statusDiv.style.borderBottom = '1px solid green';
//     addressDiv.style.borderLeft = '2px solid red';
//     addressCountryDiv.style.borderBottom = '1px solid orange';
//     addressCityDiv.style.borderBottom = '1px solid brown';
//     addressStreetDiv.style.borderBottom = '1px solid orange';
//     addressHouseDiv.style.borderBottom = '1px solid brown';
// }
// main_div.style.display = 'flex';
// main_div.style.flexWrap = 'wrap';