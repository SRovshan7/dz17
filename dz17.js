// 1)
//обьясни своими словами, что значит callback функция
//это функция, переданная в другую функцию в качестве аргумента, которая затем вызывается по завершению какого-либо действия.

// 2)
//выведи в консоли 'Привет я Alex и мне 19 лет' с помощью функций ниже и callback
let name2, age;
function alertInfo(name, age) {
    console.log(`Hi, I am ${name} and I am ${age}`);
}

function userInfo(callbackFunc) {
    name2 = 'Alex';
    age = 19;
    callbackFunc(name2, age)
}

userInfo(alertInfo);

// 3)
//какая из функций является функцией обратного вызова?
setTimeout(showMessage, 369)

??
// 4)
//передайте функции ниже функцию showMessage  в качестве параметра и вызовите ее
?

// 5)
//что такое Promise?
//Promise - код, который JS выполнит, но потом.

// 6)
//создайте Promise функцию?
let JS = new Promise()

// 7)
//обьясни своими словами, что такое res и rej?
let count7 = new Promise(function(res, rej) {
    let a = 4;
    if (a > 3) {
        res('Число подходит');
    } else {
        rej('Число неподходит');
    }

    count7.then (
        function(value) {console.log(value);},
        function(error) {console.log(error);}
    );
});
//?????

// 8)
//обьясни своими словами, что такое .then?
let count8 = new Promise(function(res, rej) {
    let a = 4;
    if (a > 3) {
        res('Число подходит');
    } else {
        rej('Число неподходит');
    }

    count8.then (
        function(value) {console.log(value);},
        function(error) {console.log(error);}
    );
});
//?????

// 9)
//обьясни своими словами, что такое .then?
let count9 = new Promise(function(res, rej) {
    let a = 4;
    if (a > 3) {
        res('Число подходит');
    } else {
        rej('Число неподходит');
    }

    count9.then (
        function(value) {console.log(value);},
        function(error) {console.log(error);}
    );
});
//??????

// 10)
//что значит асинхронный?
//Асинхронный - происходящий во время, отличающееся от времени, в которое происходит что-то другое.

