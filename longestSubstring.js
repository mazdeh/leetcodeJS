/*
 * @param {string} s
 * @return {number}
*/

var lengthOfLongestSubstring = function (s) {
  let i = 0,
      j = 0,
      subString = "",
      counters = [0];
    
    while (j < s.length) {
      console.log('subs: ', j, s[j]);
        while (!subString.includes(s[i]) && i < s.length) {
          console.log('substring: ', subString);
          subString += s[i];
          i++;
        }
        counters.push(subString.length);
        j = subString.indexOf(s[i]) + 1;
        subString = "";
    }
        
    function getMaxofArray(a) {
       return Math.max.apply(null, a);
    }

    return getMaxofArray(counters);
}

let result = lengthOfLongestSubstring('dvdf');
console.log('res: ', result);
