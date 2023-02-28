//hasDuplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length

//vowelCount

function vowels(chars) {
return "aeiou".includes(chars);
}

function vowelCount(str){
    const vowelMap = new Map();
    for(let chars of str){
      let lowerCaseChars = chars.toLowerCase()
      if(vowels(lowerCaseChars)){
        if(vowelMap.has(lowerCaseChars)){
          vowelMap.set(lowerCaseChars, vowelMap.get(lowerCaseChars) + 1);
        } else {
          vowelMap.set(lowerCaseChars, 1);
        }
      }
    }
    return vowelMap;
  }