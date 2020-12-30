"use strict";
//TODO REFACTOR WITH ARGUMENTS TO ARRAY
//Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
function findMinAndMax() {
  return [getMin(arguments), getMax(arguments)];
}

function getMin(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function getMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
//Дан массив arr. Найдите среднее арифметическое его элементов.
function findAverage(array) {
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    average += array[i];
  }
  return average / array.length;
}
//Выведите на экран случайное целое число от min до max.
function getRandomNumberFrom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//Заполните массив 10-ю случайными целыми числами.
function RandomArray(amount) {
  let array = [];
  for (let i = 0; i < amount; i++) {
    array[i] = getRandomNumberFrom(1, 100);
  }
  return array;
}
//Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
function concatPractice(arr1, arr2) {
  return arr1.concat(arr2);
}
//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
function reversePractice(arr) {
  return arr.reverse();
}
// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
function pushPractice(arr) {
  for (let i = 1; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  return arr;
}
//Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
function unshiftPractice(arr) {
  for (let i = arguments.length - 1; i > 0; i--) {
    arr.unshift(arguments[i]);
  }
  return arr;
}
//Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
function shiftPractice(arr) {
  return arr.shift();
}
// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
function popPractice(arr) {
  return arr.pop();
}
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
function sliceFirstPractice(arr) {
  return arr.slice(0, 3);
}
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
function sliceSecondPractice(arr) {
  return arr.slice(3);
}
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
function spliceFirstPractice(arr) {
  arr.splice(1, 2);
  return arr;
}
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
function spliceSecondPractice(arr) {
  arr.splice(0, 1);
  arr.splice(-1, 1);
  return arr;
}
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
function spliceThirdPractice(arr) {
  arr.splice(3, 0, "a", "b", "c");
  return arr;
}
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
function spliceFourthPractice(arr) {
  arr.splice(1, 0, "a", "b");
  arr.splice(6, 0, "c");
  arr.splice(8, 0, "e");
  return arr;
}
//Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
function sortPractice(arr) {
  return arr.sort();
}
// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
function keysPractice(obj) {
  return Object.keys(obj);
}
//необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет
//Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.
function hasElem(arr, str) {
  return arr.includes(str);
}
//Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true, а если нет - вернуть false.
function twoSameNumberInRow(arr) {
  let num = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    } else {
      num = arr[i];
    }
  }
  return false;
}
