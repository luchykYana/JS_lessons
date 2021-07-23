// // 1) Створити масив з 20 чисел та:
// let mas = [61, 56, 57, 36, 41, 5, 27, 85, 51, 4, 48, 21, 64, 6, 16, 3, 55, 47, 2, 34];
//
// //     a) відсортувати його від меншого до більшого.
// mas.sort((a,b) => a - b);
// console.log(mas);
//
// //     b) відсортувати його від більшого до меншого.
// mas.sort((a,b) => b - a);
// console.log(mas);
//
// //     c) Відфілтрувати числа які є кратними 3.
// let filter = mas.filter(a => a % 3 === 0);
// console.log(filter);
//
// // d) Відфілтрувати числа які є більшими за 10.
// let filter2 = mas.filter(a => a > 10);
// console.log(filter2);
//
// // e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// mas.forEach((a) => document.write(a + ' '));
//
// // f) За допомогою map збільшити кожен елемент в масиві в три рази.
// let map = mas.map((a) => a*3);
// console.log(map);
//
// //     g) Порахувати загальну суму всіх елментів у масиві (reduce)
//
// let sum = mas.reduce((a,b) => a + b);
// console.log(sum);



// // 2) Створити масив з 20 стрічок та:
// let str = ['htg', 'thegfds', 'aergfvs', 'rgssss4w', 'gsefdv', 'heagfd', 'qwa', 'nhgfb', 'q', 'hngbfvds',
//            'mnbg', 'rgsvd', 'rbs', 'qwerty', 'gbfvdc', 'po', 'lkjhgfdsa', 'kjhgf', 'nbvc', 'rfctfgv'];
//
// // // a) Відсортувати його в алфавітному порядку
// // console.log(str.sort());
//
// // // b) Відсортувати в зворотньому порядку
// // console.log(str.reverse());
//
// // // c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// // let filter = str.filter(a => a.length > 4);
// // console.log(filter);
//
// // // d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// // let map = str.map(a => 'Sam says ' + a);
// // console.log(map);



// // 3) Все робити тільки за допомогою методів масивів!
// //     Дано масив :
//     const users = [
//         {name: 'vasya', age: 31, isMarried: false},
//         {name: 'petya', age: 30, isMarried: true},
//         {name: 'kolya', age: 29, isMarried: true},
//         {name: 'olya', age: 28, isMarried: false},
//         {name: 'max', age: 30, isMarried: true},
//         {name: 'anya', age: 31, isMarried: false},
//         {name: 'oleg', age: 28, isMarried: false},
//         {name: 'andrey', age: 29, isMarried: true},
//         {name: 'masha', age: 30, isMarried: true},
//         {name: 'olya', age: 31, isMarried: false},
//         {name: 'max', age: 31, isMarried: true}
//     ];
// // // a) відсортувати його за  віком (зростання , а потім окремо спадання)
// console.log(users.sort((a, b) => a.age - b.age));
// console.log(users.sort((a, b) => b.age - a.age));
//
// // // b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// console.log(users.sort((a, b) => a.name.length - b.name.length ));
// console.log(users.sort((a, b) => b.name.length  - a.name.length ));
//
// // c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// // (По якому принципу його створювати - ваше рішення),
// // та зберегти це в новий масив (первинний масив залишиться без змін)
// let map = users.map(function (user, index){
//       user.id = index+1;
//       return user;
// });
// console.log(map);
//
// // // d) відсортувати його за індентифікатором
// map.sort((a,b) => b.id - a.id);
// console.log(map);
//
// // e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

