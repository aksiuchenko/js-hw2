/*Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию
prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д.
Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в
городе %Город% и работаю в компании %Компания%. Мои контактные данные:
%Телефон%, %Почта%.».*/

console.log('---Task1---');

let firstName = prompt('Ваше имя?'),
    age = prompt('Ваш возраст?'),
    city = prompt('Ваш город проживания'),
    phone = prompt('Ваш номер телефона?'),
    email = prompt('Ваш email?'),
    company = prompt('Ваше место работы?');
   
console.log( 'Меня зовут ' + firstName + '. Мне ' + age + ' лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные: ' + phone + ', ' + email + '.' );





/*Определите по введенному возрасту (исп. значение из задания 1) год рождения.
Выведите на экран «%Имя% родился в %Год% году.».*/

console.log('---Task2---');

let year =  2021 - age;

console.log(firstName + ' родился в ' + year + ' году. ');







/*Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме
вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.*/

console.log('---Task3---');

let num_t3 = prompt('Введите целое шестизначное число?');

if (num_t3 > 99999 && num_t3 <= 999999) {

    let number1 = parseInt(num_t3 / 100000);
    let number2 = parseInt((num_t3 - number1 * 100000) / 10000);
    let number3 = parseInt((num_t3 - number1 * 100000 - number2 * 10000) / 1000);
    let number4 = parseInt((num_t3 - number1 * 100000 - number2 * 10000 - number3 * 1000) / 100);
    let number5 = parseInt((num_t3 - number1 * 100000 - number2 * 10000 - number3 * 1000 - number4 * 100) / 10);
    let number6 = parseInt(num_t3 - number1 * 100000 - number2 * 10000 - number3 * 1000 - number4 * 100 - number5 * 10);
firstSum = number1 + number2 + number3;
lastSum = number4 + number5 + number6;

console.log('Введенное число ' + num_t3);
console.log('Полученные числа: "' + number1 + '", "' + number2 + '", "' + number3 + '", "' + number4 + '", "' + number5 + '", "' + number6 + '"');

(firstSum == lastSum) ? console.log('Да') : console.log('Нет');
} 
else {
    alert('Вы ввели неправильное число.')
    console.log ('неправильное число')
}





/*Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
Проверьте работу скрипта при a, равном 1, 0, -3.*/

console.log('---Task4---');
let Variable_t4 = Number(prompt('Введите значение переменной а? ( целое, отрицательное или положительное )'));
 
console.log('Вы ввели число ' + Variable_t4 );

if (Variable_t4 == Variable_t4) {
  if  (Variable_t4 > 0) {
        console.log('Верно');
    }
    else {
        console.log('Неверно');
    }
}
else {
    console.log('Вы ввели не число!');
}





/*Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение,
частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в
квадрат.*/

console.log('---Task5---');

let a = 10,
    b = 2;

console.log('Сумма переменных a и b равно: ' + (a + b));
console.log('Разность переменных a и b равно: ' + (a - b));
console.log('Произведение переменных a и b равно: ' + (a * b));
console.log('Частное переменных a и b равно: ' + (a / b));

if ( a + b > 1) {
    console.log('Cумма переменных больше 1, квадрат суммы a и b равен: ' + ((a + b) **2) )
}





/*Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания
5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите
'Неверно'.*/

console.log('---Task6---');

if ( (a > 2 && a < 11) || (b >= 6 && b < 14) ) {
    console.log('Верно.');
}
else {
    console.log('Неверно.');
}




/*В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает
это число (в первую, вторую, третью или четвертую).*/

console.log('---Task7---');

let Variable_t7 = Number(prompt('Введите число от 0 до 59.'));

console.log('Вы ввели число ' + Variable_t7 );

if ( Variable_t7 == Variable_t7)  {
    if (Variable_t7 >= 0 && Variable_t7 < 15) {
        console.log('Первая четверть часа');
    }
    else if (Variable_t7 >= 15 && Variable_t7 < 30) {
        console.log('Вторая четверть часа');
    }
    else if (Variable_t7 >= 30 && Variable_t7 < 45) {
        console.log('Третья четверть часа');
    }
    else if (Variable_t7 >= 46 && Variable_t7 < 59) {
            console.log('Четвертая четверть часа');
        }
 else {
            console.log('Ваше значение не попадает в указанный интервал');
        }
    

}
else {
    console.log('Вы ввели не число!');
}





