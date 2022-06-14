
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. 
Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(event) {
    let out = document.querySelector('.out-1');
    out.innerHTML = document.querySelector('.i-1').value;
    console.log(event);
}

document.querySelector('.i-1').onkeypress = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(event) {
    let out = document.querySelector('.out-2');
    out.innerHTML += event.keyCode + ' ';
    console.log(event);
}

document.querySelector('.i-2').onkeydown = t2;


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. 
Для определения - используйте код клавиши. */

// let w3 = 75;

function t3(event) {
    let out = document.querySelector('.out-3');
    if (event.keyCode > 47 && event.keyCode < 58) { // включены все цифры, кроме Num Lock 
        out.innerHTML += false + ' ';
    }
    else {
        out.innerHTML += true + ' ';
    }
}

document.querySelector('.i-3').onkeydown = t3;


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. 
Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4(event) {
    let out = document.querySelector('.out-4');
    let inp = document.querySelector('.i-4').value;
    out.innerHTML = inp.toLowerCase(event);
}

document.querySelector('.i-4').onkeydown = t4;

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. 
Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(event) {
    let out = document.querySelector('.out-5');
    let inp = document.querySelector('.i-5').value;
    out.innerHTML = inp.toUpperCase(event);
}

document.querySelector('.i-5').onkeydown = t5;

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6(event) {
    return (event.keyCode > 0 && event.keyCode < 65 || event.keyCode > 90 );
}

document.querySelector('.i-6').onkeypress = t6;


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function random(min, max) { return Math.floor(Math.random() * (max - min + 1) + min); }
const a7 = [];
function t7(event) {
    a7.push(event.key);
    let rand = a7[random(0, a7.length - 1)];
    document.querySelector('.out-7').innerHTML = rand;
}
document.querySelector('.i-7').onkeypress = t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8(event) {
    let out = document.querySelector('.out-8');
    // const a = {
    //     i: 1,
    //     o: 0,
    //     l: 7
    // }
    // if (event.key == a[key]) {
    //     out.innerHTML += a[event.key];
    // }
    // else {
    //     out.innerHTML += event.key;
    // }

    switch (event.key) {
        case "i": out.innerHTML += 1;
        break;
        case "o": out.innerHTML += 0;
        break;
        case "l": out.innerHTML += 7;
        break;
        default: out.innerHTML += event.key;
    }
        
}

document.querySelector('.i-8').onkeypress = t8;


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

let sum = 0;
function t9(event) {
    let out = document.querySelector('.out-9');
    if (event.keyCode == 40) {
        sum = sum + 1;
        out.innerHTML = sum;
    }
}

document.querySelector('.i-9').onkeydown = t9;


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево 
увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

let h = 75;
let w = 75;
function t10(event) {
    let img = document.querySelector('.div-10 > img');
    if (event.keyCode == 40 || event.keyCode == 38) {
        img.style.height = h + 'px';
        h++;
    }
    else if (event.keyCode == 37 || event.keyCode == 39) {
        img.style.width = w + 'px';
        w++;
    }
}

// function f18() {
//     let x = document.querySelector('.div-18');
//     x.style.width = 175 + 'px';
//     x.innerHTML = x.style.width;
//     console.log(x.style.width);
// }
// document.querySelector('.div-18').onmouseenter = f18; 

        //         <input type="text" class="i-10">
        //         <div class="div-10 block">
        //             <img src="img/1.png" alt="">
        //         </div>
        //         <div class="out-10">
        //         </div>
        // </section>

document.querySelector('.i-10').onkeydown = t10;

// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

function t11() {

}

// ваше событие здесь!!!

