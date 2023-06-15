// Задание 8. Создайте произвольный массив Map. Получите его ключи и выведите в консоль 
// все значения в виде «Ключ — Х, значение — Y». Используйте шаблонные строки.

let myMap = new Map();
myMap.set('key1', 'val1');
myMap.set('key2', 'val2');
myMap.set('key3', 'val3');
myMap.set('key4', 'val4');
myMap.set('key5', 'val5');

myMap.forEach((value, key, map) => {
  console.log(`Ключ - ${key}, значение - ${value}`);
});
