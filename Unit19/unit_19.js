
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и 
выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

function t1() {
    let out = document.querySelector('.out-1');
    let div = document.querySelector('.div-1').textContent;
    out.innerHTML = div;
    return out; 
}

document.querySelector('.div-1').onclick = t1;

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того,
 нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2() {
    return event.altKey;
}
// document.querySelector('.div-2').onclick = t2;

let block = document.querySelector('.div-2');
let out = document.querySelector('.out-2');
block.addEventListener('click', (event) => out.textContent = (t2(event) == true) ? 'YES' : 'NO');

// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 
10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 0;

function t3() {
    out = document.querySelector('.out-3');
    out.style.border = '1px solid blue';
    out.style.width = +w3 + '5px'; 
    // ???????????????????????????????????????????????????????????????????????????????????????????
    w3++;
}

document.querySelector('.div-3').onclick = t3;


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на 
экран содержимое блока (только текст). Вывод осуществляется в out-4. */

function t4() {
    let out = document.querySelector('.out-4');
    let div = document.querySelector('.div-4').textContent;
    out.innerHTML = div;
    return out; 
}

document.querySelector('.div-4').ondblclick = t4;

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть 
и добавляется если такого класса нет. */

function t5() {
    let div = document.querySelector('.div-5.active');
    this.classList.toggle('active');
}

document.querySelector('.div-5').ondblclick = t5;

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. 
Скрытие и показ делайте через добавление - удаление класса .hide */

function t6() {
    let div = document.querySelector('.ul-6');
    div.classList.toggle('hide');
}

document.querySelector('.div-6').ondblclick = t6;


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

function t7() {
    let div = document.querySelector('.div-7');
    div.classList.toggle('active');
}

document.querySelector('.div-7').oncontextmenu = t7;

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если 
checkbox выбран и отключает если не выбран. */

function t8() {
    let ch = document.querySelector('.ch-8');
    if (ch.checked) {
        document.oncontextmenu = () => {
            return false;
        }
    }
    else {
        document.oncontextmenu = () => {
            return true;
        }
    }
}


document.querySelector('.ch-8').onchange = t8;


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. 
Надеюсь вы догадаетесь изменить только src изображения? */

function t9() {
    this.querySelector('img').src = 'img/2.png';
}

document.querySelector('.div-9').oncontextmenu = t9;


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

function t10() {
    this.querySelector('img').src = 'img/2.png';
}

document.querySelector('.div-10').onmouseenter = t10;

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. 
При уведении мыши - mouseleave - возвращайте исходное изображение. */

// function t11() {
//     this.querySelector('img').src = 'img/2.png';
// }

// function t112() {
//     this.querySelector('img').src = 'img/1.png';
// }


// document.querySelector('.div-11').onmouseenter = t11;
// document.querySelector('.div-11').onmouseleave = t112;


let div11 = document.querySelector('.div-11');
let img = document.querySelector('.div-11 > img');

div11.onmouseenter = () => {img.src = 'img/2.png'};
div11.onmouseleave = () => {img.src = 'img/1.png'};

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

// () => {

// }

// document.querySelector('.div-12').onmousedown = () => {
//    this.classList.add('active');
// }


function t12() {
    this.classList.add ('active');
}
document.querySelector('.div-12').onmousedown = t12;

// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. 
Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

function t13()  {
    this.classList.add('active');
}

function t131()  {
    this.classList.remove('active');
}


document.querySelector('.div-13').onmousedown = t13;
document.querySelector('.div-13').onmouseup = t131;


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем 
блоку div-14 класс active. */


let div14 = document.querySelector('.div-14');
let but14 = document.querySelector('.b-14');

but14.onclick = () => {
    div14.onclick = () => div14.classList.add ('active')
};


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */

let p = 1;
document.querySelector('.div-15').onmousemove = () => {
    document.querySelector('.div-15').innerHTML = p + 1;
    p++;
}



// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */

// let p2 = 75;
// document.querySelector('.div-16').onmousemove = () => {
//     document.querySelector('.div-16').style.width = p2 + 'px';
//     p2++;
// }

let p2 = 75;
function f16 () {
document.querySelector('.div-16').style.width = p2 + 'px';
p2++;
}
document.querySelector('.div-16').onmousemove = f16; 
   


// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {
    document.querySelector(".div-16").onmousemove = f16;
}

function t17Off() {
    document.querySelector(".div-16").onmousemove = null;
}

document.querySelector('.b-17_on').onclick = t17On;
document.querySelector('.b-17_off').onclick = t17Off;

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

function f18() {
    let x = document.querySelector('.div-18');
    x.style.width = 175 + 'px';
    x.innerHTML = x.style.width;
    console.log(x.style.width);
}
document.querySelector('.div-18').onmouseenter = f18; 


// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

function t19() {
    let x = document.querySelector('.div-19');
    x.innerHTML = x.classList;
    console.log(x.style.width);
}
document.querySelector('.div-19').onmouseout = t19; 


// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */


let p20 = 10;
document.querySelector('progress').onmousemove = function () {
    p20++;
    document.querySelector('progress').value = p20;
}



let str = 'Hello World';
function doubleChar(str) {
    let x = '';
    // console.log(str.length);
    for(let i = 0; i < str.length; i++) {
        x += str[i] + str[i];
        console.log(str[i]);
    }
    return x;
  }
//   console.log (doubleChar("Привет"));




  var replaceDots = function(str) {
    return str.replace(/./, '-');
  }

//   console.log(replaceDots (str));


function fakeBin(x){ 
return x.split('').map(num => num > 4 ? 1 : 0).join('');
}


function even_or_odd(number) {
    return number %2==0 ? "Even" : "Odd";
  }
//   console.log(even_or_odd(1));
  
function squareSum(numbers) {
    let sum = 0
    for( let i = 0; i < numbers.length; i++) {
        sum += numbers[i] **2
    }
    return sum
}

function digitize(n) {
    // let x = String(n).split('').reverse();
    let x = n.toString().split('').reverse();
    let arr = [];
    for (let i = 0; i < x.length; i++) {
        arr.push(+x[i]); 
    }
    return arr;
  }

  console.log(digitize(35299));

//   var num = 348597,
//     arr = num.toString().split("").reverse().map(Number);