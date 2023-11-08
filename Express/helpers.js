// Function to calculate the mean of an array of numbers
const mean = (arr) => {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
  };
  
  // Function to calculate the median of an array of numbers
  const median = (arr) => {
    if (arr.some((num) => isNaN(num))) {
      return NaN;
    }
  
    const sortedArr = arr.sort((a, b) => a - b);
    const mid = Math.floor(sortedArr.length / 2);
    return sortedArr.length % 2 !== 0 ? sortedArr[mid] : (sortedArr[mid - 1] + sortedArr[mid]) / 2;
  };
  
  // Function to calculate the mode of an array of numbers
  const mode = (arr) => {
    if (arr.some((num) => isNaN(num))) {
      return NaN;
    }
  
    const freqMap = {};
    arr.forEach((num) => {
      freqMap[num] = freqMap[num] ? freqMap[num] + 1 : 1;
    });
    let maxFreq = 0;
    let modes = [];
    for (const num in freqMap) {
      const freq = freqMap[num];
      if (freq > maxFreq) {
        modes = [num];
        maxFreq = freq;
      } else if (freq === maxFreq) {
        modes.push(num);
      }
    }
    return modes.length === Object.keys(freqMap).length ? [] : modes;
  };
  
  module.exports = { mean, median, mode };
  