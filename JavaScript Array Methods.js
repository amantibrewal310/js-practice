// // console.log("running");

arr = [2, 3, 6, 4, 2, 7, 8, 10, 1];

objarr = [
      {
            'name': 'harshit',
            'age': 20
      },
      {
            'name':      'nandu',
            'age': 21,
            'class': 10
      },
      {
            'name': 'kelly',
            'class': 11 
      },
      {
            'name': 'brooklyn',
            'class': 10
      }
];

// console.log(objarr);

// objarr.forEach(element => {
//       element['college'] = 'MNNIT';
// });

// console.log(objarr);


// function vowelCount(str) {
//       var splitArr = str.split("");
//       console.log(splitArr);
//       var obj = {};
//       var vowels = "aeiou";

//       splitArr.forEach(function(letter) {
//             // indexOf returns -1 if the value is not present in the array 
//             if(vowels.indexOf(letter.toLowerCase()) !== -1) {
//                   if(letter in obj) {
//                         obj[letter]++; 
//                   } else {
//                         obj[letter] = 1;
//                   }
//             }
//       });
//       return obj;
// }

// console.log(vowelCount("saiouertsca"));


// forEach returns undefined
// map creates the new array - returns array of the same length invoked on

// var arr = [1, 2, 3, 4];
// var new_arr = arr.map(function (value, index, array) {
//       return value * 2;
// })
// console.log(new_arr);


// extracting first names from the object array and putting names int the array 

// function getNames(objarr) {
//       // returns the new array
//       return objarr.map(function (item) {
//             // pushes returnde values in the new array 
//             return item.name;
//       });
// }
// console.log(getNames(objarr));



// filter
// restlut of the callback will Always be a boolean
// if true is reutrned then the value is pushed int the new array 


// var arr = [1, 2, 3, 2, 1, 3, 4, 1];
// var new_arr = arr.filter(function(value, index, array) {
//       // no need for if statement
//       return value > 2; 
// });
// console.log(new_arr);


// function divisibleByThree(arr) {
//       return arr.filter(function(value, index, array)    {
//             return (value % 3 === 0);
//       });
// }
// new_arr = divisibleByThree([2, 3, 4, 6, 7, 9, 1]);
// console.log(new_arr);


// // filter by key 
// function filterByValue(objarr, key) {
//       // filter out those objects that have the key defined 
//       return objarr.filter(function(item) {
//             return item[key] !== undefined;
//       });
// }

// new_objarr = filterByValue(objarr, 'age');
// console.log(new_objarr);


// searching a value in the array

// function find(arr, searchValue) {
//       return arr.filter(function(value, index) {
//             return value == searchValue;
//       })[0];
// }

// var present = find(arr, 6);
// console.log((present === undefined) ? "not found": "found");



// filter the values that have the key = searchValue

// function findInObj(objarr, key, searchValue) {
//       return objarr.filter(function(item) {
//             return item[key] === searchValue;
//       });
// }

// console.log(findInObj(objarr, 'class', 10));


// // remove vowels from string
// function removeVowels(str) {
//       var vowels = "aeiou";
//       arr = str.toLowerCase().split("");
//       new_arr = arr.filter(function(value) {
//             return (vowels.indexOf(value) === -1);
//       });
//       return new_arr.join('');

//       /*
//       more concise
//       return str.toLowerCase().split("").filter(function(val) {
//             return vowels.indexOf(val) === -1;
//       }).join('');
//       */
// }

// console.log(removeVowels("wEDgIoADuupe"));



// // return the array with double of the odd values present 
// function doubleOddNums(arr) {
//       return arr.filter(function(value) {
//             return (value % 2 === 1);
//       }).map(function(value) {
//             return value * 2;
//       });
// }

// console.log(doubleOddNums(arr));



// // some 
// // result of the callback will always be a boolean

// var res = arr.some(function(value, index) {
//       // this would return true, if at leat one of the 
//       // value in the array satisfies the given function
//       return value > 21;
// });

// console.log(res);



// // every 
// // returns true if all the values in the array satisfy the condition 

// var res = arr.every(function(value, index) {
//       return value < 0;
// });

// console.log(res);


// // check if all the chars in the string are in lowercase 
// function allLowerCase(str) {
//       return str.split("").every(function(value) {
//             return value === value.toLowerCase();
//       });
// }

// console.log(allLowerCase("ersfsd"));
// console.log(allLowerCase("sSDsdas"));


// Arr = [[1, 2, 3], [{'name':'harshit'}, [1, 2]], [2]];

// function allArray(arr) {
//       return arr.every(Array.isArray) 
// }

// console.log(Array.isArray(arr));
// console.log(allArray(Arr));



// function hasNoDuplicates(arr) {
//       return arr.every(function(value) {
//             return arr.indexOf(value) === arr.lastIndexOf(value);
//       });
// }
// console.log(hasNoDuplicates([1, 2, 3, 2, 4]));
// console.log(hasNoDuplicates([2, 3, 1, 4]));



// // reduce

// arr = [1, 2, 3, 4];
// var new_arr = arr.reduce(function(accumulator, nextValue) {
//       return accumulator + nextValue;
// }, 0);
// // optional second parameter (here 0) - first value of accumulator is 0, nextValue = 1
// // if optional parameter is not passed, then accumulator is 1 and nextValue = 2
// // the value of the accumulatoe in next iteration becomes the prevoius value returned 
// // returns the sum 
// console.log(new_arr);



// // example uses of reduce  

// function extractValue(arr, key) {
//       // next starts from the first item in the array 
//       return arr.reduce(function(acc, next) {
//             // push in the accumulator array
//             acc.push(next[key]);
//             return acc;
//       }, []);
//       // accumulator is array here
// }
// console.log(extractValue(objarr, 'name'));

// function vowelCount(str) {
//       var vowels = "aeiou"; 
//       return str.split("").reduce(function(acc, next) {
//             var letter = next.toLowerCase();
//             if(vowels.indexOf(letter) !== -1) {
//                   if(letter in acc) {
//                         acc[letter]++;
//                   } else {
//                         acc[letter] = 1;
//                   }
//             }
//             return acc;
//       }, {});
// }
// console.log(vowelCount("asdUIOceouE"));


// function partition(arr) {
//       return arr.reduce(function(acc, next) {
//             if(next % 2 == 0) {
//                   acc[0].push(next);
//             } else {
//                   acc[1].push(next);
//             }
//             return acc;
//       }, [[], []]);
// }

// console.log(partition(arr));


