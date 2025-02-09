// var str1 = "masai";
// var str2 = "aimas";

// function findAnagram(str1,str2) {
//   var str1 = str1.toLowerCase();
//   var str2 = str2.toLowerCase();
//   let obj={};

//   for(let char of str1){
//     if(obj[char] == undefined){
//       obj[char]=1;
//     }else{
//       obj[char]++;
//     }
//   }
  
//   for(let char of str2){
//     if(obj[char] == undefined){
//       return false;
//     }else{
//       obj[char]--;
//     }
//   }

//   for(let char in obj){
//     if(obj[char] != 0){
//       return false;
//     }
//   }
//   return true;

// }

// console.log(findAnagram(str1,str2));




// q1.Write a function that takes an array of numbers and returns both the sum and product of its elements using a single iteration (i.e., without using multiple loops or multiple `reduce` calls).

// let arr = [1, 2, 3, 4]

// function findSumProduct(arr){
//   let sum = 0;
//   let product = 1;
//   for(let el of arr)
//   {
//     sum += el;
//     product*=el;
//   }
//   return {sum,product}
// }
// console.log(findSumProduct(arr));//{ sum: 10, product: 24 }


// q2.Given an array of mixed-case strings, write a function that returns a new array where:
// Strings with more uppercase letters are converted to lowercase.
// Strings with more lowercase letters are converted to uppercase.
// If both cases are equal, leave the string unchanged.
// Example:
// Input:
// let arr = ["HeLLo", "world", "PYTHON", "JaVaScRiPt"];


// Output:
// ["hello", "WORLD", "python", "JaVaScRiPt"]


// q3.Write a function that takes an array of elements (e.g., words or numbers) and returns the most frequently occurring element. If there are multiple elements with the same highest frequency, return all of them in an array.
// Example:
// Input:
// let arr = ["apple", "banana", "apple", "orange", "banana", "banana"]

// function findMax(arr){
//   let obj ={};
//   for(let char of arr){
//     if(obj[char] == undefined){
//       obj[char]= 1;
//     }else{
//       obj[char]++;
//     }
//   }

//   let max= 0;
//   let maxele ;

//   for(char in obj){
//     if(obj[char]>max){
//       max = obj[char];
//       maxele = char;
//     }
//   }
//   return [maxele];
  
// }
// console.log(findMax(arr));

// Output:
// ["banana"]



// let arr = [1,2,3,2,3];

// function findMax(arr){
//   let obj ={};
//   let max= 0;
//   let maxele = [];

//   for(let char of arr){
//     if(obj[char] == undefined){
//       obj[char]= 1;
//     }else{
//       obj[char]++;
//     }

//     if(obj[char]>max){
//       max = obj[char];
//       maxele = [char]
//    }else if(obj[char] == max){
//       maxele.push(char);
//    }
//   }
//   return maxele;
   
// }
// console.log(findMax(arr));





// q4.Modify the cart value function to include:
// A discount parameter that applies a percentage discount to each item individually.
// A maximum discount threshold that prevents an item's price from dropping below a certain amount.
// Example:
// Input:
//Output: total = 54

// let cart = [
//   { "price": 10, "quantity": 2 },
//   { "price": 5, "quantity": 4 },
//   { "price": 20, "quantity": 1 }
// ]

// function findItem(cart){
//   let total = 0;
//   for(let ele of cart){
//     total += ele.price * ele.quantity;
//     dis = total * 0.1;
//   }
//   total = total-dis;
//   return total;
// }

// console.log(findItem(cart));

