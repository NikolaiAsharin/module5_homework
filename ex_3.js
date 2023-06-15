// Задание 3. Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

let string = 'Hello';
let massive = [...string];
console.log(massive.reverse().join(""));