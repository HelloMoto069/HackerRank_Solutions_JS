function plusMinus(arr) {
    // Write your code here
    const len = arr.length;
    const pos = arr.filter((num) => num > 0);
    const zer = arr.filter((num) => num === 0);
    const neg = arr.filter((num) => num < 0);
    console.log((pos.length/len).toFixed(6));
    console.log((neg.length/len).toFixed(6));
    console.log((zer.length/len).toFixed(6));
}
