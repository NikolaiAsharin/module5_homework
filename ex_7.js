// Задание 7. Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

const arr = [10, 66, 'Black Hole', null, 0, undefined, 109];
let iterationNumber1 = 0;

for (i = 0; i < arr.length; i = i + 2) {
  iterationNumber1++;
}
console.log(`Нечетных элементов: ${iterationNumber1}`);

let iterationNumber2 = 0;
for (i = 1; i < arr.length; i = i + 2) {
  iterationNumber2++;
}
console.log(`Четных элементов: ${iterationNumber2}`);

for (i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    console.log(`Значение с индексом ${i} равно нулю!`);
  } else {
    console.log('Значений, равных нулю не найдено.');
  }
}