/*В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду
месяца попадает это число (в первую, вторую или третью).*/

console.log('---Task8---');

let Variable_t8 = Number(prompt('Введите число от 1 до 31.'));

console.log('Вы ввели число ' + Variable_t8 );

if ( Variable_t8 == Variable_t8)  {
    if (Variable_t8 >= 1 && Variable_t8 < 11) {
        console.log('Первая декада месяца');
    }
    else if (Variable_t8 >= 11 && Variable_t8 < 21) {
        console.log('Вторая декада месяца');
    }
    else if (Variable_t8 >= 21 && Variable_t8 < 31) {
        console.log('Третья декада месяца');
    }
    
 else {
            console.log('Ваше значение не попадает в указанный интервал');
        }
    

}
else {
    console.log('Вы ввели не число!');
}


/*Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы
(условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты
вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца,
недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели»,
соответственно.*/

console.log('---Task9---');

let enterDays = prompt('Введите количество дней'),
qYears = enterDays / 365,
qMonths = enterDays / 31,
qWeeks = enterDays / 7,
qHours = enterDays * 24,
qMinutes = enterDays * 1440, 
qSeconds = enterDays * 86400;

if (enterDays > 0) {
    if (qYears < 1) qYears = 'меньше года';
    if (qMonths < 1) qMonths ='меньше месяца';
    if (qWeeks < 1) qWeeks = 'меньше недели';
    console.log(enterDays + ' дней это: ' + qYears +  ' лет, ' + qMonths + ' месяцев, ' + qWeeks + ' недель, ' + qHours + ' часов, ' + qMinutes + ' минут, ' + qSeconds + ' секунд.');
}
else {
    alert('Вы ввели неправильное число.');
    console.log('неправильное число');

}



/*Напишите скрипт, который по введенному дню (исп. значение переменной из 8
задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и
т.д.). Скрипт определение поры года написать через switch.*/

console.log('---Task10---');

let calcDay = prompt('Введите номер дня от 1 до 365'),
    calcStatus,
    timeYear;

calcDay = parseInt(calcDay);

if (calcDay >=1 && calcDay <=365) {
     
    if (calcDay >=  1 && calcDay <= 31) {
        calcStatus = 1;
    }
    else if (calcDay >= 32 && calcDay <= 59) {
        calcStatus = 2;
    }
    else if (calcDay >= 60 && calcDay <= 90) {
        calcStatus = 3;
    }
    else if (calcDay >= 91 && calcDay <= 120) {
        calcStatus = 4;
    }
    else if (calcDay >= 121 && calcDay <= 151) {
        calcStatus = 5;
    }
    else if (calcDay >= 152 && calcDay <= 181) {
        calcStatus = 6;
    }
    else if (calcDay >= 182 && calcDay <= 212) {
        calcStatus = 7;
    }
    else if (calcDay >= 213 && calcDay <= 243) {
        calcStatus = 8;
    }
    else if (calcDay >= 244 && calcDay <= 273) {
        calcStatus = 9;

    }
    else if (calcDay >= 274 && calcDay <= 304) {
        calcStatus = 10;

    }
    else if (calcDay >=305 && calcDay <= 334) {
        calcStatus = 11;

    } 
    else {
        calcStatus = 12;
    }
    
    switch (calcStatus) {
        case 1:
        case 2:
        case 12:
            timeYear = 'зима';
        break;
        case 3:
        case 4:
        case 5:
            timeYear = 'весна';
        break;
        case 6:
        case 7:
        case 8:
            timeYear = 'лето';
        case 9:
        case 10:
        case 11:            
            timeYear = 'осень';
        break;       
    }
console.log('День ' + calcDay + ' это ' + calcStatus + ' месяц, пора года - ' + timeYear);

} 

else {
    alert('Вы ввели неправильное число.');
    console.log('неправильное число');
}

