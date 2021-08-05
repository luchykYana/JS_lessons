// Ваша задача — написать функцию, которая будет возвращать массив из позиций букв в алфавите.
//
//     Пример:

// pos('каша') -> [ 11, 1, 25, 1 ]
// pos('бобер') -> [ 2, 15, 2, 6, 17 ]
// pos('алкаш') ->[ 1, 12, 11, 1, 25 ]


function pos(word){
    const temp1 = /\p{sc=Cyrillic}/gu;
    const temp2 = /\p{sc=Latin}/gu;
    let mas = [], mas2 = [], i = 0;
    word.toLowerCase();

    if(word.match(temp1) !== null){
        let j = 1071;
        mas = word.split('');
        for (const item of mas) {
            mas2[i] = item.charCodeAt(0)-j;
            i++;
        }
    }
    if(word.match(temp2) !== null){
        let j = 96;
        mas = word.split('');
        for (const item of mas) {
            mas2[i] = item.charCodeAt(0)-j;
            i++;
        }
    }
    return mas2;
}

console.log(pos('apple'));
console.log(pos('яблуко'));

