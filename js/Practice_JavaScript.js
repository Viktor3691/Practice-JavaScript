let arr = ["a", "b", "c"];

arr[0] = "!";
console.log(arr);
// пример
let arr1 = ["a", "b", "c"];

arr1[0] = "1";
arr1[1] = "2";
arr1[2] = "3";
console.log(arr1);

let arr2 = ["a", "b", "c"];

arr2[0] += "!";
arr2[1] += "!";
arr2[2] += "!";

console.log(arr2);

let arr3 = ["1", "2", "3"];

arr3[0] += "3";
arr3[1] += "3";
arr3[2] += "3";

console.log(arr3);

let arr4 = [1, 2, 3];

arr4[0]++;
arr4[1]++;
arr4[2]++;
console.log(arr4);

let arr5 = [];

arr5[0] = "1";
arr5[1] = "2";
arr5[2] = "3";

console.log(arr5);

// 74
let arr6 = [1, 2, 3];

arr6[3] = 4;
arr6[4] = 5;

console.log(arr6);
// 75
let arr7 = [];

arr7[3] = "a";
arr7[8] = "b";

console.log(arr7.length);
console.log(arr7);

// 76
let arr8 = [];

arr8.push(1);
arr8.push(2);
arr8.push(3);

console.log(arr8);

let arr9 = [1, 2, 3];

arr9.push(4);
arr9.push(5);

console.log(arr9);

// 77
let arr10 = ["a", "b", "c"];
let key10 = 2;

console.log(arr10[key10]);

let arr11 = [1, 2, 3, 4, 5];

let key1 = 1;
let key2 = 2;

console.log(arr11[key1] + arr11[key2]);

// 78
let arr12 = ["a", "b", "c", "d", "e"];

delete arr12[1];
delete arr12[2];

console.log(arr12);
console.log(arr12.length);

// 79
let arr13 = [1, 2, 3, 4, 5];
console.log(arr13[arr13.length]); // -
console.log(arr13[arr13.length - 1]);

let arr14 = [1, 2, 3, 4, 5];
console.log(arr14[1] + arr14[2] + arr14[3] + arr14[4] + arr14[5]);

let key141 = 0;
let key142 = 1;
let key143 = 2;
let key144 = 3;
let key145 = 4;

console.log(
  arr14[key141] + arr14[key142] + arr14[key143] + arr14[key144] + arr14[key145],
);
console.log(arr14[0] + arr14[1] + arr14[2] + arr14[3] + arr14[4]);
