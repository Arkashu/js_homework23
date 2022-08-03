'use strict'
//Task#1
/*const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arrNew = arr1.concat(arr2);*/

//Task#2
/*let arr = [1, 2, 3];
arr.reverse();*/

//Task#3
/*let arr = [1, 2, 3];
arr.push(4, 5, 6);*/

//Task#4
/*let arr = [1, 2, 3];
arr.unshift(4, 5, 6);*/

//Task#5
/*const arr = ['js', 'css', 'jq'];
alert(arr.shift());*/

//Task#6
/*const arr = ['js', 'css', 'jq'];
alert(arr.pop());*/

//Task#7
/*const arr =  [1, 2, 3, 4, 5];
const newArr = arr.slice(0, 3);*/

//Task#8
/*const arr =  [1, 2, 3, 4, 5];
const newArr = arr.slice(-2);*/

//Task#9
/*const arr =  [1, 2, 3, 4, 5];
arr.splice(1,2);*/

//Task#10
/*const arr =  [1, 2, 3, 4, 5];
const newArr = arr.splice(1, 3);*/

//Task#11
/*const arr =  [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');*/

//Task#12
/*const arr =  [1, 2, 3, 4, 5];
arr.splice(1, 4, 'a', 'b', 2, 3, 4, 'c', 5, 'e');*/

//Task#13
// const arr = [3, 4, 1, 2, 7];
// arr.sort();

//Task#14
/*const arr = [5, 6, 7, 8, 9];
let sum = 0;
arr.forEach((item) => {
sum += item;
});
console.log(sum)*/

//Task#15
/*const arr = [5, 6, 7, 8, 9];
const newArr = arr.map(item => item * item);*/

//Task#16
/*const arr = [1,-3, 5, 6,-7, 8, 9,-11];
const newArr = arr.filter(item => item > 0);*/

//Task#17
/*const arr = [1,-3, 5, 6,-7, 8, 9,-11];
const newArr = arr.filter(item => item % 2 === 0);*/

//Task#18
/*const arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const newArr = arr.filter(item => item.length > 5);*/

//Task#19
// const arr = [1, 2, [3, 4], 5, [6, 7]];
// const newArr = arr.filter(item => Array.isArray(item));

//Task#20
const arr = [5,-3, 6,-5, 0,-7, 8, 9];
let sum = 0;
arr.forEach((item) => {
    item > 0 ? ++sum : sum;
});
console.log(sum)











