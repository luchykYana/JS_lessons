//Передаємо у функцію будь-яке число і перевіряємо чи це є результатом якогось степеня двійки
//Якщо так, повертаємо степінь
//Якщо ні, не число


function step2(n){
    const num = 2;
    for(let i = 0; i < 100; i++){
        if(Math.pow(2, i) === n){
            return i;
        }
    }
    return 'Not step 2';
}

console.log(step2(333));
