function palindromeIndex(s) {
    // Write your code here
    //   let left = 0;
    // let right = s.length - 1;
    // while(left < right){
    //     if(s.at(left) != s.at(right))
    //         return s.at(left+1) === s.at(right) ? 
    //                 left :  
    //                 s.at(left) === s.at(right - 1) ? 
    //                     right : -1;
    //     left++;
    //     right--
    // }
    // return -1;
    
     for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - i - 1]) {
        const s1 = s.slice(i + 1, s.length - i)
        const s2 = s1.split("").reverse().join("")
        if (s1 === s2) return i
        else return s.length - i - 1
    }
  }
  return -1;

}
