function lonelyinteger(a) {
    // Write your code here
      let unique = null;
    
    const aMap = a.reduce((acc, val) => {
        return {
            ...acc,
            [val]: acc[val] ? acc[val] + 1 : 1
        }
    }, {});
    
    return Object.keys(aMap).find((key) => aMap[key] === 1);
}
