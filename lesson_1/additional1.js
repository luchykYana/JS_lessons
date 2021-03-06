let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

// document.write(`<div><ul>
//     <li>${listOfItems[0]}</li>
//     <li>${listOfItems[1]}</li>
//     <li>${listOfItems[2]}</li>
//     <li>${listOfItems[3]}</li>
//     <li>${listOfItems[4]}</li>
//     <li>${listOfItems[5]}</li>
//     <li>${listOfItems[6]}</li>
//     <li>${listOfItems[7]}</li>
// </ul></div>`);

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    }
];

// document.write(`<div class="all">
// <div class="bart sides">
//     <div class="name">Name: ${simpsons[0].name}</div> <br>
//     <div class="surname">Surname: ${simpsons[0].surname}</div> <br>
//     <div class="age">Age: ${simpsons[0].age}</div> <br>
//     <div class="info">Info: ${simpsons[0].info}</div> <br>
//     <img src="${simpsons[0].photo}" alt="Bart Simpsons"> <br>
// </div>
// <div class="homer sides">
//     <div class="name">Name: ${simpsons[1].name}</div> <br>
//     <div class="surname">Surname: ${simpsons[1].surname}</div> <br>
//     <div class="age">Age: ${simpsons[1].age}</div> <br>
//     <div class="info">Info: ${simpsons[1].info}</div> <br>
//     <img src="${simpsons[1].photo}" alt="Homer Simpsons"> <br>
// </div>
// <div class="marge sides">
//     <div class="name">Name: ${simpsons[2].name}</div> <br>
//     <div class="surname">Surname: ${simpsons[2].surname}</div> <br>
//     <div class="age">Age: ${simpsons[2].age}</div> <br>
//     <div class="info">Info: ${simpsons[2].info}</div> <br>
//     <img src="${simpsons[2].photo}" alt="Marge Simpsons"> <br>
// </div>
// <div class="lisa sides">
//     <div class="name">Name: ${simpsons[3].name}</div> <br>
//     <div class="surname">Surname: ${simpsons[3].surname}</div> <br>
//     <div class="age">Age: ${simpsons[3].age}</div> <br>
//     <div class="info">Info: ${simpsons[3].info}</div> <br>
//     <img src="${simpsons[3].photo}" alt="Lisa Simpsons"> <br>
// </div>
// <div class="maggie sides">
//     <div class="name">Name: ${simpsons[4].name}</div> <br>
//     <div class="surname">Surname: ${simpsons[4].surname}</div> <br>
//     <div class="age">Age: ${simpsons[4].age}</div> <br>
//     <div class="info">Info: ${simpsons[4].info}</div> <br>
//     <img src="${simpsons[4].photo}" alt="Maggie Simpsons"> <br>
// </div>
// </div>`);
//
//
//
// document.write(`<div class="all">
// <div class="bart1 sides d-flex a-center column_gap20">
//     <div>
//         <img src="${simpsons[0].photo}" alt="Bart Simpsons"> <br>
//     </div>
//     <div>
//          <h2>${simpsons[0].name} ${simpsons[0].surname}</h2> <br>
//          <h2>${simpsons[0].age} years old</h2> <br>
//          <p>${simpsons[0].info}</p> <br>
//     </div>
// </div>
// <div class="homer1 sides d-flex a-center column_gap20">
//     <div>
//         <img src="${simpsons[1].photo}" alt="Homer Simpsons"> <br>
//     </div>
//     <div>
//          <h2>${simpsons[1].name} ${simpsons[1].surname}</h2> <br>
//          <h2>${simpsons[1].age} years old</h2> <br>
//          <p>${simpsons[1].info}</p> <br>
//     </div>
// </div>
// <div class="marge1 sides d-flex a-center column_gap20">
//     <div>
//         <img src="${simpsons[2].photo}" alt="Marge Simpsons"> <br>
//     </div>
//     <div>
//          <h2>${simpsons[2].name} ${simpsons[2].surname}</h2> <br>
//          <h2>${simpsons[2].age} years old</h2> <br>
//          <p>${simpsons[2].info}</p> <br>
//     </div>
// </div>
// <div class="lisa1 sides d-flex a-center column_gap20">
//     <div>
//         <img src="${simpsons[3].photo}" alt="Lisa Simpsons"> <br>
//     </div>
//     <div>
//          <h2>${simpsons[3].name} ${simpsons[3].surname}</h2> <br>
//          <h2>${simpsons[3].age} years old</h2> <br>
//          <p>${simpsons[3].info}</p> <br>
//     </div>
// </div>
// <div class="maggie1 sides d-flex a-center column_gap20">
//     <div>
//         <img src="${simpsons[4].photo}" alt="Maggie Simpsons"> <br>
//     </div>
//     <div>
//          <h2>${simpsons[4].name} ${simpsons[4].surname}</h2> <br>
//          <h2>${simpsons[4].age} years old</h2> <br>
//          <p>${simpsons[4].info}</p> <br>
//     </div>
// </div>
// </div>
// </div>`);


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];


// document.write(`<div class="products d-flex">
//     <div class="product-card">
//          <img src="${products[0].image}" alt="milk" class="product-image">
//          <h3 class="product-title"> ${products[0].title}</h3>
//          <h3>Price: ${products[0].price}₴</h3>
//          <p class="product-description"><b>Склад:</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//          Ab amet blanditiis, cupiditate dolores eos fuga nostrum quidem reiciendis repudiandae, sed unde vel voluptate,
//          voluptates. Assumenda delectus iure quod ut voluptatibus?</p>
//     </div>
//         <div class="product-card">
//          <img src="${products[1].image}" alt="juice" class="product-image">
//          <h3 class="product-title"> ${products[1].title}</h3>
//          <h3>Price: ${products[1].price}₴</h3>
//          <p class="product-description"><b>Склад:</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//          Ab amet blanditiis, cupiditate dolores eos fuga nostrum quidem reiciendis repudiandae, sed unde vel voluptate,
//          voluptates. Assumenda delectus iure quod ut voluptatibus?</p>
//     </div>
//         <div class="product-card">
//          <img src="${products[2].image}" alt="tomato" class="product-image">
//          <h3 class="product-title"> ${products[2].title}</h3>
//          <h3>Price: ${products[2].price}₴</h3>
//          <p class="product-description"><b>Склад:</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//          Ab amet blanditiis, cupiditate dolores eos fuga nostrum quidem reiciendis repudiandae, sed unde vel voluptate,
//          voluptates. Assumenda delectus iure quod ut voluptatibus?</p>
//     </div>
//         <div class="product-card">
//          <img src="${products[3].image}" alt="tea" class="product-image">
//          <h3 class="product-title"> ${products[3].title}</h3>
//          <h3>Price: ${products[3].price}₴</h3>
//          <p class="product-description"><b>Склад:</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//          Ab amet blanditiis, cupiditate dolores eos fuga nostrum quidem reiciendis repudiandae, sed unde vel voluptate,
//          voluptates. Assumenda delectus iure quod ut voluptatibus?</p>
//     </div>
// </div>`);