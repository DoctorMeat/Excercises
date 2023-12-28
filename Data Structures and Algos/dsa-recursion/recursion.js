/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  }
  return nums[0] * product(nums.slice(1));
}

console.log(product([2, 3, 4])); //Output: 24

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) {
    return 0;
  }
  const restLength = longest(words.slice(1));
  return Math.max(words[0].length, restLength);
}

console.log(longest(["hello", "hi", "hola"])); //Output: 5

/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0) {
  if (index >= str.length) {
    return "";
  }
  return str[index] + everyOther(str, index + 2);
}

console.log(everyOther("hello")); // Output: "hlo"


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("tacocat"));  // Output: true
console.log(isPalindrome("tacodog"));  // Output: false


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, target, index = 0) {
  if (index >= arr.length) {
    return -1;
  }
  if (arr[index] === target) {
    return index;
  }
  return findIndex(arr, target, index + 1);
}

let animals = ["duck", "cat", "pony"];
console.log(findIndex(animals, "cat"));        // Output: 1
console.log(findIndex(animals, "porcupine"));  // Output: -1


/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str === "") {
    return "";
  }
  return revString(str.slice(1)) + str[0];
}

console.log(revString("porcupine")); // Output: 'enipucrop'

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      result.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      result = result.concat(gatherStrings(obj[key]));
    }
  }
  return result;
}

let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz",
    funFacts: {
      moreStuff: {
        deeplyNestedString: {
          almostThere: {
            success: "you made it!"
          }
        }
      },
      favoriteString: "nice!"
    }
  }
};

console.log(gatherStrings(nestedObj)); // Output: ["Lester", "Testowitz", "you made it!", "nice!"]




module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
};
