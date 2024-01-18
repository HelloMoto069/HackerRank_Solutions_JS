function countingSort(arr) {
    // Create an array with 100 elements, filled with 0's
    let count = new Array(100).fill(0);
    
    // Iterate through the given array and count the frequency of each element
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    
    
    return count;
}
